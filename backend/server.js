const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user");
const noteRoutes = require('./routes/note');
require('dotenv').config();

const app = express();

// Configure CORS for different environments
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://your-frontend-vercel-url.vercel.app'] // Update with your actual frontend URL
    : ['http://localhost:5173', 'http://localhost:3000'], // Development URLs
  credentials: true,
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.use(express.json());

// Connect to MongoDB
connectDB();

// API routes
app.use("/api", userRoutes);
app.use('/api/notes', noteRoutes);

// For local development
if (process.env.NODE_ENV !== 'production') {
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
}

// For Vercel deployment
module.exports = app;
