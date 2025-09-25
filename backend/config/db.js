const mongoose = require('mongoose');
require('dotenv').config();

const connectDB = async () => {
  try {
    // Use MONGODB_URI for Vercel deployment, fallback to DATABASE_URL for local development
    const dbUri = process.env.MONGODB_URI || process.env.DATABASE_URL;
    
    await mongoose.connect(dbUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
