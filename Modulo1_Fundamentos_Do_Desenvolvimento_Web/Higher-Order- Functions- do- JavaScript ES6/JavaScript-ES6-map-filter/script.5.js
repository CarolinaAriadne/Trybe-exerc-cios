const books = [
  {
    id: 1,
    name: "As Crônicas de Gelo e Fogo",
    genre: "Fantasia",
    author: {
      name: "George R. R. Martin",
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: "O Senhor dos Anéis",
    genre: "Fantasia",
    author: {
      name: "J. R. R. Tolkien",
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: "Fundação",
    genre: "Ficção Científica",
    author: {
      name: "Isaac Asimov",
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: "Duna",
    genre: "Ficção Científica",
    author: {
      name: "Frank Herbert",
      birthYear: 1920,
    },
    releaseYear: 1965,
  },
  {
    id: 5,
    name: "A Coisa",
    genre: "Terror",
    author: {
      name: "Stephen King",
      birthYear: 1947,
    },
    releaseYear: 1986,
  },
  {
    id: 6,
    name: "O Chamado de Cthulhu",
    genre: "Terror",
    author: {
      name: "H. P. Lovecraft",
      birthYear: 1890,
    },
    releaseYear: 1928,
  },
];

//   5 - Crie um array em ordem alfabética apenas com os nomes de todas as pessoas autoras de ficção científica ou fantasia.

const createArray = books.filter((object) => {
  return object.genre === "Ficção Científica" || object.genre === "Fantasia";
}); // esta função me retorna  somente os objetos que possuem os gêneros ficção c. e fantasia, todos que entram nesta condição são retornados

const mapStrings = createArray.map((object) => {
  return object.author.name; // essa função passa por cada elemento do retorno da função anterior (objeto que contém gêneros ficção e fantasia), e me retorna deste objeto, somente os nomes dos autores em um novo array
});

const orderArray = mapStrings.sort(); // essa função pega este novo array criado com nome dos autores, e ordena estes nomes em ordem alfabética

console.log(orderArray);
