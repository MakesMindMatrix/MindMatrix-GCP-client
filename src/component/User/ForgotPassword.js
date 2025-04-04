import React, { useState, useEffect } from 'react'
import './ForgotPassword.css'
import { Link } from "react-router-dom";
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
import { MdOutlineMail } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, forgotPassword } from "../../actions/userAction";
// import { useAlert } from "react-alert";
// import Loader from '../layout/Loader/Loader';
import { ToastContainer, toast } from "react-toastify";

const ForgotPassword = () => {
    const dispatch = useDispatch();
    // const alert = useAlert();

    const { error, message } = useSelector(
        (state) => state.forgotPassword
    );

    const [email, setEmail] = useState("");

    const forgotPasswordSubmit = (e) => {
        e.preventDefault();

        // const myForm = new FormData();

        // myForm.set("email", email);
        dispatch(forgotPassword({ email }));
    };

    useEffect(() => {
        if (error) {
            toast.error(error)
            dispatch(clearErrors());
        }
        
        if (message) {
            toast.success(message);
        }
    }, [dispatch, error, message]);
    return (
        <>
            <div className='login_container'>
                <div className='login_left'>
                    <div className='login_left_image'></div>
                </div>
                <div className='login_right'>
                    <form className='loginForm' onSubmit={forgotPasswordSubmit} noValidate>
                        <div className='login_logo'></div>
                        <div className='loginEmail'>
                            <MdOutlineMail />
                            <input
                                type='email'
                                placeholder='Email'
                                required
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <input type='submit' value="Send Reset Link" className='loginBtn' />
                        <h2>Do you have an account?<Link to='/register'>Sign Up</Link></h2>
                    </form>
                </div>
            </div>
            <ToastContainer style={{ fontSize: "1.35rem" }} />
        </>
    )
}

export default ForgotPassword
