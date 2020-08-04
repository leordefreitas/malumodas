const admin = require("firebase-admin");

var serviceAccount = require("./malumodas.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://malumodas.firebaseio.com"
});

const db = admin.firestore();

module.exports = { db };