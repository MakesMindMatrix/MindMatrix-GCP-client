import React from 'react'
import './Header.css'
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className='headerContainer'>
        <div className='logo'></div>
        <div>
          <Link className='login_btn auth' to='/login'>Login</Link>
          <Link className='register_btn auth' to='/register'>Sign Up</Link>
        </div>
      </div>
    </>
  )
}

export default Header
