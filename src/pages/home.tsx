import React from "react";
import Navbar from "../components/Navbar";
// import { useState } from "react";
// import Login from "../registration/login";
// import Register from "../registration/register";
// import { Container, Grid } from "@mui/material";
import Mushrooms from "../assets/icons/mushrooms.svg";
import Spider from "../assets/icons/spider.svg";
import Monster from "../assets/icons/monster.svg";
import Sword from "../assets/icons/sword.svg";
import Rupee from "../assets/icons/rupee.svg";
import "../home.css";

function Home() {
  // const [currentForm, setCurrentForm] = useState("login");

  return (
    <>
      <Navbar />
      <div className="home-container">
        <div className="spider-container">
          <img src={Spider} alt="Creatures-Icon" />
          <h1>Creatures</h1>
        </div>

        <div className="monster-container">
          <img src={Monster} alt="Monsters-Icon" />
          <h1>Monsters</h1>
        </div>

        <div className="sword-container">
          <img src={Sword} alt="Equipment-Icon" />
          <h1>Equipment</h1>
        </div>

        <div className="mushrooms-container">
          <img src={Mushrooms} alt="Materials-Icon" />
          <h1>Materials</h1>
        </div>

        <div className="treasure-container">
          <img src={Rupee} alt="Treasure-Icon" />
          <h1>Treasure</h1>
        </div>
      </div>
    </>
  );
}

export default Home;
