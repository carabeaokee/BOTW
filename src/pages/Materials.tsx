import React from "react";
import { useEffect, useState } from "react";
import { MaterialType } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";
import Infinity from "../assets/icons/infinity.svg";

function Materials() {
  // Initialize state variables for materials and search term
  const [materials, setMaterials] = useState<MaterialType[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  // URL for fetching materials data
  const materialsUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials";

  // Function to fetch materials data from API
  const getMaterials = async () => {
    try {
      const response = await fetch(materialsUrl);
      const result = await response.json();
      setMaterials(result.data); // Update materials state with fetched data
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  // Use effect hook to fetch materials data when component mounts
  useEffect(() => {
    getMaterials();
  }, []);

  // Show loading icon if materials data is not yet loaded
  if (!materials) {
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

  // Filter materials based on search term
  const filteredMaterial = materials?.filter((material) =>
    material.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Render the component
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
              onChange={(e) => setSearchTerm(e.target.value)} // Update search term state when input changes
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
            {filteredMaterial &&
              // Map over filtered materials and render a MyCard component for each
              filteredMaterial.map((material) => (
                <Grid item key={material.id} xs={12} sm={6} md={4} lg={3}>
                  <MyCard item={material} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

// Export the Materials component
export default Materials;
