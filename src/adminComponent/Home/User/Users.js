import React, { useEffect, useState } from 'react'
import "./Users.css";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import AdminNavbar from '../../Layout/AdminNavbar/AdminNavbar';
import { useDispatch, useSelector } from "react-redux";
import { getAllUsers } from "../../../actions/adminAction";
import ReactPaginate from "react-paginate";
import Loader from '../../../component/layout/Loader/Loader';
import { getBranch, getCollegeList } from '../../../actions/academicDataAction';


const Users = () => {
    const [paginateData, setPaginateData] = useState({
        page: 1,
        limit: 25
    })
    const [filters, setFilters] = useState([{ name: '', value: '' }])
    const [selectedValue, setSelectedValue] = useState()
    const semester = [{ name: 1 }, { name: 2 }, { name: 3 }, { name: 4 }, { name: 5 }, { name: 6 }, { name: 7 }, { name: 8 }]
    const filterName = ['branch', 'semester', 'college']
    const dispatch = useDispatch()

    const { loading, all_users } = useSelector((state) => state.users)
    const { collegeListData, branchData } = useSelector((state) => state.academicData)

    const handleLimit = (e) => setPaginateData({ ...paginateData, limit: e.target.value })
    const handlePageClick = (e) => setPaginateData({ ...paginateData, page: e.selected + 1 })

    const selectedFilter = (val) => {

        switch (val) {
            case 'college':
                return collegeListData

            case 'branch':
                return branchData?.data

            case 'semester':
                return semester

            default:
                return null;
        }
    }

    const updateFilter = (index, key, value) => {
        const newFilters = [...filters];
        newFilters[index][key] = value;

        if (key === "name") {
            newFilters[index].value = "";
            setSelectedValue((prev) => ({ ...prev, [index]: selectedFilter(value) }));
        }

        setFilters(newFilters);
    };

    const addFilter = () => {
        setFilters([...filters, { name: '', value: "" }]);
    }

    const removeFilter = (index) => {
        setFilters(filters.filter((_, i) => i !== index));
    }

    const downloadExcel = () => {
        const user_data = all_users?.data?.map((elm) => {
            const obj = {
                name: elm?.name,
                email: elm?.email,
                branch: elm.branch.name,
                semester: elm.semester,
                university: elm.university.name,
                college: elm.college.name,
                usn: elm.roll_no,
                phone: elm.phone,
                payment: elm.payments?.length > 0 ? "true" : "false"
            }
            return obj
        })

        const worksheet = XLSX.utils.json_to_sheet(user_data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

        // Convert to binary and create a Blob
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

        // Save the file
        saveAs(dataBlob, "Data.xlsx");
    };

    useEffect(() => {
        const filterQuery = {
            college: '',
            branch: '',
            semester: ''
        }
        filters.forEach((elm) => {
            for (let key in filterQuery) {
                if (key === elm.name) {
                    filterQuery[key] = elm.value
                }
            }
        })
        console.log(filterQuery)
        dispatch(getAllUsers(paginateData, filterQuery))
        dispatch(getBranch())
        dispatch(getCollegeList())

    }, [dispatch, paginateData, filters])

    // if (loading) {
    //     return <Loader />; // Replace with a proper loader
    // }

    return (
        <div className="dashboard-container">
            {/* Sidebar Menu */}
            <AdminNavbar />

            {/* Main Content Area */}
            <div className="main-content">
                <h1>User Management</h1>
                <h3>Page No - {all_users?.page}</h3>
                <h3>No of data - {all_users?.limit}</h3>
                <h3>Total data - {all_users?.total}</h3>
                <h3>Total Pages - {all_users?.pages}</h3>

                <div>
                    <select name='limit' value={paginateData.limit} onChange={handleLimit}>
                        <option value='25'>25</option>
                        <option value='50'>50</option>
                        <option value='75'>75</option>
                        <option value='100'>100</option>
                    </select>

                    <button>Filter</button>
                    <button onClick={downloadExcel}>Download</button>
                </div>

                <div className="filter-menu">
                    {filters.map((_, index) => (
                        <div key={index} className="filter-row">
                            <select value={filters.name} onChange={(e) => updateFilter(index, "name", e.target.value)}>
                                <option>SELECT NAME</option>
                                {filterName.map((elm, index) => (
                                    <option value={elm} key={index}>{elm.toUpperCase()}</option>
                                ))}
                                {/* <option value='branch'>Branch</option>
                                <option value='semester'>Semester</option>
                                <option value='college'>College</option> */}
                                {/* <option>Course</option> */}
                                {/* <option>College</option>
                            <option>College</option> */}
                            </select>
                            {selectedValue && (<select value={filters.value} onChange={(e) => updateFilter(index, "value", e.target.value)}>
                                <option>Please select value</option>
                                {selectedValue[index]?.map((elm, ind) => (
                                    <option key={ind} value={elm._id}>{elm.name}</option>
                                ))}
                            </select>)}
                            <button className='remove-button' onClick={() => removeFilter(index)}>X</button>
                        </div>
                    ))}
                </div>
                <button className="add-filter-button" onClick={addFilter}>+ Add Filter</button>
                {loading ? <Loader /> : (
                    <div className='users-table-parent'>
                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Branch</th>
                                    <th>Semester</th>
                                    <th>University</th>
                                    <th>College</th>
                                    <th>Payment</th>
                                    <th>USN</th>
                                    <th>Phone</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {all_users && all_users.data.map((user, index) => (
                                    <tr key={index}>
                                        <td>{user.name}</td>
                                        <td>{user.email}</td>
                                        <td>{user.branch?.name}</td>
                                        <td>{user.semester}</td>
                                        <td>{user.university?.name}</td>
                                        <td>{user.college?.name}</td>
                                        <td>{user.payments?.length > 0 ? "true" : "false"}</td>
                                        <td>{user.roll_no}</td>
                                        <td>{user.phone}</td>
                                        <td>
                                            <button className="update-button">Update</button>
                                        </td>
                                        <td>
                                            <button className="delete-button">Delete</button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
                <ReactPaginate
                    pageCount={Math.ceil(all_users?.pages)}
                    nextLabel="next >"
                    previousLabel="< previous"
                    renderOnZeroPageCount={null}
                    pageRangeDisplayed={5}
                    breakLabel="..."
                    onPageChange={handlePageClick}
                    containerClassName={"pagination"}
                    pageClassName={"page-item"}
                    activeClassName={"active"}
                />
            </div>
        </div>
    );
}

export default Users
