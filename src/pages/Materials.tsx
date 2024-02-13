import React from "react";
import { useEffect, useState } from "react";
import { MaterialType } from "../types/Customtypes";
import { Container, Grid } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";

function Materials() {
  const [materials, setMaterials] = useState<MaterialType[] | null>(null);
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

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          {materials &&
            materials.map((material) => (
              <Grid item key={material.id} xs={12} sm={6} md={4} lg={3}>
                <MyCard item={material} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Materials;
