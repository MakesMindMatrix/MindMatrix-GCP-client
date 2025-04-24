import React, { useEffect } from 'react'
import './CourseLandingPage.css'
import Navbar from '../layout/Navbar/Navbar'
import { Link, useParams } from 'react-router-dom'

import { FaUniversity } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import { courseLandingPageDataAction } from '../../actions/courseAction';

const CourseLandingPage = () => {

  const dispatch = useDispatch();
  const {courseName} = useParams();
  const { loading: userLoading, isAuthenticated} = useSelector((state) => state.user)
  const {loading, courseLandingPageData} = useSelector((state) => state.courseLandingPage);

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(courseLandingPageDataAction())
    }

    // if (enroll_course) {
    //   window.location.href = `${sso}`
    // }
    // dispatch(allCourse())
  }, [dispatch, isAuthenticated])


  const slugify = (name) => 
    name
      .toLowerCase()
      .replace(/ /g, '-')    // Replace spaces with hyphens
      .replace(/[^\w-]+/g, ''); // Remove non-alphanumeric characters

  if (loading || userLoading || !courseLandingPageData || !courseLandingPageData.CourseInfo) {
    return <Loader />;
  }

  // Find course by slug
  const course = courseLandingPageData.CourseInfo.find(
    c => slugify(c.course_name) === courseName
  );
  const heroImage = course.hero_section?.hero_image || '/iot-landing-page.jpg';
  // console.log(heroImage);
  const instructorImage = course.instructor_section?.instructor_image || '/instructor.png';
  console.log("Fetched course:", course);
  
  return (
    <>
      {loading && userLoading ? <Loader /> : (
    <>
      <div className='CourseLandingPage_container'>
        <Navbar />
        {/* Hero section */}
        {/* heroImage */}
        <div className='course_hero' style={{ backgroundImage: `url(${heroImage})` }}>
          <div className='course_hero_overlay'>
            <h1 className='course_hero_heading'>{course.hero_section?.hero_title ?? "Default Hero Title"}</h1>
            <p className='course_hero_para'>{course.hero_section?.hero_description ?? "Default Hero Description"}</p>
            <Link className='course_hero_btn'>{course.hero_section?.hero_button_content ?? "Default Hero Button"}</Link>
          </div>
        </div>

        {/* About course section */}
        <div className='course_about'>
          <div className='course_about_left'>
            {/* course.about_section.title */}
            <h1 className='course_about_left_heading'>{course.about_section?.title ?? "Default About Title"}</h1> 
            {/* course.about_section.description */}
            <h2 className='course_about_left_para'>{course.about_section?.description ?? "Default About Description"}</h2>
            {/* <h2>*please refer to the latest VTU curriculum for details</h2> */}
          </div>

          <div className='course_about_right'>
            <div className='about_details_box'>
              <FaUniversity className='details_icon'/>
              <h1>VTU approved 1-credit course</h1>
            </div>

            <div className='about_details_box'>
              <FaClock className='details_icon'/>
              <h1>Duration: 1 semester, 14 weeks</h1>
            </div>

            <div className='about_details_box'>
              <FaBook className='details_icon'/>
              <h1>No. of sessions: 14</h1>
            </div>

            <div className='about_details_box'>
              <IoNotificationsSharp className='details_icon'/>
              <h1>Weekly commitment: 1 hour/week</h1>
            </div>

            <div className='about_details_box'>
              <IoSettings className='details_icon'/>
              <h1>Tailored for 3rd-semester Electronics and Communication students</h1>
            </div>
          </div>
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

        {/* Course outcomes section */}
        {/* <div className='course_outcomes'>
          <div>
            <h1><span>Understand IoT Basics and Components:</span> Gain foundational knowledge of IoT technologies, including sensors, communication protocols, and data processing.</h1>
          </div>

          <div>
            <h1><span>Apply IoT in Smart Infrastructure:</span> Learn how IoT is integrated into smart infrastructure projects such as smart cities, buildings, and transportation systems.</h1>
          </div>

          <div>
            <h1><span>Analyze and Evaluate IoT Systems:</span>Develop skills to assess the effectiveness of IoT solutions in infrastructure, considering factors like efficiency, sustainability, and scalability.</h1>
          </div>

          <div>
            <h1><span>Anticipate Future Trends:</span>Explore emerging technologies and future developments in IoT, including 5G integration and advancements in AI and machine learning.</h1>
          </div>

          <div>
            <h1><span>Enhance Problem-Solving Skills:</span>Develop the ability to tackle complex challenges in IoT implementation, including addressing interoperability issues and optimizing system</h1>
          </div>

          <div>
            <h1><span>Promote Sustainable Practices:</span>Understand the role of IoT in promoting sustainable infrastructure practices, including energy efficiency and environmental monitoring.</h1>
          </div>
        </div> */}

        {/* Course instructor section */}
        <div className='course_instructor'>
          <h1 className='course_instructor_heading'>Course Instructor</h1>
          <div className='course_instructor_box'>
            <div className='course_instructor_box_left'>
              {/* instructorImage */}
              <div className='course_instructor_img' style={{ backgroundImage: `url(${instructorImage})` }}></div>
            </div>
            <div className='course_instructor_box_right'>
              {/* course.instructor_section.instructor_designation */}
              <h3 className='course_instructor_designation'>{course.instructor_section?.instructor_designation ?? "Default Instructor Designation"}</h3>
              {/* course.instructor_section.instructor_name */}
              <h1 className='instructor_name'>{course.instructor_section?.instructor_name ?? "Default Instructor Name"}</h1>
              {/* course.instructor_section.instructor_description */}
              <p className='instructor_description'>{course.instructor_section?.instructor_description ?? "Default Instructor Description"}</p>
            </div>
          </div>
        </div>

        {/* Course curriculum section */}
        <div className='course_curriculum'>
          <div className='course_curriculum_left'>
            <h1 className='course_curriculum_heading'>Course Curriculum</h1>
            {course.curriculum_section.modules && course.curriculum_section.modules.length > 0 ? (
              course.curriculum_section.modules.map((module, idx) => (
                <div className='module_box' key={idx}>
                  <h1 className='course_module_heading'>{module.title}</h1>
                  <p className='course_module_para'>{module.description}</p>
                </div>
              ))
            ) : (
              <h1>No modules available.</h1>
            )}
          {/* 
            <div className='module_box'>
              <h1 className='course_module_heading'>Module 1: IoT & Smart Infrastructure</h1>
              <p className='course_module_para'>IoT basics, significance in smart infrastructure, Sensors, communication, cloud, edge computing,Security & Privacy issues and best practices.</p>
            </div>

            <div className='module_box'>
              <h1 className='course_module_heading'>Module 2: IoT in Smart Cities</h1>
              <p className='course_module_para'>IoT's role in smart cities, Applications in Transport, buildings, grids and waste management, Insights from global projects, Emerging tech, AI, 5G.</p>
            </div>

            <div className='module_box'>
              <h1 className='course_module_heading'>Module 3: IoT in Smart Buildings</h1>
              <p className='course_module_para'>Smart buildings overview, Automation, energy management, Successful implementations and 5G integration.</p>
            </div>

            <div className='module_box'>
              <h1 className='course_module_heading'>Module 4: IoT in Smart Transportation</h1>
              <p className='course_module_para'>IoT's role in transportation, Sensors, ITS, V2V, V2I, Smart transport projects and Autonomous vehicles</p>
            </div>

            <div className='module_box'>
              <h1 className='course_module_heading'>Module 5: IoT for Smart Grids & Energy</h1>
              <p className='course_module_para'>IoT's role in smart grids, Smart meters, optimization, Successful grid projects, AI, blockchain and 5G.</p>
            </div> */}
          </div>
          <div className='course_curriculum_right'>
            <div className='course_curriculum_img'></div>
          </div>
        </div>
      </div>
    </>
          )}
    </>
  )
}

export default CourseLandingPage
