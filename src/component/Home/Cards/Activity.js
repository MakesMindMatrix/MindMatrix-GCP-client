import React from 'react'
import './Activity.css'

const Activity = ({ data }) => {

  return (
    <>
      <button className='circle_container_parent'>
        <div className='circle_container' style={{ backgroundImage: `url(${data?.image})` }}>
          <div className='circle_overlay'>
            <h1 className="course_name" style={{ textAlign: 'center', color: 'white', marginTop: '2.5rem', fontSize: '1.5rem' }}>{data?.name}</h1>
          </div>
        </div>
      </button>
    </>
  )
}

export default Activity
