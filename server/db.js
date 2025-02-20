const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://kartik:sambhu@cluster0.vaq2nh0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectToMongo = async () => {
    try {
        mongoose.set('strictQuery', false);
        
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        console.log("Connected to Mongo Successfully");
    } catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1); // Exit the app if MongoDB connection fails
    }
};

module.exports = connectToMongo;
