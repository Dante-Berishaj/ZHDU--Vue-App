const functions = require("firebase-functions");
const admin =  require("firebase-admin");

admin.initializeApp();

const db = admin.firestore();

exports.addUserRole = functions.auth.user().onCreate(async(authUser) => {
    if(authUser.email.includes('ubt-uni.net')) {
        try {
            const userClaims = {admin: true}
            await admin.auth().setCustomUserClaims(authUser.uid, userClaims)
        
            return db.collection("roles").doc(authUser.uid).set({
                email: authUser.email,
                role: userClaims
            });
        } catch (err) {
            
        }
    }
});