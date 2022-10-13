import React from 'react'
import './header.css'

function Header() {
return (
    <nav>
<div class="container nav__container">
            <a href="" class="nav__logo">EGATOR</a>
            <ul class="nav__items">
                <li><a href="">Home</a></li>
                <li><a href="">Routines</a></li>
                <li><a href="">Activities</a></li>
                <li><a href="">Logout</a></li>        
            </ul>

            <button id="open__nav-btn"><i class="uil uil-bars"></i></button>
            <button id="close__nav-btn"><i class="uil uil-multiply"></i></button>
        </div>
        </nav>
)
}





export default Header