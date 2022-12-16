// Creating a REST API to communicate with MongoDB and store the data

const express = require("express")

// This is the classic way
// const app = express()

// A cleaner way
const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
    try {
        const {name, email, profilePic} = req.body // the body parameter allow us to access the data of req
        // also its the .headers parameter, its usually for the auth token

    } catch (e) {
        
    }
})