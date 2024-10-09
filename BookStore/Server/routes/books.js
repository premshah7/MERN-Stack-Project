// backend/api/books.js
import express from 'express';
import mongoose from 'mongoose';

const app = express();
app.use(express.json());

mongoose.connect('mongodb+srv://Prem_7:Prem%40123@cluster0.2zd61.mongodb.net/Project', { useNewUrlParser: true, useUnifiedTopology: true });

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
});

const Book = mongoose.model('Book', bookSchema);

app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = new Book({ title, author });
  newBook.save((err, book) => {
    if (err) {
      res.status(500).send({ message: 'Error adding book' });
    } else {
      res.send({ message: 'Book added successfully' });
    }
  });
});

app.listen(3001, () => {
  console.log('Backend API listening on port 3001');
});