import React from "react";
import Slider from "react-slick";
import "./CareerShapingActivities.css";
import { Link } from "react-router-dom";

const CareerShapingActivities = ({rec_course}) => {
  console.log(rec_course);

  rec_course && rec_course.map((data) => {
    console.log(data.courseType, data.course_name);
  })

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    cssEase: "ease-in-out",
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    // afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="career-slider-wrapper">
      <h3 className="notice_heading">Career Shaping Activities</h3>
      <Slider
        {...settings}
        // ref={sliderRef}
        // onMouseEnter={() => sliderRef.current.slickPause()}
        // onMouseLeave={() => sliderRef.current.slickPlay()}
      >
        {rec_course && rec_course.map((data, index) => data.courseType === "Live Session" && (
          <div className="slick-slide-wrapper" key={index}>
            <div
              className="image-card"
              style={{ backgroundImage: `url(${data.image})` }}
            >
              <div className="image-card-overlay">
                <h2 className="image-card-title">{data.course_name}</h2>
                <Link
                  to="/courses/gen-ai-builder---xpress"
                  className="image-card-button"
                >
                  Click to Explore
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      {/* <div className="custom-nav-wrapper">
        <div
          className="arrow_"
          onClick={() => {
            sliderRef.current.slickPrev();
            setActiveDot(0); // left dot highlighted on next
          }}
        >
          &#9664;
        </div>

        <div className="dot-group">
          {[0, 1, 2].map((dotIndex) => (
            <div
              key={dotIndex}
              className={`dot ${dotIndex === activeDot ? "current" : ""}`}
            ></div>
          ))}
        </div>

        <div
          className="arrow_"
          onClick={() => {
            sliderRef.current.slickNext();
            setActiveDot(2); // right dot highlighted on prev
          }}
        >
          &#9654;
        </div>
      </div> */}
    </div>
  );
};

export default CareerShapingActivities;
