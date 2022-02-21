const e = require('express');
const admin = require('../config/firebase')

const checkIfAdmin = async(req, res, next) => {
    const { authToken } = req; 

    try {
        const user = await admin.auth().verifyIdToken(authToken);
    } catch (error) {
        return res.status(401).json({message: 'not an admin'})
    } 

    if(user.admin){
        req.authId = user.uid;
    }else{
        return res.status(401).json({message: 'not an admin'})
    }

    next()
}

module.exports = {checkIfAdmin};