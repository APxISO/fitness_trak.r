import React from 'react'
import './header.css'

function Header() {
return (
    <nav>
<div className="container nav__container">
            <a href="" className="nav__logo">Fitness Trak.r</a>
            <ul className="nav__items">
                <li><a href="">Home</a></li>
                <li><a href="/rountines">Routines</a></li>
                <li><a href="">Activities</a></li>
                <li><a href="">Logout</a></li>        
            </ul>

            <button id="open__nav-btn"><i className="uil uil-bars"></i></button>
            <button id="close__nav-btn"><i className="uil uil-multiply"></i></button>
        </div>
        </nav>
)
}





export default Header