import React from 'react'
import './Testimonial.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const testimonials = [
  {
    name: "Aryan Gupta",
    role: "Junior SDE, Zomato",
    text: `MindMatrix gave me the skills and certifications I needed to stand out in interviews. 
    The courses were practical, industry-focused, and easy to fit into my college schedule. 
    Thanks to MindMatrix, I landed my dream job right after graduation!`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746527070/Student1_bfmg0w.png",
  },
  {
    name: "Priya Sharma",
    role: "Data Analyst, TCS",
    text: `The real-world projects at MindMatrix gave me hands-on experience. I felt confident applying for jobs right after completing my course.`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746527071/Student2_w7ds8z.png",
  },
  {
    name: "Rahul Mehta",
    role: "Frontend Developer, Paytm",
    text: `The course content was super relevant and updated. The instructors were amazing and always ready to help.`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746527070/Student3_psapoe.png",
  },
  {
    name: "Sneha Kapoor",
    role: "Software Engineer Intern, Google",
    text: `MindMatrix made it easy to learn even with a busy college schedule. Highly recommend it!`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746527070/Student4_mrqmh6.png",
  },
  {
    name: "Aman Verma",
    role: "Backend Developer, Swiggy",
    text: `Every topic was explained with clarity. The placement assistance was a huge bonus.`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746527069/Student5_sxbomk.png",
  },
  {
    name: "Aman Verma",
    role: "Backend Developer, Swiggy",
    text: `Every topic was explained with clarity. The placement assistance was a huge bonus.`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746527069/Student5_sxbomk.png",
  },
  {
    name: "Aman Verma",
    role: "Backend Developer, Swiggy",
    text: `Every topic was explained with clarity. The placement assistance was a huge bonus.`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746527069/Student5_sxbomk.png",
  },
  {
    name: "Aman Verma",
    role: "Backend Developer, Swiggy",
    text: `Every topic was explained with clarity. The placement assistance was a huge bonus.`,
    image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746527069/Student5_sxbomk.png",
  },
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
                  <p className="testimonial-name">{student.name}</p>
                  <p className="testimonial-role">{student.role}</p>
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
