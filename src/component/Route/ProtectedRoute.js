import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
// import { toast } from "react-toastify";
import Loader from "../layout/Loader/Loader";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const location = useLocation();

  // If still loading, do not render anything to prevent premature redirection
  if (loading) {
    return <Loader />; // Replace with a proper loader
  }

  if (!isAuthenticated) {
    // toast.error("Please login to access this resource");
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if ( user?.role !== "admin") {
  //   return <Navigate to="/dashboard" replace />;
  // }

  return (
    <>
      {children ? children :<Outlet/> }
    </>
  )
};

export default ProtectedRoute;
