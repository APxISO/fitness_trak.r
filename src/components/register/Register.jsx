import React, { useState  } from "react";
import { url } from "../../App";
import "./register.css"






const Register= (props) => {
    const setToken = props.setToken;
    

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [error, setError] = useState("")
    
            
    // const history = useHistory();

    console.log(username, password, confirm)

    const handleRegister = async (e) => {
        e.preventDefault();
        setError("");
        try {
          if (password !== confirm) {
            setError("Passwords do not match");
            return;
          }
    
          const resp = await fetch(`${url}/users/register`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password,
            }),
          });
          
    
          const info = await resp.json();
          console.log(info);
          if (info.error) {
            return setError(info.error.message);
            
          }
          setToken(info.data.token);
          localStorage.setItem("token", info.data.token);
        //   history("/");
        } catch (error) {
          console.error(error);
        }

        // history.push("/")

      };

        
    return (
        
        <div className="form_container">
        <h1>Register:</h1>
        <form onSubmit={handleRegister}>
            <input type="text" id="username" required minlength="5" placeholder="Enter Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
            <input type="password" id="password1" required minlength="8" placeholder="Create Password (Min. 8 Characters)" title="Please include at least 1 uppercase character, 1 lowercase character, and 1 number." requiredPattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" value={password} onChange={(e) => setPassword(e.target.value)} />
            <input type="password" id="password2" required minlength="8" placeholder="Confirm Password..." requiredPattern="^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            <button>Register</button>
        </form>
        
        <p>{error}</p>
        {/* <div className="login_shortcut">
            <p>Already have an account?
                
            </p>
        </div> */}




        </div>
        
        
      );
}










export default Register;