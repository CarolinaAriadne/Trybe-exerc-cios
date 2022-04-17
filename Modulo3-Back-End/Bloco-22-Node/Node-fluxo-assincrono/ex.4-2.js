const fs = require("fs").promises;

const getCaractere = async (id) => {
  const response = await fs
    .readFile("./simpson.json", "utf-8")
    .then((simpson) => JSON.parse(simpson));

  const caractereChosen = response.find((caractere) => caractere.id === id);

  if (!caractereChosen) {
    throw new Error("Id não encontrado");
  }

  return caractereChosen;
};

getCaractere(1);

// Crie uma função que receba o id de uma personagem como parâmetro e retorne uma Promise que é resolvida com os dados da personagem que possui o id informado. Caso não haja uma personagem com o id informado, rejeite a Promise com o motivo "id não encontrado".
