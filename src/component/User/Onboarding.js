import React, { useState, useEffect } from 'react'
import './Onboarding.css'
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineMail } from "react-icons/md";
import { FiSmartphone } from "react-icons/fi";
import { LiaUniversitySolid } from "react-icons/lia";
import { PiBuildingApartment } from "react-icons/pi";
import { GoNorthStar } from "react-icons/go";
import { IoGitBranchOutline } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { clearErrors, sendVerificationCode, updateUser } from '../../actions/userAction';
import { getBranch, getCollege, getUniversity } from '../../actions/academicDataAction';
import Loader from '../layout/Loader/Loader'
import { ToastContainer, toast } from "react-toastify";
import EmailVerification from './EmailVerification';

const Onboarding = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { loading: loadingProfile ,isUpdated, error } = useSelector((state) => state.profile)
    const { loading: lodingUser, user } = useSelector((state) => state.user)
    const { loading, collegeData, universityData, branchData } = useSelector((state) => state.academicData)
    const { loading: loadingVerify, codeVerified } = useSelector((state) => state.verification)

    console.log(branchData, universityData, collegeData)

    const [updateData, setUpdateData] = useState({
        phone: "",
        university: "",
        college: "",
        branch: "",
        roll_no: "",
        semester: "",
    })
    const [showModal, setShowModal] = useState(false)
    const [showForm, setShowForm] = useState(user?.isverified)
    const { phone, university, college, branch, roll_no, semester } = updateData;
    const registerDataChange = (e) => {
        e.preventDefault();
        setUpdateData({ ...updateData, [e.target.name]: e.target.value })
    }
console.log(user)
    const onboardingSubmit = (e) => {
        e.preventDefault();

        // if (user.isverified) {
            switch (true) {
                case !phone:
                    return toast.warning("please fill the phone field before submit");

                case !university:
                    return toast.warning(
                        "please select the university field before submit"
                    );

                case !college:
                    return toast.warning("please select the college field before submit");

                case !roll_no:
                    return toast.warning("please fill the USN No field before submit");

                case !branch:
                    return toast.warning("please select the branch field before submit");

                case !semester:
                    return toast.warning("please select the semester field before submit");

                default:
                    break;
            }
            const myForm = new FormData()

            myForm.set("email", user.email)
            myForm.set("phone", phone)
            myForm.set("university", university)
            myForm.set("college", college)
            myForm.set("branch", branch)
            myForm.set("roll_no", roll_no)
            myForm.set("semester", semester)

            dispatch(updateUser(myForm))
        // }
    }

    const sendCodeHandler = (e) => {
        e.preventDefault()

        setShowModal(true)
        dispatch(sendVerificationCode({
            email: user.email,
            secretCode: user.secret,
            name: user.name
        }))
    }

    useEffect(() => {
        if (error) {
            alert(error)
            console.log("Error", error)
            dispatch(clearErrors())
        }

        dispatch(getUniversity())
        dispatch(getBranch())

        if (university) {
            dispatch(getCollege(university))
        }
        if (codeVerified) {
            setShowForm(true)
            toast.success("Email verified successfully")
        }

        if (isUpdated?.user?.phone && isUpdated?.success) {
            navigate('/dashboard')
        }
    }, [dispatch, error, isUpdated, navigate, university, codeVerified])
    return (
        <>
            {loading && loadingProfile && lodingUser && loadingVerify? <Loader /> : (
                <>
                    <div className='onboarding_container'>
                        <EmailVerification
                            showModal={showModal}
                            setShowModal={setShowModal}
                            user={user}
                        />
                        <div className='onboarding_left'></div>
                        <div className='onboarding_right'>
                            <form
                                className='signUpForm'
                                encType='multipart/form-data'
                                onSubmit={onboardingSubmit}
                                noValidate
                            >
                                <div className='register_logo'></div>
                                <div className='signUpEmail verify_parent'>
                                    <MdOutlineMail />
                                    <input
                                        type='text'
                                        placeholder={user?.email}
                                        name='email'
                                        value={user?.email}
                                        disabled
                                    />
                                    <button onClick={sendCodeHandler} className="verify_btn">{showForm ? "verified" : "verify"}</button>
                                </div>

                                {showForm ? (
                                    <>
                                        <div className='signUpEmail'>
                                            <FiSmartphone />
                                            <input
                                                type='number'
                                                placeholder='Phone'
                                                required
                                                name='phone'
                                                value={phone}
                                                onChange={registerDataChange}
                                            />
                                        </div>

                                        <div className='signUpEmail'>
                                            <LiaUniversitySolid />
                                            <select
                                                name="university"
                                                id="university"
                                                value={university}
                                                onChange={registerDataChange}
                                            >
                                                <option value="university">Choose University</option>
                                                {universityData?.data?.map((elm, index) => (
                                                    <option value={elm._id} key={index}>{elm.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className='signUpEmail'>
                                            <PiBuildingApartment />
                                            <select
                                                name="college"
                                                id="college"
                                                value={college}
                                                onChange={registerDataChange}
                                            >
                                                <option value="college">Choose College</option>
                                                {collegeData?.map((elm, index) => (
                                                    <option value={elm._id} key={index}>{elm.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className='signUpEmail'>
                                            <GoNorthStar />
                                            <input
                                                type='text'
                                                placeholder='USN Number'
                                                required
                                                name='roll_no'
                                                value={roll_no}
                                                onChange={registerDataChange}
                                            />
                                        </div>

                                        <div className='signUpEmail'>
                                            <IoGitBranchOutline />
                                            <select
                                                name="branch"
                                                id="branch"
                                                value={branch}
                                                onChange={registerDataChange}
                                            >
                                                <option value="university">Choose Branch</option>
                                                {branchData?.data?.map((elm, index) => (
                                                    <option value={elm._id} key={index}>{elm.name}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div className='signUpEmail'>
                                            <FaGraduationCap />
                                            <select
                                                name="semester"
                                                id="semester"
                                                value={semester}
                                                onChange={registerDataChange}
                                            >
                                                <option value="university">Choose Semester</option>

                                                <option value="1">First</option>
                                                <option value="2">Second</option>
                                                <option value="3">Third</option>
                                                <option value="4">Fourth</option>
                                                <option value="5">Fifth</option>
                                                <option value="6">Sixth</option>
                                                <option value="7">Seventh</option>
                                                <option value="8">Eighth</option>
                                            </select>
                                        </div>
                                    </>
                                ) : ""}

                                <input type='submit' value="Register" className='signUpBtn' />
                                <h2>Do you have an account?<Link to='/login'>Sign In</Link></h2>
                            </form>
                        </div>
                    </div>
                    <ToastContainer style={{ fontSize: "1.35rem" }} />
                </>
            )}
        </>
    )
}

export default Onboarding;
