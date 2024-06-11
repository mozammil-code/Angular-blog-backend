const express = require('express');
const blogController = require('./../Controllers/blogController')
const blogCategoryController = require('./../Controllers/blogCategoryController')
const blogSubscriptionController = require('./../Controllers/blogSubscriptionController')
const { upload } = require('../config/cloudinary');
const  { storage } =require('../config/cloudinary')
const multer=require('multer')
//const upload = multer({ storage });




router = express.Router()

//router.post('/uploads',upload.single('image'),blogController.uploadImage)

router.route('/')
    .post(upload.single('image'), blogController.createBlog)
    .get(blogController.getAllBlogs)
    .delete(blogController.deletemany)
    .get(blogController.getFeaturedBlogs)



router.route('/featured').get(blogController.getFeaturedBlogs)
router.route('/featured/:id').patch(blogController.updateFeaturedBlog)
router.route('/latestpost').get(blogController.getLatestBlogs)


router.route('/category')
    .post(blogCategoryController.createCategory)
    .get(blogCategoryController.fetchAllCategory)
    .delete(blogCategoryController.deletemany)

router.route('/category/:id')
    .delete(blogCategoryController.deletCategory)
    .patch(blogCategoryController.updateCategory)

router.route('/subscription')
    .post(blogSubscriptionController.createSubscriber)
    .get(blogSubscriptionController.getAllSubscribers)

router.route('/subscription/:id')
    .patch(blogSubscriptionController.updateSubscription)
    .delete(blogSubscriptionController.deleteSubscriber)




router.route('/:id')
    .patch(blogController.updateBlog)
    .get(blogController.getSingleBlog)
    .delete(blogController.deleteBlog)



router.route('/getAllPostByCtaegory/:category').get(blogController.getBlogsByCategory)




router.route('/category/:id')
    .patch(blogCategoryController.updateCategory)
    .delete(blogCategoryController.deletCategory)


module.exports = router;