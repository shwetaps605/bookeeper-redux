import React,{useState} from 'react';
import './App.css';
import { addUser } from './features/users/userSlice'
import { useDispatch,useSelector} from 'react-redux'
import { login,logout } from './features/login/loggerSlice'


function App() {
  const user = useSelector(state => state.users)
  console.log("USER",user)
  const dispatch = useDispatch()

  const [username,setUsername] = useState("")

  return (
    <div className="App">
      <input 
        placeholder='enter your name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        required
      />
      <button onClick={
        () => {
          dispatch(addUser({name:username}))
          setUsername("")
          dispatch(login())
          }
        }>
        LogIn
      </button>
    </div>
  );
}

export default App;
