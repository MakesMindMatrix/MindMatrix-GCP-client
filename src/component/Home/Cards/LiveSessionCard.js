import React from 'react'
import './LiveSessionCard.css'
import { Link } from "react-router-dom";

const LiveSessionCard = ({ data }) => {
    return (
        <>
            <Link to={data?.link_url} className='liveSessionCard_container' target='_blank'>
                <div className='liveSessionCard_image' style={{
                    backgroundImage: `url(${data.url})`,
                }}></div>
                <h1 className='liveSessionCard_name'>{data.course_name}</h1>
            </Link>
        </>
    )
}

export default LiveSessionCard
