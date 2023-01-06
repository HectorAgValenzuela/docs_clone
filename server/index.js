// Impoting the .env file
require("dotenv").config()

// express allow us to create our REST API'S
const express = require("express")

// mongoose allow us a easy connection with MongoDB database
const mongoose = require('mongoose')

// This is a multiplataform app, so we need a Cross-Origin Resource Sharing
const cors = require("cors")

const authRouter = require("./routes/auth")
const documentRouter = require("./routes/document")

const PORT = process.env.PORT | 3001

// Creating a REST API to communicate with MongoDB and store the data
const app = express()

app.use(cors())

// Middleware that is converting the info that comes from the cliente to a json
app.use(express.json())

app.use(authRouter)
app.use(documentRouter)



// Lets connect the app to mongodb
mongoose.connect(process.env.DB_URI).then(() => {
    console.log("Connection successful")
}).catch((err) => {
    console.log(err)
})

// .listen() methods help us to start a server. It will constinously listen to a server and respond
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`)
}) 

