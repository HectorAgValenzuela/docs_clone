require("dotenv").config()

const express = require("express")
const mongoose = require('mongoose')

const PORT = process.env.PORT | 3001

const app = express()

// Lets connect the the app to mongodb

mongoose.connect(process.env.DB_URI).then(() => {
    console.log("Connection successful")
}).catch((err) => {
    console.log(err)
})

// .listen() methods help us to start a server. It will constinously listen to a server and respond
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`)
}) 

// Lets connect the the app to mongodb