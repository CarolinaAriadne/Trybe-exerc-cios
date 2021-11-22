const arrays = [
    ['1', '2', '3'],
    [true],
    [4, 5, 6],
  ];


//   Vetor (array uni-dimensional) é uma variável que armazena várias variáveis do mesmo tipo. No problema apresentado anteriormente, nós podemos utilizar um vetor de 50 posições para armazenar os nomes dos 50 alunos.

// Matriz (array multi-dimensional) é um vetor de vetores. No nosso problema, imagine uma matriz para armazenar as 4 notas de cada um dos 50 alunos. Ou seja, um vetor de 50 posições, e em cada posição do vetor, há outro vetor com 4 posições. Isso é uma matriz.
  

//1 - Dada uma matriz, transforme em um array.


let array = arrays.reduce((acumulador,elemento) => acumulador.concat(elemento), [])

console.log(array)


// //concat: str.concat(string2 [, ...stringN]. O método concat() combina o texto de duas ou mais strings e retorna uma nova string. Valor retornado é uma nova string contendo a string original concatenada à string passada como parâmetro

