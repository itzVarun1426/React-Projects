import React from 'react'
import UserContext from '../context/UserContext';
import { useState ,useContext } from 'react';

const Login = () => {
    const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const {setUser} = useContext(UserContext);
    const handleOnSubmit = (e) => {
        e.preventDefault();
        setUser({username , password});

    }
  return (
    <div>
      <h1>Login</h1>
        <form onSubmit={handleOnSubmit}>
            <input type="text" placeholder='username' value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder='password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type='submit'>Login</button>
        </form>
    </div>
  )
}

export default Login
