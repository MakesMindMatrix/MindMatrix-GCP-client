import { ALL_PAYMENT_FAIL, ALL_PAYMENT_REQUEST, ALL_PAYMENT_SUCCESS, CLEAR_ERRORS, ENROLLED_STUDENT_FAIL, ENROLLED_STUDENT_REQUEST, ENROLLED_STUDENT_SUCCESS, GET_BATCH_FAIL, GET_BATCH_REQUEST, GET_BATCH_SUCCESS, GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../constants/adminConstant"


export const getAllUsersReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_USERS_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                all_users: action.payload
            }

        case GET_USERS_FAIL:
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

export const adminBatchReducer = (state = {}, action) => {
    switch (action.type) {
        case GET_BATCH_REQUEST:
        case ENROLLED_STUDENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case GET_BATCH_SUCCESS:
            return {
                ...state,
                loading: false,
                all_batch: action.payload
            }
        case ENROLLED_STUDENT_SUCCESS:
            return {
                ...state,
                loading: false,
                enrolled_students: action.payload
            }
        case GET_BATCH_FAIL:
        case ENROLLED_STUDENT_FAIL:
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

export const adminPaymentReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_PAYMENT_REQUEST:
            return {
                ...state,
                loading: true
            }

        case ALL_PAYMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                all_payment: action.payload
            }
        case ALL_PAYMENT_FAIL:
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