const Blog = require('./../models/blogModel');

const { storage } = require('../config/cloudinary');
const multer = require('multer');
const upload = multer({ storage });

const createBlog = async (req, res) => {
    console.log('createBlog called');
    try {
        const { title, content, excerpt, category } = req.body;

        // Logging the received body
        console.log(`Received body: ${JSON.stringify(req.body)}`);

        if (!title) {
            console.log('Title is missing');
            return res.status(400).send('Title is required');
        }

        let imageUrl = 'No image provided';

        if (req.file) {
            console.log('File info:', req.file);
            imageUrl = req.file.path; // URL of the uploaded image on Cloudinary
        }

        const blog = new Blog({
            title,
            content,
            excerpt,
            category,
            image: imageUrl
        });

        // Logging the created blog object
        console.log(`Created blog object: ${JSON.stringify(blog)}`);

        const createdBlog = await Blog.create(blog);

        // Logging the saved blog document
        console.log(`Saved blog document: ${JSON.stringify(createdBlog)}`);

        res.status(201).json(createdBlog);
    } catch (err) {
        console.error('Error occurred:', err);

        res.status(400).json({
            status: 'Failed',
            message: err.message
        });
    }
};



const uploadImage=(req,res)=>{
    console.log(req.file);
    res.send('Done');
}
const updateBlog = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).then((doc) => {
        res.status(200).json({
            status: 'success',
            data: {
                blog: doc
            }
        })
    }).catch((err) => {
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    })
}

const getAllBlogs = (req, res) => {

    Blog.find().then((doc) => {
        res.status(200).json(doc)
    }).catch((err) => {
        res.status(400).json({
            status: 'Fail',
            message: err.message
        })
    })
}
const getSingleBlog = (req, res) => {
    Blog.findById(req.params.id).then((doc) => {
        res.status(200).json({
            status: 'succeess',
            data: {
                blog: doc
            }
        })
    }).catch((err) => {
        res.status(404).json({
            staus: 'Failed',
            message: err.message
        })
    })
}


function deleteBlog(req, res) {
    Blog.findByIdAndDelete(req.params.id).then((doc) => {
        res.status(200).json({
            status: 'success',
            blog: null
        })
    }).catch((err) => {
        res.status(404).json({
            status: 'Fail',
            message: err.message
        })
    })
}

const deletemany = (req, res) => {
    Blog.deleteMany().then((data) => {
        res.status(200).json({
            staus: 'success'
        })
    }).catch((err) => {
        console.log(err)
    })
}
const getFeaturedBlogs = (req, res) => {
    Blog.find({ featured: true })
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            res.status(400).json({
                status: 'Failed',
                message: err.message
            });
        });
};

const updateFeaturedBlog = (req, res) => {
    Blog.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).then((doc) => {
        res.status(200).json(doc)
    }).catch((err) => {
        res.status(200).json({
            status: 'Fail',
            message: err.message
        })
    })
}

const getLatestBlogs = (req, res) => {
    Blog.find().sort({ date: -1 }).limit(6)
        .then((docs) => {
            res.status(200).json(docs);
        })
        .catch((err) => {
            res.status(400).json({
                status: 'Failed',
                message: err.message
            });
        });
};






const getBlogsByCategory = (req, res) => {
    const { category } = req.params;


    Blog.find({ category })
        .then((docs) => {
            if (docs.length === 0) {
                return res.status(404).json({ message: 'No blogs found in this category' });
            }
            res.status(200).json(docs);
        })
        .catch((err) => {
            res.status(400).json({
                status: 'Faileded',
                message: err.message
            });
        });
};











module.exports = {
    createBlog,
    updateBlog, 
    getAllBlogs, 
    getSingleBlog, 
    deleteBlog, 
    deletemany, 
    getFeaturedBlogs, 
    updateFeaturedBlog,
    getBlogsByCategory,
    getLatestBlogs,
    uploadImage
    
}