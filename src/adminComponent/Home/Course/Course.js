import React, { useEffect, useState } from 'react'
import './Course.css'
import AdminNavbar from '../../Layout/AdminNavbar/AdminNavbar'
import { enrolledListAction, getBatchList } from '../../../actions/adminAction'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import EnrollModal from '../../Shared/EnrollModal/EnrollModal'
import AddReccModal from './CourseComponent/AddReccModal'
import AllRecommendation from './CourseComponent/AllRecommendation'

const Course = () => {
  // const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()
  const { loading: academicDataLoading, all_batch, enrolled_students } = useSelector((state) => state.batch)

  const [showAddreccModal, setAddReccModal] = useState(false)
  const [showreccDataModal, setShowReccDataModal] = useState(false)
  const handleBatch = (e) => {
    dispatch(enrolledListAction({ "batch_id": e.target.value }))
  }

  const handleUnEnroll = (user) => {
    console.log(user)
  }
  // console.log(enrolled_students)
  useEffect(() => {
    dispatch(getBatchList())
  }, [dispatch])
  return (
    <>
      <div className='course_container'>
        <EnrollModal />
        <AdminNavbar />

        <div className='main-content'>
          <div className='reccModal_container' style={showAddreccModal ? {display: "initial"} : {display: 'none'}}>
            <AddReccModal setAddReccModal={setAddReccModal}/>
          </div>

          <div className='reccModal_container' style={showreccDataModal ? {display: "initial"} : {display: 'none'}}>
            <AllRecommendation setShowReccDataModal={setShowReccDataModal}/>
          </div>
          <h1>Course</h1>
          {/* Dropdown for selecting batch */}
          <select onChange={handleBatch}>
            <option>Select Batch:</option>
            {all_batch?.batch && all_batch.batch.map((elm) => {
              return <option key={elm._id}>{elm.batch_id}</option>
            })}
          </select>
          <button>Enroll</button>

          <button onClick={() => setAddReccModal(true)}>Add Recommendation</button>
          <button onClick={() => setShowReccDataModal(true)}>View Recommendation</button>

          {/* <div className='users-table-parent'>
            <table className="users-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Un Enroll</th>
                </tr>
              </thead>
              <tbody>
                {enrolled_students && enrolled_students.data?.map((user) => (
                  <tr key={user.id}>
                    <td>{user.StudentName}</td>
                    <td>{user.StudentEmailId}</td>

                    <td>
                      <button className="delete-button" onClick={() => handleUnEnroll(user)}>Un Enroll</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div> */}
        </div>
      </div>
    </>
  )
}

export default Course
