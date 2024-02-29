import { configureStore } from '@reduxjs/toolkit';
import booksRuducer from './books/reducer';
import filterSlice from './slices/filterSlice';

const store = configureStore({
  reducer: {
    books: booksRuducer,
    filter: filterSlice,
  },
});

export default store;
