import React, { useEffect } from 'react'
import './Interest.css'
import { useDispatch, useSelector } from 'react-redux'
import { getAllUserInterestAction } from '../../../actions/userAction'
import AdminNavbar from '../../Layout/AdminNavbar/AdminNavbar'

const Interest = () => {
    const dispatch = useDispatch()
    const { getAllUserInterest } = useSelector((state) => state.userInterest)
    // const { all_payment } = useSelector((state) => state.adminPayment)
    // console.log("User interest data", getAllUserInterest)

    useEffect(() => {
        dispatch(getAllUserInterestAction())
    }, [dispatch])
    return (
        <>
            <div className='interest_container'>
                <div className='interest_container_left'>
                    <AdminNavbar />
                </div>

                {/* <h1>User's Interest</h1> */}

                <div className='interest_container_right'>
                    <table>
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Phone</th>
                                <th>State</th>
                                <th>University</th>
                                <th>College</th>
                                <th>Branch</th>
                                <th>User Type</th>
                                <th>Admission Year</th>
                                <th>Specialization</th>
                                <th>Time</th>
                                <th>Date</th>
                            </tr>
                        </thead>
                        <tbody>
                            {getAllUserInterest && getAllUserInterest.userInterest.map((elm) => {
                                return <tr key={elm._id}>
                                    <td>{elm.name}</td>
                                    <td>{elm.email}</td>
                                    <td>{elm.phone}</td>
                                    <td>{elm.state}</td>
                                    <td>{elm.university.name}</td>
                                    <td>{elm.college.name}</td>
                                    <td>{elm.branch.name}</td>
                                    <td>{elm.isStudent ? "Student" : "College"}</td>
                                    <td>{elm?.admissionYear}</td>
                                    <td>{elm?.specialization}</td>
                                </tr>
                            })}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default Interest
