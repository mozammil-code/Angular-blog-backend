const mongoose=require('mongoose')
function formatDate(date) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(date).toLocaleDateString('en-US', options);
}
//defining schema
const blogSchema=new mongoose.Schema({
    title:{
        type: String,
    },
    category:{type:String},
    
    
    content:{
        type:String,required:[true,'Content is required field']
    },
    excerpt:{type:String,required:[true,'Excerpt is required field']},
   
    image:{
        type:String,
        default:'No image provided'
    },
    date: {
        type: String,
        default: formatDate(Date.now()),
        set: formatDate
    },
    featured:{ type:Boolean,default:false}
})

//based on schema create model

const Blog=mongoose.model('Blog',blogSchema);

module.exports=Blog;



