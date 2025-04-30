import { LOGIN_REQUEST, LOGIN_FAIL, LOGIN_SUCCESS, REGISTER_USER_REQUEST, REGISTER_USER_FAIL, REGISTER_USER_SUCCESS, CLEAR_ERRORS, LOAD_USER_FAIL, LOAD_USER_SUCCESS, LOAD_USER_REQUEST, LOGOUT_SUCCESS, LOGOUT_FAIL, FORGOT_PASSWORD_REQUEST, FORGOT_PASSWORD_SUCCESS, FORGOT_PASSWORD_FAIL, RESET_PASSWORD_REQUEST, RESET_PASSWORD_SUCCESS, RESET_PASSWORD_FAIL, UPDATE_USER_FAIL, UPDATE_USER_REQUEST, UPDATE_USER_SUCCESS, VERIFICATION_CODE_REQUEST, VERIFICATION_CODE_SUCCESS, VERIFICATION_CODE_FAIL, VERIFY_CODE_REQUEST, VERIFY_CODE_SUCCESS, VERIFY_CODE_FAIL } from "../constants/userConstant"
import axios from "axios"

const BASE_URL=process.env.REACT_APP_BACKEND_URL

// console.log(BASE_URL)
// Action for login
export const login = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: LOGIN_REQUEST });

        const config = { headers: { "Content-Type": "application/json"}, withCredentials: true}
        const { data } = await axios.post(`${BASE_URL}/api/v1/login`,
            { email, password },
            config
        )
        // console.log(data)
        dispatch({ type: LOGIN_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: LOGIN_FAIL, payload: error.response.data.message })
    }
}

// Action for register
export const register = (userData) => async (dispatch) => {
    try {
        dispatch({ type: REGISTER_USER_REQUEST })

        const config = { headers: { withCredentials: true } };

        const { data } = await axios.post(`${BASE_URL}/api/v1/register`, userData, config)
        dispatch({ type: REGISTER_USER_SUCCESS, payload: data.user })
    } catch (error) {
        dispatch({ type: REGISTER_USER_FAIL, payload: error.response.data })
    }
}

// Action for update user
export const updateUser = (userData) => async (dispatch) => {
    try {
        dispatch({ type: UPDATE_USER_REQUEST })

        const config = { headers: { "Content-Type": "application/json" }, withCredentials: true };

        const { data } = await axios.post(`${BASE_URL}/api/v1/updateUser`, userData, config)
        console.log(data)
        dispatch({ type: UPDATE_USER_SUCCESS, payload: data })
    } catch (error) {
        dispatch({ type: UPDATE_USER_FAIL, payload: error.response.data.message })
    }
}

// Load user
export const loadUser = () => async (dispatch) => {
    // console.log("called")
    try {
        dispatch({ type: LOAD_USER_REQUEST });

        const { data } = await axios.get(`${BASE_URL}/api/v1/me`, {
            withCredentials: true
          })
        console.log(data?.message)
        dispatch({ type: LOAD_USER_SUCCESS, payload: data.user })
    } catch (error) {
        console.log(error.response.data?.message || "Failed to load user");
        dispatch({ type: LOAD_USER_FAIL, payload: error.response.data.message })
    }
}

// // Log out user
export const logout = () => async (dispatch) => {
    try {
        await axios.get(`${BASE_URL}/api/v1/logout`, { withCredentials: true })

        dispatch({ type: LOGOUT_SUCCESS })
    } catch (error) {
        dispatch({ type: LOGOUT_FAIL, payload: error.response.data.message })
    }
}

// Forgot Password
export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: FORGOT_PASSWORD_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`${BASE_URL}/api/v1/password/forgot`, email, config);

        dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: data.message });
    } catch (error) {
        dispatch({
            type: FORGOT_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Reset Password
export const resetPassword = (token, passwords) => async (dispatch) => {
    console.log("pass", passwords)
    try {
        dispatch({ type: RESET_PASSWORD_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.put(
            `${BASE_URL}/api/v1/password/reset/${token}`,
            passwords,
            config
        );

        dispatch({ type: RESET_PASSWORD_SUCCESS, payload: data.success });
    } catch (error) {
        dispatch({
            type: RESET_PASSWORD_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Send verification code
export const sendVerificationCode = (verificationData) => async (dispatch) => {

    try {
        dispatch({ type: VERIFICATION_CODE_REQUEST });

        const config = { headers: { "Content-Type": "application/json" } };

        const { data } = await axios.post(`${BASE_URL}/api/v1/sendCode`, verificationData, config);

        dispatch({ type: VERIFICATION_CODE_SUCCESS, payload: data.message });
        console.log(data)
        return data
    } catch (error) {
        dispatch({
            type: VERIFICATION_CODE_FAIL,
            payload: error.response.data.message,
        });
    }
};

// Verify user code
export const verifyCode = (verificationData) => async (dispatch) => {
    try {
        dispatch({ type: VERIFY_CODE_REQUEST });

        const config = { headers: { "Content-Type": "application/json" }};

        const { data } = await axios.post(`${BASE_URL}/api/v1/verifyUser`, verificationData, config);
    
        dispatch({ type: VERIFY_CODE_SUCCESS, payload: data.success });

        return data;
    } catch (error) {
        dispatch({
            type: VERIFY_CODE_FAIL,
            payload: error.response.data.message,
        });
    }
};

/// clearing errors
export const clearErrors = () => async (dispatch) => {
    dispatch({ type: CLEAR_ERRORS })
}
