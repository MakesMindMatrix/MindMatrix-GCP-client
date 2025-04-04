import React, { useState, useEffect } from 'react';
import './Register.css'
import { Link, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, register } from '../../actions/userAction';
import Loader from '../layout/Loader/Loader';
import { ToastContainer, toast } from "react-toastify";

const Register = () => {
    const dispatch = useDispatch()
    // const alert = useAlert()
    const navigate = useNavigate()

    const { error, loading, isAuthenticated } = useSelector((state) => state.user)

    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const { name, email, password } = user;

    useEffect(() => {
        if (error) {
            // alert.error(error)
            toast.error(error)
            dispatch(clearErrors())
        }

        if (isAuthenticated) {
            navigate('/onboarding')
        }
    }, [dispatch, error, isAuthenticated, navigate])

    const registerSubmit = (e) => {
        e.preventDefault()

        switch (true) {
            case !name:
                return toast.warning("Please fill the name before submit")

            case !email:
                return toast.warning("Please fill the email before submit")
                
            case !password:
                return toast.warning("Please fill the password before submit")    
        
            default:
                break;
        }


        dispatch(register(user))
    }

    const registerDataChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <div className='login_container'>
                        <div className='login_left'></div>
                        <div className='login_right'>
                            <form
                                className='signUpForm'
                                encType='multipart/form-data'
                                onSubmit={registerSubmit}
                                noValidate
                            >
                                <div className='register_logo'></div>
                                <div className='signUpName'>
                                    <FaRegUser />
                                    <input
                                        type='text'
                                        placeholder='Name'
                                        required
                                        name='name'
                                        value={name}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className='signUpEmail'>
                                    <MdOutlineMail />
                                    <input
                                        type='email'
                                        placeholder='Email'
                                        required
                                        name='email'
                                        value={email}
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <div className='signUpPassword'>
                                    <RiLockPasswordLine />
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        required
                                        name='password'
                                        value={password}
                                        onChange={registerDataChange}
                                    />
                                </div>

                                {/* <div className='signUpPassword'>
                            <LockOpenIcon />
                            <input
                                type='password'
                                placeholder='Confirm Password'
                                required
                                name='password'
                                // value={password}
                                // onChange={registerDataChange}
                            />
                        </div> */}

                                {/* <div id='registerImage'>
                            <img src={avatarPreview} alt='avatar preview' />
                            <input
                                type='file'
                                name='avatar'
                                accept='image/*'
                                onChange={registerDataChange}
                            />
                        </div> */}
                                <input type='submit' value="Register" className='signUpBtn' />
                                <h2 className='redirect_text'>Do you have an account? <Link to='/login'>Sign In</Link></h2>
                            </form>
                        </div>
                    </div>
                    <ToastContainer style={{ fontSize: "1.35rem" }} />
                </>
            )}
        </>
    )
}

export default Register
