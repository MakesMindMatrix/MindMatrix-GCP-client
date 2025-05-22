import React, { useState } from 'react'
import './Recommendation.css'

const Recommendation = () => {
    const [recData, setRecData] = useState({
        "batch_id": "MMVTUCTGA01EXS",
        "course_name": "Gen AI Explorer",
        "course_banner_image": "",
        "course_card_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway3_czwbkj.png",
        "course_university": ["6477e0145e21f533c359a045"],
        "course_college": ["6477e1be5e21f533c359a078"],
        "course_branch": [],
        "course_semester": [1, 2],
        "hero_section": {
            "hero_title": "Gen AI Explorer",
            "hero_image": "https://drive.google.com/file/d/1T4yv1Lb2wFiRfDShoO5C_O5kCx3rtit-/view?usp=drive_link",
            "hero_description": "",
            "hero_button_content": "Enroll Now",
            "hero_button_type": "paid"
        },
        "what_you_get_section": {
            "points": [""]
        },
        "prerequisite_section": {
            "points": ["Basic computer literacy and internet navigation skills.", "Logical thinking and problem-solving aptitude.", "Curiosity about Artificial Intelligence concepts.", "No prior coding experience is required."]
        },
        "outcome_section": {
            "points": ["Define Generative AI and explain how it works.", "Craft effective prompts to guide AI models accurately.", "Evaluate and refine AI-generated outputs for quality.", "Apply prompt engineering to practical, real-world scenarios."]
        },
        "elective_course_section": {
            "cards": [""]
        },
        "instructor_section": {
            "instructor_name": "Tirumal Desai",
            "instructor_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1745560141/Tirumal-nobg_hv5pjw.png",
            "instructor_designation": "Instructor, Mind Matrix",
            "instructor_description": "Tirumal Desai is a Growth Lead at MindMatrix, specializing in e-learning and student engagement. With an engineering background, he focuses on instructional design, course development, and managing learning platforms. He has mentored students and contributed to industry-aligned learning solutions."
        },
        "curriculum_section": {
            "modules": [
                {
                    "title": "Introduction to AI & Generative AI",
                    "description": "Explore fundamental AI concepts and the specifics of Generative AI models. Understand their capabilities and potential applications."
                }
            ],
            "curriculum_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1745043630/GAI_vawsec.jpg"
        },
        "motivation_section": {
            "quote": "",
            "button_content": "",
            "button_type": "paid"
        }
    }

    )
    return (
        <div>
            <h1>Batch Id</h1>
            <h1>Course Name</h1>
            <h1>Course banner Image</h1>
            <h1>Course Card Image</h1>
            <h1>Course University - dropDown</h1>
            <h1>Course College - dropDown</h1>
            <h1>Course Branch - dropDown</h1>
            <h1>Course semester - dropDown</h1>
            <h1>Hero Section</h1>
            <h1>What you get section</h1>
            <h1>Prerequisite section</h1>
            <h1>Outcome section</h1>
            <h1>Elective course section</h1>
            <h1>Instructor section</h1>
            <h1>Curriculmn section</h1>
            <h1>Motivation section</h1>
        </div>
    )
}

export default Recommendation
