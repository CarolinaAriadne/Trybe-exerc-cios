const express = require('express');

const BooksController = require('./controllers/BooksController');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.get('/books', BooksController.getAll);

app.get('/book/:id', BooksController.getById);

app.post('/book', BooksController.create);

app.put('/book/:id', BooksController.update);

app.delete('/book/:id', BooksController.remove)

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}`));