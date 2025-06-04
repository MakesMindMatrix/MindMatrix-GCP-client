import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './AuthLeft.css'

const ImageData = [
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747631677/Learning_Icon_new_xmq4sp.png"
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747484516/_11A0131_npbiiw.jpg"
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747484508/Copy_of_IMG_4556_mrrjtm.jpg"
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525910/Hero1_yarpkb.png"
    },
]

const AuthLeft = () => {
    const settings = {
        className: "center",
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        speed: 1000,
        autoplaySpeed: 3000,
        cssEase: "linear",
        arrows: true,
        autoplay: true,
        focusOnSelect: true,
    };
    return (
        <div>
            <Slider {...settings} className="carousel-slide-auth">
                {ImageData.map((student, index) => (
                    <div className="slide-wrapper-auth" key={index}>
                        <div className='authLeft_image_container'>
                            <div style={{ backgroundImage: `url('${student.image}')` }}></div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    )
}

export default AuthLeft
