import { configureStore } from '@reduxjs/toolkit'
import { forgotPasswordReducer, profileReducer, userReducer, verificationReducer } from './reducers/userReducer'
import { allCourseReducer, courseLandingPadeDataReducer, myCourseReducer, paymentReducer, ssoLoginReducer } from './reducers/courseReducer';
import { academicDataReducer } from './reducers/academicDataReducer';
import { adminBatchReducer, adminPaymentReducer, adminReccDataReducer, getAllUsersReducer } from './reducers/adminReducer';
import { slotReducer } from './reducers/collegeReducer';

const store = configureStore({
    reducer: {
        user: userReducer,
        forgotPassword: forgotPasswordReducer,
        profile: profileReducer,
        myCourse: myCourseReducer,
        allCourse: allCourseReducer,
        academicData: academicDataReducer,
        verification: verificationReducer,
        SSO: ssoLoginReducer,
        users: getAllUsersReducer,
        batch: adminBatchReducer,
        courseLandingPage: courseLandingPadeDataReducer,
        payment: paymentReducer,
        adminPayment: adminPaymentReducer,
        slots: slotReducer,
        adminReccData: adminReccDataReducer
    }
})
export default store;



// DB_URI=mongodb+srv://platform_production:hUr2M1TkZ0TKyB2n@mindmatrix-prod.bvf6adu.mongodb.net/production