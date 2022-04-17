
const fs = require('fs').promises;

fs.readFile('./simpson.json', 'utf-8')
    .then((simpson) => {
        return JSON.parse(simpson);
    })
    .then((simpson) => {
      return simpson.map(({ id, name}) => `${id} - ${name}`)  
    })
    .then((retorno)=> retorno.forEach((retorno) => console.log(retorno))
    )

    .catch((err) => {
        console.error(`Erro ao ler arquivo: ${err.message}`)
    })

























































// const axios = require('axios');

// async function getApi(){
//     const response = await axios.get(`https://s3.us-east-2.amazonaws.com/assets.app.betrybe.com/back-end/nodejs/async-flow/simpsons-94f8eb570f2ea830462ee2375ded177b.json`)

//     return response;
// }

// async function main (){
//     const simpsons = await getApi();

//     console.log(`Simpson: ${simpsons.name}`);
// }

// main();
