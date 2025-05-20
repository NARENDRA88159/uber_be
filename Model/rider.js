const mongoose = require("mongoose");

const riderSchema = new mongoose.Schema({
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
        minlength: [6, "Password must be at least 6 characters long"]
    },
    socketId: {
        type: String,
    },
    Status: {
        type: String,
        enum: ['active', 'inactive'],
        default: 'inactive'
    },
    vehicle:{
        color:{
            type:String,
            required:true
        },
        plate:{
            type:String,
            required:true
        },
        capacity:{
            type:Number,
            required:true
        },
        vehicleType:{
            type:String,
            required:true,
            enum:['car','bike','auto']
        }
    },
    location: {
        lat:{
            type: Number,
            
        },
        lng:{
            type: Number,
            
        },},
        
    isOnline: {
        type: Boolean,
        default: false
    },
},{timestamps:true});

const Rider= mongoose.model("Riders", riderSchema);
module.exports = Rider;