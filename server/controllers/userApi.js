const admin = require('../config/firebase');
const db = admin.firestore();
const schema = require('../validators/registerValidator');

const adminEmails = ['db47425@ubt-uni.net','qb48644@ubt-uni.net', 'bn47113@ubt-uni.net']

const userApi = {
    list: (req, res) => {
        return res.json([]);
    } ,

    register: async(req, res) => {

        //const validationResult = schema.validate(req.body)
    
        const {email, password} = req.body;
    
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
    
            if(!adminEmails.includes(user.email)) {
                const customClaims = { user: true }
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
    }
}

module.exports = userApi