import RecCard from "./Cards/RecCard";
import "./ExploreMembership.css";
import Navbar from "../layout/Navbar/Navbar";
import { useState } from "react";
import pin from "../Home/images/pin.svg";

const ExploreMembership = () => {
  const [selectedMembership, setSelectedMembership] = useState("Trailblazer");
  const membershipColors = {
    Trailblazer: "trailblazer-highlight",
    Achiever: "achiever-highlight",
    Explorer: "explorer-highlight",
  };

  const courses = [
    {
      course_name: "Gen AI Developer–Xpress",
      courseType: "Certificate Program",
      image: "https://via.placeholder.com/300x200.png?text=GenAI+Developer",
      batch_start_date: "2025-05-17",
      courseOutline: [
        "GenAI Fundamentals",
        "Model Basics",
        "Tools Overview",
        "Use Cases",
      ],
      instructor_section: {
        instructor_name: "Aniket Kumar",
        instructor_designation: "Program Director @MindMatrix",
        instructor_image: "https://via.placeholder.com/80?text=TD",
      },
    },
    {
      course_name: "IOT for Smart Infrastructure",
      courseType: "AEC",
      image: "https://via.placeholder.com/300x200.png?text=IOT+Smart+Infra",
      batch_start_date: "2025-06-01",
      courseOutline: [
        "IoT Architecture",
        "Sensors & Actuators",
        "Data Processing",
        "Smart Cities",
      ],
      instructor_section: {
        instructor_name: "Anusha Roy",
        instructor_designation: "Senior IoT Engineer @InfraTech",
        instructor_image: "https://via.placeholder.com/80?text=AR",
      },
    },
    {
      course_name: "Web Development Bootcamp",
      courseType: "Certificate Program",
      image: "https://via.placeholder.com/300x200.png?text=Web+Dev+Bootcamp",
      batch_start_date: "2025-07-10",
      courseOutline: [
        "HTML & CSS",
        "JavaScript & ES6",
        "React.js Basics",
        "API Integration",
      ],
      instructor_section: {
        instructor_name: "Ravi Kumar",
        instructor_designation: "Frontend Engineer @CodeCrafters",
        instructor_image: "https://via.placeholder.com/80?text=RK",
      },
    },
    {
      course_name: "AI for Business Leaders",
      courseType: "Certificate Program",
      image:
        "https://via.placeholder.com/300x200.png?text=AI+Business+Leadership",
      batch_start_date: "2025-07-25",
      courseOutline: [
        "AI Strategy",
        "Data-Driven Culture",
        "Ethics in AI",
        "Use Cases in Business",
      ],
      instructor_section: {
        instructor_name: "Meera Shah",
        instructor_designation: "AI Consultant @BizSolutions",
        instructor_image: "https://via.placeholder.com/80?text=MS",
      },
    },
    {
      course_name: "Blockchain Essentials",
      courseType: "AEC",
      image: "https://via.placeholder.com/300x200.png?text=Blockchain+Basics",
      batch_start_date: "2025-08-05",
      courseOutline: [
        "Blockchain Technology",
        "Smart Contracts",
        "Web3 Applications",
        "Security in Blockchain",
      ],
      instructor_section: {
        instructor_name: "Nikhil Verma",
        instructor_designation: "Blockchain Developer @ChainCore",
        instructor_image: "https://via.placeholder.com/80?text=NV",
      },
    },
    {
      course_name: "Cloud Fundamentals with Azure",
      courseType: "Certificate Program",
      image: "https://via.placeholder.com/300x200.png?text=Cloud+Azure",
      batch_start_date: "2025-08-20",
      courseOutline: [
        "Cloud Basics",
        "Azure Services",
        "Compute & Storage",
        "Deploying Web Apps",
      ],
      instructor_section: {
        instructor_name: "Priya Das",
        instructor_designation: "Cloud Trainer @AzureHub",
        instructor_image: "https://via.placeholder.com/80?text=PD",
      },
    },
  ];

  return (
    <>
      <Navbar />
      <div className="exclusive-container">
        <h1 className="exclusive-heading">MindMatrix Exclusive Offerings</h1>
        <p className="exclusive-subtext">Select the plan that fits you most</p>

        {/* Membership Plan Buttons */}
        <div className="membership-buttons">
          {["Trailblazer", "Achiever", "Explorer"].map((membership) => (
            <div
              key={membership}
              className={`membership-option ${
                selectedMembership === membership
                  ? membershipColors[membership]
                  : ""
              }`}
            >
              {membership === "Trailblazer" ? (
                <span className="preference-label">(Highly Preferred)</span>
              ) : (
                <span className="preference-label-placeholder"></span>
              )}
              <button
                className={`btn ${
                  selectedMembership === membership ? "active-btn" : ""
                }`}
                onClick={() => setSelectedMembership(membership)}
              >
                <span className="icon">🏅</span> {membership} Membership
              </button>
            </div>
          ))}
        </div>

        {/* Trailblazer Section */}
        <div className="membership-details">
          <div className="membership-info">
            <h2>{selectedMembership} Membership Access</h2>
            <p>Validity: Till December 2025</p>
            <p>Lead with clarity through premium handholding.</p>
            <div className="price-box">
              <span className="original-price">₹499</span>
              <span className="discount">10% off</span>
              <span className="final-price">₹450</span>
            </div>
            <button className="buy-now">Buy Now</button>
          </div>
          <div className="membership-image">
            <img
              src="https://res.cloudinary.com/djsg8kbaz/image/upload/v1745835437/payment_modal_rekmbb.jpg"
              alt="Membership visual"
            />
          </div>
        </div>

        {/* Feature Panels */}
        <div className="benefits-section">
          <div className="what-you-get">
            <h3>What you'll Get</h3>
            <ul>
              <li>Prepare for Industry Certification Exam</li>
              <li>Over 25 Engaging Exercises</li>
              <li>Basic options terminology and concepts</li>
              <li>Understanding what options are and how they work</li>
              <li>Hours and Hours of Video Instruction</li>
              <li>Introduction to call and put options</li>
              <li>Basic strategies for beginners</li>
              <li>Earn Certification that is Proof of your Competence</li>
            </ul>
          </div>
          <div className="membership-features">
            <h3>Membership Features</h3>
            <ul>
              {[
                "Beginner to intermediate",
                "40+ hours of video content",
                "10 modules with 50+ lessons",
                "Lifetime access with free updates",
                "No prior trading experience required",
              ].map((feature, index) => (
                <li key={index}>
                  <img src={pin} alt="icon" className="feature-icon" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Course Cards */}
        <h2 className="gold-membership-title">
          All Program under Gold Membership
        </h2>
        <div className="course-cards">
          {courses.map((course, index) => (
            <RecCard key={index} data={course} />
          ))}
        </div>
      </div>
    </>
  );
};

export default ExploreMembership;
