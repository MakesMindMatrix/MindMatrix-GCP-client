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
import GoogleButton from 'react-google-button';
import AuthLeft from './AuthLeft/AuthLeft';

const Register = () => {
    const dispatch = useDispatch()
    const params = new URLSearchParams(window.location.search);
    const msg = params.get('msg');
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
    const [emailTouched, setEmailTouched] = useState(false)
    const [passwordTouched, setPasswordTouched] = useState(false)

    useEffect(() => {
        if (error?.message) {
            toast.error(error)
            dispatch(clearErrors())
        }

        if (error?.redirect) {
            setTimeout(() => navigate('/login'), 100);
        }

        if (isAuthenticated) {
            navigate(from, { replace: true });
        }

        if(msg === "user_not_found"){
            toast.error("User not found, please signup to continue");
        }
    }, [dispatch, error, isAuthenticated, navigate, from,msg])

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

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            toast.error('Please enter a valid email address');
            return;
        }

        // Password validation
        if (password.length < 8) {
            toast.error('Password must be at least 8 characters long');
            return;
        }
        dispatch(register(user))
    }
    const registerGoogleAuth = () => {
        window.location.href = `${process.env.REACT_APP_BACKEND_URL}/api/v1/google/register`;
    }

    const registerDataChange = (e) => {
        if(e.target.name === "email"){
            setEmailTouched(true);
        }
        if(e.target.name === "password"){
            setPasswordTouched(true);
        }
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    // Determine if fields have errors (only if they've been touched)
    const emailHasError = emailTouched && user.email.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);
    const passwordHasError = passwordTouched && user.password.length > 0 && user.password.length < 8;
    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <div className='login_container'>
                        <div className='login_left'>
                            <AuthLeft />
                        </div>
                        <div className='login_right'>
                            <form
                                className='signUpForm'
                                encType='multipart/form-data'
                                onSubmit={registerSubmit}
                                noValidate
                            >
                                <Link to="/">
                                    <div className='register_logo'></div>
                                </Link>
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
                                        className={emailHasError ? "input-error" : ""}
                                    />
                                </div>
                                <div className='PasswordContainer'>
                                    <div className='signUpPassword'>
                                        <RiLockPasswordLine />
                                        <input
                                            type='password'
                                            placeholder='Password'
                                            required
                                            name='password'
                                            value={password}
                                            onChange={registerDataChange}
                                            className={passwordHasError ? "input-error" : ""}
                                        />
                                    </div>
                                    <p className='PasswordNote'>Note: Your password must be at least 8 characters long</p>
                                </div>
                                <input type='submit' value="Register" className='signUpBtn' />
                                <div className='googleAuthBtn'>
                                    <GoogleButton
                                        label="Sign up with Google"
                                        onClick={registerGoogleAuth}
                                    />
                                </div>
                                <h2 className='redirect_text'>Already have an account? <Link to='/login'>Sign In</Link></h2>
                            </form>
{/* 
                            <button className="googleAuthBtn" onClick={registerGoogleAuth}>
                                <FcGoogle className="googleAuthIcon" />
                                <span style={{ marginLeft: "1rem" }}>SignUp with Google</span>
                            </button> */}
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Register
