import React from 'react'
import './LearningPathway.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


const LearningData = [
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway3_czwbkj.png",
        "courseCode": "Gen AI",
        "heading": "GenAI Explorer – Year 1",
        "para": "Discover the fundamentals of Generative AI and learn how to communicate with LLMs through prompt engineering.",
        course_slug_name: "Gen AI Explorer"
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway2_yf0now.png",
        "courseCode": "IoT",
        "heading": "GenAI Developer – Year 2",
        "para": "Dive deeper into Gemini, Vertex AI, and Google Cloud to start building smart, scalable AI solutions.",
        course_slug_name: "Gen AI Developer"
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway1_dck8hd.png",
        "courseCode": "Programming",
        "heading": "GenAI Integrator – Year 3",
        "para": "Apply GenAI to real-world domains—Logistics, Retail, Healthcare, and App Development.",
        course_slug_name: "Gen AI Integrator"
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747486476/startup-employee-looking-business-charts-using-ai-software_qcqars.jpg",
        "courseCode": "Programming",
        "heading": "GenAI Builder – Year 4",
        "para": "Combine domain mastery with full-stack AI project development. Build solutions that solve real problems.",
        course_slug_name: "Gen AI Integrator"
    },
]

const LearningPathway = () => {

    const settings = {
        className: "center",
        infinite: true,
        // centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        speed: 500,
        // autoplaySpeed: 500,
        cssEase: "linear",
        arrows: true,
        autoplay: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };

    const navigate = useNavigate()

    const slugify = (str) =>
        str
            .toLowerCase()
            .replace(/ /g, '-')
            .replace(/[^\w-]+/g, '');

    const handleViewProgram = (data) => {
        const courseSlug = slugify(data.course_slug_name);
        console.log("Course URL: /courses/", courseSlug);
        navigate(`/courses/${courseSlug}`);
    }
    return (
        <div>
            <Slider {...settings} className="carousel-slider">
                {LearningData.map((student, index) => (
                    <div className="slide-wrapper" key={index}>
                        <div className='learningPathwayCard_container'>
                            <div style={{ backgroundImage: `url('${student.image}')` }}></div>
                            <h1>{student.heading}</h1>
                            <p>{student.para}</p>
                            <button onClick={() => {handleViewProgram(student)}} className='btnOne homeProgramBtn'>Explore this Program</button>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default LearningPathway
