import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "./CareerShapingActivities.css";
import { Link } from "react-router-dom";

const CareerShapingActivities = () => {
  const [cardData, setCardData] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [activeArrow, setActiveArrow] = useState(null);
  const sliderRef = useRef(null);
  const [activeDot, setActiveDot] = useState(1);

  useEffect(() => {
    // Dummy data
    const data = [
      {
        id: 1,
        title: "Heading 1",
        imageUrl:
          "https://images.unsplash.com/photo-1599566150163-29194dcaad36",
      },
      {
        id: 2,
        title: "Heading 2",
        imageUrl:
          "https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg",
      },
      {
        id: 3,
        title: "Heading 3",
        imageUrl:
          "https://img.freepik.com/free-vector/luxury-watercolor-leaves-seamless-pattern-design_44538-11298.jpg?semt=ais_hybrid&w=740",
      },
      {
        id: 4,
        title: "Heading 4",
        imageUrl:
          "https://img.freepik.com/free-vector/green-leaves-pattern-background_23-2148701633.jpg?w=740&t=st=1718556703~exp=1718557303~hmac=99c331f7d2ac62305b1472210d72820c2a8ea1ac1eac0bcf20c8411b205c0a91",
      },
      {
        id: 5,
        title: "Heading 5",
        imageUrl:
          "https://img.freepik.com/free-vector/watercolor-floral-pattern_23-2148722455.jpg?w=740&t=st=1718556753~exp=1718557353~hmac=7bdbb06f75829518895b2a7f1228e2f4de7a3033f0336a4e4b45e190edcc53a4",
      },
      {
        id: 6,
        title: "Heading 6",
        imageUrl:
          "https://img.freepik.com/free-vector/pastel-flower-pattern-background_53876-98866.jpg?w=740&t=st=1718556835~exp=1718557435~hmac=273ae3bce5c7d70b246e9e137f213173ca64a9e5b41b5cd7e12584ffabec0c91",
      },
      {
        id: 7,
        title: "Heading 7",
        imageUrl:
          "https://img.freepik.com/free-vector/hand-drawn-botanical-pattern_23-2148944096.jpg?w=740&t=st=1718556910~exp=1718557510~hmac=479c7f6b78ff98d73b5562383e3db4de1ee38277e72be90ab96461e225c54e8f",
      },
    ];
    setCardData(data);
  }, []);

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
    afterChange: (index) => setCurrentSlide(index),
  };

  return (
    <div className="career-slider-wrapper">
      <h3 className="notice_heading">Career Shaping Activities</h3>
      <Slider
        {...settings}
        ref={sliderRef}
        onMouseEnter={() => sliderRef.current.slickPause()}
        onMouseLeave={() => sliderRef.current.slickPlay()}
      >
        {cardData.map((data) => (
          <div className="slick-slide-wrapper" key={data.id}>
            <div
              className="image-card"
              style={{ backgroundImage: `url(${data.imageUrl})` }}
            >
              <div className="image-card-overlay">
                <h2 className="image-card-title">{data.title}</h2>
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

      <div className="custom-nav-wrapper">
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
      </div>
    </div>
  );
};

export default CareerShapingActivities;
