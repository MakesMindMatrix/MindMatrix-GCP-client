import React from 'react'
import './PaymentVerification.css'
import Navbar from '../layout/Navbar/Navbar'
import { useSelector } from 'react-redux'
import paymentImg from '../Course/Qr_code.jpg'
import Whatsapp from '../Course/WhatsApp_qr.jpg'

const PaymentVerification = () => {
    // const dispatch = useDispatch()

    const { user} = useSelector((state) => state.user)

    const submitPayment = () => {

    }
    return (
        <>
            <div className='PaymentVerification_container'>
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

                        {/* <h1 className='payment_user_heading'>Course Name</h1>
                        <h3 className='payment_user_subHeading'>{courseName}</h3>

                        <h1 className='payment_user_heading'>Course Price</h1>
                        <h3 className='payment_user_subHeading'>{coursePrice}</h3> */}

                        <p className='payment_para'>Please enter the Transaction ID/ UTR after payment</p>
                        <p className='payment_para'>Under 24 hours of payment you will get enrolled in your course</p>

                        {user ? <h1 className='payment_para'>Thank you submitting the transaction id You will be enrolled in the course once your payment is verified (usually takes 2-3 working days days) Join the WhatsApp group by scanning the QR code Send the screenshot of payment details in WhatsApp group for confirmation</h1> : (<form onSubmit={submitPayment} encType='multipart/form-data'>
                            <input
                                type='text'
                                placeholder='Transaction ID/UTR'
                                name='transactionId'
                                // value={transaction.transactionId}
                                // onChange={transactionChangeHandler}
                            />

                            <input type='submit' />
                        </form>)}
                    </div>}
                    <div className='payment_right' style={user ? { backgroundImage: `url('${Whatsapp}')` } : { backgroundImage: `url('${paymentImg}')` }}>
                        <div className='qr_code_image'></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentVerification
