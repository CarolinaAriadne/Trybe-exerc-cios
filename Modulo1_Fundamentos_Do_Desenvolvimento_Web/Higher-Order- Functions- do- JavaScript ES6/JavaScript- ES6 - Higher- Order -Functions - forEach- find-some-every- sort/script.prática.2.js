const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];


//Retorne o nome do livro de menor nome

let smallBook = '';
let sizeName = 9999;

  const smallerName = books.forEach((objects) => { // passando pelos elementos, cada "passada" "pega" o objeto todo!
    
   let tamanhoDoNomeAtual = objects.name.length; // pegando tamanho do nome do elemento (objeto) atual
   let nomeAtual = objects.name; // pegando nome do elemento atual

   if(tamanhoDoNomeAtual < sizeName){ // se o tamanho do nome atual for menor que sizeName (neste giro, vale 9999)
    sizeName = tamanhoDoNomeAtual; // variável passa a ter o número referente ao tamanho do name atual
    smallBook = nomeAtual;     // variável recebe o nome do livro atual, que tem o tamanho menor que 9999
   }
       
  });
  console.log(smallBook);

// na segunda iteração, sizeName, vai valer 26, pq foi o primeiro name encontrado. Então haverá a comparação do name que vale 26, com o namo atual que será um elemento posterior, para verificar qual dos dois é menor. 

  