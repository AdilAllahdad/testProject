const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/user");
const noteRoutes = require('./routes/note');

const app = express();
app.use(cors());
app.use(express.json());


// Connect to MongoDB
connectDB();

// API routes
app.use("/api", userRoutes);
app.use('/api/notes', noteRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
