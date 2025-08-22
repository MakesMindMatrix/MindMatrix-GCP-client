import React from 'react'
import './Hackathon_new.css'
import Navbar from '../layout/Navbar/Navbar'
import heroImage from './images/hackathon-hero.jpg';
// import hackathonImage from './images/hackathon-hero.jpg'


const Hackathon = () => {
    return (
        <>
            <Navbar />
            <header class="hackathon-hero-header">
                <div class="hackathon-hero-container">
                    <div class="hackathon-hero-text">
                        <h1 class="hackathon-hero-title">Campus Hackathon 2025</h1>
                        <p class="hackathon-hero-subtitle">
                            Build bold ideas with your crew. Code, design, and ship in 24 hours. Prizes, mentors, and serious vibes.
                        </p>
                        <div class="hackathon-hero-buttons">
                            {/* <a href="#register" class="hackathon-btn hackathon-btn-hero hackathon-hover-scale">Register Now</a> */}
                            <a href="#problems" class="hackathon-btn hackathon-btn-outline hackathon-hover-scale">Explore Problem Statements</a>
                        </div>
                    </div>
                    <div class="hackathon-hero-image-container">
                        <img
                            src={heroImage}
                            alt="Vibrant Gen-Z hackathon abstract with gradient blobs and neon lines"
                            loading="lazy"
                            class="hackathon-hero-image hackathon-hover-scale"
                        />
                        <div class="hackathon-hero-gradient"></div>
                    </div>
                </div>
            </header>

            <section id="overview" class="hackathon-section">
                <div class="hackathon-overview">
                    <h2 class="hackathon-heading">Overview</h2>
                    <p class="hackathon-subtitle">
                    Build impactful solutions in 24 hours with mentors, workshops, and a buzzing community. 
                    Choose a problem statement, form a team, and ship something you’re proud of.
                    </p>
                </div>
            </section>

            <section id="why-participate" class="hackathon-section">
                <div class="hackathon-container">
                    <article class="hackathon-article">
                        <h2 class="hackathon-heading">Why participate?</h2>
                        <ul class="hackathon-list">
                            <li>Learn fast with mentor guidance and hands-on building.</li>
                            <li>Showcase your work to judges and industry guests.</li>
                            <li>Win prizes and boost your portfolio or resume.</li>
                            <li>Collaborate with new teammates across domains.</li>
                        </ul>
                    </article>
                    <article class="hackathon-article">
                        <h3 class="hackathon-subheading">What you get</h3>
                        <ul class="hackathon-list">
                            <li>Access to resources and starter kits.</li>
                            <li>Swag for finalists and winners.</li>
                            <li>Networking with peers, mentors, and recruiters.</li>
                        </ul>
                    </article>
                </div>
            </section>

            <section id="who-can-participate" class="hackathon-section">
                <div class="hackathon-container">
                    <h2 class="hackathon-subheading">Who can participate</h2>
                    <p class="hackathon-subtitle">
                    Open to students from all disciplines and recent graduates. 
                    Teams of up to 5 members are allowed; solo participation is welcome too.
                    </p>
                </div>
            </section>

            <section id="hackathon-journey" class="hackathon-journey-section">
                <div className='hackathon-journey-container'>
                    <h2 className='hackathon-journey-title'>Hackathon Journey</h2>
                    <ol className='hackathon-journey-list-container'>
                        <li className='hackathon-journey-list-item'></li>
                    </ol>
                </div>
            </section>
        </>
    )
}

export default Hackathon
