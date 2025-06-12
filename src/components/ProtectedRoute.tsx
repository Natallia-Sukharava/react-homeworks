import { Navigate } from "react-router-dom";
import { ReactNode } from "react";
import { ProtectedRouteProps } from "../types";

function ProtectedRoute({ children }: ProtectedRouteProps) {
  const rawUser = localStorage.getItem("user");
  const user = rawUser ? JSON.parse(rawUser) : null;

  const isAuthenticated = !!(user && user.username);

  return isAuthenticated ? children : <Navigate to="/login" replace />;
}

export default ProtectedRoute;