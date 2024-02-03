import React from "react";
import { Navigate } from "react-router-dom";

const RouteGuard = ({ children }) => {
  function hasJWT() {
    return sessionStorage.getItem("Token") ? true : false;
  }

  return <>{hasJWT() ? children : <Navigate to="/" />}</>;
};

export default RouteGuard;
