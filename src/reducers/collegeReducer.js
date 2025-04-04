import { ALL_SLOT_FAIL, ALL_SLOT_REQUEST, ALL_SLOT_SUCCESS, CLEAR_ERRORS, UPDATE_SLOT_FAIL, UPDATE_SLOT_REQUEST, UPDATE_SLOT_SUCCESS } from "../constants/collegeConstant"


// Reducer for slots
export const slotReducer = (state = {}, action) => {
    switch (action.type) {
        case ALL_SLOT_REQUEST:
        case UPDATE_SLOT_REQUEST:
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
        case ALL_SLOT_FAIL:
        case UPDATE_SLOT_FAIL:    
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