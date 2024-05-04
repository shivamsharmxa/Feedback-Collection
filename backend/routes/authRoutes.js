const express = require('express');
const router = express.Router();
const { registerUser, loginUser} = require('../controller/authController');


//Register route \
router.post('./register', registerUser);

//login Route
router.post('./login',loginUser);

module.exports = router;