const express = require("express");
const bodyParser = require("body-parser");

const readAndWrite = require("./readAndWrite");

const app = express();

app.use(bodyParser.json());

const PORT = 3000;

app.get("/simpsons", async (req, res) => {
  const allSimpsons = await readAndWrite.getSimpsons();
  return res.status(200).json(allSimpsons);
});

app.get("/simpsons/:id", async (req, res) => {
  const simpson = await readAndWrite.getSimpsons();
  const { id } = req.params;
  const findCaractere = simpson.find((caractere) => caractere.id === id);

  if (findCaractere) {
    return res.status(202).json(findCaractere);
  }
  return res.status(404).json({ message: "simpson not found" });
});

app.post("/simpsons", async (req, res) => {
  const simpson = await readAndWrite.getSimpsons();
  const { id, name } = req.body;
  // const verificyCaracter = simpson.find(({ id }) => {
  //   return caractere.id === id;
  // });

  // if (verificyCaracter) {
  //   return res.status(409).json({ message: "id already exists" });
  // }
  //   return verificyCaracter.push({id, name});
  

if(simpson.map(({id}) => id.includes(id))){
  return res.status(409).json({ message: 'id already exists' });
}

simpson.push({ id, name });
await simpsonsUtils.setSimpsons(simpson);

return res.status(204).end();
  
});

app.listen(PORT, () => console.log(`A porta é a ${PORT}`));

// O endpoint deve retornar o personagem com o id informado na URL da requisição.
// Caso não exista nenhum personagem com o id especificado, retorne o JSON { message: 'simpson not found' } com o status 404 - Not Found
