import React from "react";
import { Typography } from '@material-ui/core';

function App() {
  return (
    <div>
      <Typography variant='h2' component='h2' data-test='heading'>
        Bookish
      </Typography>
      <div data-test='book-list'>
        <div className='book-item'>
        </div>
        <div className='book-item'>
        </div>
      </div>
    </div>
  );
}

export default App;
