// db.js
const mongoose = require('mongoose');
require('dotenv').config();
const DB_URI = process.env.DB_URI;
let connection = null;

const connectDB = async () => {
  if (connection) {
    return connection;
  }

  try {
    connection = await mongoose.connect(DB_URI, {
      
    });
    console.log('Connected to MongoDB Atlas');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1); // Exit process with failure
  }

  return connection;
};

module.exports = connectDB;
