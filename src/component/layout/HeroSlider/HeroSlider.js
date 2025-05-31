import React from 'react'
import './HeroSlider.css'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeroSlider = () => {
    const Data = [
        {
            "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747466672/_11A0013_xv2pre.jpg"
        },
        {
            "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747466671/_11A0049_u4yuer.jpg"
        },
        {
            "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747466669/_11A0019_qcmygk.jpg"
        },
        {
            "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747466666/_11A0034_bo6sea.jpg"
        },
        {
            "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747484516/_11A0131_npbiiw.jpg"
        },
        {
            "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747484508/Copy_of_IMG_4556_mrrjtm.jpg"
        },
        {
            "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747489422/20250411_142435_1_oosuix.jpg"
        },
        {
            "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747489419/WhatsApp_Image_2025-04-18_at_4.59.38_PM_3_1_.jpeg_enuc3i.jpg"
        },
    ]

    const settings = {
        className: "center",
        infinite: true,
        // centerMode: true,
        centerPadding: '60px',
        slidesToShow: 1,
        speed: 500,
        // autoplaySpeed: 500,
        cssEase: "linear",
        // arrows: true,
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                }
            },
        ]
    };
    return (
        <div>
            <Slider {...settings} className="carousel-slid">
                {Data.map((student, index) => (
                    <div className="slide-wrappe" key={index}>
                        <div className='learningPathwayCard_contain heroImage'>
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

export default HeroSlider
