import { ALL_SLOT_FAIL, ALL_SLOT_REQUEST, ALL_SLOT_SUCCESS, CLEAR_ERRORS, GET_PLAN_FAIL, GET_PLAN_REQUEST, GET_PLAN_SUCCESS, UPDATE_SLOT_FAIL, UPDATE_SLOT_REQUEST, UPDATE_SLOT_SUCCESS } from "../constants/collegeConstant"


// Reducer for slots
export const slotReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_SLOT_REQUEST:
        case UPDATE_SLOT_REQUEST:
        case GET_PLAN_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ALL_SLOT_SUCCESS:
            return {
                ...state,
                loading: false,
                allSlots: action.payload
            }
        case UPDATE_SLOT_SUCCESS:
            return {
                ...state,
                loading: false,
                updatedSlot: action.payload
            }
        case GET_PLAN_SUCCESS:
            return {
                ...state,
                loading: false,
                allPlans: action.payload
            }
        case ALL_SLOT_FAIL:
        case UPDATE_SLOT_FAIL:
        case GET_PLAN_FAIL:
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