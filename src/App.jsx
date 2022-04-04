import React, { useState } from 'react';
import './App.css';
import {useSelector } from 'react-redux'
import { selectLogger } from './features/login/loggerSlice'
import Books from './components/Books';
import SignIn from './components/SignIn';

function App() {
  const isLoggedIn = useSelector(selectLogger)
  return (
    <>
      {
        !isLoggedIn ? <SignIn/> :<Books/>
      }
    </>
  );
}

export default App;
