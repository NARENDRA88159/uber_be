const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: [3, "First name must be at least 3 characters long"]
    },
    lastName: {
        type: String,
        minlength: [3, "Last name must be at least 3 characters long"]
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String, // Fixed typo from "tyep" to "type"
        required: true,
        minlength: [6, "Password must be at least 6 characters long"],
        select: false // Exclude password from queries by default
    },
    socketId: {
        type: String,
    }
},{timestamps:true});

const User = mongoose.model("User", userSchema);
module.exports = User;