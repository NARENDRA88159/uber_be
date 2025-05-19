const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');
dotenv.config();
const User = require('../Model/user'); // Import the User model
const authMiddleware = async(req, res, next) => {
    const token = req.cookies.token || req.header('Authorization')?.split(' ')[1]; // Extract token from Authorization header

    if (!token) {
        return res.status(401).json({ message: 'Access Denied. No token provided.' });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user=await User.findById(decoded.id);
        req.user = user;
        return next();
    } catch (err) {
        res.status(401).json({ message: 'Invalid token.' });
    }
};

module.exports = authMiddleware;