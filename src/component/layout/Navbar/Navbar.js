import React from 'react'
import './Navbar.css'
import { Link } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/userAction';
import { ToastContainer, toast } from "react-toastify";
// import { IoHomeOutline } from "react-icons/io5";
// import { LiaBookSolid } from "react-icons/lia";
// import { HiOutlineUserCircle } from "react-icons/hi";
// import { IoLogOutOutline } from "react-icons/io5";

const Navbar = () => {
    const dispatch = useDispatch()

    const handleLogOut = () => {
        dispatch(logout())
        toast.success("Logout Successfully")
    }
    return (
        <>
            <div className='dashboardNav_container'>
                <Link to='/'><div className='nav_logo'></div></Link>
                {/* <div className='user_icon'></div> */}
                <div className="nav_right">
                    <Link className='nav_link_parent' to='/dashboard'>
                        {/* <IoHomeOutline className='nav_link_icon' /> */}
                        <span className='nav_link_text'>Home</span>
                    </Link>

                    {/* <Link className='nav_link_parent' to='/all-courses'>
                        <LiaBookSolid className='nav_link_icon' />
                        <span className='nav_link_text'>All Courses</span>
                    </Link> */}

                    {/* <Link className='nav_link_parent' to='/profile'> */}
                        {/* <HiOutlineUserCircle className='nav_link_icon'/> */}
                        {/* <span className='nav_link_text'>Profile</span> */}
                    {/* </Link> */}

                    <Link className='nav_link_parent' onClick={handleLogOut}>
                        {/* <IoLogOutOutline className='nav_link_icon' /> */}
                        <span className='nav_link_text'>Log Out</span>
                    </Link>
                </div>
            </div>
            <ToastContainer style={{ fontSize: "1.35rem" }} />
        </>
    )
}

export default Navbar
