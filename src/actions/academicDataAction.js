import { GET_BRANCH_FAIL, GET_BRANCH_REQUEST, GET_BRANCH_SUCCESS, GET_COLLEGE_FAIL, GET_COLLEGE_LIST_FAIL, GET_COLLEGE_LIST_REQUEST, GET_COLLEGE_LIST_SUCCESS, GET_COLLEGE_REQUEST, GET_COLLEGE_SUCCESS, GET_UNIVERSITY_FAIL, GET_UNIVERSITY_REQUEST, GET_UNIVERSITY_SUCCESS } from '../constants/acdemicDataConstant'
import axios from "axios"

// Action for get university list
export const getUniversity = () => async (dispatch) => {
    try {
        dispatch({ type: GET_UNIVERSITY_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.get(`/api/v1/getUniversity`, config);
        console.log(data)
        dispatch({ type: GET_UNIVERSITY_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_UNIVERSITY_FAIL, payload: error.response.data.message })
    }
}

// Action for get college list By university
export const getCollege = (id) => async (dispatch) => {
    try {
        dispatch({ type: GET_COLLEGE_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.get(`/api/v1/getCollegeByUniversity/${id}`, config);
        console.log(data)
        dispatch({ type: GET_COLLEGE_SUCCESS, payload: data.collegeList });
    } catch (error) {
        dispatch({ type: GET_COLLEGE_FAIL, payload: error.response.data.message })
    }
}

// Action for get branch list
export const getBranch = () => async (dispatch) => {
    try {
        dispatch({ type: GET_BRANCH_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.get(`/api/v1/getBranch`, config);
        
        dispatch({ type: GET_BRANCH_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_BRANCH_FAIL, payload: error.response.data.message })
    }
}

// Action for get the list of all college
export const getCollegeList = (paginateData) => async (dispatch) => {
    try {

        dispatch({ type: GET_COLLEGE_LIST_REQUEST })

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.get(`/api/v1/getCollege`, config);
        // console.log(data)
        dispatch({ type: GET_COLLEGE_LIST_SUCCESS, payload: data });
    } catch (error) {
        dispatch({ type: GET_COLLEGE_LIST_FAIL, payload: error.response.data.message })
    }
}