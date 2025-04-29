import React, { useEffect, useState } from 'react'
import './MyCourseCard.css'
import { useSelector } from 'react-redux'
import axios from 'axios'
const BASE_URL=process.env.REACT_APP_BACKEND_URL

const MyCourseCard = ({ data }) => {
  const { sso } = useSelector((state) => state.SSO)
  const { report_data } = useSelector((state) => state.myCourse)
 
  const [courseInfo,setCourseInfo] = useState(null);
  const course_progress = report_data && report_data.filter((elm) => elm.courseName === data.course_name)

  let percentage;
  course_progress && course_progress.map((elm ) => percentage = elm.progressPercentage)

  useEffect(() => {
    const fetchCourseInfo = async () => {
      try {
        const response = await axios.get(`${BASE_URL}/api/v1/course-info/${data.external_batch_id}`, {
          headers: { "Content-Type": "application/json" },
        });
        setCourseInfo(response.data.CourseInfo);
      } catch (error) {
        setCourseInfo(null);
      }
    };
    fetchCourseInfo();
  }, [data.external_batch_id]);

  console.log("Fetched course :", data.external_batch_id, courseInfo?.course_card_image);
  const image = courseInfo?.course_card_image || "https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg";

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
