import React from "react";
import { Navigate } from "react-router-dom";
import AuthenticationService from "../pages/AuthenticationServices";

const ProtectedRoute = ({ children }) => {
  const authToken = AuthenticationService.getAuthenticationToken();

  if (authToken) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export default ProtectedRoute;
