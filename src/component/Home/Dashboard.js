import React, { useEffect } from 'react'
import './Dashboard.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from '../layout/Navbar/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { allNoticeBoards, courseDataAction, SSOLogin } from '../../actions/courseAction';
// import courseData from '../Data/courseData'
import Loader from '../layout/Loader/Loader'
import RecCard from './Cards/RecCard';
import MyCourseCard from './Cards/MyCourseCard';
// import UpcomingCard from './Cards/UpcomingCard';
// import certificateProgramData from '../Data/certificateProgramData';
import NoticeBoardCard from './Cards/NoticeBoardCard';
const Dashboard = () => {
  const dispatch = useDispatch()

  const { loading: userLoading, isAuthenticated, user } = useSelector((state) => state.user)
  const { loading: ssoLoading } = useSelector((state) => state.SSO)
  const { loading: myCourseLoading, my_course, rec_course, allNoticeboards } = useSelector((state) => state.myCourse)
  // console.log(rec_course)
  const userEmail = user.email
  const user_name = user.name
  // console.log(my_course)

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(courseDataAction(userEmail))
      dispatch(SSOLogin(userEmail))
      dispatch(allNoticeBoards())
    }

    // if (enroll_course) {
    //   window.location.href = `${sso}`
    // }
    // dispatch(allCourse())
  }, [dispatch, isAuthenticated, userEmail])

  if (myCourseLoading || userLoading || ssoLoading) {
    return <Loader />
  }
  return (
    <div className='dashboard_container'>
      <Navbar />
      <div className="userName">
        <div className="hello">
          <h3>Hello <span>{user_name}</span>, <br /> <span>from {user.college.name}</span></h3>
        </div>
      </div>

      {/* Current course progress leaderboard */}
      <div className='dash_body'>
        <div className='das_body_left'>

          {/* My courses section */}
          {my_course && my_course.length > 0 && <h1 className='main_heading'>My Programs</h1>}
          <div className='dash_my_course_container'>
            {my_course && my_course.map((elm, index) => {
              return <MyCourseCard data={elm} key={index} />
            })}
          </div>


          {/* Recommended section */}
          {rec_course?.some(elm => elm.publishStatus === 'recommended') && (
            <h1 className='main_heading'>Recommended Programs</h1>
          )}
          <div className='dash_rec_container'>
            {rec_course && rec_course.map((elm, index) => (
              elm.publishStatus === 'recommended' ? <RecCard data={elm} key={index} /> : null
            ))}
          </div>

          {/* Upcoming courses */}
          {rec_course?.some(elm => elm.publishStatus === 'upcoming') && (
            <h1 className='main_heading'>Upcoming Programs</h1>
          )}
          <div className='dash_rec_container'>
            {rec_course && rec_course.map((elm, index) => (
              elm.publishStatus === 'upcoming' ? <RecCard data={elm} key={index} /> : null
            ))}
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

        {/* Dashboard Right section */}
        <div className='das_body_right'>
          <h3 className='notice_heading'>My Notice Board</h3>
          <div className="noticeboard_container">
            {allNoticeboards && allNoticeboards.map((elm, index) => (
              <NoticeBoardCard data={elm} key={index} />
            ))}
          </div>
        </div>
      </div>

    </div>
  )
}

export default Dashboard