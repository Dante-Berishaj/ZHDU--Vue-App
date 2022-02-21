const admin = require('../config/firebase')

const checkIfAuthenticated = async(req, res, next) => {
    const { authToken } = req;

    try {
        const user = await admin.auth().verifyIdToken(authToken);
        req.authId = user.id;
    } catch (error) {
        return res.status(401).json({ message: 'Invalid Token' });
    }

    next();
}

module.exports = { checkIfAuthenticated }