import React, { useState } from 'react'
import './Hackathon_new.css'
import Navbar from '../layout/Navbar/Navbar'
import heroImage from './images/hackathon-hero.jpg';

const faqsData = [
  {
    question: "Can I join without a team?",
    answer: "Yes. You can participate solo or find teammates during the event.",
  },
  {
    question: "How do I change my problem statement?",
    answer:
      "You can change it until final submission. Just re-select from the Problem Statements section; the form will update automatically.",
  },
  {
    question: "What tech stack is allowed?",
    answer:
      "Any stack is fine as long as you can demo it in the browser or via a recorded video and share the source.",
  },
];

const Hackathon = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <Navbar />
      
      {/* --- Hero Section --- */}
      <header className="hackathon-hero-header">
        <div className="hackathon-hero-container">
          <div className="hackathon-hero-text">
            <h1 className="hackathon-hero-title">Campus Hackathon 2025</h1>
            <p className="hackathon-hero-subtitle">
              Build bold ideas with your crew. Code, design, and ship in 24 hours. Prizes, mentors, and serious vibes.
            </p>
            <div className="hackathon-hero-buttons">
              <a href="#problems" className="hackathon-btn hackathon-btn-outline hackathon-hover-scale">
                Explore Problem Statements
              </a>
            </div>
          </div>
          <div className="hackathon-hero-image-container">
            <img
              src={heroImage}
              alt="Vibrant Gen-Z hackathon abstract with gradient blobs and neon lines"
              loading="lazy"
              className="hackathon-hero-image hackathon-hover-scale"
            />
            <div className="hackathon-hero-gradient"></div>
          </div>
        </div>
      </header>

      {/* --- Overview Section --- */}
      <section id="overview" className="hackathon-section">
        <div className="hackathon-overview">
          <h2 className="hackathon-heading">Overview</h2>
          <p className="hackathon-subtitle">
            Build impactful solutions in 24 hours with mentors, workshops, and a buzzing community. 
            Choose a problem statement, form a team, and ship something you’re proud of.
          </p>
        </div>
      </section>

      {/* --- Why Participate Section --- */}
      <section id="why-participate" className="hackathon-section">
        <div className="hackathon-container">
          <article className="hackathon-article">
            <h2 className="hackathon-heading">Why participate?</h2>
            <ul className="hackathon-list">
              <li>Learn fast with mentor guidance and hands-on building.</li>
              <li>Showcase your work to judges and industry guests.</li>
              <li>Win prizes and boost your portfolio or resume.</li>
              <li>Collaborate with new teammates across domains.</li>
            </ul>
          </article>
          <article className="hackathon-article">
            <h3 className="hackathon-subheading">What you get</h3>
            <ul className="hackathon-list">
              <li>Access to resources and starter kits.</li>
              <li>Swag for finalists and winners.</li>
              <li>Networking with peers, mentors, and recruiters.</li>
            </ul>
          </article>
        </div>
      </section>

      {/* --- Who Can Participate Section --- */}
      <section id="who-can-participate" className="hackathon-section">
        <div className="hackathon-container">
          <h2 className="hackathon-subheading">Who can participate</h2>
          <p className="hackathon-subtitle">
            Open to students from all disciplines and recent graduates. 
            Teams of up to 5 members are allowed; solo participation is welcome too.
          </p>
        </div>
      </section>

      {/* --- Hackathon Journey Section --- */}
      <section id="hackathon-journey" className="hackathon-journey-section">
        <div className="hackathon-journey-container">
          <h2 className="hackathon-journey-title">Hackathon Journey</h2>
          <ol className="hackathon-journey-list-container">
            <li className="hackathon-journey-list-item">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">1</span>
                <span className="hackathon-journey-step-title">Registration</span>
              </div>
              <p className="hackathon-journey-step-desc">Create your team and sign up.</p>
            </li>
            <li className="hackathon-journey-list-item">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">2</span>
                <span className="hackathon-journey-step-title">Problem statement selection</span>
              </div>
              <p className="hackathon-journey-step-desc">Select one statement that inspires you.</p>
            </li>
            <li className="hackathon-journey-list-item">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">3</span>
                <span className="hackathon-journey-step-title">Idea submission</span>
              </div>
              <p className="hackathon-journey-step-desc">Share your concept and approach.</p>
            </li>
            <li className="hackathon-journey-list-item">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">4</span>
                <span className="hackathon-journey-step-title">Milestones & mentoring</span>
              </div>
              <p className="hackathon-journey-step-desc">Build iteratively and get feedback.</p>
            </li>
            <li className="hackathon-journey-list-item">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">5</span>
                <span className="hackathon-journey-step-title">Shortlisting</span>
              </div>
              <p className="hackathon-journey-step-desc">Top teams invited to the on-site event.</p>
            </li>
            <li className="hackathon-journey-list-item">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">6</span>
                <span className="hackathon-journey-step-title">Live Hackathon Event</span>
              </div>
              <p className="hackathon-journey-step-desc">Code, ship, demo, and win!</p>
            </li>
          </ol>
        </div>
      </section>

      {/* --- FAQs Section --- */}
      <section id="faqs" className="faqs-section">
        <div className="faqs-container">
          <h2 className="faqs-title">FAQs</h2>

          <div className="faqs-list">
            {faqsData.map((faq, index) => (
              <div key={index} className="faqs-item">
                <button
                  className={`faqs-question ${activeIndex === index ? "active" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  {faq.question}
                  <span className="faqs-icon">
                    {activeIndex === index ? "▲" : "▼"}
                  </span>
                </button>
                {activeIndex === index && (
                  <div className="faqs-answer">{faq.answer}</div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Hackathon;
