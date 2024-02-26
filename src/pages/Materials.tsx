import React from "react";
import { useEffect, useState } from "react";
import { MaterialType } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";
import Infinity from "../assets/icons/infinity.svg";

function Materials() {
  const [materials, setMaterials] = useState<MaterialType[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const materialsUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/materials";

  const getMaterials = async () => {
    try {
      const response = await fetch(materialsUrl);
      const result = await response.json();
      // console.log("result :>> ", result);
      setMaterials(result.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getMaterials();
  }, []);

  if (!materials) {
    return (
      <div>
        <img
          src={Infinity}
          alt="Loading-Icon"
          style={{
            width: "500px", // Set the width
            height: "500px", // Set the height
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

  const filteredMaterial = materials?.filter((material) =>
    material.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

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
                marginTop: "10px", // Make the search bar take up the full width of its container
                marginBottom: "20px",
                backgroundColor: "white",
                borderRadius: "15px",
              }}
            />
          </div>
          <Grid container spacing={3}>
            {filteredMaterial &&
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

export default Materials;
