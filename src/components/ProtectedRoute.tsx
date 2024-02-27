import React from "react";
import { useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { ProtectedRouteProps } from "../types/Customtypes";

// Define the ProtectedRoute component
const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  // Get the user from the AuthContext
  const { user } = useContext(AuthContext);
  // Get the navigate function from the useNavigate hook
  const navigate = useNavigate();

  // If the user is logged in, render the children. If the user is not logged in, redirect to the login page.
  return user ? <div>{children}</div> : <Navigate to="/login" />;
};

export default ProtectedRoute;
