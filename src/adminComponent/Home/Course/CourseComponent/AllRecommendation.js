import React, { useEffect } from 'react'
import './AllRecommendation.css'
import { useDispatch, useSelector } from 'react-redux'
import { getALLReccDataAction } from '../../../../actions/adminAction'

const AllRecommendation = ({ setShowReccDataModal, setAddReccModal }) => {
    const dispatch = useDispatch()
    const { loading, add_reccData, all_reccData } = useSelector((state) => state.adminReccData)
    console.log(all_reccData?.CourseInfo.length)
    useEffect(() => {
        
    }, [dispatch])
    return (
        <div>
            <button onClick={() => setShowReccDataModal(false)}>Close</button>
            {/* <h1>lorem40</h1> */}
            
        </div>
    )
}

export default AllRecommendation

