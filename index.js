// Import required modules 
const express= require('express');
const dotenv = require('dotenv');
const connectDB=require('./config/db');
const taskRoutes =require('./routes/taskRoutes');

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB
connectDB();

// Initialize Epress app
const app = express();

// Moddleware to parse JSON request bodies
app.use(express.json());

// Mount routes
app.use('/api/tasks', taskRoutes);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server is running on port ${PORT}`));