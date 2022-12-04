import React, {useState, useEffect, Link,} from "react";
import { HashRouter, Route, Routes } from 'react-router-dom';
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
// import MyRoutines from "./components/myRoutines/MyRoutines";
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
        <HashRouter>
          <Routes>
            <Route exact path="/" element={<Home user={user} />} />
            <Route
                    exact
                    path="/register"
                    element={<Register setToken={setToken} />}
            />
            <Route
                    exact
                    path="/login"
                    element={
                        <Login
                            setUser={setUser}
                            user={user}
                            setToken={setToken}
                            fetchUser={fetchUser}
                        />
                    }
                />
                
           </Routes>
           
     </HashRouter>
        
        <Footer/>
    </>
  )
}

export default App