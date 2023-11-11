const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.json());

app.post('/api/webhook', (req, res) => {
  // Lógica para manipular a requisição
  console.log(req.body); // Exibe os dados recebidos
  res.status(200).send('Requisição recebida');
});

app.get('/api/webhook', (req, res) => {
  // Sua lógica para a requisição GET
  console.log(req.body);
  res.send('Resposta para GET');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

