import axios from "axios";
import { ADD_RECC_DATA_FAIL, ADD_RECC_DATA_REQUEST, ADD_RECC_DATA_SUCCESS, ALL_PAYMENT_FAIL, ALL_PAYMENT_REQUEST, ALL_PAYMENT_SUCCESS, DELETE_RECC_DATA_FAIL, DELETE_RECC_DATA_REQUEST, DELETE_RECC_DATA_SUCCESS, ENROLLED_STUDENT_FAIL, ENROLLED_STUDENT_REQUEST, ENROLLED_STUDENT_SUCCESS, GET_ALL_RECC_DATA_FAIL, GET_ALL_RECC_DATA_REQUEST, GET_ALL_RECC_DATA_SUCCESS, GET_BATCH_FAIL, GET_BATCH_REQUEST, GET_BATCH_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS, UNENROLL_STUDENT_FAIL, UNENROLL_STUDENT_REQUEST, UNENROLL_STUDENT_SUCCESS, UPDATE_RECC_DATA_FAIL, UPDATE_RECC_DATA_REQUEST, UPDATE_RECC_DATA_SUCCESS } from "../constants/adminConstant";

const BASE_URL = process.env.REACT_APP_BACKEND_URL
// Action for get all users
export const getAllUsers = (paginateData, filterQuery) => async (dispatch) => {
    console.log(filterQuery)
    try {
        dispatch({ type: GET_USERS_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } }

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

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.get(`${BASE_URL}/api/v1/getBatch`, config)

        dispatch({ type: GET_BATCH_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_BATCH_FAIL, payload: error.response.data.message })
    }
}

// Action for Enrolled student from batch wise on interlib
export const enrolledListAction = (batch_id) => async (dispatch) => {
    try {
        console.log("called")
        dispatch({ type: ENROLLED_STUDENT_REQUEST })

        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true }

        const { data } = await axios.post(`${BASE_URL}/api/v1/enrolled-student`, batch_id, config)

        dispatch({ type: ENROLLED_STUDENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ENROLLED_STUDENT_FAIL, payload: error.response.data })
    }
}

// Action for Unenroll Student from any course on interlib
export const unEnrollAction = () => async (dispatch) => {
    try {
        dispatch({ type: UNENROLL_STUDENT_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.get(`${BASE_URL}/api/v1/get-all-users`, config)

        dispatch({ type: UNENROLL_STUDENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UNENROLL_STUDENT_FAIL, payload: error.response.data.message })
    }
}

// Action for getting all the payments
export const getAllPaymentAction = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_PAYMENT_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.get(`${BASE_URL}/api/v1/all-payment`, config)

        dispatch({ type: ALL_PAYMENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ALL_PAYMENT_FAIL, payload: error.response.data.message })
    }
}

// Action for add Recommendation Data 
export const addReccDataAction = (reccData) => async (dispatch) => {
    try {
        dispatch({ type: ADD_RECC_DATA_REQUEST })

        const config = { headers: { "Content-Type": "application/json", withCredentials: true } }

        const { data } = await axios.post(`${BASE_URL}/api/v1/course-info`, reccData, config)
        console.log(data)
        dispatch({ type: ADD_RECC_DATA_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: ADD_RECC_DATA_FAIL, payload: error.response.data.message })
    }
}

// Action for update the Recommended data
export const updateReccDataAction = (reccData, batch_id) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_RECC_DATA_REQUEST })

        const config = { headers: { "Content-Type": "application/json", withCredentials: true } }

        const { data } = await axios.put(`${BASE_URL}/api/v1/course-info/${batch_id}`, reccData, config)

        dispatch({ type: UPDATE_RECC_DATA_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_RECC_DATA_FAIL, payload: error.response.data.message })
    }
}

// Action for delete the Recommended data
export const deleteReccDataAction = (batch_id) => async (dispatch) => {
    try {
        dispatch({ type: DELETE_RECC_DATA_REQUEST })

        const config = { headers: { "Content-Type": "application/json", withCredentials: true } }

        const { data } = await axios.delete(`${BASE_URL}/api/v1/course-info/${batch_id}`, config)
        console.log(data)
        dispatch({ type: DELETE_RECC_DATA_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: DELETE_RECC_DATA_FAIL, payload: error.response.data.message })
    }
}

// Action for get the list of Recommended Data
export const getALLReccDataAction = () => async (dispatch) => {
    try {
        dispatch({ type: GET_ALL_RECC_DATA_REQUEST })

        const config = { headers: { "Content-Type": "application/json", withCredentials: true } }

        const { data } = await axios.get(`${BASE_URL}/api/v1/course-info`, config)

        dispatch({ type: GET_ALL_RECC_DATA_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_ALL_RECC_DATA_FAIL, payload: error.response.data.message })
    }
}