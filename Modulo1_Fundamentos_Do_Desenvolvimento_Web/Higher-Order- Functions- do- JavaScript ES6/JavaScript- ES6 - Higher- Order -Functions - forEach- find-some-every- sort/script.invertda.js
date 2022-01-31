const techProducts = [
  {
    id: 1, // numérico
    name: "computer", // string
    price: 2100, // number
  },
  {
    id: 2,
    name: "mouse",
    price: 56,
  },
  {
    id: 3,
    name: "monitor",
    price: 589,
  },
  {
    id: 4,
    name: "keyboard",
    price: 78,
  },
  {
    id: 5,
    name: "HD",
    price: 350,
  },
  {
    id: 6,
    name: "webcam",
    price: 187,
  },
  {
    id: 7,
    name: "mic",
    price: 69,
  },
  {
    id: 8,
    name: "headset",
    price: 216,
  },
];

// * 1 - // Crie um algoritmo que retorne um array com nome de todos os produtos de ids pares
// * 2 - // Crie um algoritmo que retorna true se houver algum produto com preço acima de 300 e false caso contrário
// * 3 - // Crie um algoritmo que receba o id de um produto e uma quantidade e retorne o preço total
// // ex: id: 8 e quantidade: 2 preço total: 432
// */

// //1:

let arrProdutos = [];
techProducts.forEach((produto) => {
  // percorre cada objeto (pega o objeto todo, com suas chaves)
  if (produto.id % 2 === 0) {
    // se o elemento tiver um id de número par (divisível por 2)
    arrProdutos.push(produto.name); // adiciona à variável arrProdutos, o nome dos produtos que possuem id pares
  }
});
console.log(arrProdutos);

// //2:

let priceProduct = false; // começando a variável com false
let precoProduto = techProducts.some((element) => {
  // some: encontrar pelo menos um elemento que satisfaça a condição seguinte
  if (element.price > 300) {
    // se o elemento (retorna objeto todo), acessando chave price, for maior que 300
    priceProduct = true; // variável recebe true, pq a condição foi satisfeita
  }
  return priceProduct;
});
console.log(precoProduto);

// // 3

const totalPrice = (id, quantidade) => { // passando parâmetro 8, 2
  const product = techProducts.find((element) => element.id === id); // acessando objetos, pegando o  id do elemento encontrado e comparado com id do parâmetro (8)
  return product.price * quantidade; //retorna, o preço do elemento encontrado * quantidade (parâmetro 2);
};

console.log(totalPrice(8,2));

