const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send(`
  <form action="/" method="POST">
  Nome: <input type="text" name="nome">
  <button>Enviar</button>
  </form>
  `);
});

app.get('/testes/:idUsuarios?/:parametro?', (req, res) => {
  // O interrogação faz ser opcional.

  console.log(req.params);
  // /testes/123/456
  // idUsuarios: 123, parametro:456

  console.log(req.query);
  // /testes/?nome=Lucas&sobrenome=Silva&idade=30
  res.send(req.params);
});

app.post('/', (req, res) => {
  console.log(req.body);
  res.send(`O que você me enviou foi: ${req.body.nome}`);
});

app.listen(3000, () => {
  console.log('Acessar http://localhost:3000');
  console.log('Servidor executando na porta 3000');
});

