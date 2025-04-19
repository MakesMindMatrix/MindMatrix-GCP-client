import React from 'react'
import './RecCard.css'
// import Gai from '../images/GAI.jpg'

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
    return (
        <>
            <div
                // to={course_page_url}
                // style={{ textDecoration: "none" }}
                className='course_card courseCard_container'
            >
                <div
                    style={{
                        backgroundImage: `url(${data?.image})`,
                    }}
                    className='course_card_img'
                ></div>
                <h1 className="course_name">{data?.course_name}</h1>
                {data.external_batch_id ? <button className='enroll_button' onClick={handleEnroll}>Enroll now</button> : null}
            </div>
        </>
    )
}
// external_batch_id

export default RecCard
