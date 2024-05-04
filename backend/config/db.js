const mongoose = require('mongoose');

//load environment variable 
require('dotenv').config();

// MongoDB connection string
const uri = process.env.MONGODB_URI;

// Connect to MongoDB
mongoose.connect(uri,{
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(()=>console.log('MongoDB connected'))
.catch(()=>console.error('MongoDB connection error',err));

module.exports = mongoose.connection;