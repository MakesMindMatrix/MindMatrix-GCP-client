import React, { useEffect, useState, useRef } from "react";
import "./Dashboard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../layout/Navbar/Navbar";
import BuildYourProfile from "./Cards/BuildYourProfile";

import { useDispatch, useSelector } from "react-redux";
import {
  allNoticeBoards,
  courseDataAction,
  SSOLogin,
} from "../../actions/courseAction";
// import courseData from '../Data/courseData'
import Loader from "../layout/Loader/Loader";
import RecCard from "./Cards/RecCard";
import MyCourseCard from "./Cards/MyCourseCard";
// import UpcomingCard from './Cards/UpcomingCard';
// import certificateProgramData from '../Data/certificateProgramData';
import NoticeBoardCard from "./Cards/NoticeBoardCard";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import CareerShapingActivities from "./Cards/CareerShapingActivities";
import MentorSessions from "./Cards/MentorSessions";
const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [currentSlide, setCurrentSlide] = useState(0);
  const noticeSliderRef = useRef(null);
  const [activeNoticeDot, setActiveNoticeDot] = useState(1);

  const noticeSettings = {
    dots: false,
    infinite: true,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    afterChange: (index) => setCurrentSlide(index),
  };

  const {
    loading: userLoading,
    isAuthenticated,
    user,
  } = useSelector((state) => state.user);
  const { loading: ssoLoading } = useSelector((state) => state.SSO);
  const {
    loading: myCourseLoading,
    my_course,
    rec_course,
    allNoticeboards,
  } = useSelector((state) => state.myCourse);
  // console.log(rec_course)
  const userEmail = user.email;
  const user_name = user.name;
  // console.log(my_course)

  //  Duplicate notice boards
  const duplicatedNoticeboards = allNoticeboards
    ? [
        ...allNoticeboards,
        ...allNoticeboards.map((notice, index) => ({
          ...notice,
          id: notice.id + `_duplicate_${index}`,
          title: notice.title + " (Copy)",
        })),
        ...allNoticeboards.map((notice, index) => ({
          ...notice,
          id: notice.id + `_duplicate2_${index}`,
          title: notice.title + " (Copy 2)",
        })),
      ]
    : [];

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(courseDataAction(userEmail));
      dispatch(SSOLogin(userEmail));
      dispatch(allNoticeBoards());
    }

    // if (enroll_course) {
    //   window.location.href = `${sso}`
    // }
    // dispatch(allCourse())
  }, [dispatch, isAuthenticated, userEmail]);
  useEffect(() => {
    setActiveNoticeDot(1);
  }, []);

  if (myCourseLoading || userLoading || ssoLoading || !user) {
    return <Loader />;
  }

  return (
    <div className="dashboard_container">
      <Navbar />

      {/* Current course progress leaderboard */}
      <div className="dash_body">
        <div className="das_body_left">
          <div className="das_body_left_">
            <div className="userName">
              <div className="hello">
                <h3>
                  Hello <span>{user_name}</span>, <br />{" "}
                  <span>from {user.college.name}</span>
                </h3>
              </div>
            </div>

            {/* My courses section */}
            {my_course && my_course.length > 0 && (
              <h1 className="main_heading">My Programs</h1>
            )}
            <div className="dash_my_course_container">
              {my_course &&
                my_course.map((elm, index) => {
                  return <MyCourseCard data={elm} key={index} />;
                })}
            </div>

            {/* Recommended section */}
            {rec_course?.some((elm) => elm.publishStatus === "recommended") && (
              <h1 className="main_heading">Recommended Programs</h1>
            )}
            <div className="dash_rec_container">
              {rec_course &&
                rec_course.map((elm, index) =>
                  elm.publishStatus === "recommended" ? (
                    <RecCard data={elm} key={index} />
                  ) : null
                )}
            </div>

            {/* Upcoming courses */}
            {rec_course?.some((elm) => elm.publishStatus === "upcoming") && (
              <h1 className="main_heading">Upcoming Programs</h1>
            )}
            <div className="dash_rec_container">
              {rec_course &&
                rec_course.map((elm, index) =>
                  elm.publishStatus === "upcoming" ? (
                    <RecCard data={elm} key={index} />
                  ) : null
                )}
            </div>
            {/* <div className='dash_up_container'>
                  {courseData?.map((elm, index) => (
                    <UpcomingCard data={elm} key={index} />
                  ))}
                </div> */}

            {/* Certificate program */}
            {/* <h1 className='main_heading'>Our Certified programs</h1>
                <div className='dash_up_container'>
                  {certificateProgramData?.map((elm, index) => (
                    <UpcomingCard data={elm} key={index} />
                  ))}
                </div> */}
          </div>
        </div>

        {/* Dashboard Right section */}
        <div className="das_body_right">
          <h3 className="notice_heading">My Notice Board</h3>
          <div className="noticeboard_slider_wrapper">
            <Slider {...noticeSettings} ref={noticeSliderRef}>
              {duplicatedNoticeboards.map((elm, index) => (
                <div key={`${elm.id}_${index}`}>
                  <NoticeBoardCard data={elm} />
                </div>
              ))}
            </Slider>

            <div className="custom-nav-wrapper">
              <div
                className="arrow_"
                onClick={() => {
                  noticeSliderRef.current.slickPrev();
                  setActiveNoticeDot(0);
                }}
              >
                &#9664;
              </div>

              <div className="dot-group">
                {[0, 1, 2].map((dotIndex) => (
                  <div
                    key={dotIndex}
                    className={`dot ${
                      dotIndex === activeNoticeDot ? "current" : ""
                    }`}
                  ></div>
                ))}
              </div>

              <div
                className="arrow_"
                onClick={() => {
                  noticeSliderRef.current.slickNext();
                  setActiveNoticeDot(2);
                }}
              >
                &#9654;
              </div>
            </div>
          </div>
          <CareerShapingActivities />
          <BuildYourProfile />
          <MentorSessions />
        </div>
      </div>
      {/* MindMatrix Exclusive Offerings */}
      <div className="exclusive_offerings_section">
        <div className="offerings_left">
          <h1 className="main_heading">MindMatrix Exclusive Offerings</h1>
          <p className="offer_description">
            These Plans are structurally articulated to give you
            industry-relevant skilling. Pay a minimal amount once for entire
            semester and get started
          </p>
          <button
            className="explore_button"
            onClick={() => navigate("/explore-memberships")}
          >
            Explore Memberships
          </button>
        </div>

        <div className="offerings_right">
          <div className="plan_card first">
            <img
              src="https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg"
              alt="Achiever Pass"
              className="card_image"
            />
            <div className="card_content first">
              <h3>ACHIEVER PASS MEMBERSHIP</h3>
              <hr className="title-divider" />
              <ul>
                <li>✅ GenAI Fundamentals</li>
                <li>✅ GenAI Projects</li>
                <li>✅ Career Mentorship</li>
              </ul>
            </div>
          </div>
          <div className="plan_card second">
            <img
              src="https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg"
              alt="Achiever Pass"
              className="card_image"
            />
            <div className="card_content second">
              <h3>ACHIEVER PASS MEMBERSHIP VIP</h3>
              <hr className="title-divider" />
              <ul>
                <li>✅ GenAI Fundamentals</li>
                <li>✅ Capstone Projects</li>
                <li>✅ Certification</li>
              </ul>
            </div>
          </div>

          <div className="plan_card third">
            <img
              src="https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg"
              alt="Explorer Pass"
              className="card_image"
            />
            <div className="card_content third">
              <h3>EXPLORER PASS MEMBERSHIP</h3>
              <hr className="title-divider" />
              <p>Start your journey with self-driven growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
