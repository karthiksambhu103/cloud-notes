const mongoose = require('mongoose');

const mongoURI = "mongodb+srv://kartik:sambhu@cluster0.vaq2nh0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0" 

const connectToMongo = ()=>{
    mongoose.connect(mongoURI, ()=>{
        console.log("Connected to Mongo Successfully");
    })
}

module.exports = connectToMongo;