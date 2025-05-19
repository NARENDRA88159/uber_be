const dotenv=require("dotenv")
dotenv.config()
const express=require("express")
const cors =require("cors")
const cookieParser = require('cookie-parser');

const app=express()
const connectToDB=require("./db")
connectToDB();  
app.use(cors()) 
app.use(cookieParser());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
const userRouter=require("./routers/userRouters")
const authMiddleware = require("./middelwares/AuthMiddelware")
app.use("/api/user",userRouter)



module.exports=app