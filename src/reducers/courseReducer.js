import { ALL_COURSE_LANDING_PAGE_DATA_FAIL, ALL_COURSE_LANDING_PAGE_DATA_REQUEST, ALL_COURSE_LANDING_PAGE_DATA_SUCCESS, ALL_COURSES_FAIL, ALL_COURSES_REQUEST, ALL_COURSES_SUCCESS, ALL_NOTICEBOARDS_FAIL, ALL_NOTICEBOARDS_REQUEST, ALL_NOTICEBOARDS_SUCCESS, CLEAR_ERRORS, COURSE_DATA_FAIL, COURSE_DATA_REQUEST, COURSE_DATA_SUCCESS, COURSE_PAYMENT_FAIL, COURSE_PAYMENT_REQUEST, COURSE_PAYMENT_STATUS_FAIL, COURSE_PAYMENT_STATUS_REQUEST, COURSE_PAYMENT_STATUS_SUCCESS, COURSE_PAYMENT_SUCCESS, ENROLL_COURSE_FAIL, ENROLL_COURSE_REQUEST, ENROLL_COURSE_SUCCESS, GET_PAYMENT_DATA_FAIL, GET_PAYMENT_DATA_REQUEST, GET_PAYMENT_DATA_SUCCESS, MY_COURSES_FAIL, MY_COURSES_REQUEST, MY_COURSES_SUCCESS, PAYMENT_DATA_FAIL, PAYMENT_DATA_REQUEST, PAYMENT_DATA_SUCCESS, SSO_LOGIN_FAIL, SSO_LOGIN_REQUEST, SSO_LOGIN_SUCCESS, USER_REPORT_FAIL, USER_REPORT_REQUEST, USER_REPORT_SUCCESS } from '../constants/courseConstant'

// Reducer for my courses & enroll courses
export const myCourseReducer = (state = {}, action) => {
    switch (action.type) {
        case MY_COURSES_REQUEST:
        case ENROLL_COURSE_REQUEST:
        case USER_REPORT_REQUEST:
        case COURSE_DATA_REQUEST:
        case ALL_NOTICEBOARDS_REQUEST:
            return {
                ...state,
                loading: true
            }
        case USER_REPORT_SUCCESS:
            return {
                ...state,
                loading: false,
                report_data: action.payload
            }

        case MY_COURSES_SUCCESS:
            return {
                ...state,
                loading: false,
                my_course: action.payload
            }
        case ENROLL_COURSE_SUCCESS:
            return {
                ...state,
                loading: false,
                enroll_course: action.payload
            }
        case COURSE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                my_course: action.payload.myCourseResponse.data,
                rec_course: action.payload.recCourse,
                report_data: action.payload.report_data
            }
        case ALL_NOTICEBOARDS_SUCCESS:
            return {
                ...state,
                loading: false,
                allNoticeboards: action.payload
            }
        case ENROLL_COURSE_FAIL:
        case MY_COURSES_FAIL:
        case USER_REPORT_FAIL:
        case COURSE_DATA_FAIL:
        case ALL_NOTICEBOARDS_FAIL: 
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }

        default:
            return state;
    }
}

// Reducer for all courses
export const allCourseReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_COURSES_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ALL_COURSES_SUCCESS:
            return {
                ...state,
                loading: false,
                all_course: action.payload
            }

        case ALL_COURSES_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

// Reducer for sso login
export const ssoLoginReducer = (state = {}, action) => {
    switch (action.type) {
        case SSO_LOGIN_REQUEST:
            return {
                ...state,
                loading: true
            }

        case SSO_LOGIN_SUCCESS:
            return {
                ...state,
                loading: false,
                sso: action.payload
            }

        case SSO_LOGIN_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }

        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

// Reducer for Course Landing page data
export const courseLandingPadeDataReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_COURSE_LANDING_PAGE_DATA_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ALL_COURSE_LANDING_PAGE_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                courseLandingPageData: action.payload
            }

        case ALL_COURSE_LANDING_PAGE_DATA_FAIL:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}

export const paymentReducer = (state = {}, action) => {
    switch (action.type) {
        case PAYMENT_DATA_REQUEST:
        case GET_PAYMENT_DATA_REQUEST:
        case COURSE_PAYMENT_REQUEST:
        case COURSE_PAYMENT_STATUS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case PAYMENT_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                paymentData: action.payload
            }
        case GET_PAYMENT_DATA_SUCCESS:
            return {
                ...state,
                loading: false,
                getPaymentData: action.payload
            }
        case COURSE_PAYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                coursePayment: action.payload
            }
        case COURSE_PAYMENT_STATUS_SUCCESS:
            return {
                ...state,
                loading: false,
                coursePaymentStatus: action.payload
            }
        case PAYMENT_DATA_FAIL:
        case GET_PAYMENT_DATA_FAIL:
        case COURSE_PAYMENT_FAIL:
        case COURSE_PAYMENT_STATUS_FAIL:   
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}