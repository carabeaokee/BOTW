import React from "react";
import { useEffect, useState } from "react";
import { MonsterType } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";
import Infinity from "../assets/icons/infinity.svg";

function Monsters() {
  // Initialize state variables for monsters and search term
  const [monsters, setMonsters] = useState<MonsterType[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  // URL for fetching monsters data
  const monstersUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters";

  // Function to fetch monsters data from API
  const getMonsters = async () => {
    try {
      const response = await fetch(monstersUrl);
      const result = await response.json();
      setMonsters(result.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  // Use effect hook to fetch monsters data when component mounts
  useEffect(() => {
    getMonsters();
  }, []);

  // Show loading icon if monsters data is not yet loaded
  if (!monsters) {
    return (
      <div>
        <img
          src={Infinity}
          alt="Loading-Icon"
          style={{
            width: "500px",
            height: "500px",
            display: "block",
            margin: "auto",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
          }}
        />
      </div>
    );
  }

  // Filter monsters based on search term
  const filteredMonsters = monsters?.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Return JSX
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Container>
          // Add a search bar to filter monsters
          <div style={{ display: "flex", justifyContent: "center" }}>
            <TextField
              label="Search"
              variant="outlined"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{
                width: "30%",
                height: "52px",
                marginTop: "10px",
                marginBottom: "20px",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            />
          </div>
          // Render the monsters data
          <Grid container spacing={3}>
            {filteredMonsters &&
              filteredMonsters.map((monster) => (
                <Grid item key={monster.id} xs={12} sm={6} md={4} lg={3}>
                  <MyCard item={monster} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Monsters;
