const mongoose  = require("mongoose");

const categorSchema=new mongoose.Schema({
    categoryname:{type:String,require:[true,'Must give category name']}

})

const Category=mongoose.model("blogCategory",categorSchema)
module.exports=Category