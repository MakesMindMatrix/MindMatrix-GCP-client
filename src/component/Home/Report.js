import React from 'react'
import './Report.css'
import Navbar from '../layout/Navbar/Navbar'

const Report = () => {
  return (
    <div>
      <Navbar />
      <div className='report_container'>
        <div className='report_container_left'>
          <div>
            <h1>Course Name</h1>
          </div>
        </div>
        <div className='report_container_right'></div>
      </div>
    </div>
  )
}

export default Report
