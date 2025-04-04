import axios from "axios";
import { ALL_SLOT_FAIL, ALL_SLOT_REQUEST, ALL_SLOT_SUCCESS, UPDATE_SLOT_FAIL, UPDATE_SLOT_REQUEST, UPDATE_SLOT_SUCCESS } from "../constants/collegeConstant";

// Action for get all slots
export const allSlotsAction = () => async (dispatch) => {
    try {
        dispatch({ type: ALL_SLOT_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.get(`/api/v1/slot`, config);

        dispatch({ type: ALL_SLOT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: ALL_SLOT_FAIL, payload: error.response.data.message })
    }
}

// Action for update Slot
export const updateSlotAction = (slotData, email) => async (dispatch) => {
    const dataSLot = {
        slotData,
        email
    }
    try {
        dispatch({ type: UPDATE_SLOT_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(`/api/v1/slot/`, dataSLot, config);
        console.log(data)
        dispatch({ type: UPDATE_SLOT_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: UPDATE_SLOT_FAIL, payload: error.response.data.message })
    }
}