import React, { useState, useEffect } from "react";
import { Typography } from '@material-ui/core';
import axios from 'axios';

import BookList from "./BookList";

function App() {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  
  useEffect(() => {
    const fetchBooks = async () => {
      const res = await axios.get('http://localhost:8080/books');
      setBooks(res.data);
      setError(false);
      setLoading(true);

      try {
        const res = await axios.get('http://localhost:8080/books');
        setBooks(res.data);
      } catch (e) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  return (
    <div>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <BookList books={books} />
    </div>
  );
}

export default App;
