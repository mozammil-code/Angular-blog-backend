const mongoose=require('mongoose')

const movieScehma=new mongoose.Schema({
    name:{type:String,required:[true,'Name is Required Field'],unique:true},
    description:String,
    duration:{type:Number,required:[true,'Duration is Required Field']},
    ratings:{type:Number,default:2.0}
})

const Movie=mongoose.model('Movie',movieScehma)

module.exports=Movie