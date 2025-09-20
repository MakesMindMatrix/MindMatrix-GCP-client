import React, { useEffect, useState } from 'react'
import './Hackathon_new.css'
import Navbar from '../layout/Navbar/Navbar'
import heroImage from './images/hackathon-hero.jpg';
import HackathonCard from './Cards/HackathonCard';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

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

const rec_course = [{
    "course_name": "Gen AI Builder - Xpress",
    "course_description": "Master real-world AI application development using Vertex AI and Gemini through hands-on tasks, enabling you to build intelligent solutions in your chosen domain track.",
    "created_at": "2025-05-17T13:14:29.489218+00:00",
    "course_style": "COHORT_BASED",
    "difficulty_level": "BEGINNER",
    "batch_name": "Xpress - Builder",
    "batch_start_date": "2025-07-01T18:30:00+00:00",
    "batch_end_date": "2025-09-30T08:40:55.431+00:00",
    "external_batch_id": "MMVTUCTGA04BDX",
    "batch_price": 11999,
    "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747486476/startup-employee-looking-business-charts-using-ai-software_qcqars.jpg",
    "publishStatus": "recommended",
    "courseOutline": [
        "Intro to AI & GenAI",
        "Understanding LLMs & Prompts",
        "Practical Prompting Techniques",
        "Ethics & AI Future Trends"
    ],
    "courseType": "Certificate Program",
    "instructor_section": {
        "instructor_name": "Tirumal Desai",
        "instructor_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1745560141/Tirumal-nobg_hv5pjw.png",
        "instructor_designation": "Instructor, Mind Matrix",
        "instructor_description": "Tirumal Desai is a Growth Lead at MindMatrix, specializing in e-learning and student engagement. With an engineering background, he focuses on instructional design, course development, and managing learning platforms. He has mentored students and contributed to industry-aligned learning solutions."
    }
}, {
    "course_name": "Gen AI Builder - Xpress",
    "course_description": "Master real-world AI application development using Vertex AI and Gemini through hands-on tasks, enabling you to build intelligent solutions in your chosen domain track.",
    "created_at": "2025-05-17T13:14:29.489218+00:00",
    "course_style": "COHORT_BASED",
    "difficulty_level": "BEGINNER",
    "batch_name": "Xpress - Builder",
    "batch_start_date": "2025-07-01T18:30:00+00:00",
    "batch_end_date": "2025-09-30T08:40:55.431+00:00",
    "external_batch_id": "MMVTUCTGA04BDX",
    "batch_price": 11999,
    "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747486476/startup-employee-looking-business-charts-using-ai-software_qcqars.jpg",
    "publishStatus": "recommended",
    "courseOutline": [
        "Intro to AI & GenAI",
        "Understanding LLMs & Prompts",
        "Practical Prompting Techniques",
        "Ethics & AI Future Trends"
    ],
    "courseType": "Certificate Program",
    "instructor_section": {
        "instructor_name": "Tirumal Desai",
        "instructor_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1745560141/Tirumal-nobg_hv5pjw.png",
        "instructor_designation": "Instructor, Mind Matrix",
        "instructor_description": "Tirumal Desai is a Growth Lead at MindMatrix, specializing in e-learning and student engagement. With an engineering background, he focuses on instructional design, course development, and managing learning platforms. He has mentored students and contributed to industry-aligned learning solutions."
    }
}, {
    "course_name": "Gen AI Builder - Xpress",
    "course_description": "Master real-world AI application development using Vertex AI and Gemini through hands-on tasks, enabling you to build intelligent solutions in your chosen domain track.",
    "created_at": "2025-05-17T13:14:29.489218+00:00",
    "course_style": "COHORT_BASED",
    "difficulty_level": "BEGINNER",
    "batch_name": "Xpress - Builder",
    "batch_start_date": "2025-07-01T18:30:00+00:00",
    "batch_end_date": "2025-09-30T08:40:55.431+00:00",
    "external_batch_id": "MMVTUCTGA04BDX",
    "batch_price": 11999,
    "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747486476/startup-employee-looking-business-charts-using-ai-software_qcqars.jpg",
    "publishStatus": "recommended",
    "courseOutline": [
        "Intro to AI & GenAI",
        "Understanding LLMs & Prompts",
        "Practical Prompting Techniques",
        "Ethics & AI Future Trends"
    ],
    "courseType": "Certificate Program",
    "instructor_section": {
        "instructor_name": "Tirumal Desai",
        "instructor_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1745560141/Tirumal-nobg_hv5pjw.png",
        "instructor_designation": "Instructor, Mind Matrix",
        "instructor_description": "Tirumal Desai is a Growth Lead at MindMatrix, specializing in e-learning and student engagement. With an engineering background, he focuses on instructional design, course development, and managing learning platforms. He has mentored students and contributed to industry-aligned learning solutions."
    }
}, {
    "course_name": "Gen AI Builder - Xpress",
    "course_description": "Master real-world AI application development using Vertex AI and Gemini through hands-on tasks, enabling you to build intelligent solutions in your chosen domain track.",
    "created_at": "2025-05-17T13:14:29.489218+00:00",
    "course_style": "COHORT_BASED",
    "difficulty_level": "BEGINNER",
    "batch_name": "Xpress - Builder",
    "batch_start_date": "2025-07-01T18:30:00+00:00",
    "batch_end_date": "2025-09-30T08:40:55.431+00:00",
    "external_batch_id": "MMVTUCTGA04BDX",
    "batch_price": 11999,
    "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747486476/startup-employee-looking-business-charts-using-ai-software_qcqars.jpg",
    "publishStatus": "recommended",
    "courseOutline": [
        "Intro to AI & GenAI",
        "Understanding LLMs & Prompts",
        "Practical Prompting Techniques",
        "Ethics & AI Future Trends"
    ],
    "courseType": "Certificate Program",
    "instructor_section": {
        "instructor_name": "Tirumal Desai",
        "instructor_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1745560141/Tirumal-nobg_hv5pjw.png",
        "instructor_designation": "Instructor, Mind Matrix",
        "instructor_description": "Tirumal Desai is a Growth Lead at MindMatrix, specializing in e-learning and student engagement. With an engineering background, he focuses on instructional design, course development, and managing learning platforms. He has mentored students and contributed to industry-aligned learning solutions."
    }
}]

