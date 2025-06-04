import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../../actions/userAction';
import { ToastContainer, toast } from "react-toastify";
// import { IoHomeOutline } from "react-icons/io5";
// import { LiaBookSolid } from "react-icons/lia";
// import { HiOutlineUserCircle } from "react-icons/hi";
// import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector((state) => state.user);
    console.log(isAuthenticated)

    const handleLogOut = () => {
        dispatch(logout())
        toast.success("Logout Successfully")
    }
    return (
        <>
            <div className='dashboardNav_container'>
                <Link to='/'><div className='logo'></div></Link>

                <div className="nav_right">
                    <Link className='btnOne auth_btn' to='/dashboard'>
                        Dashboard
                    </Link>

                    <Link
                        className="btnTwo auth_btn"
                        onClick={handleLogOut}
                    >
                        Log Out
                    </Link>
                </div>
            </div>
            <ToastContainer style={{ fontSize: "1.35rem" }} />
        </>
    )
}

export default Navbar
