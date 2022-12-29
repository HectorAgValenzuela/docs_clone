// auth middleware will check if the user it's logged in

const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
    try {
        const token = req.header("x-auth-token") 
        if(!token)
            // 401 status code means No authorized
            return res.status(401).json({msg: "No auth token, access denied"})
        
        const verified = jwt.verify(token, "passwordKey")

        if(!verified)
            // 401 status code means No authorized
            return res.status(401).json({msg: "Token verification failed, authorization denied."})

        req.user = verified.id
        req.token = token
        
        // next() function lets the server know that it can continue after doing all the conditions
        next()
    } catch (e) {
        res.status(500).json({ error: e.message })
    }
}

module.exports = auth