import React from "react";
import { useEffect, useState } from "react";
import { EquipmentItem } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";
import Infinity from "../assets/icons/infinity.svg";

// Function to display Equipment page
function Equipment() {
  // Initialize state variables for equipment and search term
  const [equipment, setEquipment] = useState<EquipmentItem[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // URL for fetching equipment data
  const equipmentUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment";

  // Function to fetch equipment data from API
  const getEquipment = async () => {
    try {
      const response = await fetch(equipmentUrl);
      const result = await response.json();
      // Update equipment state with fetched data
      setEquipment(result.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  // Use effect hook to fetch equipment data when component mounts
  useEffect(() => {
    getEquipment();
  }, []);

  // Show loading icon if equipment data is not yet loaded
  if (!equipment) {
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

  // Filter equipment based on search term
  const filteredEquipment = equipment?.filter((equipment) =>
    equipment.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Return JSX to display Equipment page
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
            {filteredEquipment &&
              filteredEquipment.map((equipment) => (
                <Grid item key={equipment.id} xs={12} sm={6} md={4} lg={3}>
                  <MyCard item={equipment} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Equipment;
