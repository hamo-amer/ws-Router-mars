import React from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function Home() {
  // location
  const location = useLocation();
  // navigation ,history
  const navigate = useNavigate();
  // params
  const params = useParams();
  // console.log("location :", location);
  // console.log("navigate :", navigate);
  // console.log("params:", params);
  return <h1 style={{ textAlign: "center" }}>Home Page</h1>;
}

export default Home;
