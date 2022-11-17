import React, {useState} from 'react'
import './login.css'
import { url } from "../../App";

const Login = (props) => {
    const setToken = props.setToken;
    
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [error, setError] = useState("")
  
  
    const handleLogin = async (event) => {
        event.preventDefault();
        try {
          const response = await fetch(`${url}/users/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              username,
              password,
            }),
          });
    
          const data = await response.json();
          if (data.error) {
            setError(data.error);
            return;
          }
          setToken(data.token);
          localStorage.setItem("token", data.token);
        //   history("/");
        } catch (error) {
          console.error(error);
        }
      };




    return (
        <div className="form_container">
        <h1>Login:</h1>
        <form onSubmit={handleLogin}>
            <input required placeholder="Enter Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
            <input required placeholder="Enter Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
            
            <button>Login</button>
        </form>
        
        <p>{error}</p>
        {/* <div className="login_shortcut">
            <p>Already have an account?
                
            </p>
        </div> */}




        </div>
  )
}

export default Login
