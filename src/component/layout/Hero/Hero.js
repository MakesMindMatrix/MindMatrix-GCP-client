import React from 'react'
import './Hero.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Hero = () => {
    const HeroData = [
        {
            image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525910/Hero1_yarpkb.png",
        },
        {
            image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525908/Hero2_mx0anj.jpg",
        },
        {
            image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525909/Hero3_qc1bsm.png",
        },
        {
            image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525907/Hero4_kgvcia.jpg",
        },
    ];

    const settings = {
        className: "center",
        infinite: true,
        centerMode: true,
        centerPadding: '60px',
        slidesToShow: 5,
        speed: 2000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: true,
        autoplay: true,
        focusOnSelect: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
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
        <div className="carousel-wrapper" style={{backgroundColor: 'white'}}>
            <Slider {...settings} className="carousel-slider">
                {HeroData.map((student, index) => (
                    <div className="slide-wrapper" key={index}>
                        <div className="image-slide">
                            <img src={student.image} alt={student.name} className="student-image hero-carousel-image" />
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default Hero
