import React, { useState } from 'react'
import Navbar from '../layout/Navbar/Navbar'
import './IndustryRegister.css'

const IndustryRegister = () => {
    const [registerData, setRegisterData] = useState()

    const handleRegisterChange = (e) => {

    }

    const handleSubmit = () => {

    }
    return (
        <>
            <div className='industryRegister_container'>
                <Navbar />
                <div className='industryRegister_container_left'>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
                <div className='industryRegister_container_right'>
                    <form
                        className='signUpForm'
                        encType='multipart/form-data'
                        onSubmit={handleSubmit}
                        noValidate
                    >
                        <input type='text' />
                        <input type='email' />
                        <input type='password' />
                        <input type='Submit' />
                    </form>
                </div>
            </div>
        </>
    )
}

export default IndustryRegister
