import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useSelector((state) => state.user);
  const location = useLocation();
  console.log(isAuthenticated)

  // If still loading, do not render anything to prevent premature redirection
  if (loading) {
    return <div>Loading...</div>; // Replace with a proper loader
  }

  if (!isAuthenticated) {
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
