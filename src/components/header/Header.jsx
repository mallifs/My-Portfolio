import React from 'react'
import "./header.css"
import CTA from './CTA'
import HP from '../../assets/img10.jpeg'
import HeaderSocials from './HeaderSocials'


const Header = () => {
  return (
    <div className="container header__container">
      {/* <h5>Hello I'm</h5> */}
      <h1>SIMINTEI</h1>
      <h5 className='text-light'> SOFTWARE ENGINEER</h5>
      <CTA/>
      <HeaderSocials/>

      <div className="hp">
        <img src={HP} alt='Header-pic'/>
      </div>

      <a href='#contact' className='scroll__down'>Scroll Down</a>

    </div>
  )
}

export default Header