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
    }else if(!password){
        errorMessage = 'No password provided'
    } else if(password.length < 8) {
        errorMessage = 'password should have atleast 8 characters'
    }

    if(errorMessage){
        return res.json({
            message: errorMessage
        })
    }

    try {
        const user = await admin.auth().createUser({
            email: email,
            password: password
        })
    
        //check if admin
        if(adminEmails.includes(user.email)) {
            const customClaims = { admin: true }
            await admin.auth().setCustomUserClaims(user.uid, customClaims);
    
            await db.collection("roles").doc(user.uid).set({
                email: user.email,
                role: customClaims
                
            }) 
        }
        return res.json(user)
    } catch (error) {
        console.log(error)
        return res.status(500).json()
    }
})

module.exports = users;