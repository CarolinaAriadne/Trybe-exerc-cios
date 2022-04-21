const bodyParser = require("body-parser");
const express = require("express");

const app = express();

app.use(bodyParser.json());

const PORT = 3333;

// converter os dados de uma requisição. O body-parser é um módulo capaz de converter o body da requisição para vários formatos. Um desses formatos é json

app.get("/ping", (req, res) => {
  return res.json({ message: "pong" });

  // >>> teste >>> res.status(200).send('Deu certo');
  // A função res.send() basicamente envia a resposta HTTP. O parâmetro body pode ser um objeto String ou Buffer ou um objeto ou um Array. res.send([corpo])
});

app.post("/hello", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Hello, ${name}` });
});

app.post("/greetings", (req, res) => {
  const { name, age } = req.body;
  if (parseInt(age, 19) > 17) {
    // parseInt, porque a informação vem como string, precisamos converter pra number
    return res.status(200).json({ message: `Hello, ${name}!!` });
  } else {
    return res.status(401).json({ message: `Unauthorized` });
  }
});

app.put("/users/:name/:age", (req, res) => {
  const { name, age } = req.params;
  return res
    .status(200)
    .json({ message: `Teu nome é ${name} e sua idade é ${age}` });
});

app.listen(PORT, () => console.log(`A porta é a ${PORT}`));
