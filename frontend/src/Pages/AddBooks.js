// AddBook.js
import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios: npm install axios
import './AddBooks.css'; // Import your CSS file

function AddBook() {
  const [imageUrl, setImageUrl] = useState('');
  const [bookUrl, setBookUrl] = useState('');
  const [isBookAdded, setIsBookAdded] = useState(false); // Track whether the book is added

  const handleAddBook = async () => {
    try {
      // Assuming your backend API endpoint for adding books is '/api/addBook'
      await axios.post('http://localhost:4000/addbook', { imageUrl, bookUrl });

      // Optional: You can handle success or update the UI as needed
      console.log('Book added successfully!');
      setIsBookAdded(true); // Set the state to indicate that the book is added
    } catch (error) {
      // Handle errors, log or display a message
      console.error('Error adding book:', error);
    }
  };

  return (
    <div className="add-book-container">
      <h2 className="add-book-title">{isBookAdded ? 'Book Added' : 'Add Book'}</h2>
      {!isBookAdded ? (
        <>
          <label>
            Image URL:
            <input type="text" value={imageUrl} onChange={(e) => setImageUrl(e.target.value)} />
          </label>
          <br />
          <label>
            Book URL:
            <input type="text" value={bookUrl} onChange={(e) => setBookUrl(e.target.value)} />
          </label>
          <br />
          <button className="add-book-button" onClick={handleAddBook}>
            Add Book
          </button>
        </>
      ) : (
        <p>Return to Main Menu</p>
      )}
    </div>
  );
}

export default AddBook;
