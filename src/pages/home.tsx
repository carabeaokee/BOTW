import React from "react";
import Navbar from "../components/Navbar";
import Mushrooms from "../assets/icons/mushrooms.svg";
import Spider from "../assets/icons/spider.svg";
import Monster from "../assets/icons/monster.svg";
import Sword from "../assets/icons/sword.svg";
import Rupee from "../assets/icons/rupee.svg";
import { NavLink } from "react-router-dom";
import "../home.css";
import Japanesezelda from "../assets/icons/japanesezelda.png";

// Define the Home component
function Home() {
  // Return the JSX for the Home component
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      >
        <div
          className="title-container"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img src={Japanesezelda} alt="Japanese-Zelda" />

          <div className="top-container">
            <div className="spider-container">
              <NavLink className="category-link" to="/creatures">
                <img src={Spider} alt="Creatures-Icon" />
                <h1 style={{ color: "#90f4bf" }}>Creatures</h1>
              </NavLink>
            </div>

            <div className="monster-container">
              <NavLink className="category-link" to="/monsters">
                <img src={Monster} alt="Monsters-Icon" />
                <h1 style={{ color: "#90f4bf" }}>Monsters</h1>
              </NavLink>
            </div>

            <div className="sword-container">
              <NavLink className="category-link" to="/equipment">
                <img src={Sword} alt="Equipment-Icon" />
                <h1 style={{ color: "#90f4bf" }}>Equipment</h1>
              </NavLink>
            </div>
          </div>

          <div className="bottom-container">
            <div className="mushrooms-container">
              <NavLink className="category-link" to="/materials">
                <img src={Mushrooms} alt="Materials-Icon" />
                <h1 style={{ color: "#90f4bf" }}>Materials</h1>
              </NavLink>
            </div>

            <div className="treasure-container">
              <NavLink className="category-link" to="/treasure">
                <img src={Rupee} alt="Treasure-Icon" />
                <h1 style={{ color: "#90f4bf" }}>Treasure</h1>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
