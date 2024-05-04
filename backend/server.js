const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');

//Middleware
app.use(express.json());

//routes
app.use('./api/auth',authRoutes);

//Start server
app.listen(port, () => {
    console.log(`Server is running on the Port ${port}`);
});