const Hackathon = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const { teamRegistration } = useSelector( (state) => state.hackathon);
  console.log("Found existing team registration",teamRegistration);
  const toggleFaq = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const slugify = (str) =>
    str
        .toLowerCase()
        .replace(/ /g, "-")
        .replace(/[^\w-]+/g, "");

  // ✅ Watch for registration success
  useEffect(() => {
    if (teamRegistration) {
      // 1. Send emails (if backend doesn’t already handle it)
      if (teamRegistration.participants_emails) {
          console.log("Send emails to:", teamRegistration.participants_emails);
          // optionally trigger another action like dispatch(sendEmails(teamRegistration.participant_emails))
      }

      // 2. Redirect to course landing page
      if (teamRegistration.problemStatement) {
          const coure_slug = slugify(teamRegistration.problemStatement?.title || "")
          console.log("Navigate to\n",`/courses/${coure_slug}`)
      }

      toast.success("Team Registered Successfully")
    }
  }, [teamRegistration]);

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
            <li className="hackathon-journey-list-item  hackathon-hover-scale">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">1</span>
                <span className="hackathon-journey-step-title">Registration</span>
              </div>
              <p className="hackathon-journey-step-desc">Create your team and sign up.</p>
            </li>
            <li className="hackathon-journey-list-item hackathon-hover-scale">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">2</span>
                <span className="hackathon-journey-step-title">Problem statement selection</span>
              </div>
              <p className="hackathon-journey-step-desc">Select one statement that inspires you.</p>
            </li>
            <li className="hackathon-journey-list-item hackathon-hover-scale">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">3</span>
                <span className="hackathon-journey-step-title">Idea submission</span>
              </div>
              <p className="hackathon-journey-step-desc">Share your concept and approach.</p>
            </li>
            <li className="hackathon-journey-list-item hackathon-hover-scale">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">4</span>
                <span className="hackathon-journey-step-title">Milestones & mentoring</span>
              </div>
              <p className="hackathon-journey-step-desc">Build iteratively and get feedback.</p>
            </li>
            <li className="hackathon-journey-list-item hackathon-hover-scale">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">5</span>
                <span className="hackathon-journey-step-title">Shortlisting</span>
              </div>
              <p className="hackathon-journey-step-desc">Top teams invited to the on-site event.</p>
            </li>
            <li className="hackathon-journey-list-item hackathon-hover-scale">
              <div className="hackathon-journey-step-header">
                <span className="hackathon-journey-step-number">6</span>
                <span className="hackathon-journey-step-title">Live Hackathon Event</span>
              </div>
              <p className="hackathon-journey-step-desc">Code, ship, demo, and win!</p>
            </li>
          </ol>
        </div>
      </section>

      <section id="problems">
        {rec_course?.some((elm) => elm.publishStatus === "recommended") && (
          <div class="problem-header">
            <h2 class="problem-title">Problem Statements</h2>
            <p class="problem-subtitle">Pick exactly one to focus your build. You can change before submitting.</p>
          </div>
        )}
        <div className="hackathon_problem_container">
            {rec_course &&
            rec_course.map((elm, index) =>
                elm.publishStatus === "recommended" ? (
                <HackathonCard data={elm} key={index} />
                ) : null
            )}
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
