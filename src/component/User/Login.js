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

const Login = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const location = useLocation()
    // const alert = useAlert()

    const { error, loading, isAuthenticated, user } = useSelector((state) => state.user)

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    const loginSubmit = (e) => {
        e.preventDefault()
        dispatch(login(loginEmail, loginPassword))
    }

    const loginGoogleAuth = () => {
        window.location.href = `${process.env.REACT_APP_BACKEND_URL}/api/v1/google/login`;
    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            // console.log(error)
            dispatch(clearErrors());
        }
    }, [dispatch, error]);
    

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
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                </div>
                                <div className='loginPassword'>
                                    <RiLockPasswordLine />
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        required
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                </div>

                                <Link to="/password/forgot">Forget Password?</Link>
                                <input type='submit' value="Login" className='loginBtn' />
                                <h2 className='redirect_text'>Don't have an account? <Link to='/register'>Sign Up</Link></h2>
                            </form>
                            <button onClick={loginGoogleAuth}>SignIn with Google</button>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Login
