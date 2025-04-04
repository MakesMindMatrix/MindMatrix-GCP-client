import React from 'react'
import './EnrollModal.css'
// import { IoIosCloseCircleOutline } from "react-icons/io";

const EnrollModal = ({ showModal, setShowModal }) => {
    
    return (
        <>
            <div className='enrollModal_container' style={showModal ? { display: "flex" } : { display: "none" }}>
            <h1>Please enter the email of student</h1>
            </div>
        </>
    )
}

export default EnrollModal
