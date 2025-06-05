import React, { useEffect, useState } from 'react'
import './ResetPassword.css'
import { useDispatch, useSelector } from "react-redux";
import { resetPassword, clearErrors } from "../../actions/userAction";
import { RiLockPasswordLine } from "react-icons/ri";
import { Link, useNavigate, useParams } from "react-router-dom";
// import Loader from '../layout/Loader/Loader';
import { ToastContainer, toast } from "react-toastify";
import AuthLeft from './AuthLeft/AuthLeft';

// hello

const ResetPassword = () => {
  const params = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { success, error } = useSelector(
    (state) => state.forgotPassword
  );

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetPasswordSubmit = (e) => {
    e.preventDefault();

    const myForm = new FormData();

    myForm.append("password", password);
    myForm.append("confirmPassword", confirmPassword);

    dispatch(resetPassword(params.token, myForm)); 
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(clearErrors());
    }
    if (success) {
      toast.success("Password changed successfully");
      // navigate('/login')
    }
  }, [success, dispatch, error, navigate])
  return (
        <>
          <div className='login_container'>
            <div className='login_left'>
              <AuthLeft />
            </div>
            <div className='login_right'>
              <form className='loginForm' onSubmit={resetPasswordSubmit} noValidate>
                <div className='login_logo'></div>
                <div className='loginEmail'>
                  <RiLockPasswordLine />
                  <input
                    type='password'
                    placeholder='New Password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className='loginPassword'>
                  <RiLockPasswordLine />
                  <input
                    type='password'
                    placeholder='Confirm Password'
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                  />
                </div>
                <input type='submit' value="Change Password" className='loginBtn' />
                <h2>Do you have an account?<Link to='/login'>Sign In</Link></h2>
              </form>
            </div>
          </div>
          <ToastContainer style={{ fontSize: "1.35rem" }} />
        </>
  )
}

export default ResetPassword
