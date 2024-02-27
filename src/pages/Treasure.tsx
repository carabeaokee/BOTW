import React from "react";
import { useEffect, useState } from "react";
import { TreasureType } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";
import Infinity from "../assets/icons/infinity.svg";

// Function to display Treasure page
function Treasure() {
  // Initialize state variables for treasure and search term
  const [treasure, setTreasure] = useState<TreasureType[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  // URL for fetching treasure data
  const treasureUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure";

  // Function to fetch treasure data from API
  const getTreasure = async () => {
    try {
      const response = await fetch(treasureUrl);
      const result = await response.json();
      // Update treasure state with fetched data
      setTreasure(result.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  // Use effect hook to fetch treasure data when component mounts
  useEffect(() => {
    getTreasure();
  }, []);

  // Show loading icon if treasure data is not yet loaded
  if (!treasure) {
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

  // Filter treasure based on search term
  const filteredTreasure = treasure?.filter((treasure) =>
    treasure.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Return JSX
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
            {filteredTreasure &&
              filteredTreasure.map((treasure) => (
                <Grid item key={treasure.id} xs={12} sm={6} md={4} lg={3}>
                  <MyCard item={treasure} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Treasure;
