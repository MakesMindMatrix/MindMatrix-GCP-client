import React, { useState, useEffect } from 'react';
import './Login.css';
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, login } from '../../actions/userAction';
import Loader from "../layout/Loader/Loader"
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from "react-icons/fc";

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    const params = new URLSearchParams(window.location.search);
    const msg = params.get('msg');
    // const alert = useAlert()

    const { error, loading, isAuthenticated, user } = useSelector((state) => state.user)

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [emailTouched, setEmailTouched] = useState(false)
    const [passwordTouched, setPasswordTouched] = useState(false)

    const loginSubmit = (e) => {
        e.preventDefault()
        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(loginEmail)) {
            toast.error('Please enter a valid email address');
            return;
        }

        // Password validation
        if (loginPassword.length < 8) {
            toast.error('Password must be at least 8 characters long');
            return;
        }
        dispatch(login(loginEmail, loginPassword))
    }
    console.log(process.env.REACT_APP_BACKEND_URL)
    console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID)
    const loginGoogleAuth = () => {
        const params = new URLSearchParams({
            client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
            redirect_uri: `${process.env.REACT_APP_BACKEND_URL}/api/v1/google/login/callback`,
            response_type: 'code',
            scope: [
                'https://www.googleapis.com/auth/userinfo.email',
                'https://www.googleapis.com/auth/userinfo.profile'
            ].join(' '),
            access_type: 'offline',
            prompt: 'consent'
        });

        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
    }

    useEffect(() => {
        if (error) {
            toast.error(error, { toastId: 'error' });
            dispatch(clearErrors());
        }

        if (msg === 'user_exists') {
            toast.error('User already exists, please login to continue', { toastId: 'user_exists' });
        }
    }, [dispatch, error, msg]);


    useEffect(() => {
        if (isAuthenticated) {
            if (user?.role === "College") {
                navigate("/college-dashboard");
            } else if (!user?.phone) {
                // navigate("/onboarding");
                const from = location.state?.from?.pathname || "/onboarding";
                navigate("/onboarding", { state: { from }, replace: true });
            } else if (user?.role === "Admin") {
                navigate("/admin-dashboard");
            } else {
                navigate("/dashboard");
            }
        }
    }, [isAuthenticated, user, navigate, location.state?.from?.pathname]);

    // Handlers to track if fields have been touched
    const handleEmailChange = (e) => {
        setLoginEmail(e.target.value);
        setEmailTouched(true);
    };

    const handlePasswordChange = (e) => {
        setLoginPassword(e.target.value);
        setPasswordTouched(true);
    };

    // Determine if fields have errors (only if they've been touched)
    const emailHasError = emailTouched && loginEmail.length > 0 && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(loginEmail);
    const passwordHasError = passwordTouched && loginPassword.length > 0 && loginPassword.length < 8;

    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <div className='login_container'>
                        <div className='login_left'>
                            <div className='login_left_image'></div>
                        </div>
                        <div className='login_right'>
                            <form className='loginForm' onSubmit={loginSubmit} noValidate>
                                <div className='login_logo'></div>
                                <div className='loginEmail'>
                                    <MdOutlineMail />
                                    <input
                                        type='email'
                                        placeholder='Email'
                                        required
                                        value={loginEmail}
                                        onChange={handleEmailChange}
                                        className={emailHasError ? "input-error" : ""}
                                    />
                                </div>
                                <div className='PasswordContainer'>
                                    <div className='loginPassword'>
                                        <RiLockPasswordLine />
                                        <input
                                            type='password'
                                            placeholder='Password'
                                            required
                                            value={loginPassword}
                                            onChange={handlePasswordChange}
                                            className={passwordHasError ? "input-error" : ""}
                                        />
                                    </div>
                                    <p className='PasswordNote'>Note: Your password must be at least 8 characters long</p>
                                </div>
                                <input type='submit' value="Login" className='loginBtn' />
                                <Link to="/password/forgot" className='forget-password-link'>Forget Password?</Link>
                                <h2 className='redirect_text'>Don't have an account? <Link to='/register'>Sign Up</Link></h2>
                            </form>
                            <button className="googleAuthBtn" onClick={loginGoogleAuth}>
                                <FcGoogle className="googleAuthIcon" />
                                <span style={{ marginLeft: "1rem" }}>SignIn with Google</span>
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Login
