const express = require("express"); // express, framework p/ desenvolvimento de aplicações JavaScript com Node.js. O express utiliza o node.js para execução do javascript como linguagem de back-end. Em suma,  foi desenvolvido para otimizar a construção de aplicações web e APIs

const app = express(); // chamando express pata utilizarmos 
const PORT = 3000; // porta que a aplicação vai abrir
const { validateData } = require("./valideMiddleware"); // recebendo o middlware (função) que vem de outro arquivo, requerendo,para que seja citado neste arquivo

app.use(express.json()); // express utilizar formato json - ler o arquivo como json

app.get("/", (req, res) => { // realizando uma requisição do tipo get (pegar algo, obter algum recurso hospedado no servidor, parâmetros passados no header (cabeçalho da requisição), por isso podem ser vistos na URL - os dados necessários para que o recurso correto seja encontrado devem permanecer na URL.)
  res.status(200).send("tudo certo"); // send (envie) uma resposta de string em um formato diferente de json, resposta de sucessp 200
});

app.post("/user/register", validateData, (req, res) => {  // post: É utilizado para enviar dados para o servidor.Geralmente usamos esse método para criar algo no servidor. Os dados enviados com o POST são armazenados no corpo da requisição HTTP.
    // Quando essa rota for passada, então ele vai pra função de validação validateData - após realizado o tratamento da requisição e estando tudo ok lá (next), a próxima coisa q ocorre, é a devolução , a resposta de sucesso, que é : o usuário foi criado com sucesso. - linha 16

  res.status(201).json({ message: "user created" }); 
});

app.post("/user/login", validateData, (req, res) => { // quando essa rota for passada, novamente ocorrerá o tratamento da requisição e o Middleware será utilizado para isso, estando tudo ok na verificação da função validateData (midd), o token é criado (sucesso) - linha 
  res.status(201).json({ token: "86567349784e" });
});

app.use((error, req, res, _next) => {
  const { path } = req;  // pegando path -caminho da URL - caso caia no erro na função middleware, sendo o caminho final register ou login, vai cair aqui, no erro 400.
  if (path.endsWith("register"))
    return res.status(400).json({ message: "invalid data" });
  return res.status(400).json({ message: "email or password is incorrect" });
});

app.listen(PORT, () => console.log(`rodando na porta ${PORT}`));
