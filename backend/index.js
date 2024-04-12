const express = require('express')
const app = express()

// database

const connectDB = async()=>{
    try {
        await mongoose.connect()
        
    } catch (err) {
        console.log("some err")
        
    }
}

app.listen(5000, ()=>{
    console.log("App")
})