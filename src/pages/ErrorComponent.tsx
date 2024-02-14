import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";

function ErrorComponent() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div>
        <h1>Error!</h1>
        <button onClick={() => navigate(-1)}>Back...</button>
        <button onClick={() => navigate("/", { replace: true })}>
          Go Home...
        </button>
      </div>
    </>
  );
}

export default ErrorComponent;
