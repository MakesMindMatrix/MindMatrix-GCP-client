import React from 'react'
import './LearningPathway.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const LearningData = [
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway1_dck8hd.png",
        "courseCode": "Gen AI",
        "heading": "Generative AI Learning Program",
        "para": "Learn AI concepts, algorithms, and models like GANs and transformers. Hands-on experience in building AI-driven applications across industries."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway2_yf0now.png",
        "courseCode": "IoT",
        "heading": "IoT for Smart Infrastructure",
        "para": "Explore IoT applications in smart infrastructure, including devices, communication protocols, and real-world use cases like smart cities and energy management."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway3_czwbkj.png",
        "courseCode": "Programming",
        "heading": "User Experience Management in Android Development",
        "para": "Learn UX principles for Android apps, focusing on usability, accessibility, and user-centered design to enhance engagement."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway3_czwbkj.png",
        "courseCode": "Programming",
        "heading": "User Experience Management in Android Development",
        "para": "Learn UX principles for Android apps, focusing on usability, accessibility, and user-centered design to enhance engagement."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway3_czwbkj.png",
        "courseCode": "Programming",
        "heading": "User Experience Management in Android Development",
        "para": "Learn UX principles for Android apps, focusing on usability, accessibility, and user-centered design to enhance engagement."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway3_czwbkj.png",
        "courseCode": "Programming",
        "heading": "User Experience Management in Android Development",
        "para": "Learn UX principles for Android apps, focusing on usability, accessibility, and user-centered design to enhance engagement."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway3_czwbkj.png",
        "courseCode": "Programming",
        "heading": "User Experience Management in Android Development",
        "para": "Learn UX principles for Android apps, focusing on usability, accessibility, and user-centered design to enhance engagement."
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
    return (
        <div>
            <Slider {...settings} className="carousel-slider">
                {LearningData.map((student, index) => (
                    <div className="slide-wrapper" key={index}>
                        <div className='learningPathwayCard_container'>
                            <div style={{ backgroundImage: `url('${student.image}')` }}></div>
                            <h1>{student.heading}</h1>
                            <p>{student.para}</p>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default LearningPathway
