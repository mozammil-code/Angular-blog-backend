

const mongoose=require('mongoose')


const subscriptionSchema=new mongoose.Schema({

    name:{type:String,required:[true,'Name must be given']},
    email:{type:String,required:[true,'Please provide Email'],unique:true}

})

const Subscription=mongoose.model('Subscription',subscriptionSchema)

module.exports=Subscription