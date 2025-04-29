import React from 'react'
import './MyCourseCard.css'
import { useSelector } from 'react-redux'
import Gai from '../images/GAI.jpg'
import CourseData from '../../Data/MyCourseData'

const MyCourseCard = ({ data }) => {
  const { sso } = useSelector((state) => state.SSO)
  const { report_data } = useSelector((state) => state.myCourse)

  const course_progress = report_data && report_data.filter((elm) => elm.courseName === data.course_name)
  console.log(course_progress)

  let percentage;
  let taskSubmitted;
  let totalTasks;
  let topicCompleted;
  let totalTopics;
  let position;
  let totalStudent;

  course_progress && course_progress.forEach((elm) => {
    percentage = elm.progressPercentage
    taskSubmitted = elm.completedTask
    totalTasks = elm.totalTask
    topicCompleted = elm.completedTopics
    totalTopics = elm.totalTopics
    position = elm.studentPosition
    totalStudent = elm.totalStudent
  })

  const filterImage = CourseData.filter((elm) => {
    return elm.batch_id === data.external_batch_id
  })

  const image = filterImage.length > 0 ? filterImage[0].image_url : Gai

  const handleEnroll = () => {
    window.location.href = `${sso}&external_batch_id=${data.external_batch_id}`
    // &external_batch_id=GAIBME2401
    // console.log(`${sso}&external_batch_id=${data.external_batch_id}`)
  }
  // percentage = 10

  return (
    <>
      <div
        // to={course_page_url}
        // style={{ height: "30rem" }}
        className='course_card courseCard_container'
      >
        <div
          style={{
            backgroundImage: `url(${image})`, height: "10rem"
          }}
          className='course_card_img'
        ></div>
        <div className='courseContent_box'>
          <h1 className="course_name">{data?.course_name}</h1>
          <div className='courseProgress_box'>
            <h1 className='course_percentage'>{percentage}%</h1>
            <progress value={percentage} max="100">{percentage}%</progress>
          </div>

          <div className='reportData_box'>
            <h1>Tasks Submitted</h1>
            <h2><span>{taskSubmitted}</span>/ {totalTasks}</h2>
          </div>
          
          <div className='reportData_box'>
            <h1>Topics Completed</h1>
            <h2><span>{topicCompleted}</span>/ {totalTopics}</h2>
          </div>

          <div className='reportData_box'>
            <h1>Position</h1>
            <h2><span>{position}</span>/ {totalStudent}</h2>
          </div>

          {data.external_batch_id ? <button className='enroll_button' onClick={handleEnroll}>Resume</button> : null}
        </div>
      </div>
    </>
  )
}

export default MyCourseCard
