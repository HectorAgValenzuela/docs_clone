// Creating a REST API to communicate with MongoDB and store the data

const express = require("express");
const User = require("../models/user");

// jwt is for securely transmiting information 
// it will store the user information in the local storage of the device, so you don't need to sign in again
// it's important to know that we don't store de ID for security reasons, hacking stuff
const jwt = require('jsonwebtoken');
const auth = require("../middleware/auth");

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

        const token = jwt.sign({id: user._id}, "passwordKey")

        res.json({user, token})
    } catch (e) {
        res.status(500).json({error: e.message})
    }
})

// 
authRouter.get('/', auth, async (req, res) => {
    const user = await User.findById(req.user)
    try {
        res.json({user, token: req.token})
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
})

module.exports = authRouter