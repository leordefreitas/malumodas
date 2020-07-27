const admin = require('firebase-admin');

admin.initializeApp({
  credential: admin.credential.cert(require('../../../../../CHAVES SITES/malumodas-43869-firebase-adminsdk-hfaso-1f4e841f87.json'))
});

const db = admin.firestore();

module.exports = { admin, db };