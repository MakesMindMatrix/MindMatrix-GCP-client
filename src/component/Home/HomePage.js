import React, { useRef, useEffect } from 'react'
import { motion, useAnimation, useViewportScroll, useTransform } from 'framer-motion';
import './HomePage.css'
import { FaQuestion } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { FaMedal } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Testimonial from '../layout/Testimonial/Testimonial';
// import Hero from '../layout/Hero/Hero';
import LearningPathway from '../layout/LearningPathway/LearningPathway';
// import Navbar from '../layout/Navbar/Navbar';
import HeroSlider from '../layout/HeroSlider/HeroSlider';

const HomePage = () => {
    const controls = useAnimation();
    const sectionRef = useRef(null);

    // Get scroll progress
    const { scrollYProgress } = useViewportScroll();

    // Map scroll progress to blur value (string like "blur(5px)")
    const blurFilter = useTransform(scrollYProgress, [0.0, 0.400, 0.514], ['blur(0px)', 'blur(0px)', 'blur(10px)'], { clamp: false });

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    controls.start({ y: 0, opacity: 1 });
                }
            },
            { threshold: 0.5 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, [controls]);
    return (
        <>
            <div className='homePage_container'>
                {/* Navbar */}
                <div className="navbar">
                    <div className="logo"></div>
                    <div className="nav_right">

                        <Link
                            to="/register"
                            className="btnTwo auth_btn"
                        >
                            Sign Up
                        </Link>

                        <Link
                            to="/login"
                            className="btnOne auth_btn"
                        >
                            Login
                        </Link>
                    </div>
                </div>
                {/* Hero */}
                <div className='hero_section'>
                    <div className='heroLeft'>
                        <h1><span className='headingColor'>Your career companion</span> from day one to your dream job</h1>
                        <p>Unlocking the Potentials for Tomorrow</p>
                        <Link className='heroBtn' to='https://staging.mindmatrix.io/register'>Start today</Link>
                        <Link className='heroBtn' to='/user-interest'>Show Your Interest</Link>
                    </div>
                    <div className='heroRight'>
                        <HeroSlider />
                    </div>
                </div>
                {/* <div className='hero_carousel'>
                    <Hero />
                </div> */}

                {/* Learning */}
                <div className='learning_section'>
                    <h1>Our learning philosophy for <br /><span style={{ fontStyle: "italic", fontWeight: '400', color: "#13828F" }}>holistic developement</span></h1>
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
                    <h1><span className='headingColor'>Industry driven Learning Pathways</span><br /> that align with your career <span style={{ fontStyle: "italic" }}>aspirations</span></h1>
                    <Link to='/register'>Explore our most popular programs <span class="arrow ">→</span></Link>

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
                    {/* <h1>Not sure where to start?<br /> Take the next step for your career.</h1>
                    <button>Let's Begin</button>

                    <div>
                        {QuickQuizData.map((elm, index) => {
                            return <QuickQuizCard data={elm} index={index} />
                        })}
                    </div> */}
                    <div style={{ height: '200vh', position: 'relative', background: 'transparent' }}>
                        {/* Section A - background */}
                        <motion.div
                            style={{
                                position: 'sticky',
                                top: '75px',
                                height: '85vh',
                                width: '100%',
                                // background: '#1e1e1e',
                                color: 'white',
                                // display: 'flex',
                                // alignItems: 'center',
                                // justifyContent: 'center',
                                zIndex: 1,
                                filter: blurFilter,
                            }}
                            className='quick_quiz_section_one'
                        >
                            <div className='quick_quiz_section_one_left'>
                                <h1>For Learners</h1>
                                <Link to='/register'>Register</Link>
                            </div>
                            <div className='quick_quiz_section_one_right'>
                                {LearningData.map((elm) => {
                                    return <LearnerCard data={elm} />
                                })}
                            </div>
                        </motion.div>

                        {/* Section B - comes over Section A */}
                        <motion.div
                            ref={sectionRef}
                            initial={{ y: 200, opacity: 0 }}
                            animate={controls}
                            transition={{ duration: 1 }}
                            style={{
                                position: 'absolute',
                                top: '115vh',
                                width: '100%',
                                height: '85vh',
                                // background: '#fff',
                                zIndex: 2,
                                // display: 'flex',
                                // alignItems: 'center',
                                // justifyContent: 'center',
                                boxShadow: '0 -10px 30px rgba(0,0,0,0.3)',
                            }}
                            className='quick_quiz_section_two'
                        >
                            <div className='quick_quiz_section_two_left'>
                                <h1>For Industries</h1>
                                {/* <button>Explore</button> */}
                            </div>
                            <div className='quick_quiz_section_two_right'>
                                {IndustryData.map((elm) => {
                                    return <IndustryCard data={elm} />
                                })}
                            </div>
                        </motion.div>
                    </div>

                </div>

                {/* Curriculum */}
                <div className='curriculum_section'>
                    <h1 style={{ fontSize: '4.8rem' }}><span className='headingColor'>Certified & Curriculum</span> aligned</h1>
                    <div>
                        {CertifiedData.map((elm) => {
                            return <CertifiedCard data={elm} />
                        })}
                    </div>

                    <div className='curriculum_section_data'>
                        <div>
                            <h1>6K+</h1>
                            <h2>Students</h2>
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
                                {/* <button>See How</button> */}
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
                            <Link to='register'>Explore Programs</Link>
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
                        <h1>CONSUMER POLICY</h1>
                        <ul>
                            <li><Link to='/terms-conditions'>Terms & Conditions</Link></li>
                            <li><Link to='/cancellations-return-policy'>Cancellations policy</Link></li>
                            <li><Link to='/privacy-policy'>Privacy policy</Link></li>
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
                            <li>9611546444</li>
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

// const QuickQuizCard = ({ data, index }) => {
//     const { heading, subHeading, icon } = data
//     return (
//         <>
//             <div className='quickQuizCard_container'>
//                 <h1 className='quickQuizCard_number'>0{index + 1}</h1>
//                 <h1 className='quickQuizCard_heading'>{heading}</h1>

//                 <div>
//                     <p className='quickQuizCard_subHeading'>{subHeading}</p>
//                     {icon}
//                 </div>
//             </div>
//         </>
//     )
// }

const IndustryCard = ({ data }) => {
    const { para, image } = data
    return (
        <>
            <div className='industryCard_container'>
                <div className='industryCard_container_image' style={{ backgroundImage: `url('${image}')` }}></div>
                <h1>{para}</h1>
            </div>
        </>
    )
}

const LearnerCard = ({ data }) => {
    const { para, image } = data
    return (
        <>
            <div className='LearnerCard_container'>
                <div className='learningCard_container_image' style={{ backgroundImage: `url('${image}')` }}></div>
                <h1>{para}</h1>
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

export const LearningPhilosophyData = [
    {
        "heading": "Knowledge",
        "para": "Build a strong foundation with industry-relevant concepts",
        "icon": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746774571/860b67f5df5a4c77008208029e7716efa3ac6680_h6qgek.png"
    },
    {
        "heading": "Skill",
        "para": "Apply what you learn through hands-on projects.",
        "bg_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747484826/SKILL_ihxife.png"
    },
    {
        "heading": "Ability",
        "para": "Develop critical thinking and creative problem-solving",
        // "icon": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746774570/d249c138a016f297c196d5d74c5de8d92e134b39_lat7mj.png"
        "bg_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747484827/abilitY_x0b0zi.png"
    },
    {
        "heading": "Behaviour",
        "para": "Master teamwork, communication, and adaptability.",
        "bg_image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747050526/Info_Block_duin4k.png"
    },
]

export const LearningPathwayData = [
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway3_czwbkj.png",
        "courseCode": "Gen AI",
        "heading": "GenAI Explorer – Year 1",
        "para": "Discover the fundamentals of Generative AI and learn how to communicate with LLMs through prompt engineering."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway2_yf0now.png",
        "courseCode": "IoT",
        "heading": "GenAI Developer – Year 2",
        "para": "Dive deeper into Gemini, Vertex AI, and Google Cloud to start building smart, scalable AI solutions."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1746525803/learningPathway1_dck8hd.png",
        "courseCode": "Programming",
        "heading": "GenAI Integrator – Year 3",
        "para": "Apply GenAI to real-world domains—Logistics, Retail, Healthcare, and App Development."
    },
    {
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747486476/startup-employee-looking-business-charts-using-ai-software_qcqars.jpg",
        "courseCode": "Programming",
        "heading": "GenAI Builder – Year 4",
        "para": "Combine domain mastery with full-stack AI project development. Build solutions that solve real problems."
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
        image: "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747486152/Bangalore_Institute_of_Technology_logo_phtkun.png",
        heading: "Bangalore institute of technology, Bangalore"
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

export const LearningData = [
    {
        "para": "Tailored journeys matching your ambitions and pace.",
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747461170/learner_1_apozgx.png"
    },
    {
        "para": "Hands-on experiences with real tools",
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747462732/learner2_t2tsuu.png"
    },
    {
        "para": "Comprehensive career-readiness beyond academics",
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747462768/learner3_sci9uz.png"
    },
]

export const IndustryData = [
    {
        "para": "Your pathway to leading companies.",
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747461155/industry1_mhec7y.png"
    },
    {
        "para": "Precision hiring of future-ready talent",
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747461155/industry2_ftxw9s.png"
    },
    {
        "para": "Simplified, smart recruitment process",
        "image": "https://res.cloudinary.com/djsg8kbaz/image/upload/v1747458674/industry3_orul2e.png"
    },
]