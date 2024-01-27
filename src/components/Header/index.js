import React from 'react'
import Logo from '../../assets/logo/long-logo.png'
import "./styles.css"
function Header() {
  return (
    <div className='navbar'>
      <img src={Logo} alt="hii" />
      <div className='search bar'></div>
      <div className='profile'></div>
    </div>
  )
}

export default Header

