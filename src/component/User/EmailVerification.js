import React, { useState } from 'react'
import './EmailVerification.css'
import { IoIosCloseCircleOutline } from "react-icons/io";
import { useDispatch } from 'react-redux';
import { verifyCode } from '../../actions/userAction';
import { toast } from 'react-toastify';

const EmailVerification = ({ showModal, setShowModal, user }) => {
    const dispatch = useDispatch()
    const [verifyData, setVerifyData] = useState({
        email: "",
        secretCode: ""
    })

    const countNum = (num) => {
        return String(num).split('').reduce(
            (count, digit) => count + 1, 0
        )
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        if (countNum(verifyData.secretCode) > 6) {
            return toast.error("You can't enter more than 6 digit code")
        } else {
            const result = await dispatch(verifyCode(verifyData))
            setShowModal(false)
            
            if (result?.success === true) {
                toast.success(result.message)
            } else {
                toast.error(result.message)
            }
        }
    }

    const handleChangeData = (e) => {
        setVerifyData({ secretCode: e.target.value, email: user.email, })
    }
    return (
        <>
            <div
                className="verify_modal_container"
                style={showModal ? { display: "flex" } : { display: "none" }}
            >
                <div className="close_btn" onClick={() => setShowModal(false)}>
                    <IoIosCloseCircleOutline />
                </div>
                <h1 className="modal_heading">Verify your email address</h1>
                <p className="modal_para">
                    Please check your inbox for verification code sent to
                </p>
                <h3 className="modal_mail">{user?.email}</h3>
                <div className="inputBOx">
                    <input
                        type="number"
                        name="secretCode"
                        placeholder="Enter Code"
                        id="code"
                        // value={verifyUser.secretCode}
                        onChange={handleChangeData}
                        className="email_text"
                    />
                </div>
                <h3 className="modal_resend_code">
                    {/* Not received code?<button onClick={sendCodeHandler} style={{ border: "none", backgroundColor: "transparent" }}> Resend Code</button> */}
                </h3>
                <button
                    className="modal_btn"
                    onClick={handleSubmit}
                >
                    Verify
                </button>
            </div>
        </>
    )
}

export default EmailVerification
