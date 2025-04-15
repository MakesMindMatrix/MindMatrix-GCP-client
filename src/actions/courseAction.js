import { GET_BATCH_FAIL } from '../constants/adminConstant';
import { ALL_COURSES_FAIL, ALL_COURSES_REQUEST, ALL_COURSES_SUCCESS, MY_COURSES_FAIL, MY_COURSES_REQUEST, MY_COURSES_SUCCESS, CLEAR_ERRORS, ENROLL_COURSE_REQUEST, ENROLL_COURSE_SUCCESS, ENROLL_COURSE_FAIL, SSO_LOGIN_REQUEST, SSO_LOGIN_SUCCESS, SSO_LOGIN_FAIL, USER_REPORT_REQUEST, USER_REPORT_SUCCESS, USER_REPORT_FAIL, COURSE_DATA_REQUEST, COURSE_DATA_SUCCESS, COURSE_DATA_FAIL, COURSE_LANDING_PAGE_DATA_REQUEST, COURSE_LANDING_PAGE_DATA_SUCCESS, COURSE_LANDING_PAGE_DATA_FAIL, PAYMENT_DATA_FAIL, PAYMENT_DATA_REQUEST, PAYMENT_DATA_SUCCESS, GET_PAYMENT_DATA_REQUEST, GET_PAYMENT_DATA_SUCCESS, COURSE_PAYMENT_REQUEST, COURSE_PAYMENT_SUCCESS, COURSE_PAYMENT_FAIL, COURSE_PAYMENT_STATUS_FAIL, COURSE_PAYMENT_STATUS_REQUEST, COURSE_PAYMENT_STATUS_SUCCESS } from '../constants/courseConstant'
import axios from "axios"

const BASE_URL=process.env.REACT_APP_BACKEND_URL
// Action for get my course
export const myCourseAction = (email) => async (dispatch) => {
    try {
        dispatch({ type: MY_COURSES_REQUEST });

        const { data } = await axios.get(`${BASE_URL}/api/v1/student_InterlibCourses/${email}`, {
            headers: {
              "Content-Type": "application/json"
            },
            withCredentials: true
          });
        console.log(data)

        dispatch({ type: MY_COURSES_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({ type: MY_COURSES_FAIL, payload: error.response.data.message })
    }
}

// Action for get all course
export const allCourse = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_COURSES_REQUEST })

        const { data } = await axios.get(`${BASE_URL}/api/v1/all_InterlibCourses`, {
            headers: {
              "Content-Type": "application/json"
            },
            withCredentials: true
          });

        dispatch({ type: ALL_COURSES_SUCCESS, payload: data.data });
    } catch (error) {
        dispatch({ type: ALL_COURSES_FAIL, payload: error.response.data.message })
    }
}

// Action for enroll course  
export const enrollCourse = (enrollCourse) => async (dispatch) => {

    try {
        dispatch({ type: ENROLL_COURSE_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.post(`${BASE_URL}/api/v1/enrollStudentOn_Interlib`, enrollCourse, config);
        console.log(data)
        dispatch({ type: ENROLL_COURSE_SUCCESS, payload: data.success })
    } catch (error) {
        dispatch({ type: ENROLL_COURSE_FAIL, payload: error.response.data.message })
    }
}

// Action for Report
export const report = (batch_id) => async (dispatch) => {
    try {
        dispatch({ type: USER_REPORT_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.post(`${BASE_URL}/api/v1/leaderBoard`, batch_id, config);

        dispatch({ type: USER_REPORT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: USER_REPORT_FAIL, payload: error.response.data.message })
    }
}

// Action for SSO
export const SSOLogin = (email) => async (dispatch) => {
    try {
        dispatch({ type: SSO_LOGIN_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.get(`${BASE_URL}/api/v1/interlibLogin/${email}`, config);

        dispatch({ type: SSO_LOGIN_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: SSO_LOGIN_FAIL, payload: error.response.data.message })
    }
}

// Action for Course, recommended - course and course - report
export const courseDataAction = (email) => async (dispatch) => {
    try {
        dispatch({ type: COURSE_DATA_REQUEST })

        const { data } = await axios.get(`${BASE_URL}/api/v1/my-course/${email}`, {
            headers: {
              "Content-Type": "application/json"
            },
            withCredentials: true
          });
        // console.log(data)
        dispatch({ type: COURSE_DATA_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: COURSE_DATA_FAIL, payload: error.response.data.message })
    }
}

export const courseLandingPageDataAction = () => async (dispatch) => {
    try {
        dispatch({ type: COURSE_LANDING_PAGE_DATA_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.get(`${BASE_URL}/api/v1/all-course-data`, config)

        dispatch({ type: COURSE_LANDING_PAGE_DATA_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: COURSE_LANDING_PAGE_DATA_FAIL, payload: error.response.data.message })
    }
}

export const paymentDataAction = (paymentData) => async (dispatch) => {

    try {
        dispatch({ type: PAYMENT_DATA_REQUEST })

        const config = { headers: { "Content-Type": "application/json", withCredentials: true } }

        const { data } = await axios.post(`${BASE_URL}/api/v1/payment`, paymentData, config)

        dispatch({ type: PAYMENT_DATA_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: PAYMENT_DATA_FAIL, payload: error.response.data.message })
    }
}

export const getPaymentDataAction = (batchId) => async (dispatch) => {
    // console.log(batch_id)
    try {
        dispatch({ type: GET_PAYMENT_DATA_REQUEST })

        const config = { headers: { "Content-Type": "application/json", withCredentials: true } }

        const { data } = await axios.post(`${BASE_URL}/api/v1/get-payment`, batchId, config)

        dispatch({ type: GET_PAYMENT_DATA_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: GET_BATCH_FAIL, payload: error.response.data.message })
    }
}

export const coursePaymentAction = (courseData) => async (dispatch) => {
    try {
        dispatch({ type: COURSE_PAYMENT_REQUEST })

        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true }

        const { data } = await axios.post(`${BASE_URL}/api/v1/create-payment`, courseData, config)
        console.log(data)
        dispatch({ type: COURSE_PAYMENT_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: COURSE_PAYMENT_FAIL, payload: error.response.data.message })
    }
}

export const coursePaymentStatusAction = (id) => async (dispatch) => {
    try {
        dispatch({ type: COURSE_PAYMENT_STATUS_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } }

        const { data } = await axios.post(`${BASE_URL}/api/v1/status/${id}`, config)

        dispatch({ type: COURSE_PAYMENT_STATUS_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: COURSE_PAYMENT_STATUS_FAIL, payload: error.response.data.message })
    }
}

// clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}