const dotenv=require("dotenv")
dotenv.config()
const express=require("express")
const cors =require("cors")

const app=express()
const connectToDB=require("./db")
connectToDB();  
app.use(cors()) 

app.get("/",async(req,res)=>{
    res.send("hello ")
    
})


module.exports=app