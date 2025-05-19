const express = require('express');
const router = express.Router();
const User = require('../Model/user');
const { hashPassword, comparePassword } = require('../modules/passwordEncryption');
const { generateToken } = require('../modules/jwt');
const { registerUser, loginUser, getUserProfile } = require('../controllers/userController');
const authMiddleware = require('../middelwares/AuthMiddelware');

 
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/profile',authMiddleware, getUserProfile);


module.exports = router;
// const express = require('express');