// const express=require('express')
// const app=express()

const app=require('./app')
const connectDB=require('./db')

//const dotenv = require('dotenv')


// dotenv.config({ path: './config.env' })
require('dotenv').config();
// const express = require('express')

//const app=require('./app')  //must be after dotenv




connectDB()
const PORT = process.env.PORT || 3000;
// const DB_URI = process.env.DB_URI;

// mongoose.connect(DB_URI, {
    
// }).then(() => {
//     console.log('Connected to MongoDB Atlas');
  
// }).catch(err => {
//     console.error('Failed to connect to MongoDB Atlas', err);
// });

//FOR UNDERSTANDING PURPOSE SCHEMA




// const testMovie=new movie({
//     name:"Test Movie",
//     description:"Some random text",
//     duration:30,
    
// })
// testMovie.save().then((res)=>{
//     console.log(res)
// }).catch((err)=>{
//     console.log('Error occured while saving data '+err)
// })



//const PORT = 3000;
app.listen(PORT, () => {
    console.log('Server has started ' + PORT)
})


