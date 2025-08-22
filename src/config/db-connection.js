const { default: mongoose } = require("mongoose");

async function connectToDb(){
    try {
        await mongoose.connect('mongodb+srv://praveen:test@cluster0.q9dbelb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0');
        console.log('MongoDB Connected successfully!');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

module.exports = {connectToDb}