import React from 'react'
import './CancellationPolicy.css'
import Footer from '../layout/Footer/Footer'
import { Link } from "react-router-dom";
import './CancellationPolicy.css'

const CancellationPolicy = () => {
  return (
    <>
      <div className='cancellationPolicy_container'>
        <div className="navbar">
          <div className="logo"></div>
          <div className="nav_right">

            <Link
              to="/login"
              className="btnOne auth_btn"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btnTwo auth_btn"
            >
              Sign Up
            </Link>
          </div>
        </div>
        <h1>Cancellation policy</h1>
        <p className='cancel_para'>Our all sales our final, we don't entertain any kind of refund or cancellation.</p>
        <Footer />
      </div>
    </>
  )
}

export default CancellationPolicy
