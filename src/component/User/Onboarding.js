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
import { toast } from "react-toastify";
import EmailVerification from './EmailVerification';
import AuthLeft from './AuthLeft/AuthLeft';

const Onboarding = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { loading: loadingProfile, isUpdated, error } = useSelector((state) => state.profile)
    const { loading: lodingUser, user } = useSelector((state) => state.user)
    const { loading, collegeData, universityData, branchData } = useSelector((state) => state.academicData)
    const { loading: loadingVerify, codeVerified } = useSelector((state) => state.verification)

    // console.log(branchData, universityData, collegeData)

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
        const { name, value } = e.target;

        if (name === "phone") {
          // Remove non-digits and limit to 10 characters
          const digits = value.replace(/\D/g, '').slice(0, 10);
          setUpdateData(prev => ({ ...prev, [name]: digits }));
        } else {
          // Handle other fields normally
          setUpdateData(prev => ({ ...prev, [name]: value }));
        }
    }

    const countNum = (num) => {
        return String(num).split('').reduce(
            (count, digit) => count + 1, 0
        )
    }
    // console.log(user)
    const onboardingSubmit = async (e) => {
        e.preventDefault();

        // if (user.isverified) {
        switch (true) {
            case !phone:
                return toast.warning("Please fill the phone field before submit");

            case countNum(phone) < 10:
                return toast.warning("Phone number can't be less than 10 digits")    

            case !university:
                return toast.warning(
                    "Please select the university field before submit"
                );

            case !college:
                return toast.warning("Please select the college field before submit");

            case !roll_no:
                return toast.warning("Please fill the USN No field before submit");

            case !branch:
                return toast.warning("Please select the branch field before submit");

            case !semester:
                return toast.warning("Please select the semester field before submit");

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
        // console.log(result)
        // }
    }

    const sendCodeHandler = async (e) => {
        e.preventDefault()

        setShowModal(true)
        const result = await dispatch(sendVerificationCode({
            email: user.email,
            secretCode: user.secret,
            name: user.name
        }))
        if(result?.success === true){
            toast.success(result.message)
        } else {
            console.log(result)
        }
    }

    useEffect(() => {
        if (
            user?.isverified &&
            user?.phone 
        ) {
            navigate('/dashboard');
            return;
        }

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
            // toast.success("Email verified successfully")
        }
        // console.log(isUpdated?.user?.phone, isUpdated?.success)
        if (isUpdated?.user?.phone && isUpdated?.success) {
            // console.log("came inside")
            navigate('/dashboard')
        }
    }, [dispatch, error, isUpdated, navigate, university, codeVerified, user?.isverified, user?.phone])
    return (
        <>
            {loading && loadingProfile && lodingUser && loadingVerify ? <Loader /> : (
                <>
                    <div className='login_container'>
                        <EmailVerification
                            showModal={showModal}
                            setShowModal={setShowModal}
                            user={user}
                        />
                        <div className='login_left'>
                            <AuthLeft />
                        </div>
                        <div className='login_right'>
                            <form
                                className='signUpForm'
                                encType='multipart/form-data'
                                onSubmit={onboardingSubmit}
                                noValidate
                            >
                                <Link to="/">
                                    <div className='register_logo'></div>
                                </Link>
                                <div className='signUpEmail verify_parent'>
                                    <MdOutlineMail />
                                    <input
                                        type='text'
                                        placeholder={user?.email}
                                        name='email'
                                        value={user?.email}
                                        disabled
                                    />
                                    {/* <button onClick={sendCodeHandler} className="verify_btn"> */}
                                    {showForm ? <h1 className="verify_btn">Verified</h1> : <button className="verify_btn" onClick={sendCodeHandler}>Verify</button>}
                                    {/* </button> */}
                                </div>

                                {showForm ? (
                                    <>
                                        <div className='signUpEmail'>
                                            <FiSmartphone />
                                            <input
                                                type='text'
                                                placeholder='Phone'
                                                required
                                                name='phone'
                                                value={phone}
                                                onChange={registerDataChange}
                                                maxLength={10}
                                                inputMode='numeric'
                                                pattern='\d{10}'
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
                                        <input type='submit' value="Go to my Dashboard" className='signUpBtn' />
                                    </>
                                ) : ""}
                                {/* <h2>Do you have an account?<Link to='/login'>Sign In</Link></h2> */}
                            </form>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Onboarding;
