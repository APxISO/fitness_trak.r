import React, {useState, useEffect,} from "react";
import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Activities from "./components/activites/Activities";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Routines from "./components/routines/Routines";
import Register from "./components/register/Register";
import Login from "./components/login/Login";
export const url = "https://fitnesstrac-kr.herokuapp.com/api";




const App = () => {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [routines, setRoutines] = useState([]);
  const [error, setError] = useState("");
  const [activites, setActivites] = useState([]);
  const [myRoutine, setmyRoutine] = useState([]);

  const fetchRoutine = async () => {
    const routines = await fetch(`${url}/routines`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await routines.json();
    setRoutines(info);
    console.log("routines fetched");
  };

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

  const fetchActivities = async () => {
    const routines = await fetch(`${url}/activities`, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    const info = await routines.json();

    setActivites(info);
    console.log("activities fetched");
  };

  const fecthmyRoutine = async (e) => {
    console.log("HIT");
    const resp = await fetch(
      `http://fitnesstrac-kr.herokuapp.com/api/users/${user.username}/routines`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const info = await resp.json();
    setmyRoutine(info);
    console.log("MYROUTINE");
  };

  useEffect(async () => {
    await fetchUser();
    await fetchRoutine();
    await fetchActivities();
  }, [token]);

  useEffect(async () => {
    if (user) await fecthmyRoutine();
  }, [user]);
  
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
            <Route
                    exact
                    path="/activities/"
                    element={
                        <Activities
                            // activities={activities}
                            user={user}
                            token={token}
                            fetchActivities={fetchActivities}
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