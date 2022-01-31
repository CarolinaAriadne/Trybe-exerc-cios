// 2 - Crie uma função sum que dado um número variável de elementos retorna a soma desses elementos.

const somando = (...parametros) => parametros.reduce((acumulador,valorAtual) => acumulador + valorAtual);

console.log(somando(2,3,4,5));