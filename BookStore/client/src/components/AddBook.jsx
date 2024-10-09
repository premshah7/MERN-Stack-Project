import React, { useState } from 'react';
import '../css/AddBook.css'
function AddBook() {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [books, setBooks] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const newBook = { title, author };
    setBooks([...books, newBook]);
    setTitle('');
    setAuthor('');
  
    fetch('/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newBook),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };
  return (
    <div className='container'>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Title:
          <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
        </label>
        <br />
        <label>
          Author:
          <input type="text" value={author} onChange={(event) => setAuthor(event.target.value)} />
        </label>
        <br />
        <button type="submit">Add Book</button>
      </form>
      <h2>Books:</h2>
      <ul>
        {books.map((book, index) => (
          <li key={index}>{book.title} by {book.author}</li>
        ))}
      </ul>
    </div>
  );
}

export default AddBook;