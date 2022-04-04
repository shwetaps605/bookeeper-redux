import React, { useState } from 'react';
import './App.css';
import { addUser } from './features/users/userSlice'
import { useDispatch, useSelector } from 'react-redux'
import { login, logout, selectLogger } from './features/login/loggerSlice'
import Books from './components/Books';

function App() {
  const user = useSelector(state => state.users)
  const isLoggedIn = useSelector(selectLogger)
  console.log("USER", user)
  const dispatch = useDispatch()
  console.log("LOGIN STATUS", isLoggedIn)

  const [username, setUsername] = useState("")

  const handleLogIn = () => {
    dispatch(addUser({ name: username }))
    setUsername("")
    dispatch(login())
  }

  return (
    <>
      {
        !isLoggedIn ?
          <div className="App">
            <input
              placeholder='enter your name'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <button onClick={() => handleLogIn()}>
              LogIn
            </button>
          </div> :
          <Books/>
    }
    </>

  );
}

export default App;
