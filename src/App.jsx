import React, {useState, useEffect, Link} from "react";
import Activities from "./components/activites/Activities";
// import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Routines from "./components/routines/Routines";
// import Activities from "./components/activites/Activities";
// import Login from "./components/login/Login";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
export const url = "https://fitnesstrac-kr.herokuapp.com/api";







const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  
  const fetchUser = async () => {
    const lsToken = localStorage.getItem("token");

    if (lsToken) {
      setToken(lsToken);
    }

    const resp = await fetch(`${url}/users/me`, {
      headers: {
        Authorization: `Bearer ${lsToken}`,
      },
    });
    const info = await resp.json();

    if (!info.error) {
      console.log("user fetched");
      setUser(info);
    }
  };
  
  
  
  return (
    <>
    
        <Header/>
        {/* <Home/> */}
      {/* <Activities/>     */}
        {/* <Routines/> */}
        {/* <Register/> */}
        <Login/>
        <Footer/>
    </>
  )
}

export default App