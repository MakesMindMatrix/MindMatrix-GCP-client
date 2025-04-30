import React from 'react'
import './RecCard.css'
// import Gai from '../images/GAI.jpg'
import { FaRegCalendarMinus } from "react-icons/fa";

const RecCard = ({ data, setConfirmModal, setEnrollCourseData, enrollCourseData, setPaymentModal, setPaymentCourseData }) => {
    // console.log(data)
    const handleEnroll = () => {
        if (data.batch_price > 0) {
            setPaymentCourseData({
                batch_id: data.external_batch_id,
                course_name: data.course_name,
                batch_price: data.batch_price,
                description: data.course_description
            })
            setEnrollCourseData({ ...enrollCourseData, batch_id: data.external_batch_id })
            setPaymentModal(true)
            // navigate(`/payment/${data.external_batch_id}/${data.course_name}/${data.batch_price}`)
        } else {
            setConfirmModal(true)
            setEnrollCourseData({ ...enrollCourseData, batch_id: data.external_batch_id })
        }
    }

    const startDate = new Date(data.batch_start_date).toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric',
        year: 'numeric'
    })
    //   console.log(startDate)
    return (
        <>
            <div
                // to={course_page_url}
                // style={{ textDecoration: "none" }}
                className='course_card courseCard_container'
            >
                <div
                    style={{
                        backgroundImage: `url(${data?.image})`, height: "20rem"
                    }}
                    className='course_card_img'
                ></div>
                <div className='courseContent_box'>
                    <h1 className="course_name">{data?.course_name}</h1>
                    <p className='course_description'>{data?.course_description}</p>
                    <div className='courseDate_box'>
                        <FaRegCalendarMinus />
                        <h2>Starts on <span style={{color: '#4CBB90'}}>{startDate}</span></h2>
                    </div>

                    <div className='coursePrice_box'>
                        <h2>₹50</h2>
                        {data.external_batch_id ? <button className='enroll_button' onClick={handleEnroll}>Enroll now</button> : null}
                    </div>
                </div>
            </div>
        </>
    )
}
// external_batch_id

export default RecCard
