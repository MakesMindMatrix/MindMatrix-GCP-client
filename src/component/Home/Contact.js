import React from 'react'
import './Contact.css'
import Footer from '../layout/Footer/Footer'
import { Link } from "react-router-dom";

const Contact = () => {
    return (
        <>
            <div>
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
                <h1 style={{marginBottom: '2rem'}}>Contact Us</h1>
                <div className='contact_container'>
                    <div className='contact_card'>
                        <h1 className='contact_heading'>Sujit Kumar</h1>
                        <h2 className='contact_subHeading'>Founder</h2>

                        <div>
                            <h2 className='contact_subHeading'>Phone No - 9845190286</h2>
                            <h2 className='contact_subHeading'>Email ID - sujit@clinf.com</h2>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Contact
