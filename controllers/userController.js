
const express = require('express');
const User = require('../Model/user');
const { hashPassword, comparePassword } = require('../modules/passwordEncryption');
const { generateToken } = require('../modules/jwt');


const registerUser=async (req, res) => {
    const { firstName, lastName, email, password } = req.body;
   
    try {

        const existingUser = await User.findOne({email:email})    
        if (existingUser) {
            return res.status(400).json({ message: 'User already exists' });
        }
        const hashedPassword = await hashPassword(password);

    
        const user = await User.create({
         
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });
        res.status(201).json({ message: 'User registered successfully', user });
    } catch (error) {
        res.status(500).json({ message: 'Error registering user', error });
    }
}

const loginUser=async (req, res) => { 
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email }).select('+password'); // Include password in the query
        if (!user) {
            return res.status(400).json({ message: 'Invalid email' });
        }
        const isMatch = await comparePassword(password, user.password);       
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid  password' });
        }
      
        const jwt = generateToken({userid:user._id,email:user.email}); // Generate JWT token
        res.cookie('token', jwt);
        res.status(200).json({ message: 'Login successful', "token":jwt });
    } catch (error) {
        res.status(500).json({ message: 'Error logging in', error });
    }
}
const getUserProfile=async (req, res) => {  
    res.status(200).json({ message: 'User profile', user: req.user });
}



module.exports = {
    registerUser,
    loginUser,
    getUserProfile
};