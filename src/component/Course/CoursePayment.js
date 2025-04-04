import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { coursePaymentAction, coursePaymentStatusAction } from '../../actions/courseAction'

const CoursePayment = () => {
    const { batchId, courseName, coursePrice } = useParams()
    const dispatch = useDispatch()
    const { coursePayment, coursePaymentStatus } = useSelector((state) => state.payment)
    console.log(coursePaymentStatus)
    const [transaction, setTranscation] = useState({
            courseName,
            coursePrice,
            batchId: batchId,
        })
        console.log(setTranscation)
    const tokenUrl = coursePayment?.response.redirectUrl
    console.log(coursePayment)

    if (coursePayment) {
        console.log(tokenUrl)
        window.PhonePeCheckout.transact({
            tokenUrl,
            type: "IFRAME",
            callback: (response) => {
                if (response === "USER_CANCEL") {
                    console.log("Transaction Cancelled");
                } else if (response === "CONCLUDED") {
                    dispatch(coursePaymentStatusAction(coursePayment.merchantOrderId))
                    console.log("Transaction Completed");
                }
            },
        });
    }

    const handlePayment = () => {
        dispatch(coursePaymentAction(transaction))
    }
    return (
        <div>
            <button onClick={handlePayment}>Pay</button>
        </div>
    )
}

export default CoursePayment
