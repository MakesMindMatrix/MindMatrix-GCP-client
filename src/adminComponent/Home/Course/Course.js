import React, { useEffect, useState } from 'react'
import './Course.css'
import AdminNavbar from '../../Layout/AdminNavbar/AdminNavbar'
import { deleteReccDataAction, enrolledListAction, getALLReccDataAction, getBatchList } from '../../../actions/adminAction'
import { useSelector, useDispatch } from 'react-redux'
import EnrollModal from '../../Shared/EnrollModal/EnrollModal'
import AddReccModal from './CourseComponent/AddReccModal'
import AllRecommendation from './CourseComponent/AllRecommendation'

const Course = () => {
  // const [showModal, setShowModal] = useState(false)
  const [selectedCourse, setSelectedCourse] = useState(null)

  const dispatch = useDispatch()
  const { loading: academicDataLoading, all_batch, enrolled_students } = useSelector((state) => state.batch)
  const { loading, add_reccData, all_reccData } = useSelector((state) => state.adminReccData)

  const [showAddreccModal, setAddReccModal] = useState(false)


  useEffect(() => {
    dispatch(getBatchList())
    dispatch(getALLReccDataAction())
  }, [dispatch])
  return (
    <>
      <div className='course_container'>
        {/* <EnrollModal /> */}
        <AdminNavbar />

        <div className='main-content'>
          <div className='reccModal_container' style={showAddreccModal ? { display: "initial" } : { display: 'none' }}>
            <AddReccModal setAddReccModal={setAddReccModal} initialData={selectedCourse}/>
          </div>

          <h1>Course</h1>

          <button onClick={() => setAddReccModal(true)}>Add Recommendation</button>
          {all_reccData?.CourseInfo.map((elm, index) => {
            return <ReccDataCard data={elm} key={index} setAddReccModal={setAddReccModal} setSelectedCourse={setSelectedCourse}/>
          })}
        </div>
      </div>
    </>
  )
}

export default Course

const ReccDataCard = ({ data, setAddReccModal, setSelectedCourse }) => {
  
  const dispatch = useDispatch()
  const { batch_id, course_name, course_university, course_college, course_branch } = data
  // console.log(course_university, course_college, course_branch)
  const handleDelete = (batch_id) => {
    console.log(batch_id)
    dispatch(deleteReccDataAction(batch_id))
  }

  const handleUpdate = (course_data) => {
    setSelectedCourse(course_data)
    setAddReccModal(true)
  }

  return (
    <>
      <div className='academicData_parent' style={{ margin: "2rem", padding: "2rem", backgroundColor: "white", display: "flex" }}>
        <div>
          <button onClick={() => handleDelete(batch_id)}>Delete</button>
          <button onClick={() => handleUpdate(data)}>Update</button>
          {/* <button onClick={() => handleUpdate(batch_id)}>Enrolled Student</button> */}
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
              {course_university.map((elm, index) => {
                return <option key={index}>{elm.name}</option>
              })}
            </select>
          </div>

          <div>
            <h2>College</h2>
            <select>
              <option>View College</option>
              {course_college.map((elm, index) => {
                return <option key={index}>{elm.name}</option>
              })}
            </select>
          </div>
        </div>

        <div>
          <h2>Branch</h2>
          <select>
            <option>View Branch</option>
            {course_branch.map((elm, index) => {
              return <option key={index}>{elm.name}</option>
            })}
          </select>
        </div>
      </div>
    </>
  )
}





{/* <div className='reccModal_container' style={showreccDataModal ? {display: "initial"} : {display: 'none'}}>
            <AllRecommendation setShowReccDataModal={setShowReccDataModal} setAddReccModal={setAddReccModal}/>
          </div> */}

{/* Dropdown for selecting batch */ }
{/* <select onChange={handleBatch}>
            <option>Select Batch:</option>
            {all_batch?.batch && all_batch.batch.map((elm) => {
              return <option key={elm._id}>{elm.batch_id}</option>
            })}
          </select> */}


{/* <button onClick={() => setShowReccDataModal(true)}>View Recommendation</button> */ }

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