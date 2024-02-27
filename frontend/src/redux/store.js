import { configureStore } from '@reduxjs/toolkit';
import booksRuducer from './books/reducer';

const store = configureStore({
  reducer: {
    books: booksRuducer,
  },
});

export default store;
