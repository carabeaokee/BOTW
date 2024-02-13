import React from "react";
import Navbar from "../components/Navbar";
// import { useState } from "react";
// import Login from "../registration/login";
// import Register from "../registration/register";
// import { Container, Grid } from "@mui/material";

function Home() {
  // const [currentForm, setCurrentForm] = useState("login");

  return (
    <>
      <Navbar />
      <div className="home-container">
        <h1>Home</h1>
      </div>
    </>
  );
}

export default Home;
