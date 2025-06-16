import React from "react";
import { useNavigate } from "react-router-dom";
import "./RecCard.css";
// import Gai from '../images/GAI.jpg'
import { FaRegCalendarMinus } from "react-icons/fa";
import CertificateIcon from "./certificate_program_icon.svg";
import OutlineBulletIcon from "./Course-Outline-Bullet-Icon.svg";

// const RecCard = ({ data, setConfirmModal, setEnrollCourseData, enrollCourseData, setPaymentModal, setPaymentCourseData }) => {
const RecCard = ({ data }) => {
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
      .replace(/ /g, "-")
      .replace(/[^\w-]+/g, "");

  const handleViewMore = () => {
    const courseSlug = slugify(data.course_name);
    console.log("Course URL: /courses/", courseSlug);
    navigate(`/courses/${courseSlug}`);
  };

  const startDate = new Date(data.batch_start_date).toLocaleDateString(
    "en-US",
    {
      month: "long",
      day: "numeric",
      year: "numeric",
    }
  );
  //   console.log(startDate)
  return (
    <>
      <div className="course_card courseCard_container">
        <div
          style={{
            backgroundImage: `url(${data?.image})`,
            height: "20rem",
          }}
          className="course_card_img"
        >
          {" "}
          <span className="badge-tag">
            {" "}
            <img
              src={CertificateIcon}
              alt="Certificate Icon"
              className="badge-icon-img"
            />{" "}
            Certificate Program
          </span>
        </div>
        <div className="courseContent_box">
          <h1 className="course_title">{data?.course_name}</h1>
          {/* <p className="course_description">{data?.course_description}</p> */}
          <hr className="title-divider" />
          <h2 className="section-heading">Course Outline</h2>
          <div className="course_outline">
            <p>
              <img
                src={OutlineBulletIcon}
                alt="bullet icon"
                className="outline-icon-img"
              />{" "}
              GenAI Fundamentals
            </p>
            <p>
              <img
                src={OutlineBulletIcon}
                alt="bullet icon"
                className="outline-icon-img"
              />{" "}
              GenAI Fundamentals
            </p>
            <p>
              <img
                src={OutlineBulletIcon}
                alt="bullet icon"
                className="outline-icon-img"
              />{" "}
              GenAI Fundamentals
            </p>
            <p>
              <img
                src={OutlineBulletIcon}
                alt="bullet icon"
                className="outline-icon-img"
              />{" "}
              GenAI Fundamentals
            </p>
          </div>
          <hr className="outline-divider" />
        </div>
        {console.log("cousre", data)}

        <div className="mentor_card">
          <h2 className="section-heading">Course Mentor</h2>
          <div className="mentor_info_box">
            <img
              className="mentor_photo"
              src={data?.mentor_image}
              alt="Mentor"
            />
            <div className="mentor_details">
              <p className="mentor_name">Aniket Kumar</p>
              <p className="mentor_position">
                Program Coordinator at{" "}
                <img
                  src={data?.mentor_company_logo}
                  alt="Logo"
                  className="mentor_company_logo"
                />
              </p>
            </div>
          </div>
        </div>

        <div className="courseDateprice_box">
          {/* <div className="coursePrice_box">
            <div className="price-top">
              <span className="original-price">
                ₹{(data?.batch_price / 0.9).toFixed(0)}
              </span>
              <span className="discount-tag">10% OFF</span>
            </div>
            <div className="discounted-price">₹{data?.batch_price}</div>
            {data.external_batch_id ? <button className='enroll_button' onClick={handleEnroll}>Enroll now</button> : null}
          </div> */}
          <div className="courseDate_box">
            <FaRegCalendarMinus />
            <h2>
              Starts on <span style={{ color: "#4CBB90" }}>{startDate}</span>
            </h2>
          </div>
          {/* <h1 className="course_name">{data?.course_name}</h1> */}
          <button className="view_button" onClick={handleViewMore}>
            Explore this Course
          </button>
        </div>

        {/* {data.external_batch_id ? <button className='enroll_button' onClick={handleEnroll}>Enroll now</button> : null} */}
      </div>
    </>
  );
};
// external_batch_id

export default RecCard;
