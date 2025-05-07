import React, { useState } from 'react'
import './LandingPage.css'
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import Footer from '../layout/Footer/Footer'

const LandingPage = () => {
    const [opneNav, setOpenNav] = useState(false);
    // const { } = ((state) => state.user)
    return (
        <>
            <div className='landingpage_container'>
                {/* Responsive navbar */}
                <div className={opneNav ? "responsiveNavbarOpen" : "responsiveNavbar"}>
                    <div
                        // to="https://makes.mindmatrix.io/"
                        className="logo"
                        style={opneNav ? { margin: "2rem auto" } : {}}
                    ></div>
                    <RxHamburgerMenu
                        className="hamburger"
                        style={opneNav ? { display: "none" } : { display: "initial" }}
                        onClick={() => setOpenNav(true)}
                    />
                    <div className={opneNav ? "nav_rightRes" : "nav_rightResHide"}>
                        <IoMdClose
                            className="closeMenu"
                            onClick={() => setOpenNav(false)}
                        />
                        <Link to="contact" className="contact_btn">
                            Contact Us
                        </Link>
                        <Link
                            to="https://learn.mindmatrix.io/users/sign_in"
                            className="login_button"
                        >
                            Login
                        </Link>
                        <Link
                            to="https://learn.mindmatrix.io/users/sign_up"
                            className="register_button"
                        >
                            Sign Up
                        </Link>
                    </div>
                </div>

                {/* Navbar */}
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
                <div className="stroke"></div>
                {/* Hero Section */}
                <div className="landingPage_hero">
                    <div className="landingPage_hero_left">
                        <h1 className="landingPage_hero_heading landingPageHeading">
                            Shaping the Future: Empowering student success
                        </h1>
                        <p className="landingPage_hero_para">
                            MindMatrix: Unlocking the Potential for Tomorrow's Leaders
                        </p>
                        {/* <button className="btnOne">Explore Courses</button> */}
                        {/* <div style={{ padding: '2.2rem 0' }}>
                            <Link to="https://learn.mindmatrix.io/collections" className="btnOne">
                                Explore Courses
                            </Link>
                            <Link to="contact" className="btnTwo">
                                Contact Us
                            </Link>
                        </div> */}
                        {/* <button className="btnTwo">Contact Us</button> */}
                    </div>
                    <div className="landingPage_hero_right"></div>
                </div>

                {/* Change career section */}
                <div className="changeCareer">
                    <div className="changeCareer_left"></div>
                    <div className="changeCareer_right">
                        <h1 className="landingPageHeading">
                            Pivotal Role in Shaping Student Careers
                        </h1>
                        <div style={{ display: "flex", flexWrap: "wrap" }} className="changeCareerCards">
                            {changeCareerCardData.map((elm, index) => {
                                return (
                                    <ChangeCareerCard data={elm} key={index} index={index} />
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Vtu details section */}
                <div className="vtuDetails">
                    <h1 className="landingPageHeading">Powering Ahead with VTU</h1>
                    <div className="VtuDetailsCards">
                        {vtuDetailsCardData.map((elm, index) => {
                            return <VtuDetailsCard data={elm} key={index} />;
                        })}
                    </div>
                </div>

                {/* Flagship courses section */}
                <div className="flagship_course">
                    <div className="flagship_course_left">
                        <h1 className="landingPageHeading" style={{ marginLeft: "1rem" }}>
                            Discover Our Flagship Courses
                        </h1>
                        <div style={{ display: "flex", flexWrap: "wrap" }} className="LandingPageCourseCards">
                            {courseCardData.map((elm, index) => {
                                return (
                                    <LandingPageCourseCard data={elm} key={index} index={index} />
                                );
                            })}
                        </div>
                    </div>
                    <div className="flagship_course_right"></div>
                </div>

                {/* Industry training section*/}
                <div className="industry_section">
                    <div className="industry_section_left">
                        <h1 className="landingPageHeading" style={{ margin: "4rem 0", lineHeight: '5rem' }}>
                            Industry-Aligned Training and Mentoring
                        </h1>
                        {industryTrainingCardData.map((elm, index) => {
                            return <IndustryTrainingCard data={elm} key={index} />;
                        })}
                    </div>
                    <div className="industry_section_right"></div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default LandingPage

// Landing page card components
const ChangeCareerCard = ({ data, index }) => {
    return (
        <>
            <div
                className="changeCareerCard_container"
                style={index === 2 ? { flexGrow: "2" } : { flexGrow: "1" }}
            >
                <div className="changeCareerCard_left">
                    <div className="changeCareerCard_left_box">
                        <h1>{data.serialNo}</h1>
                    </div>
                </div>
                <div className="changeCareerCard_right">
                    <h1 className="cardHeading">{data.heading}</h1>
                    <p className="cardPara">{data.para}</p>
                </div>
            </div>
        </>
    );
};

const VtuDetailsCard = ({ data }) => {
    return (
        <>
            <div className="vtuDetailsCard_container">
                <h1 className="cardHeading">{data.heading}</h1>
                <p className="cardPara">{data.para}</p>
            </div>
        </>
    );
};

const LandingPageCourseCard = ({ data, index }) => {
    // const course_page_url = `https://learn.mindmatrix.io/courses/${data?.slug}`;
    return (
        <>
            <Link
                to='/login'
                className="landingPageCourseCard_container"
                style={index === 2 ? { flexGrow: "2" } : { flexGrow: "1" }}
            >
                <h1 className="cardHeading">{data.courseName}</h1>
                <p className="cardPara">{data.description}</p>
                <p className="cardPara" style={{fontSize: '1.8rem'}}>{data.price}</p>
            </Link>
        </>
    );
};

const IndustryTrainingCard = ({ data }) => {
    return (
        <>
            <div className="IndustryTrainingCard_container">
                <div className="IndustryTrainingCard_left">
                    <div className="IndustryTrainingCard_left_box">
                        <h1>{data.serialNo}</h1>
                    </div>
                </div>
                <div className="IndustryTrainingCard_right">
                    <h1 className="cardHeading">{data.heading}</h1>
                    <p className="cardPara">{data.para}</p>
                </div>
            </div>
        </>
    );
};

// Landing page component card datas
export const changeCareerCardData = [
    {
        serialNo: 1,
        heading: "Grooming for a Dynamic Career Path",
        para: "We groom students to excel in a rapidly changing job market, ensuring they are prepared for the challenges ahead.",
    },
    {
        serialNo: 2,
        heading: "Transforming Personalities",
        para: "Through our holistic approach, we help students develop essential soft skills and cultivate a growth mindset.",
    },
    {
        serialNo: 3,
        heading: "Promoting Self-Reliance",
        para: "We empower students to become self-reliant by fostering independence, critical thinking, and problem-solving abilities.",
    },
];

export const vtuDetailsCardData = [
    {
        heading: "Synergistic Partnership",
        para: "MindMatrix's collaboration with Visvesvaraya Technological University (VTU) combines academic excellence and industry-leading expertise.",
    },
    {
        heading: "Cutting-Edge Curriculum",
        para: "Together, we develop forward-thinking programs that equip students with the skills to thrive in the modern workforce.",
    },
    {
        heading: "Shared Vision",
        para: "Our shared commitment to student success drives us to continuously innovate and elevate the learning experience.",
    },
];

export const courseCardData = [
    {
        courseName: "IoT for Smart Infrastructure",
        description:
            "Master the latest technologies shaping the future of connected cities and sustainable development.",
        slug: "iot-for-smart-infrastructure",
        price: "Rs 999"
    },
    {
        courseName: "Android App Development with Kotlin",
        description:
            "Unlock the power of Kotlin and build cutting-edge mobile applications for the Android platform.",
        slug: "android-app-development-with-kotlin",
        price: "Rs 999"
    },
    {
        courseName: "Energy Management in Electric Vechiles",
        description:
            "Unlock the future of mobility with cutting-edge energy management strategies for electric vehicles! Master EV components, battery systems, AI-driven optimization, and real-time power management to drive efficiency and innovation.",
        slug: "gen-ai-skill-badge",
        price: "Rs 599"
    },
    {
        courseName: "Gen AI Skill Badge",
        description:
            "Gain expertise in the rapidly evolving field of Generative AI and stay ahead of the curve.",
        slug: "gen-ai-skill-badge",
        price: "Comming soon"
    },
];

export const industryTrainingCardData = [
    {
        serialNo: 1,
        heading: "Relevant Curriculum",
        para: "Courses designed in collaboration with industry leaders to meet real-world needs.",
    },
    {
        serialNo: 2,
        heading: "Hands-On Learning",
        para: "Translate classroom learning into real-world projects, honing your skills and building a robust portfolio.",
    },
    {
        serialNo: 3,
        heading: "Expert-led Guidance",
        para: "Leverage the knowledge and experience of seasoned professionals to accelerate your career growth.",
    },
];

export const partnerCardData = [
    {
        partnerName: "Google",
        description:
            "Collaborate with industry leaders to deliver cutting-edge training and career opportunities.",
        // Image: googleLogo,
    },
    {
        partnerName: "IBM",
        description:
            "Leverage the expertise of global technology giants to elevate the learning experience.",
        // Image: ibmLogo,
    },
];

export const temonialData = [
    {
        studentName: "akshay",
    },
];
