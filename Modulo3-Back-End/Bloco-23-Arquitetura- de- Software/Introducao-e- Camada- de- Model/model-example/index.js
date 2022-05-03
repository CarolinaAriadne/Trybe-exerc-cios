// index.js

const express = require("express");

const bodyParser = require("body-parser");

const Author = require("./models/Author");

const Books = require("./models/Books");

const {
  validAuthorIdNotExist,
  validTitle,
  filterAuthorId,
} = require("./models/Books");

const app = express();

app.use(bodyParser.json());

app.get("/authors", async (_req, res) => {
  const authors = await Author.getAll();

  return res.status(200).json(authors);
});

app.get("/books", async (_req, res) => {
  const books = await Books.getAllBooks();
  // console.log(books);
  return res.status(200).json(books);
});
app.get("/books/search", async (req, res) => {
  const { author_id } = req.query;
  const booksId = await Books.filterAuthorId(author_id);

  return res.status(200).json(booksId);
});

app.get("/authors/:id", async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: "Not found" });

  res.status(200).json(author);
});

app.get("/books/:id", async (req, res) => {
  const { id } = req.params;

  const books = await Books.findBookById(id);

  if (!books) return res.status(404).json({ message: "Not found" });

  res.status(200).json(books);
});

app.post("/authors", async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  await Author.create(first_name, middle_name, last_name);

  res.status(201).json({ message: "Autor criado com sucesso! " });
});

app.post("/books", validTitle, validAuthorIdNotExist, async (req, res) => {
  const { authorId, title } = req.body;
  const getAuthorId = await filterAuthorId(authorId);
  // console.log(getAuthorId);

  if (getAuthorId.length === 0) {
    return res.status(400).json({
      message: "Dados inválidos - não existe pessoa autora com este id",
    });
  }

  await Books.create(title, authorId);

  return res.status(201).json({ message: "Livro criado com sucesso" });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Ouvindo a porta ${PORT}`);
});
