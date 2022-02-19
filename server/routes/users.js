const express = require('express');
const admin = require('../config/firebase')

const db = admin.firestore()

const users = express.Router()

const adminEmails = ['db47425@ubt-uni.net']
//password: password

//email providers
const emailProviders = ['@gmail.com', '@outlook.com', '@ubt-uni.net']

users.post('/register', async(req, res) => {
    //register user
    const {email, password} = req.body;

    let errorMessage;

    if(!email){
        errorMessage = 'No email provided'
    } else if(email.length < 10) {
        errorMessage = 'email should have atleast 10 characters'
    }

    if(errorMessage){
        return res.json({
            message: 'invalid email'
        })
    }

    const user = await admin.auth().createUser({
        email: email,
        password: password
    })

    //check if admin
    if(adminEmails.includes(user.email)) {
        const customClaims = {admin:true}
        admin.auth().setCustomUserClaims(user.uid, customClaims);

        return db.collection("roles").doc(user.uid).set({
            email: user.email,
            role: user.customClaims
        })
    }

    res.json(user)
    
})

module.exports = users;