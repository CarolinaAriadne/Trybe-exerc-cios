

const express = require('express');

const app = express(); // 1

app.get('/hello', handleHelloWorldRequest); // 2 // GET / hello - rota

app.listen(3001, () => {
  console.log('Aplicação ouvindo na porta 3001');
}); // 3

function handleHelloWorldRequest(req, res) { //req: objeto que encapsula todas as informações da requisição, ou seja, todas as informações do agente que fez a requisição para nossa aplicação,
  // res: é o objeto que vai tratar a resposta que a  gente vai fornecer da nossa aplicação, ou seja, quem iremos mandar de volta
  res.status(200).send('Hello World!'); // 4
}

// O método .send é um método que consegue retornar a resposta de uma requisição de uma forma genérica, adaptando o tipo do retorno ao que vai ser retornado. 


// Esse pequeno script é o suficiente para:
// Criar uma nova aplicação Express;
// Dizer ao Express que, quando uma requisição com método GET for recebida no caminho /hello , a função handleHelloWorldRequest deve ser chamada;
// Pedir ao Express que crie um servidor HTTP e escute por requisições na porta 3001;
// Ao tratar uma requisição com método GET no caminho /hello , enviar o status HTTP 200 que significa OK e a mensagem "Hello world!".