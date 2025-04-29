import React, { useEffect, useRef, useState } from 'react'
import './LoginSignUp.css'
import Loader from '../layout/Loader/Loader'
// import MailOutlineIcon from "@material-ui/icons/MailOutline";
// import LockOpenIcon from "@material-ui/icons/LockOpen";
// import FaceIcon from "@material-ui/icons/Face";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { useAlert } from 'react-alert'
import { clearErrors, login, register } from '../../actions/userAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const LoginSignUp = () => {
  const navigate = useNavigate()
    const dispatch = useDispatch()
    const alert = useAlert()

    const { error, loading, isAuthenticated } = useSelector((state) => state.user)

    const loginTab = useRef(null)
    const registerTab = useRef(null)
    const switcherTab = useRef(null)

    const [loginEmail, setLoginEmail] = useState('')
    const [loginPassword, setLoginPassword] = useState('')
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: ""
    })

    const { name, email, password } = user;
    const [avatar, setAvatar] = useState("/Profile.png")
    const [avatarPreview, setAvatarPreview] = useState("/Profile.png")

    const validateEmail = (email) => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
      };
       
    useEffect(() => {
        if (error) {
            alert.error(error)
            dispatch(clearErrors())
        }

        // console.log(isAuthenticated)
        if (isAuthenticated) {
            navigate('/account')
        }
    }, [alert, dispatch, error, isAuthenticated, navigate])

    const switchTabs = (e, tab) => {
      if (tab === "login") {
          switcherTab.current.classList.add("shiftToNeutral")
          switcherTab.current.classList.remove("shiftToRight")

          registerTab.current.classList.remove("shiftToNeutralForm")
          loginTab.current.classList.remove("shiftToLeft")
      }
      if (tab === "register") {
          switcherTab.current.classList.add("shiftToRight")
          switcherTab.current.classList.remove("shiftToNeutral")

          registerTab.current.classList.add("shiftToNeutralForm")
          loginTab.current.classList.add("shiftToLeft")
      }
  }
  const loginSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail(loginEmail)) {
      toast.error('Please enter a valid email address');
      return;
    }
    if (loginPassword.length < 8) {
      toast.error('Password must be at least 8 characters long');
      return;
    }
    dispatch(login(loginEmail, loginPassword))
  }

  const registerSubmit = (e) => {
      e.preventDefault() 
      if (!validateEmail(email)) {
        toast.error('Please enter a valid email address');
        return;
      }
      if (password.length < 8) {
        toast.error('Password must be at least 8 characters long');
        return;
      }
      const myForm = new FormData();
      myForm.set("name", name)
      myForm.set("email", email)
      myForm.set("password", password)
      myForm.set("avatar", avatar)

      dispatch(register(myForm))
  }

  const registerDataChange = (e) => {
      if (e.target.name === "avatar") {
          const reader = new FileReader()

          reader.onload = () => {
              if (reader.readyState === 2) {
                  setAvatarPreview(reader.result)
                  setAvatar(reader.result)
              }
          }

          reader.readAsDataURL(e.target.files[0])
      } else {
          setUser({ ...user, [e.target.name]: e.target.value })
      }
  }
  
  return (
    <>
            {loading ? <Loader /> : (
                <>
                    <ToastContainer position="top-right" autoClose={3000} />
                    <div className='loginSignUp_container'>
                        <div className='LoginSignUp_box'>
                            <div>
                                <div className='login_signUp_toggle'>
                                    <p onClick={(e) => switchTabs(e, "login")}>LOGIN</p>
                                    <p onClick={(e) => switchTabs(e, "register")}>REGISTER</p>
                                </div>
                                <button ref={switcherTab}></button>
                            </div>
                            <form className='loginForm' ref={loginTab} onSubmit={loginSubmit}>
                                <div className='loginEmail'>
                                    {/* <MailOutlineIcon /> */}
                                    <input
                                        type='email'
                                        placeholder='Email'
                                        required
                                        value={loginEmail}
                                        onChange={(e) => setLoginEmail(e.target.value)}
                                    />
                                </div>
                                <div className='loginPassword'>
                                    {/* <LockOpenIcon /> */}
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        required
                                        value={loginPassword}
                                        onChange={(e) => setLoginPassword(e.target.value)}
                                    />
                                    <small style={{ color: 'red', display: 'block', marginTop: '2px', fontSize: '12px' }}>
                                        Password must be at least 8 characters long
                                    </small>
                                </div>

                                <Link to="/password/forgot">Forget Password?</Link>
                                <input type='submit' value="Login" className='loginBtn' />
                            </form>
                            <form
                                className='signUpForm'
                                ref={registerTab}
                                encType='multipart/form-data'
                                onSubmit={registerSubmit}
                            >
                                <div className='signUpName'>
                                    {/* <FaceIcon /> */}
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
                                    {/* <MailOutlineIcon /> */}
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
                                    {/* <LockOpenIcon /> */}
                                    <input
                                        type='password'
                                        placeholder='Password'
                                        required
                                        name='password'
                                        value={password}
                                        onChange={registerDataChange}
                                    />
                                    <small style={{ color: 'red', display: 'block', marginTop: '2px', fontSize: '12px' }}>
                                        Password must be at least 8 characters long
                                    </small>
                                </div>

                                <div id='registerImage'>
                                    <img src={avatarPreview} alt='avatar preview' />
                                    <input
                                        type='file'
                                        name='avatar'
                                        accept='image/*'
                                        onChange={registerDataChange}
                                    />
                                </div>
                                <input type='submit' value="Register" className='signUpBtn' />
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
  )
}

export default LoginSignUp
