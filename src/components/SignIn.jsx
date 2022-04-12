import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../features/login/loggerSlice'
import { addUser } from '../features/users/userSlice'


const SignIn = () => {
  const dispatch = useDispatch()
  const [username, setUsername] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addUser({ name: username }))
    setUsername("")
    dispatch(login())
  }

    return (
        <div className="signin-container">
            <header>
                <h2>Sign In</h2>
            </header>
            <form onSubmit={handleSubmit}>
                <input
                    placeholder='enter your name'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
                <button onClick={() => handleSubmit()}>
                    LogIn
                </button>
            </form>
        </div>
    )
}

export default SignIn