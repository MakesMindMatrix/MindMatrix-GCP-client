import React from 'react'
import './DashboardTest.css'
import Navbar from '../layout/Navbar/Navbar'

const DashboardTest = () => {
    return (
        <>
            <div className='dashboardTest_container'>
                <Navbar />

                <h1>Welcome back, <span>Tirumal</span></h1>

                {/* My programs section */}
                <div className='my_programs_section'>
                    <h1>My Programs</h1>
                </div>


                {/* Our recommended programs section */}
                <div className='our_recommended_section'>
                    <h1>Our recommended <span>Programs</span></h1>
                </div>


                {/* Our certified programs section */}
                <div className='our_certified_section'>
                    <h1>Our Certified <span>Programs</span></h1>
                </div>


                {/* Upcoming programs section */}
                <div className='upcoming_section'>
                    <h1>Upcoming <span>Programs</span></h1>
                </div>
            </div>
        </>
    )
}

export default DashboardTest
