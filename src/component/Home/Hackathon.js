import React from 'react'
import './Hackathon.css'
import Navbar from '../layout/Navbar/Navbar'
// import hackathonImage from './images/hackathon-hero.jpg'


const Hackathon = () => {
    return (
        <>
            <Navbar />
            <div className='hackathon_container'>
                <div className='hackathon_container_hero'>
                    <div className='hackathon_content'>
                        <h1>Campus Hackathon 2025</h1>
                        <p>Build bold ideas with your crew. Code, design, and ship in 24 hours. Prizes, mentors, and serious vibes.</p>
                        {/* <div> */}
                        <button>Register Now</button>
                        <button>Explore Problem Statements</button>
                        {/* </div> */}
                    </div>
                    <div className='hackathon_image_container'>
                        <div className='hackathon_image'></div>
                    </div>
                </div>

                {/* Overview section */}
                <div className='hackathon_overview'>
                    <h1 className='heading'>Overview</h1>
                    <p className='subheading'>Build impactful solutions in 24 hours with mentors, workshops, and a buzzing community. Choose a problem statement, form a team, and ship something you’re proud of.</p>

                    <div>
                        <div>
                            <h1>Why participate?</h1>
                            <ul>
                                <li>Learn fast with mentor guidance and hands‑on building.</li>
                                <li>Showcase your work to judges and industry guests.</li>
                                <li>Win prizes and boost your portfolio or resume.</li>
                                <li>Collaborate with new teammates across domains.</li>
                            </ul>
                        </div>

                        <div>
                            <h1>What you get</h1>
                            <ul>
                                <li>Access to resources and starter kits.</li>
                                <li>Swag for finalists and winners.</li>
                                <li>Networking with peers, mentors, and recruiters.</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Participate section */}
                {/* <h1>Who can participate</h1>
                <p className='subheading'>Open to students from all disciplines and recent graduates. Teams of up to 5 members are allowed; solo participation is welcome too.</p> */}

                {/* Journeny Section */}
                {/* <h1 className='heading'>Hackathon journey</h1>

                <button className='register_button'>Register Now</button>

                <h1>Timeline</h1>

                <h1 className='heading'>Journey in this Hackathon</h1>
                <p className='subheading'>From registration to the live event, here’s how it flows.</p>


                <h1 className='heading'>Problem Statements</h1>
                <p className='subheading'>Pick exactly one to focus your build. You can change before submitting.</p>

                <h1 className='heading'>Register Your Team</h1>
                <p className='subheading'>Pre-filled details where possible. You can edit anytime before submission.</p>

                <button className='register_button'>Save Registration</button> */}
            </div>
        </>
    )
}

export default Hackathon
