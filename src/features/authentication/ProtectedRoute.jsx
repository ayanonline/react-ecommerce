import Cookies from "js-cookie";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isLoading, isAuthenticated } = useSelector((state) => state.user);
  if (isLoading) return null;
  if (isAuthenticated) return children;
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
