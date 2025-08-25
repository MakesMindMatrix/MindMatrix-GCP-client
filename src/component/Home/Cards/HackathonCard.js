import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
import "./HackathonCard.css";
// import Gai from '../images/GAI.jpg'
// import { FaRegCalendarMinus } from "react-icons/fa";
// import CertificateIcon from "./certificate_program_icon.svg";
import OutlineBulletIcon from "./Course-Outline-Bullet-Icon.svg";
import RegistrationForm from "../RegistrationForm";

// const RecCard = ({ data, setConfirmModal, setEnrollCourseData, enrollCourseData, setPaymentModal, setPaymentCourseData }) => {
const HackathonCard = ({ data }) => {
  console.log(data)
  const [ isOpen, setIsOpen] = useState(false);
  const [ selectedProblem, setSelectedProblem ] = useState(null);
  const handleOpen = () => setIsOpen(true);
  const handleClose = () => setIsOpen(false);
  // const navigate = useNavigate();
  // const slugify = (str) =>
  //   str
  //     .toLowerCase()
  //     .replace(/ /g, "-")
  //     .replace(/[^\w-]+/g, "");

  const handleProblemSelect = (data) => {

    setSelectedProblem(data);
    //Open registration form
    handleOpen();
    // Send data.course_name , data.course_description for pre-fill

    //After registration -> save data into DB , Send email to all members & navigate to course landing page

  };

  // const startDate = new Date(data.batch_start_date).toLocaleDateString(
  //   "en-US",
  //   {
  //     month: "long",
  //     day: "numeric",
  //     year: "numeric",
  //   }
  // );
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
          {/* <span className="hackathon-badge-tag"> */}
            {" "}
            {/* <img
              src={CertificateIcon}
              alt="Certificate Icon"
              className="badge-icon-img"
            />{" "} */}
            {/* {data?.courseType}
          </span> */}
        </div>
        <div className="courseContent_box">
          <h1 className="course_title">{data?.course_name}</h1>
          {/* <p className="course_description">{data?.course_description}</p> */}
          <hr className="title-divider" />
          <h2 className="section-heading">Course Outline</h2>
          <div className="course_outline">
            {data.courseOutline.map((elm, index) => {
              return <p key={index}>
                <img
                  src={OutlineBulletIcon}
                  alt="bullet icon"
                  className="outline-icon-img"
                />{" "}
                {elm}
              </p>
            })}
          </div>
          <hr className="outline-divider" />
        </div>
        {/* {console.log("cousre", data)} */}

        <div className="mentor_card">
          <h2 className="section-heading">Course Mentor</h2>
          <div className="mentor_info_box">
            <img
              className="mentor_photo"
              src={data?.instructor_section?.instructor_image}
              alt="Mentor"
            />
            <div className="mentor_details">
              <p className="mentor_name">{data?.instructor_section?.instructor_name}</p>
              <p className="mentor_position">
                {data?.instructor_section?.instructor_designation}{" "}
                {/* <img
                  src={data?.mentor_company_logo}
                  alt="Logo"
                  className="mentor_company_logo"
                /> */}
              </p>
            </div>
          </div>
        </div>

        {/* <div className="courseDateprice_box"> */}
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
          {/* <div className="courseDate_box">
            <FaRegCalendarMinus />
            <h2>
              Starts on <span style={{ color: "#4CBB90" }}>{startDate}</span>
            </h2>
          </div> */}
          {/* <h1 className="course_name">{data?.course_name}</h1> */}
          {/* <button className="view_button" onClick={handleViewMore}>
            Explore this Course
          </button> */}
        {/* </div> */}
          <button className="problem_select_button" onClick={() => handleProblemSelect(data)}>
            Select
          </button>

        {/* {data.external_batch_id ? <button className='enroll_button' onClick={handleEnroll}>Enroll now</button> : null} */}
      </div>

      {isOpen && (
        <RegistrationForm 
          onClose = {handleClose} 
          problem = {selectedProblem} 
        />
      )}
    </>
  );
};
// external_batch_id

export default HackathonCard;
