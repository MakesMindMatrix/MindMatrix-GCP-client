import React, { useState, useEffect } from 'react';
import './Register.css'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, register } from '../../actions/userAction';
import Loader from '../layout/Loader/Loader';
import { toast } from "react-toastify";

const Register = () => {
    const dispatch = useDispatch()
    // const alert = useAlert()
    const navigate = useNavigate()
    const location = useLocation()
    const from = location.state?.from?.pathname || "/onboarding"

    const { error, loading, isAuthenticated } = useSelector((state) => state.user)
    // console.log(userData)
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })
    const { name, email, password } = user;

    useEffect(() => {
        if (error?.message) {
            // alert.error(error)
            // console.log(error)
            toast.error(error)
            dispatch(clearErrors())
        }

        if (error?.redirect) {
            // console.log(error?.redirect)
            // toast.info(error.message)
            setTimeout(() => navigate('/login'), 100);
        }

        if (isAuthenticated) {
            // console.log(isAuthenticated, from)
            // navigate('/onboarding')
            navigate(from, { replace: true });
        }
    }, [dispatch, error, isAuthenticated, navigate, from])

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
                </>
            )}
        </>
    )
}

export default Register
