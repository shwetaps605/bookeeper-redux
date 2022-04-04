import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../features/users/userSlice';
import loggerReducer from '../features/login/loggerSlice'


export const store = configureStore({
  reducer: {
    users: userReducer,
    logger: loggerReducer
  },
});
