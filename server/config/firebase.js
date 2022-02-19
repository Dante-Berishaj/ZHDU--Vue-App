
var admin = require("firebase-admin");

var serviceAccount = require("../credentials/zhdu-auth-143a6-firebase-adminsdk-lkpqp-2bc1df5bb7.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

module.exports = admin
