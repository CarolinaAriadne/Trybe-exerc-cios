const fs = require("fs").promises;

function getSimpsons() {
  let fileString = fs.readFile("./simpsons.json", "utf-8"); // o módulo fs lê o arquivo como uma string

  let jsOnObj = fileString.then((fileContent) => {
    return JSON.parse(fileContent); // então, o arquivo lido em string, é transformado em um obj json para leitura, através do parse, e em seguida, este arquivo já em obj json é guardado na variável jsOnObj
  });
  return jsOnObj;
}

function setSimpsons(oneSimpsons) { // arquivo em obj json, transformado em string, para ser gravado em um arquivo node.js
  return fs.writeFile("./simpsons.json", JSON.stringify(oneSimpsons));
}

module.exports = { getSimpsons, setSimpsons};