const express = require('express')
const router = express.Router();
const Item = require('../models/Item')
const User = require('../models/User')
const axios = require('axios')
const jwt = require('jsonwebtoken');
const { query } = require('express');



router.get(`/user`, verifyToken, async (req, res, next) => {
    //GETTING OUR USER
    jwt.verify(req.token, 'secretkey', (err, authData) => {
        if (err) {
            res.status(403).json(err);
        } else {
            User.findById(authData.user._id).then(user => {
                console.log(user, '?!?!?!?')
                res.status(200).json(user)
            }).catch(err => res.status(500).json(err))

        }
    })
})

router.get(`/myItems`, verifyToken, async (req, res, next) => {

    jwt.verify(req.token, 'secretkey', async (err, authData) => {
        //I'm available via AuthData
        if (err) {
            res.status(403).json(err);
        } else {
            let items = await Item.find({ userId: authData.user._id })
            res.status(200).json(items)
        }
    })
})





//Add Item to data base
router.post(`/addAItem`, verifyToken, async (req, res, next) => {  // listens to API.js 
    jwt.verify(req.token, 'secretkey', async (err, authData) => {
        if (err) {
            res.status(403).json(err);
        } else {
            let body = req.body // {item, price, image_url}
            console.log(body)
            body.userId = authData.user._id   //records witch user is adding items
            let item = await Item.create(body) // after it awaits -- it creates the object in the data base
            res.status(200).json(item)   //  response 200 and sends the object that you created in the data base to API.js in the front end. 
        }
    })
})



//Modify Item in data base




//Delete item from data base
router.delete(`/delete/:id`, async(req, res) => {
    console.log('delete this item ', req.params) //before request query with del
    let delItem = await Item.deleteOne({_id: req.params.id})
    res.status(200).json(delItem)
})



router.get(`/allItems`, async (req, res, next) => {
    let allItems = await Item.find({})
    res.status(200).json(allItems)
})

router.get(`/findItem/:name`, async (req, res, next) => {
    // let query  = {item:`/${req.params.name}/i`}
    console.log('My request **********', req.params)
    let allItems = await Item.find( { 'item' : { '$regex' : req.params.name, '$options' : 'i' } } )
    res.status(200).json(allItems)
})

router.post(`/logMeIn`, async (req, res, next) => {

    const tokenId = req.header('X-Google-Token')
    console.log(tokenId)

    if (!tokenId) {
        res.status(401).json({ msg: "Mising Google JWT" })
    }

    const googleResponse = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${encodeURI(tokenId)}`)
    const { email, email_verified, picture, given_name, family_name, error_description } = googleResponse.data
    if (!email || error_description) {
        // console.log('email', email, 'err', error_description)
        res.status(400).json({ msg: error_description })
    } else if (!email_verified) {
        res.status(401).json({ msg: 'Email not verified with google' })
    }

    const userData = {
        email, email_verified, picture, given_name, family_name, error_description, googleId: req.body.googleId
    }

    let user = await User.findOne({ email })
    if (!user) {
        user = await User.create(userData)
    }
    jwt.sign({ user }, 'secretkey', { expiresIn: '30min' }, (err, token) => {
        res.status(200).json({ ...user._doc, token });
    })


})







// Verify Token
function verifyToken(req, res, next) {
    // Get auth header value
    const bearerHeader = req.headers['authorization']
    // Check if bearer is undefined
    if (typeof bearerHeader !== 'undefined') {
        // Split at the space
        const bearer = bearerHeader.split(' ')
        // Get token from array
        const bearerToken = bearer[1]
        // Set the token
        req.token = bearerToken
        // Next middleware
        next()
    } else {
        // Forbidden 
        res.status(403).json({ err: 'not logged in' })
    }
}




module.exports = router