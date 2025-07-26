import { useState } from 'react';

const Bookshelf = () => {
  const [books, setBooks] = useState([
    { title: 'Brave New World', author: 'Aldous Huxley' },
    { title: '1984', author: 'George Orwell' },
    { title: 'I, Robot', author: 'Isaac Asimov' },

  ]);

  const [newBook, setNewBook] = useState({
    title: '',
    author: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBook((prevBook) => ({
      ...prevBook,
      [name]: value,
    }));
  };

  const handleAddBook = (e) => {
    e.preventDefault();

    if (!newBook.title || !newBook.author) return;

    setBooks((prevBooks) => [...prevBooks, newBook]);
    setNewBook({ title: '', author: '' });
  };

  const handleDeleteBook = (indexToRemove) => {
    setBooks((prevBooks) => prevBooks.filter((_, index) => index !== indexToRemove)
    );
  };

  return (
    <div className="bookshelfDiv">
      <div className="formDiv">
        <h3>Add a Book</h3>
        <form onSubmit={handleAddBook}>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            name="title"
            type="text"
            value={newBook.title}
            onChange={handleInputChange}
            required
          />
          <br />
          <label htmlFor="author">Author:</label>
          <input
            id="author"
            name="author"
            type="text"
            value={newBook.author}
            onChange={handleInputChange}
            required
          />
          <br />
          <button type="submit">Add Book</button>
        </form>
      </div>
      <div className="bookCardsDiv">
        {books.map((book, index) => (
            <div key={index} className="bookCard">
                <h4>{book.title}</h4>
                <p>by {book.author}</p>
                <button onClick={() => handleDeleteBook(index)}>Delete</button>
            </div>
        ))}
      </div>
    </div>
  );
};

export default Bookshelf;
 
