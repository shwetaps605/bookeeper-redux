import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import loggerReducer from '../features/login/loggerSlice'
import booksReducer from '../features/books/booksSlice'


export const store = configureStore({
  reducer: {
    users: userReducer,
    logger: loggerReducer,
    books: booksReducer,
  },
});
