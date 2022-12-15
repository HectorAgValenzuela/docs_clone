const express = require("express")
const mongoose = require('mongoose')

const PORT = process.env.PORT | 3001

const app = express()

// .listen() methos help us to start a server. It will constinously listen to a server and respond
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Connected at port ${PORT}`)
}) 