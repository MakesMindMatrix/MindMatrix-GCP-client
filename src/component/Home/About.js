import React from 'react'
import './About.css'
import { Link } from "react-router-dom";
import Footer from '../layout/Footer/Footer';

const About = () => {
  return (
    <>
      <div className='about_container'>

        <div className="navbar">
          <div className="logo"></div>
          <div className="nav_right">

            <Link
              to="/login"
              className="btnOne auth_btn"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="btnTwo auth_btn"
            >
              Sign Up
            </Link>
          </div>
        </div>

        <h1>About MindMatrix</h1>

        <p className='about_para'>Welcome to MindMatrix, where education meets industry. Our mission is to empower students with industry-aligned education that equips them with the skills, knowledge, and adaptability to excel in today’s technological landscape. We offer comprehensive, industry-focused programs through our advanced AI-powered E-learning platform, covering critical fields like Generative AI, IoT for Smart Infrastructure, and Electric Vehicles.</p>
        <p className='about_para'>What sets MindMatrix apart is our unique approach: our courses are designed to align perfectly with your academic calendar. This ensures students can learn essential industry-relevant skills without disrupting their degree progress, making it easier to integrate theoretical knowledge with practical, hands-on experience.</p>
        <p className='about_para'>In collaboration with industry leaders and academic institutions, we cultivate the next generation of innovators. Through personalized tracking of key competencies like curiosity, problem-solving, and technical acumen, we create detailed student profiles that reflect both growth and employability potential. These profiles enhance students’ visibility to prospective employers, ensuring they are industry-ready.</p>
        <p className='about_para'>Join us at MindMatrix, where learning intersects with real-world demands, and take the next step toward a successful career in today’s dynamic, technology-driven world.</p>
        <Footer />
      </div>
    </>
  )
}

export default About
