import React, { useState, useEffect } from "react";
import { Link, Route, Routes } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import Activities from "./components/activites/Activities";
import Login from "./components/login/Login";
import Register from "./components/register/Register";



const App = () => {
  return (
    <>
        <Header/>
        <Home/>
        <Footer/>
    </>
  )
}

export default App