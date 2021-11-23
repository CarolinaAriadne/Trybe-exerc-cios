const names = [
  "Aanemarie",
  "Adervandes",
  "Akifusa",
  "Abegildo",
  "Adicellia",
  "Aladonata",
  "Abeladerco",
  "Adieidy",
  "Alarucha",
];

//5 - Dada o array de nomes, retorne a quantidade de vezes em que aparecem a letra a maiúscula ou minúscula.

let somaQuantidade = 0;   // primeira iteração

names.forEach((elemento) => { //selecionando primeiro elemento (palavra) do array

  let stringTransformadaEmArray = elemento.split(""); // separando esta palavra para que se torne um array com letras separadinhas

  let valorAcumulado = stringTransformadaEmArray.reduce((acumulador, valorAtual) => { // pegando o elemento já com split, ou seja, a palavra já destrinchada com as letras separadas. Acumulador vale zero nessa volta, valor atual é o valor da primeira letra do elemento.
      if (valorAtual === "a" || valorAtual === "A") { // se valor atual (letra individual da palavra)
        return acumulador + 1; // o acumulador vai somar mais 1
      }
      return acumulador; //se não, o acumulador vai permanecer com o valor que está no momento da iteração
    },0);

  somaQuantidade += valorAcumulado; // a variável soma quantidade, vai recebendo os valores que retorna para valor acumulado, a cada iteração
});

console.log(somaQuantidade); // quando finalizam todas iterações, somaQuantidade tem o valor total da quantidade de vezes que a letra a aparece. 
