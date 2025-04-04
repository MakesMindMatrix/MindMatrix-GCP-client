import React, { useEffect } from 'react'
import './AdminPayment.css'
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";
import AdminNavbar from '../../Layout/AdminNavbar/AdminNavbar'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPaymentAction } from '../../../actions/adminAction'

const AdminPayment = () => {
    const dispatch = useDispatch()

    const { all_payment } = useSelector((state) => state.adminPayment)
    console.log(all_payment)
    const downloadExcel = () => {
        const payment_data = all_payment?.Payment.map((elm) => {
            const obj = {
                name: elm?.user?.name,
                email: elm?.user?.email,
                "Course-Name": elm.courseName,
                "Course-Price": elm.coursePrice,
                "Transaction-ID": elm.transactionId,
                "Batch-ID": elm.batchId,
                phone: elm?.user?.phone
            }
            return obj
        })
        
        const worksheet = XLSX.utils.json_to_sheet(payment_data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Data");

        // Convert to binary and create a Blob
        const excelBuffer = XLSX.write(workbook, { bookType: "xlsx", type: "array" });
        const dataBlob = new Blob([excelBuffer], { type: "application/octet-stream" });

        // Save the file
        saveAs(dataBlob, "Data.xlsx");
    };

    useEffect(() => {
        dispatch(getAllPaymentAction())
    }, [dispatch])
    return (
        <>
            <div className='adminPayment_container'>
                {/* Sidebar Menu */}
                <AdminNavbar />

                {/* Main Content Area */}
                <div className="main-content">
                <button onClick={downloadExcel}>Download Excel</button>
                    <div className='users-table-parent'>
                        <table className="users-table">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Course Name</th>
                                    <th>Course Price</th>
                                    <th>Transaction ID</th>
                                    <th>Batch ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {all_payment && all_payment.Payment.map((elm, index) => (
                                    <tr key={index}>
                                        <td>{elm.user?.name}</td>
                                        <td>{elm.user?.email}</td>
                                        <td>{elm.courseName}</td>
                                        <td>{elm.coursePrice}</td>
                                        <td>{elm.transactionId}</td>
                                        <td>{elm.batchId}</td>
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

export default AdminPayment
