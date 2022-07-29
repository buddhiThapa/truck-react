import { Navigate } from "react-router-dom";
import { useState } from "react";
export const ProtectedRoute = ( {children} ) => {
    const user = localStorage.getItem("isAuthenticated");
    if (user<=0) {
      // user is not authenticated
      return <Navigate to="/" />;
    }
    return children;
  };