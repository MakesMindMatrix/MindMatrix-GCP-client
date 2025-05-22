import React, { useEffect } from 'react'
import './AllRecommendation.css'
import { useDispatch, useSelector } from 'react-redux'
import { deleteReccDataAction, getALLReccDataAction } from '../../../../actions/adminAction'

const AllRecommendation = ({ setShowReccDataModal }) => {
    const dispatch = useDispatch()
    const { loading, add_reccData, all_reccData } = useSelector((state) => state.adminReccData)
    console.log(all_reccData?.CourseInfo.length)
    useEffect(() => {
        dispatch(getALLReccDataAction())
    }, [dispatch])
    return (
        <div>
            <button onClick={() => setShowReccDataModal(false)}>Close</button>
            {/* <h1>lorem40</h1> */}
            {all_reccData?.CourseInfo.map((elm) => {
                return <ReccDataCard data={elm} />
            })}
        </div>
    )
}

export default AllRecommendation


const ReccDataCard = ({ data }) => {
    const dispatch = useDispatch()
    const { batch_id, course_name, course_university, course_college, course_branch } = data
    // console.log(course_university, course_college, course_branch)
    const handleDelete = (batch_id) => {
        console.log(batch_id)
        dispatch(deleteReccDataAction(batch_id))
    }
    return (
        <>
            <div className='academicData_parent' style={{ margin: "2rem", padding: "2rem", backgroundColor: "white", display: "flex" }}>
                <div>
                    <button>Update</button>
                    <button onClick={() => handleDelete(batch_id)}>Delete</button>
                </div>
                <div>
                    <h1>Batch Id - {batch_id}</h1>
                    <h1>Course Name - {course_name}</h1>
                </div>

                <div>
                    <div>
                        <h2>University</h2>
                        <select>
                            <option>View University</option>
                            {course_university.map((elm) => {
                                return <option>{elm.name}</option>
                            })}
                        </select>
                    </div>

                    <div>
                        <h2>College</h2>
                        <select>
                            <option>View College</option>
                            {course_college.map((elm) => {
                                return <option>{elm.name}</option>
                            })}
                        </select>
                    </div>
                </div>

                <div>
                    <h2>Branch</h2>
                    <select>
                        <option>View Branch</option>
                        {course_branch.map((elm) => {
                            return <option>{elm.name}</option>
                        })}
                    </select>
                </div>
            </div>
        </>
    )
}