import React from "react";
import { Navigate } from "react-router-dom";

function PrivateRoute({ children, login }) {
  console.log(login);
  return <div>{login ? children : <Navigate to='/' />}</div>;
}

export default PrivateRoute;
