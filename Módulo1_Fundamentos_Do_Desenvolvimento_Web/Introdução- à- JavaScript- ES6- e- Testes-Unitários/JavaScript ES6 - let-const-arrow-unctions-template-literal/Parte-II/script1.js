const fatorial = (number) => {
  let resultado = number;
  for (let index = 1; index < number; index += 1) {
    resultado = resultado * index;
  }
  console.log(`O fatorial do número 4 é ${resultado}`);
  return resultado;
};

const callFunction = fatorial(4);



// function fatorial(n){

//     let resultado = n;
//     for(let index = 1; index < n; index +=1){

//         resultado = resultado * index;
//     }

//     return resultado;

// }
// console.log(fatorial(6));
