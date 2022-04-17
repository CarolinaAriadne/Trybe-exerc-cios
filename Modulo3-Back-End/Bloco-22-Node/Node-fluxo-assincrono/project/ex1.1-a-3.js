// function returnPromise(k, l, m) {
//   return new Promise((resolve, rejetc) => {
//     if (
//       typeof k !== "number" ||
//       typeof l !== "number" ||
//       typeof m !== "number"
//     ) {
//       rejetc("Informe apenas números");
//     }
//     let resultado = (k + l) * m;
//     // console.log(resultado);

//     if (resultado < 50) {
//       rejetc("Valor muito baixo");
//     }
//     resolve(resultado);
//   });
// }

// let k = Math.floor(Math.random() * 100 + 1);
// let l = Math.floor(Math.random() * 100 + 1);
// let m = Math.floor(Math.random() * 100 + 1);

// returnPromise(k,l,m)
// .then((resultado)  => console.log(resultado))
// .catch((err) => console.log('Erro:' , err.message))




// Reescreva o código do exercício anterior para que utilize async/await


async function returnPromise(k, l, m) {
  const response = await new Promise((resolve, rejetc) => {
    if (
      typeof k !== "number" ||
      typeof l !== "number" ||
      typeof m !== "number"
    ) {
      rejetc("Informe apenas números");
    }
    let resultado = (k + l) * m;
    // console.log(resultado);

    if (resultado < 50) {
      rejetc("Valor muito baixo");
    }
    resolve(resultado);
  });
  return response;
}

let k = Math.floor(Math.random() * 100 + 1);
let l = Math.floor(Math.random() * 100 + 1);
let m = Math.floor(Math.random() * 100 + 1);

returnPromise(k,l,m)
// .then((resultado)  => console.log(resultado))
// .catch((err) => console.log('Erro:' , err.message))
