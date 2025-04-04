import React, { useEffect } from 'react'
import './Course.css'
import AdminNavbar from '../../Layout/AdminNavbar/AdminNavbar'
import { enrolledListAction, getBatchList } from '../../../actions/adminAction'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import EnrollModal from '../../Shared/EnrollModal/EnrollModal'

const Course = () => {
  // const [showModal, setShowModal] = useState(false)

  const dispatch = useDispatch()
  const { all_batch, enrolled_students } = useSelector((state) => state.batch)
  console.log(all_batch)
  const handleBatch = (e) => {
    dispatch(enrolledListAction({ "batch_id": e.target.value }))
  }

  const handleUnEnroll = (user) => {
    console.log(user)
  }
  console.log(enrolled_students)
  useEffect(() => {
    dispatch(getBatchList())
  }, [dispatch])
  return (
    <>
      <div className='course_container'>
        <EnrollModal />
        <AdminNavbar />

        <div className='main-content'>
          <h1>Course</h1>
          {/* Dropdown for selecting batch */}
          <select onChange={handleBatch}>
            <option>Select Batch:</option>
            {all_batch?.batch && all_batch.batch.map((elm) => {
              return <option key={elm._id}>{elm.batch_id}</option>
            })}
          </select>

          <button>Enroll</button>

          <div className='users-table-parent'>
            <table className="users-table">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>Un Enroll</th>
                </tr>
              </thead>
              <tbody>
                {enrolled_students && enrolled_students.data.map((user) => (
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
          </div>
        </div>
      </div>
    </>
  )
}

export default Course
