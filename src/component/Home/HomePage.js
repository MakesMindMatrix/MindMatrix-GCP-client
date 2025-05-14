import React from 'react'
import './HomePage.css'
import { FaQuestion } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { FaMedal } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Testimonial from '../layout/Testimonial/Testimonial';
import Hero from '../layout/Hero/Hero';
import LearningPathway from '../layout/LearningPathway/LearningPathway';

const HomePage = () => {
    return (
        <>
            <div className='homePage_container'>
                {/* Hero */}
                <div className='hero_section'>
                    <div>
                        <div className='heroImg1'></div>
                        <div className='heroImg2'></div>
                        <div className='heroImg3'></div>
                        <div className='heroImg4'></div>
                        <h1><span className='headingColor'>Your career companion</span> from day one to your dream job</h1>
                        <p>Unlocking the Potentials for Tomorrow</p>
                        <Link className='heroBtn' to='https://staging.mindmatrix.io/register'>Start today</Link>
                    </div>
                </div>
                <div className='hero_carousel'>
                    <Hero />
                </div>

                {/* Learning */}
                <div className='learning_section'>
                    <h1>Our learning philosophy</h1>
                    <div className='learning_section_card_container'>
                        {LearningPhilosophyData.map((elm) => {
                            return <div className='learning_section_card' >
                                <LearningPhilosophyCard data={elm} />
                            </div>
                        })}
                    </div>
                    <div></div>
                </div>

                {/* Learning Pathway */}
                <div className='learning_pathway_section'>
                    <h1><span className='headingColor'>Industry driven Learning Pathways</span><br /> that fit into your college schedule</h1>
                    <p>Explore our most popular courses <span class="arrow ">→</span></p>

                    <div className='learning_pathway_card_container'>
                        {LearningPathwayData.map((elm) => {
                            return <LearningPathwayCard data={elm} />
                        })}
                    </div>
                </div>
                <div className='learningPathway_carousel'>
                    <LearningPathway />
                </div>

                {/* Quick quiz */}
                <div className='quick_quiz_section'>
                    <h1>Not sure where to start?<br /> Take the next step for your career.</h1>
                    <button>Let's Begin</button>

                    <div>
                        {QuickQuizData.map((elm, index) => {
                            return <QuickQuizCard data={elm} index={index} />
                        })}
                    </div>
                </div>

                {/* Curriculum */}
                <div className='curriculum_section'>
                    <h1><span className='headingColor'>Certified & Curriculum</span> aligned</h1>
                    <div>
                        {CertifiedData.map((elm) => {
                            return <CertifiedCard data={elm} />
                        })}
                    </div>

                    <div className='curriculum_section_data'>
                        <div>
                            <h1>6K+</h1>
                            <h2>Studnets</h2>
                        </div>

                        <div className='curriculum_section_data_line'></div>

                        <div>
                            <h1>100+</h1>
                            <h2>Colleges</h2>
                        </div>

                        <div className='curriculum_section_data_line'></div>
                        <div>
                            <h1>10+</h1>
                            <h2>Years</h2>
                        </div>
                    </div>
                </div>

                {/* Career companion */}
                <div className='career_companion_section'>
                    <h1>More than just static courses,<br /><span className='headingColor'>A career companion</span></h1>

                    <div className='career_companion_card_box'>
                        <div className='career_companion_card_one'>
                            <div className='companion_card_one_left'>
                                <h1>Aligned with Academic Schedules</h1>
                                <p>Our courses fit perfectly with your school or college timetable, so you can learn without any extra hassle</p>
                                <button>See How</button>
                            </div>
                            <div className='companion_card_one_right'></div>
                        </div>

                        <div style={{ display: 'flex' }}>
                            <div className='career_companion_card_two'>
                                <div className='companion_card_two_top'>
                                    <h1>Skill Gap Assessment</h1>
                                    <p>Identify what you’re missing with personalized evaluations starting from your first year.</p>
                                </div>
                                <div className='companion_card_two_bottom'></div>
                            </div>

                            <div className='career_companion_card_three'>
                                <div className='companion_card_three_top'>
                                    <h1>Industry Partnerships</h1>
                                    <p>Learn with Google-certified programs and courses co-created with top universities.</p>
                                </div>
                                <div className='companion_card_three_bottom'></div>
                            </div>
                        </div>
                        <div style={{ display: 'flex' }}>
                            <div className='career_companion_card_four'>
                                <div className='companion_card_four_top'></div>
                                <div className='companion_card_four_bottom'>
                                    <h1>Tailored Learning Paths</h1>
                                    <p>Courses customized to your academic progress and career goals.</p>
                                </div>
                            </div>

                            <div className='career_companion_card_five'>
                                <div className='companion_card_five_top'>
                                    <h1>End-to-End Guidance</h1>
                                    <p>From skill-building to resume optimization, we’re with you at every st</p>
                                </div>
                                <div className='companion_card_five_bottom'></div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Students */}
                <Testimonial />
                {/* <div className='students_section'>
                    <h1><span className='headingColor'>Real results</span> from<br /> real students</h1>

                    <div className='students_content_box'>
                        <div className='students_content_image_box'>
                            <div className='students_content_image'></div>
                            <div className='students_content_image'></div>
                            <div className='students_content_image'></div>
                            <div className='students_content_image'></div>
                            <div className='students_content_image'></div>
                        </div>

                        <p className='students_content_para'>MindMatrix gave me the skills and certifications I needed to stand out in interviews. The courses were practical, industry-focused, and easy to fit into my college schedule. Thanks to MindMatrix, I landed my dream job right after graduation!</p>
                        <h1 className='students_content_Name'>Aryan Gupta</h1>
                        <h2 className='students_content_designation'>Junior SDE, Zomato</h2>
                    </div>
                </div> */}

                {/* Start journey */}
                <div className='start_journey_section'>
                    <div className='start_journey_box'>
                        <h1>Ready to <span className='headingColor'>start your journey with MindMatrix?</span></h1>
                        <div>
                            {/* <button>Take the Quiz</button> */}
                            <button>Explore Programs</button>
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className='footer_section'>
                    <div className='footer_logo'></div>

                    <div className='footer_child'>
                        <p>Join 10,000 learners and stay in the know</p>
                    </div>

                    <div className='footer_child'>
                        <h1>In this website</h1>
                        <ul>
                            <li>Courses</li>
                            <li>How It Works</li>
                            <li>About Us</li>
                        </ul>
                    </div>

                    <div className='footer_child'>
                        <h1>Socials</h1>
                        <ul>
                            <li>Instagram</li>
                            <li>LinkeDin</li>
                            <li>Facebook</li>
                        </ul>
                    </div>

                    <div className='footer_child'>
                        <h1>Contact</h1>
                        <ul>
                            <li>Email</li>
                            <li>9845190286</li>
                            <li>HSR Layout, Bengaluru</li>
                        </ul>
                    </div>
                </div>

            </div>
        </>
    )
}

