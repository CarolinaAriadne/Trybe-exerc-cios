const express = require('express');
const { cepDados } = require('./controllers/cepController');
creatDadosCep = require('./models/cepModel');
const app = express();
const port = 3000;

app.use(express.json());

app.post('/cep', cepDados);

// app.get('/house', (req,res) => res.send('Hello World'))

app.use((erro, req, res, _next) => res.status(erro.code).json({ message: erro.message }))


app.listen(port, () => console.log(`App listening on port ${port}`));