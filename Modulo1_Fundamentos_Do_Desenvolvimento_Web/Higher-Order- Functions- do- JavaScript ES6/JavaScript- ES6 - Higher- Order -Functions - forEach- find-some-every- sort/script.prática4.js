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
  
  // Adicione o código do exercício aqui:
  //4 - Ordene os livros por data de lançamento em ordem decrescente.

    
books.sort((livro1, livro2) => livro2.releaseYear - livro1.releaseYear);
    
console.log(books);

// sort recebe do array todos os elementos em pares. A função  sort recebe  em pares: (1954,1991), (1951,1954),(1965,1951),(1986,1965), (1928,1986). - primeira volta: (1954,1991). => 1991 - 1954, resultao da operação deu mais que 0, logo, ordena 1991 (elemento2-livro2), para um índice anterior a 1954 (elemento1.livro1)
// 1 volta  1991 - 1954 ....  Se funcaoDeComparacao(a, b) é maior que 0, ordena b para um índice anterior que a.


// Se funcaoDeComparacao(a, b) for menor que 0, ordena a para um índice anterior a b, i.e. a vem primeiro.
// Se funcaoDeComparacao(a, b) retornar 0, deixa a e b inalterados em relação um ao outro, mas ordenado em relação a todos os outros elementos. Nota: O padrão ECMAscript não garante este comportamento, e, portanto, nem todos os navegadores (e.g. Versões do Mozilla anteriores a 2003) respeitarão isto.
// Se funcaoDeComparacao(a, b) é maior que 0, ordena b para um índice anterior que a.
// funcaoDeComparacao(a, b) sempre deve retornar o mesmo valor dado um par específico de elementos a e b como seus dois parametros. Se resultados inconsistentes são retornados, então a ordenação é indefinida.