export default HomePage

const LearningPhilosophyCard = ({ data }) => {
    const { heading, para, bg_image, icon } = data

    return (
        <>
            <div className='learning_philosophy_card_container' style={bg_image ? { backgroundImage: `url(${bg_image})`, padding: '2rem' } : null}>
                {icon ? (
                    <div style={{ display: "flex" }}>
                        <div>
                            <h1>{heading}</h1>
                            <p>{para}</p>
                        </div>
                        <div className='learning_philosophy_card_icon' style={{ backgroundImage: `url(${icon})` }}></div>
                    </div>
                ) : (
                    <div>
                        <h1>{heading}</h1>
                        <p>{para}</p>
                    </div>
                )}
            </div>
        </>
    )
}

const LearningPathwayCard = ({ data }) => {
    const { image, heading, para } = data
    return (
        <>
            <div className='learningPathwayCard_container'>
                <div style={{ backgroundImage: `url('${image}')` }}></div>
                <h1>{heading}</h1>
                <p>{para}</p>
            </div>
        </>
    )
}

const QuickQuizCard = ({ data, index }) => {
    const { heading, subHeading, icon } = data
    return (
        <>
            <div className='quickQuizCard_container'>
                <h1 className='quickQuizCard_number'>0{index + 1}</h1>
                <h1 className='quickQuizCard_heading'>{heading}</h1>

                <div>
                    <p className='quickQuizCard_subHeading'>{subHeading}</p>
                    {icon}
                </div>
            </div>
        </>
    )
}

const CertifiedCard = ({ data }) => {
    const { image, heading } = data
    return (
        <>
            <div className='Certified_card_container'>
                <img alt='Certificate Program' src={image} />
                <h1>{heading}</h1>
            </div>
        </>
    )
}

// const CareerCompanionCard = () => {
//     return (
//         <>

//         </>
//     )
// }

export const LearningPhilosophyData = [
    {
        "heading": "Knowledge",
        "para": "Build a strong foundation with industry-relevant concepts",
        "icon": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746774571/860b67f5df5a4c77008208029e7716efa3ac6680_h6qgek.png"
    },
    {
        "heading": "Skill",
        "para": "Apply what you learn through hands-on projects.",
    },
    {
        "heading": "Ability",
        "para": "Develop critical thinking and creative problem-solving",
        "icon": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746774570/d249c138a016f297c196d5d74c5de8d92e134b39_lat7mj.png"
    },
    {
        "heading": "Behaviour",
        "para": "Master teamwork, communication, and adaptability.",
        "bg_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747050526/Info_Block_duin4k.png"
    },
]

export const LearningPathwayData = [
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway1_dck8hd.png",
        "courseCode": "Gen AI",
        "heading": "Generative AI Learning Program",
        "para": "Learn AI concepts, algorithms, and models like GANs and transformers. Hands-on experience in building AI-driven applications across industries."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway2_yf0now.png",
        "courseCode": "IoT",
        "heading": "IoT for Smart Infrastructure",
        "para": "Explore IoT applications in smart infrastructure, including devices, communication protocols, and real-world use cases like smart cities and energy management."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway3_czwbkj.png",
        "courseCode": "Programming",
        "heading": "User Experience Management in Android Development",
        "para": "Learn UX principles for Android apps, focusing on usability, accessibility, and user-centered design to enhance engagement."
    },
]

export const QuickQuizData = [
    {
        "heading": "Register",
        "subHeading": "Start your personalised journeny with your interests, skills, and career goals.",
        "icon": <FaQuestion />
    },
    {
        "heading": "Get Personalised Learning Recommendations",
        "subHeading": "Based on your quiz results, we’ll suggest courses tailored just for you. Choose the best fit for your learning journey.",
        "icon": <HiLightBulb />
    },
    {
        "heading": "Track progress and earn certificates",
        "subHeading": "Track your progress & achievements. Collect certificates to show your achievements.",
        "icon": <FaMedal />
    },
]

export const CertifiedData = [
    {
        image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746437752/vtuLogo_dohduj.png",
        heading: "Visvesvaraya Technological University, Aligned"
    },
    {
        image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746437752/srideviLogo_f36wmv.png",
        heading: "Shridevi Institute of Technology"
    },
    {
        image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746437752/mysuruLogo_ixzztm.png",
        heading: "Mysuru Royal Institute of Technology"
    },
    {
        image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746437752/sriSiddarthaLogo_emhwnl.png",
        heading: "Sri Siddhartha Institute of Technology"
    },
]
export const CareerCompanionData = []