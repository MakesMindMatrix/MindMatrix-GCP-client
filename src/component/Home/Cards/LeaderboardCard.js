import React from 'react'
import './Leaderboard.css'
import { LiaTelegramPlane } from "react-icons/lia";
// import { PiListStarLight } from "react-icons/pi";
// import { PiListChecks } from "react-icons/pi";
import { PiCheckSquareOffsetLight } from "react-icons/pi";
import { FaUserShield } from "react-icons/fa6";

const LeaderboardCard = ({ data, index }) => {
    
    return (
        <>
            <div className='leaderboard_container'>
                <div className='leaderboard_left'>
                    <h1 className='leaderboard_heading'>{data?.courseName}</h1>
                    <div className='leaderboard_card'>
                        <h1 className='leaderboard_progress_text'>{Math.floor(data?.progressPercentage)}%</h1>
                        {/* <Link to='/report' className='taskBtn'>View all tasks</Link> */}
                    </div>
                    <progress id="task" max="100" value={data?.progressPercentage} className='leaderboard_progress'>{data?.courseName}</progress>
                </div>
                <div className='leaderboard_line'></div>
                <div className='leaderboard_right'>
                    <div className='data_point_container'>
                        <div className='data_point_parent'>
                            <h1 className='data_point_heading'><span style={{ fontSize: '1.5rem' }}>{data?.completedTask}</span> of {data?.totalTask}</h1>
                            <div className='data_point_icon_parent'>
                                <LiaTelegramPlane />
                                <span style={{ marginLeft: '0.5rem' }}>Tasks Submitted</span>
                            </div>
                        </div>

                        <div className='data_point_parent'>
                            <h1 className='data_point_heading'><span style={{ fontSize: '1.5rem' }}>{data?.completedTopics}</span> of {data?.totalTopics}</h1>
                            <div className='data_point_icon_parent'>
                                <PiCheckSquareOffsetLight />
                                <span style={{ marginLeft: '0.5rem' }}>Topics Completed</span>
                            </div>
                        </div>

                        <div className='data_point_parent'>
                            <h1 className='data_point_heading'><span style={{ fontSize: '1.5rem' }}>{data?.studentPosition}</span> of {data?.totalStudent}</h1>
                            <div className='data_point_icon_parent'>
                                <FaUserShield />
                                <span style={{ marginLeft: '0.5rem' }}>Your Position</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default LeaderboardCard
