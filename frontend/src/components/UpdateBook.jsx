import React, { useState, useEffect } from 'react';
import axios from 'axios';

const UpdateBook = ({ bookId, onCancel, onUpdate }) => {
  const [bookData, setBookData] = useState({
    bookname: '',
    author: '',
    description: '',
    image: '',
    price: '',
  });

  useEffect(() => {
    // Fetch the book data for the given bookId when the component mounts
    axios.get(`http://localhost:1000/api/v1/getBooks/${bookId}`).then((response) => {
      setBookData(response.data.book);
    });
  }, [bookId]);

  const handleChange = (e) => {
    setBookData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUpdateSubmit = () => {
    // Send a PUT request to update the book data
    axios.put(`http://localhost:1000/api/v1/updateBook/${bookId}`, bookData).then((response) => {
      console.log(response.data.message);
      // Trigger the onUpdate callback to refresh the book list
      onUpdate();
    });
  };

  return (
    <div>
      <h2>Update Book</h2>
      <label>
        Book Name:
        <input
          type="text"
          name="bookname"
          value={bookData.bookname}
          onChange={handleChange}
        />
      </label>
      <label>
        Author:
        <input
          type="text"
          name="author"
          value={bookData.author}
          onChange={handleChange}
        />
      </label>
      <label>
        Description:
        <textarea
          name="description"
          value={bookData.description}
          onChange={handleChange}
        ></textarea>
      </label>
      <label>
        Image URL:
        <input
          type="text"
          name="image"
          value={bookData.image}
          onChange={handleChange}
        />
      </label>
      <label>
        Price:
        <input
          type="number"
          name="price"
          value={bookData.price}
          onChange={handleChange}
        />
      </label>
      <button onClick={handleUpdateSubmit}>Update Book</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default UpdateBook;
