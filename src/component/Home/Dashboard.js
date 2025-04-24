import React, { useEffect, useState } from 'react'
import './Dashboard.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Navbar from '../layout/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { allCourse, courseDataAction, courseLandingPageDataAction, coursePaymentAction, coursePaymentStatusAction, enrollCourse, SSOLogin } from '../../actions/courseAction';
import liveSkillData from '../Data/liveSkillData'
import courseData from '../Data/courseData'
import NewsData from '../Data/NewsData';
import Loader from '../layout/Loader/Loader'
import Activity from './Cards/Activity';
import RecCard from './Cards/RecCard';
import MyCourseCard from './Cards/MyCourseCard';
import UpcomingCard from './Cards/UpcomingCard';
import LiveSessionData from '../Data/liveSessionData';
import LeaderboardCard from './Cards/LeaderboardCard';
import NewsCard from './Cards/NewsCard';
import certificateProgramData from '../Data/certificateProgramData';
import LiveSessionCard from './Cards/LiveSessionCard';
import { IoIosCloseCircle } from "react-icons/io";
import Gai from './images/GAI.jpg'

const Dashboard = () => {
  const dispatch = useDispatch()

  const { loading: userLoading, isAuthenticated, user } = useSelector((state) => state.user)
  const { sso } = useSelector((state) => state.SSO)
  const { loading, enroll_course, my_course, rec_course, report_data } = useSelector((state) => state.myCourse)
  const { coursePayment, coursePaymentStatus } = useSelector((state) => state.payment)
  // const { courseLandingPageData } = useSelector((state) => state.courseLandingPage)
  // console.log(my_course)

  const [confirmModal, setConfirmModal] = useState(false)
  const [paymentModal, setPaymentModal] = useState(false)
  const [paymentCourseData, setPaymentCourseData] = useState({
    batch_id: "",
    course_name: "",
    batch_price: "",
    description: ""
  })
  const [enrollCourseData, setEnrollCourseData] = useState({
    name: user.name,
    email: user.email,
    batch_id: ''
  })

  const userEmail = user.email
  const handleEnrollConfirmation = () => {
    dispatch(enrollCourse(enrollCourseData))
    setConfirmModal(false)
  }
  console.log(coursePaymentStatus)

  const handleEnroll = () => {
    dispatch(coursePaymentAction({
      courseName: paymentCourseData.course_name,
      coursePrice: paymentCourseData.batch_price,
      batchId: paymentCourseData.batch_id
    }))
  }
  const tokenUrl = coursePayment?.response.redirectUrl
  if (coursePayment) {
    console.log(tokenUrl)
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
  }

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(courseDataAction(userEmail))
      dispatch(SSOLogin(userEmail))
      dispatch(courseLandingPageDataAction())
    }

    if (enroll_course) {
      window.location.href = `${sso}`
    }
    dispatch(allCourse())
  }, [dispatch, isAuthenticated, userEmail, enroll_course, sso])

  // Carousel next arrow
  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdKeyboardArrowRight className={className} onClick={onClick} style={{ ...style, color: "grey" }} />
    );
  }

  // Carousel prev arrow
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <MdKeyboardArrowLeft className={className} onClick={onClick} style={{ ...style, color: "grey" }} />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    autoplay: false,
    arrows: true,
    autoplaySpeed: 3000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    rows: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
          rows: 1,
        },
      },
    ],
  };
  return (
    <>
      {loading && userLoading ? <Loader /> : (
        <>
          <div className='dashboard_container'>
            <Navbar />
            <div className="userName">
              <div className="hello">
                <h3>Hello, {user?.name}! Welcome Back</h3>
              </div>
              {/* <div className="welcome">
                <h5>Welcome Back</h5>
              </div> */}
            </div>

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
                <div className='paymentModal_image' style={{ backgroundImage: `url(${Gai})`, }}></div>
                <h1 className='paymentModal_heading'>{paymentCourseData.course_name}</h1>
                <h1 className='paymentModal_price'>Course price - ₹{paymentCourseData.batch_price}</h1>
                <p className='paymentModal_description'>{paymentCourseData.description}</p>
                <button className='paymentModal_btn' onClick={handleEnroll}>Pay Now</button>
              </div>

            </div>
            <div className='dash_body'>
              <div className='das_body_left'>
                {report_data && report_data.length > 1 ? (
                  <div className='report_slider'>
                    <Slider {...settings} >
                      {report_data && report_data?.map((elm, index) => {
                        return <LeaderboardCard data={elm} key={index} />
                      })}
                    </Slider>
                  </div>
                ) : (
                  <div className='report_slider'>
                    {report_data && report_data?.map((elm, index) => {
                      return <LeaderboardCard data={elm} key={index} />
                    })}
                  </div>
                )}


                {/* My courses section */}
                {my_course && my_course.length > 0 && <h1 className='main_heading'>My Courses</h1>}
                <div className='dash_my_course_container'>
                  {my_course && my_course.map((elm, index) => {
                    return <MyCourseCard data={elm} key={index} setConfirmModal={setConfirmModal} enrollCourseData={enrollCourseData} setEnrollCourseData={setEnrollCourseData} />
                  })}
                </div>


                {/* Recommended section */}
                {rec_course && rec_course.length > 0 && <h1 className='main_heading'>Recommended couses for you</h1>}
                <div className='dash_rec_container'>
                  {rec_course && rec_course.map((elm, index) => {
                    return <RecCard data={elm} key={index}/>
                    // return <RecCard data={elm} key={index} setConfirmModal={setConfirmModal} enrollCourseData={enrollCourseData} setEnrollCourseData={setEnrollCourseData} setPaymentModal={setPaymentModal} setPaymentCourseData={setPaymentCourseData} />
                  })}
                </div>

                {/* Upcoming courses */}
                <h1 className='main_heading'>Upcoming courses for you</h1>
                <div className='dash_up_container'>
                  {courseData?.map((elm, index) => (
                    <UpcomingCard data={elm} key={index} />
                  ))}
                </div>

                {/* Certificate program */}
                <h1 className='main_heading'>Certificate program</h1>
                <div className='dash_up_container'>
                  {certificateProgramData?.map((elm, index) => (
                    <UpcomingCard data={elm} key={index} />
                  ))}
                </div>
              </div>

              {/* Dashboard Right section */}
              <div className='das_body_right'>

                {/* Live session notification section */}
                <div className='notification_container'>
                  <h1>Upcoming live session</h1>

                  <div className='notification_card_parent'>
                    <div className='notification_circle' style={{ backgroundColor: 'blue' }}></div>
                    <h2>Tea with tirumal - 15 Feb 25</h2>
                  </div>

                  <div className='notification_card_parent'>
                    <div className='notification_circle' style={{ backgroundColor: 'orange' }}></div>
                    <h2>Curiosity with Kushal - 20 Feb 25</h2>
                  </div>
                  {/* <Link className='notification_card_parent' to='https://us06web.zoom.us/j/86596490573?pwd=Jmzta7nk64J2mfreyEMuvrWSLrMIRB.1' target='blank'> */}
                  {/* </Link> */}

                  <div className='notification_card_parent'>
                    <div className='notification_circle' style={{ backgroundColor: 'grey' }}></div>
                    <h2>IOT - 10 Feb 25</h2>
                  </div>

                  <div className='notification_card_parent'>
                    <div className='notification_circle' style={{ backgroundColor: 'grey' }}></div>
                    <h2>Gen AI - 10 Feb 25</h2>
                  </div>
                </div>

                {/* Life skills section */}
                <h1 className='main_heading'>Life skills</h1>
                <div className="activity_container">
                  {liveSkillData?.map((elm, index) => (
                    <Activity data={elm} key={index} />
                  ))}
                </div>

                {/* Live session cards */}
                <h1 className='main_heading'>Live session</h1>
                <div className='liveSession_container'>
                  {LiveSessionData?.map((elm, index) => (
                    <LiveSessionCard data={elm} key={index} />
                  ))}
                </div>

                {/* News section */}
                <h1 className='main_heading'>Industry News</h1>
                <div className='industryNews_container'>
                  <Slider {...settings} className="slide">
                    {NewsData.map((elm, index) => {
                      return <NewsCard data={elm} key={index} />;
                    })}
                  </Slider>
                </div>
              </div>
            </div>

          </div>
        </>
      )}
    </>
  )
}

export default Dashboard