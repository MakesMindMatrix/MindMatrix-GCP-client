import React from 'react'
import './MyCourseCard.css'
import { useSelector } from 'react-redux'
import CourseData from '../../Data/MyCourseData'

const MyCourseCard = ({ data }) => {
  const { sso } = useSelector((state) => state.SSO)
  const { report_data } = useSelector((state) => state.myCourse)
 
  const course_progress = report_data && report_data.filter((elm) => elm.courseName === data.course_name)

  let percentage;
  course_progress && course_progress.map((elm ) => percentage = elm.progressPercentage)

  const filterImage = CourseData.filter((elm) => {
    return elm.batch_id === data.external_batch_id
  })

  const image = filterImage.length > 0 ? filterImage[0].image_url : "https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg"

  const handleEnroll = () => {
    window.location.href = `${sso}&external_batch_id=${data.external_batch_id}`
    // &external_batch_id=GAIBME2401
    // console.log(`${sso}&external_batch_id=${data.external_batch_id}`)
  }
  return (
    <>
      <div
        // to={course_page_url}
        style={{ height: "30rem" }}
        className='course_card courseCard_container'
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
          }}
          className='course_card_img'
        ></div>
        <h1 className="course_name">{data?.course_name}</h1>
        <h1 className='course_percentage'>Course Progress - {percentage} %</h1>
        {data.external_batch_id ? <button className='enroll_button' onClick={handleEnroll}>Resume now</button> : null}
      </div>
    </>
  )
}

export default MyCourseCard
