import { CLEAR_ERRORS, GET_BRANCH_FAIL, GET_BRANCH_REQUEST, GET_BRANCH_SUCCESS, GET_COLLEGE_FAIL, GET_COLLEGE_LIST_FAIL, GET_COLLEGE_LIST_REQUEST, GET_COLLEGE_LIST_SUCCESS, GET_COLLEGE_REQUEST, GET_COLLEGE_SUCCESS, GET_UNIVERSITY_FAIL, GET_UNIVERSITY_REQUEST, GET_UNIVERSITY_SUCCESS } from '../constants/acdemicDataConstant'

const orderAlphabet = (item) => {
    return item?.sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      } else {
        return 1;
      }
    });
  };

export const academicDataReducer = (state = { academicData: {} }, action) => {
    switch (action.type) {
        case GET_UNIVERSITY_REQUEST:
        case GET_COLLEGE_REQUEST:
        case GET_BRANCH_REQUEST:
        case GET_COLLEGE_LIST_REQUEST:
            return {
                loading: true,
            };
        case GET_UNIVERSITY_SUCCESS:
            return {
                ...state,
                loading: false,
                universityData: action.payload
            };
        case GET_COLLEGE_SUCCESS:
            // console.log(action.payload)
            return {
                ...state,
                loading: false,
                collegeData: orderAlphabet(action.payload)
            }
        case GET_BRANCH_SUCCESS:
            return {
                ...state,
                loading: false,
                branchData: action.payload
            }
        case GET_COLLEGE_LIST_SUCCESS:
            return {
                ...state,
                loading: false,
                collegeListData: orderAlphabet(action.payload.data)
            }
        case GET_COLLEGE_FAIL:
            return {
                ...state,
                loading: false,
                collegeData: null,
                error: action.payload
            }
        case GET_BRANCH_FAIL:
            return {
                ...state,
                loading: false,
                branchData: null,
                error: action.payload
            }
        case GET_UNIVERSITY_FAIL:
            return {
                ...state,
                loading: false,
                universityData: null,
                error: action.payload
            };
        case GET_COLLEGE_LIST_FAIL:
            return {
                ...state,
                loading: false,
                collegeListData: null,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            }
        default:
            return state;
    }
}