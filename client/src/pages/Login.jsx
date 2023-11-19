import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    let navigate = useNavigate();

        const login = ()=>{
            const data = { username: username, password: password };
            axios.post("http://localhost:4000/auth/login", data).then((response)=>{
            if(response.data.error) {
              alert(response.data.error);

            } else {
              sessionStorage.setItem("accessToken", response.data);
              navigate("/");

            }
          


            });
        }

   
  return (
    
    <div>
      <div className='formPage'>
        <div className='formContainer'>
          <label>UserName</label>
            <input type='text' placeholder='Username' autoComplete='off' id='input1' onChange={(event) =>{setUsername(event.target.value)}}/>
            <label>Password</label>
            <input type='password'  placeholder='Enter your password' autoComplete='off' id='input2' onChange={(event) =>{setPassword(event.target.value)}}/>
            <button onClick={login}>LOgin</button>
        </div>

      </div>
    </div>
  )
}

export default Login
