import axios from "axios";
import { ALL_PAYMENT_FAIL, ALL_PAYMENT_REQUEST, ALL_PAYMENT_SUCCESS, ENROLLED_STUDENT_FAIL, ENROLLED_STUDENT_REQUEST, ENROLLED_STUDENT_SUCCESS, GET_BATCH_FAIL, GET_BATCH_REQUEST, GET_BATCH_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, UNENROLL_STUDENT_FAIL, UNENROLL_STUDENT_REQUEST, UNENROLL_STUDENT_SUCCESS } from "../constants/adminConstant";

const BASE_URL=process.env.REACT_APP_BACKEND_URL
// Action for get all users
export const getAllUsers = (paginateData, filterQuery) => async (dispatch) => { 
    console.log(filterQuery)   
    try {
        dispatch({ type: GET_USERS_REQUEST });

        const config = { headers: { "Content-Type": "application/json" }}

        const { data } = await axios.get(`${BASE_URL}/api/v1/get-all-users?page=${paginateData.page}&limit=${paginateData.limit}&college=${filterQuery.college}&branch=${filterQuery.branch}&semester=${filterQuery.semester}`, config)

        dispatch({ type: GET_USERS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_USERS_FAIL, payload: error.response.data.message })
    }
}

// Action for get the list of batches
export const getBatchList = () => async (dispatch) => {
    try {
        dispatch({ type: GET_BATCH_REQUEST })

        const config = { headers: { "Content-Type": "application/json" }}

        const { data } = await axios.get(`${BASE_URL}/api/v1/getBatch`, config)

        dispatch({ type: GET_BATCH_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: GET_BATCH_FAIL, payload: error.response.data.message })
    }
}

// Action for Enrolled student from batch wise on interlib
export const enrolledListAction = (batch_id) => async (dispatch) => {
    try {
        console.log("called")
        dispatch({ type: ENROLLED_STUDENT_REQUEST })

        const config = { headers: { "Content-Type": "application/json"}, withCredentials: true}

        const { data } = await axios.post(`${BASE_URL}/api/v1/enrolled-student`, batch_id, config)

        dispatch({ type: ENROLLED_STUDENT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: ENROLLED_STUDENT_FAIL, payload: error.response.data })
    }
}

// Action for Unenroll Student from any course on interlib
export const unEnrollAction = () => async (dispatch) => {
    try {
        dispatch({ type: UNENROLL_STUDENT_REQUEST })

        const config = { headers: { "Content-Type": "application/json" }}

        const { data } = await axios.get(`${BASE_URL}/api/v1/get-all-users`, config)

        dispatch({ type: UNENROLL_STUDENT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: UNENROLL_STUDENT_FAIL, payload: error.response.data.message })
    }
}

// Action for getting all the payments
export const getAllPaymentAction = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PAYMENT_REQUEST })

        const config = { headers: { "Content-Type": "application/json" }}

        const { data } = await axios.get(`${BASE_URL}/api/v1/all-payment`, config)

        dispatch({ type: ALL_PAYMENT_SUCCESS, payload: data})
    } catch (error) {
        dispatch({ type: ALL_PAYMENT_FAIL, payload: error.response.data.message })
    }
}