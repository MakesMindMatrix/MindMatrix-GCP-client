import React from 'react'
import { Link } from "react-router-dom";
import './AdminNavbar.css'
import { useDispatch } from 'react-redux';
import { logout } from '../../../actions/userAction';
import { ToastContainer, toast } from "react-toastify";

const AdminNavbar = () => {
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(logout())
        toast.success("Logout Successfully")
    }

    // useEffect(() => {
    // }, [])

    return (
        <>
            <div className="sidebar">
                <h2>MinMatrix Admin</h2>
                <div className='adminNavbar_links'>
                    <Link className='adminNavbar_link' to='/admin-dashboard'>Dashboard</Link>
                    <Link className='adminNavbar_link' to='/admin-dashboard/users'>Users</Link>
                    <Link className='adminNavbar_link' to='/admin-dashboard/academic'>Academic</Link>
                    <Link className='adminNavbar_link' to='/admin-dashboard/course'>Course</Link>
                    <Link className='adminNavbar_link' to='/admin-dashboard/payment'>Payment</Link>
                    <button className='adminNavbar_link' onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <ToastContainer style={{ fontSize: "1.35rem" }} />
        </>
    )
}

export default AdminNavbar
