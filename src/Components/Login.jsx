import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext';

const Login = () => {

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const {setUser} = useContext(UserContext);


  const handleSubmit = (e)=>{
    e.preventDefault();
    setUser({username, password});  

  }
  return (
    <>
    <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}}/>
    <br />
    <br />
    <input type="password" value={password} onChange={(e)=>{setPassword(e.target.value)}}/>
    <br />
    <button onClick={handleSubmit}>SUBMIT</button>
    <br />
    </>
  )
}

export default Login;