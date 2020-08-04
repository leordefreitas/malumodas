const functions = require('firebase-functions');
const { criarContato } = require('./handle');
const express = require('express');
const app = express();

app.post('/contatos', criarContato);

exports.api = functions.https.onRequest(app);
