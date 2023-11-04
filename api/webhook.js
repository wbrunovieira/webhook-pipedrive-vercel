const axios = require('axios');

export default function handler(req, res) {
    if (req.method === 'POST') {
      const leadData = req.body;
      console.log('Dados recebidos:', req.body);
  
     
        // ...
  
        res.status(200).send('Dados recebidos com sucesso!');

     
  
  }
}