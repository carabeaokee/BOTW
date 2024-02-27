import React from "react";
import { useEffect, useState } from "react";
import { CreatureType } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";
import Infinity from "../assets/icons/infinity.svg";

// Function to display Creatures page
function Creatures() {
  // Initialize state variables for creatures and search term
  const [creatures, setCreatures] = useState<CreatureType[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  // URL for fetching creatures data
  const creaturesUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures";

  // Function to fetch creatures data from API
  const getCreatures = async () => {
    try {
      const response = await fetch(creaturesUrl);
      const result = await response.json();
      setCreatures(result.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  // Use effect hook to fetch creatures data when component mounts
  useEffect(() => {
    getCreatures();
  }, []);

  // Show loading icon if creatures data is not yet loaded
  if (!creatures) {
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

  // Filter creatures based on search term
  const filteredCreatures = creatures?.filter((creature) =>
    creature.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Return JSX to display Creatures page
  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <Container>
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
          <Grid container spacing={3}>
            {filteredCreatures &&
              filteredCreatures.map((creature) => (
                <Grid item key={creature.id} xs={12} sm={6} md={4} lg={3}>
                  <MyCard item={creature} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Creatures;
