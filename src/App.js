import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import { userLoggedIn, userLoggedOut, setName} from './features/users/userSlice'
import { useDispatch,useSelector} from 'react-redux'


function App() {
  const user = useSelector(state => state.users)
  console.log("USER",user)

  const [username,setUsername] = useState("")

  return (
    <div className="App">
      <input 
        placeholder='enter your name'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button>
        LogIn
      </button>
    </div>
  );
}

export default App;
