const dotenv=require("dotenv")
dotenv.config()
const express=require("express")
const cors =require("cors")
const cookieParser = require('cookie-parser');
const swaggerUi  = require("swagger-ui-express"); 
const swaggerDocs = require("./swagger-output.json"); // Import the generated Swagger JSON

const app=express()
const connectToDB=require("./db")
connectToDB();  
app.use(cors()) 
app.use(cookieParser());
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// Swagger UI
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Serve Swagger UI
const userRouter=require("./routers/userRouters")
const riderRouter=require("./routers/riderRouters")

app.use("/api/user",userRouter)
app.use("/api/rider",riderRouter)



module.exports=app