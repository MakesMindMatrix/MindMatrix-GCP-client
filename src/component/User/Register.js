import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaRegUser } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors, register } from "../../actions/userAction";
import Loader from "../layout/Loader/Loader";
import { toast } from "react-toastify";
import GoogleButton from "react-google-button";
import AuthLeft from "./AuthLeft/AuthLeft";
import { getUniversity } from "../../actions/academicDataAction";

const Register = () => {
  const dispatch = useDispatch();
  const params = new URLSearchParams(window.location.search);
  const msg = params.get("msg");
  // const alert = useAlert()
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/onboarding";

  const { error, loading, isAuthenticated, user: userData } = useSelector(
    (state) => state.user
  );
  const { universityData } = useSelector((state) => state.academicData)
  // console.log(userData)
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    role: "",
    //Foor College
    phone: "",
    university: "",
    collegeName: "",
    collegePersonDesignation: "",
    personOfContactName: "",
    personOfContactNumber: "",
    personOfContactDesignation: "",
  });
  const { name, email, password } = user;
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);

  useEffect(() => {
    dispatch(getUniversity())
    if (error?.message) {
      toast.error(error);
      dispatch(clearErrors());
    }

    if (error?.redirect) {
      setTimeout(() => navigate("/login"), 100);
    }

    if (isAuthenticated && (userData && userData.role === "user")) {
      navigate(from, { replace: true });
    } else if (isAuthenticated && (userData && userData.role === "college")) {
      navigate("/college-dashboard", { replace: true });
    }

    if (msg === "user_not_found") {
      toast.error("User not found, please signup to continue");
    }
  }, [dispatch, error, isAuthenticated, navigate, from, msg, userData]);

  const registerSubmit = (e) => {
    e.preventDefault();

    // switch (true) {
    //   case !name:
    //     return toast.warning("Please fill the name before submit");

    //   case !email:
    //     return toast.warning("Please fill the email before submit");

    //   case !password:
    //     return toast.warning("Please fill the password before submit");

    //   default:
    //     break;
    // }

    // if (user.role === "user") {
    if (!name || !email) {
      return toast.warning("Please fill all required fields");
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (user.university === "") {
      delete user.university;
    }
    dispatch(register(user));
  };

  const registerGoogleAuth = () => {
    window.location.href = `${process.env.REACT_APP_BACKEND_URL}/api/v1/google/register`;
  };

  const registerDataChange = (e) => {
    if (e.target.name === "email") {
      setEmailTouched(true);
    }
    if (e.target.name === "password") {
      setPasswordTouched(true);
    }
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Determine if fields have errors (only if they've been touched)
  const emailHasError =
    emailTouched &&
    user.email.length > 0 &&
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(user.email);
  const passwordHasError =
    passwordTouched && user.password.length > 0 && user.password.length < 8;

  return (
    <div className="register-div">
      {loading ? (
        <Loader />
      ) : (
        <>
          <header className="register-header">
            <div className="header-content">
              <Link to="/">
                <div className="logo"></div>
              </Link>

              <div className="auth-buttons">
                <button
                  className="outline-btn"
                  onClick={() => navigate("/register")}
                >
                  Register
                </button>
                <button
                  className="filled-btn"
                  onClick={() => navigate("/login")}
                >
                  Login
                </button>
              </div>
            </div>
          </header>

          <div className="login_container">
            <div className="login_left">
              <AuthLeft />
            </div>

            <div className="login_right">
              <div className="register-heading">
                {user.role === "college" ? (
                  // <p className="register-subheading">
                  //   Choose your profile type to begin and create your account
                  // </p>
                  <>
                    <h1> Get Started with MindMatrix </h1>
                    <p className="register-subheading">
                      Choose your profile type to begin and create your account
                    </p>
                  </>
                ) : (
                  <>
                    <h1>Get Started with MindMatrix</h1>
                    <p className="register-subheading">
                      Choose your profile type to begin and create your account
                    </p>
                  </>
                )}
              </div>

              <div className="role-selection">
                <div
                  className={`student ${user.role === "user" ? "active-role" : ""
                    }`}
                  onClick={() => setUser({ ...user, role: "user" })}
                >
                  <h1>I'm a Student</h1>
                  <h2>Access programs, tasks & personalized career growth</h2>
                </div>
                <div
                  className={`college ${user.role === "college" ? "active-role" : ""
                    }`}
                  onClick={() => setUser({ ...user, role: "college" })}
                >
                  <h1>I'm a College</h1>
                  <h2>
                    Manage programs, track students, partner with industry
                  </h2>
                </div>
              </div>

              {user.role === "user" && (
                <form
                  className="signUpForm"
                  onSubmit={registerSubmit}
                  noValidate
                >
                  <GoogleButton
                    label=" Sign up with Google"
                    onClick={registerGoogleAuth}
                  />
                  <div className="divider-with-text">
                    <hr />
                    <span>or Sign Up with Email</span>
                    <hr />
                  </div>
                  <div className="signUpName">
                    <FaRegUser />
                    <input
                      type="text"
                      placeholder="Name"
                      required
                      name="name"
                      value={name}
                      onChange={registerDataChange}
                    />
                  </div>
                  <div className="signUpEmail">
                    <MdOutlineMail />
                    <input
                      type="email"
                      placeholder="Email"
                      required
                      name="email"
                      value={email}
                      onChange={registerDataChange}
                      className={emailHasError ? "input-error" : ""}
                    />
                  </div>
                  <div className="PasswordContainer">
                    <div className="signUpPassword">
                      <RiLockPasswordLine />
                      <input
                        type="password"
                        placeholder="Password"
                        required
                        name="password"
                        value={password}
                        onChange={registerDataChange}
                        className={passwordHasError ? "input-error" : ""}
                      />
                    </div>
                    <p className="PasswordNote">
                      Password must be at least 8 characters long
                    </p>
                  </div>
                  <input type="submit" value="Register" className="signUpBtn" />
                  <h2 className="redirect_text">
                    Already have an account? <Link to="/login">Sign In</Link>
                  </h2>
                </form>
              )}

              {user.role === "college" && (
                <form className="collegeSignUpForm" onSubmit={registerSubmit}>
                  <input
                    type="text"
                    placeholder="Please Mention Your Name"
                    name="name"
                    onChange={registerDataChange}
                  />

                  <div className="row-2">
                    <input
                      type="email"
                      placeholder="Your Email ID"
                      name="email"
                      onChange={registerDataChange}
                    />
                    <input
                      type="text"
                      placeholder="Your Contact Number"
                      name="phone"
                      onChange={registerDataChange}
                    />
                  </div>

                  <input
                    type="password"
                    placeholder="Password"
                    required
                    name="password"
                    value={password}
                    onChange={registerDataChange}
                    className={passwordHasError ? "input-error" : ""}
                  />
                  {/* <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    onChange={registerDataChange}
                  /> */}

                  <select
                    name="university"
                    onChange={registerDataChange}
                    defaultValue=""
                    value={user.university}
                  >
                    <option value="university">Choose University</option>
                    {universityData?.data?.map((elm, index) => (
                      <option value={elm._id} key={index}>{elm.name}</option>
                    ))}
                  </select>

                  <input
                    type="text"
                    placeholder="Enter Your College Name"
                    name="collegeName"
                    onChange={registerDataChange}
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Designation"
                    name="collegePersonDesignation"
                    onChange={registerDataChange}
                  />

                  <hr className="form-divider" />

                  <input
                    type="text"
                    placeholder="Mention a Contact Person Name (Appoint a PoC from Your College)"
                    name="personOfContactName"
                    onChange={registerDataChange}
                  />
                  <input
                    type="text"
                    placeholder="Contact Person Number"
                    name="personOfContactNumber"
                    onChange={registerDataChange}
                  />
                  <input
                    type="text"
                    placeholder="Contact Person Designation"
                    name="personOfContactDesignation"
                    onChange={registerDataChange}
                  />

                  <input
                    type="submit"
                    value="Register"
                    className="collegeSignUpForm signUpBtn"
                  />
                  <h2 className="redirect_text">
                    Already have an account? <Link to="/login">Sign In</Link>
                  </h2>
                </form>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default Register;
