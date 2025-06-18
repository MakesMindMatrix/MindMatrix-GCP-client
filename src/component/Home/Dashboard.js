import React, { useEffect } from "react";
import "./Dashboard.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "../layout/Navbar/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { courseDataAction, SSOLogin } from "../../actions/courseAction";
import courseData from "../Data/courseData";
import Loader from "../layout/Loader/Loader";
import RecCard from "./Cards/RecCard";
import MyCourseCard from "./Cards/MyCourseCard";
import UpcomingCard from "./Cards/UpcomingCard";
import certificateProgramData from "../Data/certificateProgramData";
const Dashboard = () => {
  const dispatch = useDispatch();

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
  } = useSelector((state) => state.myCourse);

  const userEmail = user.email;
  const user_name = user.name;

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(courseDataAction(userEmail));
      dispatch(SSOLogin(userEmail));
    }

    // if (enroll_course) {
    //   window.location.href = `${sso}`
    // }
    // dispatch(allCourse())
  }, [dispatch, isAuthenticated, userEmail]);

  if (myCourseLoading || userLoading || ssoLoading) {
    return <Loader />;
  }
  return (
    <div className="dashboard_container">
      <Navbar />
      <div className="userName">
        <div className="hello">
          <h3>Welcome Back, {user_name}</h3>
        </div>
      </div>

      {/* Current course progress leaderboard */}
      <div className="dash_body">
        <div className="das_body_left">
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
          {rec_course && rec_course.length > 0 && (
            <h1 className="main_heading">Our Recommended Programs</h1>
          )}
          <div className="dash_rec_container">
            {console.log("recccc", rec_course)}
            {rec_course &&
              rec_course.map((elm, index) => {
                return <RecCard data={elm} key={index} />;
              })}
          </div>

          {/* Upcoming courses */}
          <h1 className="main_heading">Upcoming Programs</h1>
          <div className="dash_up_container">
            {courseData?.map((elm, index) => (
              <UpcomingCard data={elm} key={index} />
            ))}
          </div>

          {/* Certificate program */}
          <h1 className="main_heading">Our Certified programs</h1>
          <div className="dash_up_container">
            {certificateProgramData?.map((elm, index) => (
              <UpcomingCard data={elm} key={index} />
            ))}
          </div>
        </div>

        {/* Dashboard Right section */}
        <div className="das_body_right"></div>
      </div>
    </div>
  );
};

export default Dashboard;
