// Import Mongoose for MongoDB interactions
const mongoose = require('mongoose');

// Function to connect to MongoDB using Mongoose
const connectDB = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('MongoDB connected Successfully!')

    }catch (err){
        console.error(err.message);
        process.exit(1); // Eit with failure
    }
};
module.exports= connectDB;