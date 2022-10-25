import React from 'react'
import './footer.css'
import {BsYoutube} from 'react-icons/bs'
import {BsFacebook} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'


function Footer() {
return (
    <footer className='footer__container'>
        
    <div className="footer__socials">
        <a href="https://youtube.com" target="_blank"><i><BsYoutube /></i></a>
        <a href="https://facebook.com" target="_blank"><i><BsFacebook/></i></a>
        <a href="https://instagram.com" target="_blank"><i><BsInstagram/></i></a>
    </div>
    <div className="footer__copyright">
        <small>Copyright &copy; 2022 by FS Team. All rights reversed</small>
    </div>
</footer>
)
}





export default Footer