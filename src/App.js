import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
// import { loadUser } from './actions/userAction.js'
import ProtectedRoute from "./component/Route/ProtectedRoute.js";
import WebFont from "webfontloader";
import Profile from "./component/User/Profile.js";
import store from "./store.js";
import Register from "./component/User/Register.js";
import Login from "./component/User/Login.js";
import EmailVerification from "./component/User/EmailVerification.js";
import Onboarding from "./component/User/Onboarding.js";
import Dashboard from "./component/Home/Dashboard.js";
import LandingPage from "./component/Home/LandingPage.js";
// import Report from './component/Home/Report.js'
import { loadUser } from "./actions/userAction.js";
import ForgotPassword from "./component/User/ForgotPassword.js";
import ResetPassword from "./component/User/ResetPassword.js";
import SendMail from "./adminComponent/SendMail.js";
import AdminDashboard from "./adminComponent/Home/AdminDashboard.js";
import Users from "./adminComponent/Home/User/Users.js";
import Academic from "./adminComponent/Home/Academic/Academic.js";
import Course from "./adminComponent/Home/Course/Course.js";
import Contact from "./component/Home/Contact.js";
import Terms from "./component/Home/Terms.js";
import About from "./component/Home/About.js";
import PrivacyPolicy from "./component/Home/PrivacyPolicy.js";
import CancellationPolicy from "./component/Home/CancellationPolicy.js";
import CourseLandingPage from "./component/Course/CourseLandingPage.js";
// import Payment from './component/Course/Payment.js'
import AdminPayment from "./adminComponent/Home/AdminPayment/AdminPayment.js";
import Loader from "./component/layout/Loader/Loader.js";
import PaymentVerification from "./component/User/PaymentVerification.js";
import CollegeDashboard from "./collegeComponent/CollegeDashboard/CollegeDashboard.js";
import PaymentSuccess from "./component/User/PaymentSuccess.js";
import PaymentFailure from "./component/User/PaymentFailure.js";
import CoursePayment from "./component/Course/CoursePayment.js";
import DashboardTest from "./component/Home/DashboardTest.js";
import HomePage from "./component/Home/HomePage.js";
import IndustryRegister from "./component/User/IndustryRegister.js";
import UserInterest from "./component/Home/UserInterest.js";
import Interest from "./adminComponent/Home/Interest/Interest.js";
// import Footer from './component/layout/Footer/Footer.js'
// import AllCourses from './component/Home/AllCourses.js'
import CollegePlan from "./component/User/CollegePlan.js";
import Catalog from "./component/Home/Catalog.js";

const App = () => {
  const { loading } = useSelector((state) => state.user);

  // const token = document.cookie.split('; ').find(row => row.startsWith('token=')) || localStorage.getItem('token');
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto Flex", "Montserrat"],
      },
    });

    store.dispatch(loadUser());
  }, []);

  // Prevent flickering by showing a loading screen until authentication state is ready
  if (loading) {
    return <Loader />; // Replace with a proper loader
  }

  return (
    <>
      <Routes>
        <Route path="/test" element={<LandingPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/user-interest" element={<UserInterest />} />
        <Route path="/about-us" element={<About />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/terms-conditions" element={<Terms />} />
        <Route
          path="/cancellations-return-policy"
          element={<CancellationPolicy />}
        />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/sendMail" element={<SendMail />} />
        <Route path="/register" element={<Register />} />
        <Route path="/collegePlan" element={<CollegePlan />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/industry-register" element={<IndustryRegister />} />
        <Route path="/login" element={<Login />} />
        <Route path="/verify" element={<EmailVerification />} />
        <Route path="/onboarding" element={<Onboarding />} />
        <Route path="/verify-payment" element={<PaymentVerification />} />
        <Route path="/password/forgot" element={<ForgotPassword />} />
        <Route path="/password/reset/:token" element={<ResetPassword />} />
        <Route path="/dashboard-test" element={<DashboardTest />} />

        <Route path="/courses/:courseName" element={<CourseLandingPage />} />

        {/* Payment gateway routes */}
        <Route path="/payment-success" element={<PaymentSuccess />} />
        <Route path="/payment-failure" element={<PaymentFailure />} />
        <Route path="/payment" element={<CoursePayment />} />
        <Route path="/link" element={<Link />} />

        {/* Normal User Routes */}
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
          <Route
            path="/payment/:batchId/:courseName/:coursePrice"
            element={<CoursePayment />}
          />

          {/* College routes */}
          <Route path="/college-dashboard" element={<CollegeDashboard />} />
        </Route>

        {/* Admin Routes */}
        <Route element={<ProtectedRoute adminOnly={true} />}>
          <Route path="/admin-dashboard" element={<AdminDashboard />} />
          <Route path="/admin-dashboard/users" element={<Users />} />
          <Route path="/admin-dashboard/academic" element={<Academic />} />
          <Route path="/admin-dashboard/course" element={<Course />} />
          <Route path="/admin-dashboard/payment" element={<AdminPayment />} />
          <Route path="/admin-dashboard/user-interest" element={<Interest />} />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
};

export default App;

const Link = () => {
  return (
    <>
      <div style={{ height: "100vh", width: "100vw" }}>
        <iframe
          src="https://trygcp.dev/e/build-with-ai-avk-college-for-women"
          allow="identity-credentials-get"
          title="test"
          height={"100%"}
          width={"100%"}
        />
      </div>
    </>
  );
};
