import React from 'react'
import './CourseLandingPage.css'
import Navbar from '../layout/Navbar/Navbar'
import { Link } from 'react-router-dom'

import { FaUniversity } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaBook } from "react-icons/fa6";
import { IoNotificationsSharp } from "react-icons/io5";
import { IoSettings } from "react-icons/io5";

const CourseLandingPage = () => {
  return (
    <>
      <div className='CourseLandingPage_container'>
        <Navbar />
        {/* Hero section */}
        <div className='course_hero'>
          <div className='course_hero_overlay'>
            <h1 className='course_hero_heading'>IoT for Smart Infrastructure</h1>
            <p className='course_hero_para'>Join our VTU-accredited, 1-credit course on IoT for Smart Infrastructure. Learn how to design, optimize, and automate with IoT technology, and advance your skills for a smarter, connected future.</p>
            <Link className='course_hero_btn'>Enroll Now</Link>
          </div>
        </div>

        {/* About course section */}
        <div className='course_about'>
          <div className='course_about_left'>
            <h1 className='course_about_left_heading'>About the Course</h1>
            <h2 className='course_about_left_para'>Step into the future with IoT for Smart Infrastructure, an electrifying VTU-approved Ability Enhancement Course designed specifically for 3rd-semester Electronics and Communication students. Dive deep into the cutting-edge world of IoT, uncovering its transformative applications and the smart systems revolutionizing our infrastructure. This 14-week immersive experience, brimming with real-world case studies, offers you the chance to earn 1 VTU credit.* Get inspired by how industry giants are spearheading IoT innovations, driving unprecedented levels of efficiency, safety, and sustainability. Ignite your passion for technology and be part of the Smart Infrastructure revolution!</h2>
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
              <div className='course_instructor_img'></div>
            </div>
            <div className='course_instructor_box_right'>
              <h3 className='course_instructor_designation'>industry Specialist - IoT</h3>
              <h1 className='instructor_name'>Manoj Kaulgud</h1>
              <p className='instructor_description'>Manoj Kaulgud is a Mechanical Engineer with 38 years of industrial experience. He has worked with many Automative industries such as Hindustan Motors, Tata Motors and Rexroth. He has played many roles in his career such as purchase engineer, new product development engineer and quality engineer. His Expertise is in quality functions, and he has also worked extensively on the new technology absorption and played a key role in implementing IoT in industry. He has in-depth knowledge of IoT and its applications. He has been working as full time trainer now and is training fresh engineers about new technologies used and implemented in industry</p>
            </div>
          </div>
        </div>

        {/* Course curriculum section */}
        <div className='course_curriculum'>
          <div className='course_curriculum_left'>
            <h1 className='course_curriculum_heading'>Course Curriculum</h1>

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
            </div>
          </div>
          <div className='course_curriculum_right'>
            <div className='course_curriculum_img'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseLandingPage
