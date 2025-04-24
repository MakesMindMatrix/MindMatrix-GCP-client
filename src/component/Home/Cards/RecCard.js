import React from 'react'
import { useNavigate } from 'react-router-dom'
import './RecCard.css'
// import Gai from '../images/GAI.jpg'

// const RecCard = ({ data, setConfirmModal, setEnrollCourseData, enrollCourseData, setPaymentModal, setPaymentCourseData }) => {
const RecCard = ({ data}) => {

    // console.log(data)
    // const handleEnroll = () => {
    //     if (data.batch_price > 0) {
    //         setPaymentCourseData({
    //             batch_id: data.external_batch_id,
    //             course_name: data.course_name,
    //             batch_price: data.batch_price,
    //             description: data.course_description
    //         })
    //         setEnrollCourseData({ ...enrollCourseData, batch_id: data.external_batch_id })
    //         setPaymentModal(true)
    //         // navigate(`/payment/${data.external_batch_id}/${data.course_name}/${data.batch_price}`)
    //     } else {
    //         setConfirmModal(true)
    //         setEnrollCourseData({ ...enrollCourseData, batch_id: data.external_batch_id })
    //     }
    // }

    const navigate = useNavigate();
    const slugify = (str) =>
        str
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

    const handleViewMore = () => {
        const courseSlug = slugify(data.course_name);
        console.log("Course URL: /courses/", courseSlug);
        navigate(`/courses/${courseSlug}`);
    }
        
    return (
        <>
            <div className='course_card courseCard_container'>
                <div
                    style={{
                        backgroundImage: `url(${data?.image})`,
                    }}
                    className='course_card_img'
                ></div>
                <h1 className="course_name">{data?.course_name}</h1>
                <button className='view_button' onClick={handleViewMore}>
                    View more
                </button>
                {/* {data.external_batch_id ? <button className='enroll_button' onClick={handleEnroll}>Enroll now</button> : null} */}
            </div>
        </>
    )
}
// external_batch_id

export default RecCard
