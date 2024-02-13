import React from "react";
import { useEffect, useState } from "react";
import { TreasureType } from "../types/Customtypes";
import { Container, Grid } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";

function Treasure() {
  const [treasure, setTreasure] = useState<TreasureType[] | null>(null);
  const treasureUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/treasure";

  const getTreasure = async () => {
    try {
      const response = await fetch(treasureUrl);
      const result = await response.json();
      // console.log("result :>> ", result);
      setTreasure(result.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getTreasure();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          {treasure &&
            treasure.map((treasures) => (
              <Grid item key={treasures.id} xs={12} sm={6} md={4} lg={3}>
                <MyCard item={treasures} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Treasure;
