import React from 'react'
import './UpcomingCard.css'

const UpcomingCard = ({ data }) => {

    return (
        <>
            <div
                // to={course_page_url}
                // style={{ textDecoration: "none" }}
                className='course_card courseCard_container'
                style={{ marginBottom: '2rem' }}
            >
                <div
                    style={{
                        backgroundImage: `url(${data?.url})`, height: "20rem"
                    }}
                    className='course_card_img'
                ></div>
                <div className='courseContent_box'>
                    <h1 className="course_name">{data?.course_name}</h1>
                    <div className='enroll_button' style={{ textAlign: 'center' }}>Launching Soon!</div>
                </div>
            </div>
        </>
    )
}

export default UpcomingCard
