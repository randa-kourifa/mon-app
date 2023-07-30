import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../app/useAuth";
export function PrivateRoute({ children }) {
  //custom hook to keep code clean
  const { status } = useAuth();

  switch (status) {
    case "uninitialized": //request didn't started
    case "pending": //request started
      return <div>loading...</div>;

    case "rejected": //request ended with error
      return <Navigate to="/signin" />;

    case "fulfilled": //request ended with success
      return children;
    default:
      return <Navigate to="/signin" />;
  }
}
