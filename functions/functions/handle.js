const { db } = require('./util/admin');

exports.criarContato = (req, res) => {
  const novoContato = {
    nome: req.body.nome,
    whatsapp: req.body.whatsapp,
    email: req.body.email,
    criadoEm: new Date().toISOString()
  };
  db.collection('contatos').add(novoContato)
    .then(() => {
      res.json({ geral: "Contato salvo com sucesso." })
    })
    .catch(() => {
      res.status(500).json({ erro: 'Problema com a criacão do contato.' })
    })
};