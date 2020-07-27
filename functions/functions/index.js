const functions = require('firebase-functions');
const { db, admin } = require('./util/admin');
const express = require('express');
const app = express();

app.post('/contato', criarContato = (req, res) => {
  const novoContato = {
    nome: req.body.nome,
    whatsapp: req.body.whatsapp,
    email: req.body.email,
    criadoEm: new Date().toISOString()
  };
  

});

exports.api = functions.https.onRequest(app);
