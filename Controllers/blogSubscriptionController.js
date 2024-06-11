const Subscription=require('./../models/blogSubscriptionModel')

const createSubscriber=(req,res)=>{

    Subscription.create(req.body).then((doc)=>{
        res.status(201).json({
            status:'success',
            data:{
                subscribers:doc
            }
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Fail",
            message:err.message
        })
    })
    
}

const updateSubscription=(req,res)=>{
    Subscription.findByIdAndUpdate(req.params.id,req.body,{new:true}).then((doc)=>{
        res.status(200).json({
            status:"Success",
            data:{
                subscription:doc
            }
        })
    }).catch((err)=>{
        res.status(400).json({
            status:'Fail',
            message:err.message
        })
    })
}

const getAllSubscribers=(req,res)=>{
    Subscription.find().then((doc)=>{
        res.status(200).json({
            status:"success",
            data:{
                AllSubscribers:doc
            }
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Fail",
            message:err.message
        })
    })
}

const deleteSubscriber=(req,res)=>{
    Subscription.findByIdAndDelete().then((doc)=>{
        res.status(200).json({
            status:"sucess",
            data:{
                Subscriber:null
            }
        })
    }).catch((err)=>{
        res.status(400).json({
            status:"Fail",
            message:err.message
        })
    })
}

module.exports={
    deleteSubscriber,
    getAllSubscribers,
    updateSubscription,
    createSubscriber
}