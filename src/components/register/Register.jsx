import React, { useState } from "react";
const url = `https://fitnesstrac-kr.herokuapp.com/api/users/register`;





const Register= () => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [confirm, setConfirm] = useState("")
    const [error, setError] = useState("")


    console.log(username, password, confirm)

    const handleRegister= async(e) => {
        e.preventDefault(); 
        if (password !== confirm){
            setError("Passwords Do Not Match.")
        }
        return;   
    };



    return (
        
        <div className="form_container">
        <h1>Register:</h1>
        <form onSubmit={handleRegister}>
            <input required minlength="5" placeholder="Enter Username..." value={username} onChange={(e) => setUsername(e.target.value)} />
            <input required minlength="8" placeholder="Enter Password..." value={password} onChange={(e) => setPassword(e.target.value)} />
            <input required minlength="8" placeholder="Confirm Password..." value={confirm} onChange={(e) => setConfirm(e.target.value)} />
            <button>Register</button>
        </form>
        <p>{error}</p>
        </div>
        
        
      );
}










export default Register;