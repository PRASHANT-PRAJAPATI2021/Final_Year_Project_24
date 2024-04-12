const express = require('express')
const app = express()
const mongoose=require('mongoose')
const dotenv=require('dotenv')
const cors=require('cors')
const multer=require('multer')
const path=require("path")
const cookieParser=require('cookie-parser')
const authRoute=require('./routes/auth')
const userRoute=require('./routes/users')
const postRoute=require('./routes/posts')
const commentRoute=require('./routes/comments')

// database

// console.log("hii")

const connectDB = async()=>{

    try {
        // console.log("hii")
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Database connected succesfully!")
        
    } catch (err) {
        console.log(err)
        
    }
}

// middlewares
dotenv.config()
app.use(express.json())
app.use(cookieParser())
app.use("/api/auth",authRoute)
app.use("/api/users",userRoute)
app.use("/api/posts",postRoute)
app.use("/api/comments",commentRoute)



app.listen(process.env.PORT, ()=>{
    connectDB()
    console.log("App is running in prot 5000")
})