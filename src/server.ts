import express from "express";

const app = express();

app.get('/', (req, res) => {
  res.json('Raiz. Typscript ON.')
})

app.listen(3030, () => { console.log('Servidor ATIVO !')})