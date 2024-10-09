const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3001;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/books', { useNewUrlParser: true, useUnifiedTopology: true });

// Define the book schema
const bookSchema = new mongoose.Schema({
  title: String,
  author: String
});

// Create a model from the schema
const Book = mongoose.model('Book', bookSchema);

// Create a route to add a new book
app.post('/api/books', (req, res) => {
  const { title, author } = req.body;
  const newBook = new Book({ title, author });
  newBook.save((err, book) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.send(book);
    }
  });
});

app.length('/dashboard',async (req,res) => {
  try{
    const book = await Book.countDocuments()
    return res.json({ok:true,book})
  } catch(err){
    return res.status(500).json({ok:false,err})
  }
})
// Start the server
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});