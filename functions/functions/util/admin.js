var admin = require("firebase-admin");

var serviceAccount = require("./malumodas.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://malumodas-43869.firebaseio.com"
});
