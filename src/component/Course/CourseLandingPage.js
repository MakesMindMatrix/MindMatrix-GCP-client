import React, { useEffect, useState } from 'react'
import './CourseLandingPage.css'
import Navbar from '../layout/Navbar/Navbar'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { FaCheckCircle } from "react-icons/fa";
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { courseDataAction, courseLandingPageDataAction, coursePaymentAction, coursePaymentStatusAction, enrollCourse, getCourseInfoByBatchId } from '../../actions/courseAction';
import CurriculumSection from './CurriculumSection';
import { IoIosCloseCircle } from 'react-icons/io';

const CourseLandingPage = () => {
  const navigate = useNavigate()

  const slugify = (str) =>
    str
      .toLowerCase()
      .replace(/ /g, '-')
      .replace(/[^\w-]+/g, '');
  const { courseName: course_slug } = useParams();
  const dispatch = useDispatch();

  const { loading: userLoading, isAuthenticated, user } = useSelector((state) => state.user);
  const { loading, courseLandingPageData } = useSelector((state) => state.courseLandingPage);
  const { loading: courseLoading, enroll_course } = useSelector((state) => state.myCourse)
  const { coursePayment } = useSelector((state) => state.payment);
  const { sso } = useSelector((state) => state.SSO);

  const courseData = courseLandingPageData ? courseLandingPageData.CourseInfo.find((course) => {
    return slugify(course.course_name) === course_slug
  }) : null;
  // console.log(course.course_name)
  const external_batch_id = courseData ? courseData.batch_id : null;
  // console.log(courseLandingPageData.CourseInfo)
  const [confirmModal, setConfirmModal] = useState(false);
  const [paymentModal, setPaymentModal] = useState(false);

  const [paymentCourseData, setPaymentCourseData] = useState({
    batch_id: "",
    course_name: "",
    batch_price: "",
    description: ""
  });
  const [enrollCourseData, setEnrollCourseData] = useState({
    name: user?.name || "",
    email: user?.email || "",
    batch_id: ''
  });

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(courseDataAction(user.email));
      if (external_batch_id) {
        dispatch(getCourseInfoByBatchId(external_batch_id));
      }
    }
    dispatch(courseLandingPageDataAction())
  }, [dispatch, isAuthenticated, user, external_batch_id]);
  // const userEmail = user.email
  useEffect(() => {
    if (coursePayment) {
      const tokenUrl = coursePayment?.response.redirectUrl;
      console.log(tokenUrl);
      window.PhonePeCheckout.transact({
        tokenUrl,
        type: "IFRAME",
        callback: (response) => {
          if (response === "USER_CANCEL") {
            console.log("Transaction Cancelled");
          } else if (response === "CONCLUDED") {
            dispatch(coursePaymentStatusAction(coursePayment.merchantOrderId))
            dispatch(enrollCourse(enrollCourseData))
            console.log("Transaction Completed");
          }
        },
      });
    };
  }, [coursePayment, dispatch, enrollCourseData]);

  useEffect(() => {
    if (enroll_course) {
      console.log(`${sso}&external_batch_id=${external_batch_id}`);
      window.location.href = `${sso}&external_batch_id=${external_batch_id}`
    }
  }, [enroll_course, sso, external_batch_id]);

  // Load until all data is fetched
  if (loading || userLoading || courseLoading || !courseLandingPageData) {
    return <Loader />;
  };

  console.log(courseData);
  // Get course from store
  const course = courseData;
  // console.log("Fetched course:", course);

  // Links for Images
  const heroImage = course.hero_section?.hero_image || '/iot-landing-page.jpg';
  const instructorImage = course.instructor_section?.instructor_image || '/instructor.png';
  const curriculumImage = course.curriculum_section?.curriculum_image || '/iot-image.jpg';
  const paymentImage = "https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg";

  const handleEnrollConfirmation = () => {
    setConfirmModal(false);
    dispatch(enrollCourse(enrollCourseData));
  };
  const handleEnroll = () => {
    if(!isAuthenticated){
      return navigate('/login')
    }

    if (courseData.batch_price > 0) {
      setPaymentCourseData({
        batch_id: external_batch_id,
        course_name: courseData.course_name,
        batch_price: courseData.batch_price,
        description: course.hero_section?.hero_description
      })
      setPaymentModal(true)
      setEnrollCourseData({ ...enrollCourseData, batch_id: external_batch_id })
    } else {
      setConfirmModal(true)
      setEnrollCourseData({ ...enrollCourseData, batch_id: external_batch_id })
    }
  };

  const handlePayment = () => {
    dispatch(coursePaymentAction({
      courseName: paymentCourseData.course_name,
      coursePrice: paymentCourseData.batch_price,
      batchId: paymentCourseData.batch_id
    }))
  };

  // console.log(coursePaymentStatus);
  return (
    <div className='CourseLandingPage_container'>
      {isAuthenticated ? <Navbar /> : <div className="navbar">
        <Link to="/">
          <div className="logo"></div>
        </Link>
        <div className="nav_right">

          <Link
            to="/register"
            className="btnTwo auth_btn"
          >
            Sign Up
          </Link>

          <Link
            to="/login"
            className="btnOne auth_btn"
          >
            Login
          </Link>
        </div>
      </div>}

      {/* Confirm modal */}
      <div className='confirmModal_container' style={confirmModal ? { display: 'flex' } : { display: 'none' }}>
        <h1 className='confirmModal_heading'>Do you want to enroll in this course</h1>
        <div className='confirmModal_button_parent'>
          <button className='confirmModal_button' onClick={handleEnrollConfirmation}>Yes</button>
          <button className='confirmModal_button' onClick={() => setConfirmModal(false)}>No</button>
        </div>
      </div>

      {/* Payment modal */}
      <div className='pymentModal_container_parent' style={paymentModal ? { display: 'flex' } : { display: 'none' }}>
        <div className='pymentModal_container'>
          <IoIosCloseCircle className='payment_close_btn' onClick={() => setPaymentModal(false)} />
          <div className='paymentModal_image' style={{ backgroundImage: `url(${paymentImage})`, }}></div>
          <h1 className='paymentModal_heading'>{paymentCourseData.course_name}</h1>
          <h1 className='paymentModal_price'>Course price - ₹{paymentCourseData.batch_price}</h1>
          <p className='paymentModal_description'>{paymentCourseData.description}</p>
          <button className='paymentModal_btn' onClick={handlePayment}>Pay Now</button>
        </div>
      </div>

      {/* Hero section */}
      <section className="hero-section">
        <div className="hero-content">
          <div className="hero-left">
            <h1 className="hero-title">{course.hero_section?.hero_title || "Default Hero Title"}</h1>
            <p className="hero-description">
              {course.hero_section?.hero_description || "Default About Description"}
            </p>
            <button className="hero-enroll-btn" onClick={handleEnroll}>{course.hero_section?.hero_button_content || "Default Hero Button"}</button>
          </div>
          <div className="hero-right">
            <img
              className="hero-image"
              src={heroImage}
              alt="Course Hero"
            />
          </div>
        </div>
      </section>

      <div className="course-details-wrapper">
        <section className="what-you-get-section">
          <h2 className="what-you-get-title">What you get?</h2>
          {course.what_you_get_section.points && course.what_you_get_section.points.length > 0 ? (
            <ul className="what-you-get-list">
              {course.what_you_get_section.points.map((point, i) => (
                <li className="what-you-get-item" key={i}>
                  <FaCheckCircle className="tick-icon" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          ) : (
            <h1>No points available.</h1>
          )}
        </section>
        <aside className="instructor-section">
          <h2 className="instructor-title">Your Course Instructor</h2>
          <div className="instructor-profile">
            <img
              className="instructor-photo"
              src={instructorImage}
              alt="Instructor"
            />
            <div className="instructor-info">
              <div className="instructor-name">{course.instructor_section?.instructor_name || "Default Instructor Name"}</div>
              <div className="instructor-designation">{course.instructor_section?.instructor_designation || "Default Instructor Designation"}</div>
              <div className="instructor-description">
                {course.instructor_section?.instructor_description || "Default Instructor Description, Default Instructor Description, Default Instructor Description, Default Instructor Description, Default Instructor Description, Default Instructor Description, Default Instructor Description"}
              </div>
            </div>
          </div>
        </aside>
      </div>

      {/* Pre-requisites section */}
      {/* <div className='course_PreRequisite'>
          <h1>Pre-requisites</h1>

          <div>
            <h1><span>Basic Programming Skills:</span> A foundational understanding of programming, preferably in Python or any other high-level language, to help grasp IoT coding principles.</h1>
          </div>

          <div>
            <h1><span>Basic Electronics Knowledge:</span> Familiarity with basic electronics concepts, including circuits and sensors, to understand IoT hardware components.</h1>
          </div>

          <div>
            <h1><span>Curiosity and Willingness to Learn:</span> An interest in learning about IoT and its applications in smart infrastructure, even without prior experience in the field.</h1>
          </div>
        </div> */}

      {/* Course curriculum section */}
      <div className='course_curriculum'>
        <div className='course_curriculum_left'>
          <h1 className='course_curriculum_heading'>Program Details</h1>
          <CurriculumSection modules={course.curriculum_section.modules} />
        </div>
        <div className='course_curriculum_right'>
          <div className='course_curriculum_img' style={{ backgroundImage: `url(${curriculumImage})` }}></div>
        </div>
      </div>
    </div>
  )
}

export default CourseLandingPage
