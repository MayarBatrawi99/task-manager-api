// Import Mongoose
const mongoose = require('mongoose');

// Define the schema for a Task
const taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true // Title is mandatory
    },
    description: String,
    status: {
        type: String,
        enum:['pending','completed'], // Only two values allowed
        default:'pending' // default value
    },
},{timestamps:true});// Automatically add createdAt and updatedAt fields

module.exports= mongoose.model('Tasks', taskSchema);