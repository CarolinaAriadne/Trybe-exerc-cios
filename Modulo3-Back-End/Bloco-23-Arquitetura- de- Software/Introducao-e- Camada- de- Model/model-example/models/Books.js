const connection = require("./connection");

// const Author = require('./Author')

const getAllBooks = async () => {
  const [books] = await connection.execute(
    "SELECT * FROM model_example.books;"
  );

  return books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));
};

const filterAuthorId = async (authorId) => {
  const [books] = await connection.execute(
    "SELECT * FROM model_example.books WHERE author_id=?",
    [authorId]
  );
  const returnAll = books.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }));

  return returnAll.filter((book) => {
    return book.authorId === Number(authorId);
  });
};

const findBookById = async (id) => {
  // Repare que substituímos o id por `?` na query.
  // Depois, ao executá-la, informamos um array com o id para o método `execute`.
  // O `mysql2` vai realizar, de forma segura, a substituição do `?` pelo id informado.
  const [booksId] = await connection.execute(
    "SELECT * FROM model_example.books WHERE author_id=?",
    [id]
  );

  if (booksId.length === 0) return null;

  return booksId.map(({ id, title, author_id }) => ({
    id,
    title,
    authorId: author_id,
  }))[0];
};

const validTitle = async (req, res, next) => {
  const { title } = req.body;

  if (title.length === "" || title.length < 3) {
    return res.status(400).json({ message: "Dados inválidos - title" });
  }
  next();
};

const validAuthorIdNotExist = async (req, res, next) => {
  const { authorId } = req.body;

  if (!authorId) {
    return res.status(400).json({ message: "Dados inválidos - authorId" });
  }
  next();
};

const create = async (title, authorId) =>
  await connection.execute(
    "INSERT INTO model_example.books (title,author_id) VALUES (?,?)",
    [title, authorId]
  );

module.exports = {
  getAllBooks,
  filterAuthorId,
  findBookById,
  create,
  validAuthorIdNotExist,
  validTitle,
  // isValid,
};
