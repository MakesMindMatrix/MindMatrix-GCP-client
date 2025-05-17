import React from 'react'
import './Testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    name: "Sushma",
    role: "Junior SDE, Zomato",
    text: `I’m Sushma from Sri Siddhartha Institute of Technology, Tumkur. I just completed the Generative AI in Biomedical Field course. It was very useful for the upcoming generation in the biomedical field. The session was interactive, and I really enjoyed it. The instructors were friendly and taught us many important things about using Generative AI in our domain. Thank you!`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747467851/WhatsApp_Image_2025-05-17_at_13.01.18_5d108613_yl3dn3.jpg",
  },
  {
    name: "Abhishek",
    role: "Data Analyst, TCS",
    text: `Session on Generative AI by the MindMatrix team was really useful for us in Biomedical Engineering. We discovered many tools we weren’t aware of earlier and learned how to interact with AI. It was exciting to explore ways to match tools with our own creativity. My friends and I had a lot of fun — it was a great session. Thank you, MindMatrix!`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747467851/WhatsApp_Image_2025-05-17_at_12.56.32_9d1daf0e_giuw9p.jpg",
  },
  {
    name: "Varun Patel",
    role: "Frontend Developer, Paytm",
    text: `MindMatrix’s GenAI session opened up new possibilities for me in the biomedical field. It was insightful, interactive, and gave me tools I had never used before.`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747467850/WhatsApp_Image_2025-05-17_at_13.07.31_116f31ef_rfvrnk.jpg",
  },
  {
    name: "Pujita",
    role: "Software Engineer Intern, Google",
    text: `I attended the GenAI Tools in Biomedical workshop by MindMatrix—it was a very interactive session. I felt happy, curious, and gained a lot of knowledge through the activities and quizzes.`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747467850/WhatsApp_Image_2025-05-17_at_13.12.05_ca5cae13_rid0di.jpg",
  },
  {
    name: "Pranith Nandan",
    role: "Backend Developer, Swiggy",
    text: `The Build with AI Gemini Flash 2.5 AI session by MindMatrix at BMS College was one of the most informative experiences I’ve had. The workshop, along with the inspiring talk by the AI officer, truly sparked our curiosity and learning.`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747473318/WhatsApp_Image_2025-05-17_at_13.23.24_cdf81d6a_guzjjv.jpg",
  },
  {
    name: "Shweta",
    role: "Backend Developer, Swiggy",
    text: `I’m Shweta from SSIT, Biomedical Engineering. The 3-day workshop on Generative AI in Biomedical Engineering was excellent—we learned many useful applications and new technologies that will help us in our field`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747473318/WhatsApp_Image_2025-05-17_at_13.27.13_e28a5d0a_jpgmht.jpg",
  },
  // {
  //   name: "Aman Verma",
  //   role: "Backend Developer, Swiggy",
  //   text: `Every topic was explained with clarity. The placement assistance was a huge bonus.`,
  //   image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746527069/Student5_sxbomk.png",
  // },
  // {
  //   name: "Aman Verma",
  //   role: "Backend Developer, Swiggy",
  //   text: `Every topic was explained with clarity. The placement assistance was a huge bonus.`,
  //   image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746527069/Student5_sxbomk.png",
  // },
];

const Testimonial = () => {

  const settings = {
    className: "center",
    infinite: true,
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 5,
    speed: 2000,
    autoplaySpeed: 2000,
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
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  };


  return (
    <>
      <div className="carousel-wrapper">
        <h2 className="carousel-heading">
          <span className="highlight">Real results</span> from
          <br />
          real students
        </h2>

        <Slider {...settings} className="carousel-slider">
          {testimonials.map((student, index) => (
            <div className="slide-wrapper" key={index}>
              <div className="image-slide">
                <img src={student.image} alt={student.name} className="student-image" />
                <div className="testimonial-content">
                  <p className="testimonial-text">“{student.text}”</p>
                  <p className="testimonial-name" style={{color: 'white'}}>{student.name}</p>
                  {/* <p className="testimonial-role">{student.role}</p> */}
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  )
}

export default Testimonial
