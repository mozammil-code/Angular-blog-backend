const Blog = require('../models/blogModel')
const Category=require('./../models/categoryModel')

const createCategory=(req,res)=>{
   

    Category.create(req.body).then((doc)=>{
        res.status(201).json({

            status:'success',
            statuscode:201,
            data:{
                category:doc
            }
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Fail",
            message:err.mesage
        })
    })


}

const updateCategory=(req,res)=>{
    //console.log('updateCategory=> '+req.body)
    Category.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((doc)=>{
        res.status(200).json({
            status:'success',
            data:{
                category:doc
            }
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Fail",
            message:err.message
        })
    })
}

const deletCategory=(req,res)=>{
    Category.findByIdAndDelete(req.params.id).then((doc)=>{
        res.status(200).json({
            status:"Success",
            data:{
                category:null
            }
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Fail",
            message:err.message
        })
    })
}

const fetchAllCategory=(req,res)=>{
    Category.find().then((doc)=>{
        res.status(200).json({
            status:'success',
            categories:doc
            
        })
    }).catch((err)=>{
        res.status(400).json({
            status:'FAILED',
            message:'fetchallcstegory'
        })
    })
   
}

const deletemany=(req,res)=>{
    Category.deleteMany().then((data)=>{
        res.status(200).json({
            staus:'success'
        })
    }).catch((err)=>{
        console.log(err)
    })
}



module.exports={
    createCategory,
    updateCategory,
    fetchAllCategory,
    deletCategory,deletemany
}