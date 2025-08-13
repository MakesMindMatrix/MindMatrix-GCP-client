import React from "react";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../actions/userAction";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
// import { IoHomeOutline } from "react-icons/io5";
// import { LiaBookSolid } from "react-icons/lia";
// import { HiOutlineUserCircle } from "react-icons/hi";
// import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
  const dispatch = useDispatch();
  // const { isAuthenticated } = useSelector((state) => state.user);
  // console.log(isAuthenticated)
  const location = useLocation();

  const handleLogOut = () => {
    dispatch(logout());
    toast.success("Logout Successfully");
  };
  const [showLogout, setShowLogout] = useState(false);

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };
  return (
    <>
      {/* <div className="dashboardNav_container">
        <Link to="/">
          <div className="logo"></div>
        </Link>

        <div className="nav_right">
          <Link className="btnOne auth_btn" to="/dashboard">
            Dashboard
          </Link>

          <Link className="btnTwo auth_btn" onClick={handleLogOut}>
            Log Out
          </Link>
        </div>
      </div>
      <ToastContainer style={{ fontSize: "1.35rem" }} /> */}

      <div className="dashboardNav_container">
        <Link to="/">
          <div className="nav_logo"></div>
        </Link>

        {/* Middle tab section */}
        <div className="nav-buttons">
          <Link
            to="/DashboardMindmatrix"
            className={`auth_btn_ btnOne_ ${location.pathname === "/DashboardMindmatrix" ? "active_tab" : ""
              }`}
          >
            Dashboard
          </Link>

          <Link
            to="/dashboard"
            className={`auth_btn_ btnOne_ ${location.pathname === "/dashboard" ? "active_tab" : ""
              }`}
          >
            My Programs
          </Link>

          <Link
            to="/explore-memberships"
            className={`auth_btn_ btnOne_ ${location.pathname === "/explore-memberships" ? "active_tab" : ""
              }`}
          >
            My Subscription
          </Link>

          <Link
            to="/hackathone-2025"
            className={`auth_btn_ btnOne_ ${location.pathname === "/hackathone-2025" ? "active_tab" : ""
              }`}
          >
            Hackathone
          </Link>
        </div>
        {/* Profile Icon + Dropdown */}
        <div className="profile_dropdown">
          <div className="profile_icon" onClick={toggleLogout}></div>

          {showLogout && (
            <button
              className="auth_btn btnTwo_ logout_btn"
              onClick={handleLogOut}
            >
              Log Out
            </button>
          )}
        </div>
      </div>

      <ToastContainer style={{ fontSize: "1.35rem" }} />
    </>
  );
};

export default Navbar;
