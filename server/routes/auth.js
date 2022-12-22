// Creating a REST API to communicate with MongoDB and store the data

const express = require("express");
const User = require("../models/user");

// This is the classic way
// const app = express()

// A cleaner way
const authRouter = express.Router();

authRouter.post('/api/signup', async (req, res) => {
    try {
        const {name, email, profilePic} = req.body // the body parameter allow us to access the data of req
        // also its the .headers parameter, its usually for the auth token

        // email already exists in MongoDB?
        let user = await User.findOne({email})

        // If not exists, create it
        if(!user) {
            user = new User({
                name,
                email,
                profilePic
                
            })
            user = await user.save()
        }

        res.json({user})


    } catch (e) {
        res.status(500).json({error: e.message})
    }
})

module.exports = authRouter