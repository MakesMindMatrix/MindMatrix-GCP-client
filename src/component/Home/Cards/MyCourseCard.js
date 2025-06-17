import React, { useEffect, useState } from "react";
import "./MyCourseCard.css";
import { useSelector } from "react-redux";
import axios from "axios";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import CertificateIcon from "./certificate_program_icon.svg";

const BASE_URL = process.env.REACT_APP_BACKEND_URL;

const MyCourseCard = ({ data }) => {
  const { sso } = useSelector((state) => state.SSO);
  const { report_data } = useSelector((state) => state.myCourse);

  const [courseInfo, setCourseInfo] = useState(null);
  const course_progress =
    report_data &&
    report_data.filter((elm) => elm.courseName === data.course_name);
  // console.log(course_progress)

  let percentage;
  let taskSubmitted;
  let totalTasks;
  let topicCompleted;
  let totalTopics;
  let position;
  let totalStudent;

  course_progress &&
    course_progress.forEach((elm) => {
      percentage = elm.progressPercentage;
      taskSubmitted = elm.completedTask;
      totalTasks = elm.totalTask;
      topicCompleted = elm.completedTopics;
      totalTopics = elm.totalTopics;
      position = elm.studentPosition;
      totalStudent = elm.totalStudent;
    });

  useEffect(() => {
    const fetchCourseInfo = async () => {
      try {
        const response = await axios.get(
          `${BASE_URL}/api/v1/course-info/${data.external_batch_id}`,
          {
            headers: { "Content-Type": "application/json" },
          }
        );
        setCourseInfo(response.data.CourseInfo);
      } catch (error) {
        setCourseInfo(null);
      }
    };
    fetchCourseInfo();
  }, [data.external_batch_id]);

  console.log(
    "Fetched course :",
    data.external_batch_id,
    courseInfo?.course_card_image
  );
  const image =
    courseInfo?.course_card_image ||
    "https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg";

  const handleEnroll = () => {
    window.location.href = `${sso}&external_batch_id=${data.external_batch_id}`;
    // &external_batch_id=GAIBME2401
    // console.log(`${sso}&external_batch_id=${data.external_batch_id}`)
  };

  return (
    <>
      <div
        // to={course_page_url}
        // style={{ height: "30rem" }}
        className="course_card courseCard_container"
      >
        <div
          style={{
            backgroundImage: `url(${image})`,
            height: "10rem",
          }}
          className="course_card_img"
        >
          <div className="badge-tag">
            <span className="badge-icon">
              <img
                src={CertificateIcon}
                alt="Certificate Icon"
                className="badge-icon-img"
              />
            </span>
            Certificate Program
          </div>
        </div>
        <div className="courseContent_box">
          <h1 className="course_name">{data?.course_name}</h1>
          <hr className="course-divider" />
          {/* <div className="courseProgress_box">
            <h1 className="course_percentage">{percentage}%</h1>
            <progress value={percentage} max="100">
              {percentage}%
            </progress>
          </div> */}
          {console.log("data Unenrolled", data)}
          <div className="course_progress_report">
            <div className="circular-progress-new">
              <svg viewBox="0 0 36 36" className="circular-chart">
                <path
                  className="circle-bg"
                  d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <path
                  className="circle"
                  strokeDasharray={`${percentage || 0}, 100`}
                  d="M18 2.0845
         a 15.9155 15.9155 0 0 1 0 31.831
         a 15.9155 15.9155 0 0 1 0 -31.831"
                />
                <text x="18" y="18" className="percentage-text">
                  {percentage || 0}%
                </text>
              </svg>
              <p className="progress-label">Completion Progress</p>
            </div>

            <div className="reportData_group">
              <div className="reportData_item">
                <h1>Tasks Submitted</h1>
                <h2>
                  <span className="green">{taskSubmitted}</span> / {totalTasks}
                </h2>
              </div>

              <div className="reportData_item">
                <h1>Topics Completed</h1>
                <h2>
                  <span className="blue">{topicCompleted}</span> / {totalTopics}
                </h2>
              </div>

              <div className="reportData_item">
                <h1>Position</h1>
                <h2>
                  <span className="orange">{position}</span> / {totalStudent}
                </h2>
              </div>
            </div>
          </div>

          {data.external_batch_id ? (
            <div className="enroll_button_wrapper">
              <button className="enroll_button" onClick={handleEnroll}>
                Resume
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default MyCourseCard;
