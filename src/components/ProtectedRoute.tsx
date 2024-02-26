import React from "react";
import { useEffect, useContext } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import { ProtectedRouteProps } from "../types/Customtypes";

const ProtectedRoute = ({ children }: ProtectedRouteProps) => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();

  // useEffect(() => {
  //   if (!user) {
  //     navigate("/login");
  //   }
  // }, [user]);

  // return {user ? <div>{children}</div> : <Navigate to="/>;}

  return user ? <div>{children}</div> : <Navigate to="/login" />;
};

export default ProtectedRoute;
