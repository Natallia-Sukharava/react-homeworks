import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  const isAuthenticated = user && user.username;

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;
