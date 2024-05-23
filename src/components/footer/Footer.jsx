import React from 'react'
import "./footer.css"
import {BsInstagram} from 'react-icons/bs'
import { FaXTwitter } from "react-icons/fa6";
import {BsLinkedin} from 'react-icons/bs'
const Footer = () => {
  return ( 
    <footer>
      <a href="#"  className='footer__logo'>Mallifs</a>

      <ul className='permalinks'>
         <li><a href="#">Home</a></li>  
         <li><a href="#about">About</a></li> 
         <li><a href="#experience">Experience</a></li> 
         <li><a href="#portfolio">Portfolio</a></li> 
      </ul>

      <div className="footer__socials">
        <a href="https://www.instagram.com/" target='_blank' rel="noopener noreferrer"> <BsInstagram/></a>
        <a href="https://twitter.com/home " target='_blank' rel="noopener noreferrer"><FaXTwitter/></a>
        <a href="https://www.linkedin.com/in/simintei-leon-205625265" target='_blank' rel="noopener noreferrer"> <BsLinkedin/></a>
       </div>

       <div className="footer__copyright">
        <small>
          &copy; 2024 Mallifs. All rights reserved.
        </small>
       </div>
    </footer>
  )
}

export default Footer