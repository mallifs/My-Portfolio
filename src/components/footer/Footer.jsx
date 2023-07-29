import React from 'react'
import "./footer.css"
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
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
        <a href="https://www.instagram.com/" target='_blank'> <BsInstagram/></a>
        <a href="https://twitter.com/home " target='_blank'><BsTwitter/></a>
        <a href="https://www.linkedin.com/in/leo-mallifs-205625265/" target='_blank'> <BsLinkedin/></a>
       </div>

       <div className="footer__copyright">
        <small>
          &copy; 2023 Mallifs. All rights reserved.
        </small>
       </div>
    </footer>
  )
}

export default Footer