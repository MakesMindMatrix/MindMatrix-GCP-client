import React, { useEffect, useState } from 'react'
import './UserInterest.css'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getBranch, getCollege, getUniversity } from '../../actions/academicDataAction'
import { createUserInterestAction } from '../../actions/userAction'
import { toast } from "react-toastify";
import { IoMdCloseCircleOutline } from "react-icons/io";

const UserInterest = () => {
    const dispatch = useDispatch()
    const { collegeData, universityData, branchData } = useSelector((state) => state.academicData)
    const [isStudent, setIsStudent] = useState(true)
    const [showModal, setShowModal] = useState(false)
    // console.log(isStudent)
    const initialFormData = (isStudentValue) => ({
        name: "",
        email: "",
        phone: "",
        state: "",
        university: "",
        college: "",
        branch: "",
        specialization: "",
        admissionYear: "",
        isStudent: isStudentValue
    })
    const [formData, setFormData] = useState(initialFormData(true))
    console.log(formData)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        const countNum = (str) => str.replace(/\D/g, '').length;

        switch (true) {
            case !formData.name:
                return toast.warning("Please enter your name");

            case !formData.email:
                return toast.warning("Please enter your email");

            case !formData.phone:
                return toast.warning("Please enter your phone number");

            case countNum(formData.phone) < 10:
                return toast.warning("Phone number can't be less than 10 digits");

            case !formData.state:
                return toast.warning("Please select your state");

            case !formData.university:
                return toast.warning("Please select your university");

            case !formData.college:
                return toast.warning("Please select your college");

            case formData.isStudent && !formData.branch:
                return toast.warning("Please select your branch");

            case formData.isStudent && !formData.admissionYear:
                return toast.warning("Please enter your admission year");

            default:
                break;
        }
        console.log("Form Submitted")
        dispatch(createUserInterestAction(formData))
        setShowModal(true)
    }

    useEffect(() => {
        dispatch(getUniversity())
        dispatch(getBranch())

        if (formData.university) {
            dispatch(getCollege(formData.university))
        }
    }, [dispatch, formData.university])

    const state = ["Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"];
    const specialization = ['B.Tech.', 'B.A.', 'B.Com.', 'BCA', 'M.Tech.', 'M.A.']
    return (
        <>
            <div className='userInterest_container'>
                {/* Navbar */}
                <div className="navbar">
                    <Link to="/">
                        <div className="logo"></div>
                    </Link>
                    <div className="nav_right">

                        <Link
                            to="/register"
                            className="btnTwo auth_btn"
                        >
                            Sign Up
                        </Link>

                        <Link
                            to="/login"
                            className="btnOne auth_btn"
                        >
                            Login
                        </Link>
                    </div>
                </div>
                <div className='userInterest_submit_modal' style={showModal ? {display: "initial"} : {display: "none"}}>
                    <IoMdCloseCircleOutline className='icon' onClick={() => {setShowModal(false)}}/>
                    <h1>Thank You for showing interest. We will get back to you shortly</h1>
                    <button onClick={() => {
                        setFormData(initialFormData(formData.isStudent))
                    }}>Ok</button>
                </div>
                {/* User Interest Form */}
                <div className='userInterest_body'>
                    <div className='userInterest_body_left'></div>
                    {/* style={isStudent ? { height: "100vh" } : { height: "80vh" }} */}
                    <div className='userInterest_body_right'>
                        <form onSubmit={handleSubmit}>
                            <div className="toggle-switch">
                                <button
                                    type="button"
                                    className={`toggle-btn ${isStudent ? 'active-btn' : ''}`}
                                    onClick={() => {
                                        setIsStudent(true)
                                        setFormData(initialFormData(true))
                                    }}
                                >
                                    Student
                                </button>
                                <button
                                    type="button"
                                    className={`toggle-btn ${!isStudent ? 'active-btn' : ''}`}
                                    onClick={() => {
                                        setIsStudent(false)
                                        setFormData(initialFormData(false))
                                    }}
                                >
                                    College
                                </button>
                            </div>

                            <input type='text' placeholder='Name' name='name' value={formData.name} onChange={handleChange} />
                            <input type='email' placeholder='Email' name='email' value={formData.email} onChange={handleChange} />
                            <input type='number' placeholder='Phone Number' name='phone' value={formData.phone} onChange={handleChange} />
                            <select name="state" value={formData.state} onChange={handleChange}>
                                <option value="">select State</option>
                                {state.map((elm, index) => {
                                    return <option key={index} value={elm}>{elm}</option>
                                })}
                            </select>

                            <select name="university" value={formData.university} onChange={handleChange}>
                                <option value="">select University</option>
                                {universityData?.data?.map((elm, index) => (
                                    <option value={elm._id} key={index}>{elm.name}</option>
                                ))}
                            </select>

                            <select name="college" value={formData.college} onChange={handleChange}>
                                <option value="">select College</option>
                                {collegeData?.map((elm, index) => (
                                    <option value={elm._id} key={index}>{elm.name}</option>
                                ))}
                            </select>

                            {isStudent ? <div>
                                <select name="branch" value={formData.branch} onChange={handleChange}>
                                    <option value="">select Branch</option>
                                    {branchData?.data?.map((elm, index) => (
                                        <option value={elm._id} key={index}>{elm.name}</option>
                                    ))}
                                </select>

                                <select name="specialization" value={formData.specialization} onChange={handleChange}>
                                    <option value="">select Specialization</option>
                                    {specialization.map((elm, index) => {
                                        return <option key={index} value={elm}>{elm}</option>
                                    })}
                                </select>

                                <input type='number' placeholder='College admission year' name='admissionYear' value={formData.admissionYear} onChange={handleChange} />
                            </div> : null}
                            <input type='submit' value="Submit" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserInterest

// name
// email
// phone
// state
// University
// College
// Which Specialisation you belong to ? (dropdown- B.Tech, B.A., B.Com. BCA, M.Tech . M.A.)
// Which Branch you belong to ? ( Dropdown -  Mechanical , Civil , Computer Science, )
// Your College Admission Year ?