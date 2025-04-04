import React, { useEffect, useState } from 'react'
import './Academic.css'
import AdminNavbar from '../../Layout/AdminNavbar/AdminNavbar'
// import ReactPaginate from "react-paginate";
import { useDispatch, useSelector } from "react-redux";
import { getBranch, getCollegeList, getUniversity } from '../../../actions/academicDataAction';

const Academic = () => {
  const [paginateData, setPaginateData] = useState({
    page: 1,
    limit: '26'
  })
  const [selectedData, setSelectedData] = useState()
  const dispatch = useDispatch()
  console.log(selectedData, setPaginateData)
  const { universityData, collegeListData, branchData } = useSelector((state) => state.academicData)

  // const handleLimit = (e) => setPaginateData({ ...paginateData, limit: e.target.value })
  // const handlePageClick = (e) => setPaginateData({ ...paginateData, page: e.selected + 1 })
  const handleDataChange = (e) => {
    setSelectedData(selectArray(e.target.value))
  }

  const selectArray = (val) => {
    switch (val) {
      case 'university':
        return universityData;

      case 'college':
        return collegeListData;

      case 'branch':
        return branchData;
      default:
        return [];
    }
  }
  // console.log(selectArray('college'))
  // console.log(universityData)

  useEffect(() => {
    dispatch(getUniversity(paginateData))
    dispatch(getCollegeList(paginateData))
    dispatch(getBranch(paginateData))
  }, [dispatch, paginateData])
  return (
    <>
      <div className='academic_container'>
        <AdminNavbar />

        <div>
          <h1>Academic</h1>

          <select onChange={handleDataChange}>
            <option>Select branch</option>
            <option value='branch'>Branch</option>
            <option value='university'>University</option>
            <option value='college'>College</option>
          </select>


        </div>
      </div>
    </>
  )
}

export default Academic

// const CollegeTable = () => {
//   return (
//     <>
//       <table className="users-table">
//         <thead>
//           <tr>
//             <th>College</th>
//             <th>Update</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {all_users && all_users.data.map((user) => (
//             <tr key={user.id}>
//               <td>{user.college?.name}</td>
//               <td>
//                 <button className="update-button">Update</button>
//               </td>
//               <td>
//                 <button className="delete-button">Delete</button>
//               </td>
//             </tr>
//           ))} */}
//         </tbody>
//       </table>
//     </>
//   )
// }

// const UniversityTable = () => {
//   return (
//     <>
//       <table className="users-table">
//         <thead>
//           <tr>
//             <th>University</th>
//             <th>Update</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {all_users && all_users.data.map((user) => (
//             <tr key={user.id}>
//               <td>{user.university?.name}</td>
//               <td>
//                 <button className="update-button">Update</button>
//               </td>
//               <td>
//                 <button className="delete-button">Delete</button>
//               </td>
//             </tr>
//           ))} */}
//         </tbody>
//       </table>
//     </>
//   )
// }

// const BranchTable = () => {
//   return (
//     <>
//       <table className="users-table">
//         <thead>
//           <tr>
//             <th>Branch</th>
//             <th>Update</th>
//             <th>Delete</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* {all_users && all_users.data.map((user) => (
//             <tr key={user.id}>
//               <td>{user.branch?.name}</td>
//                 <button className="update-button">Update</button>
//               </td>
//               <td>
//                 <button className="delete-button">Delete</button>
//               </td>
//             </tr>
//           ))} */}
//         </tbody>
//       </table>
//     </>
//   )
// }