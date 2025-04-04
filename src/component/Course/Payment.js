import React, { useEffect, useState } from 'react'
import './Payment.css'
import Navbar from '../layout/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { getPaymentDataAction, paymentDataAction } from '../../actions/courseAction'
import paymentImg from './Qr_code.jpg'
import Whatsapp from './WhatsApp_qr.jpg'
import Loader from '../layout/Loader/Loader'

const Payment = () => {
    const dispatch = useDispatch()
    const { batchId, courseName, coursePrice } = useParams()

    const { loading, user } = useSelector((state) => state.user)
    const { getPaymentData } = useSelector((state) => state.payment)
    console.log(user)

    const [transaction, setTranscation] = useState({
        courseName,
        coursePrice,
        batchId: batchId,
        transactionId: ""
    })
    const [enrolled, setEnrolled] = useState(false)
    console.log(enrolled)
    const submitPayment = (e) => {
        e.preventDefault()
        dispatch(paymentDataAction(transaction))
        setEnrolled(true)
    }

    const transactionChangeHandler = (e) => {
        console.log(e.target.value)
        e.preventDefault()
        setTranscation({ ...transaction, [e.target.name]: e.target.value })
    }
    useEffect(() => {
        dispatch(getPaymentDataAction({ batchId }))
    }, [batchId, dispatch])

    useEffect(() => {
        if (getPaymentData?.CourseData.length > 0) {
            setEnrolled(true)
        }
    }, [getPaymentData?.CourseData.length])

    return (
        <>
            {loading ? <Loader /> : (
                <>
                    <Navbar />
                    <div className='payment_container'>
                        {/* <h1>Payment</h1> */}
                        {user && <div className='payment_left'>
                            <h1 className='payment_heading'>Payment Page</h1>

                            <h1 className='payment_user_heading'>Name</h1>
                            <h3 className='payment_user_subHeading'>{user.name}</h3>

                            <h1 className='payment_user_heading'>Email</h1>
                            <h3 className='payment_user_subHeading'>{user.email}</h3>

                            <h1 className='payment_user_heading'>Branch</h1>
                            <h3 className='payment_user_subHeading'>{user.branch.name}</h3>

                            <h1 className='payment_user_heading'>Semester</h1>
                            <h3 className='payment_user_subHeading'>{user.semester}</h3>

                            <h1 className='payment_user_heading'>College</h1>
                            <h3 className='payment_user_subHeading'>{user.college.name}</h3>

                            <h1 className='payment_user_heading'>Course Name</h1>
                            <h3 className='payment_user_subHeading'>{courseName}</h3>

                            <h1 className='payment_user_heading'>Course Price</h1>
                            <h3 className='payment_user_subHeading'>{coursePrice}</h3>

                            <p className='payment_para'>Please enter the Transaction ID/ UTR after payment</p>
                            <p className='payment_para'>Under 24 hours of payment you will get enrolled in your course</p>

                            {enrolled ? <h1 className='payment_para'>Thank you submitting the transaction id You will be enrolled in the course once your payment is verified (usually takes 2-3 working days days) Join the WhatsApp group by scanning the QR code Send the screenshot of payment details in WhatsApp group for confirmation</h1> : (<form onSubmit={submitPayment} encType='multipart/form-data'>
                                <input
                                    type='text'
                                    placeholder='Transaction ID/UTR'
                                    name='transactionId'
                                    value={transaction.transactionId}
                                    onChange={transactionChangeHandler}
                                />

                                <input type='submit' />
                            </form>)}
                        </div>}
                        <div className='payment_right' style={enrolled ? { backgroundImage: `url('${Whatsapp}')` } : { backgroundImage: `url('${paymentImg}')` }}>
                            <div className='qr_code_image'></div>
                        </div>
                    </div>
                </>
            )}
        </>
    )
}

export default Payment
