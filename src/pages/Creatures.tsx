import React from "react";
import { useEffect, useState } from "react";
import { CreatureType } from "../types/Customtypes";
import { Container, Grid } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";
import { TriforceIcon } from "../assets/icons/TriforceIcon";

function Creatures() {
  const [creatures, setCreatures] = useState<CreatureType[] | null>(null);
  const creaturesUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures";

  const getCreatures = async () => {
    try {
      const response = await fetch(creaturesUrl);
      const result = await response.json();
      // console.log("result :>> ", result);
      setCreatures(result.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getCreatures();
  }, []);

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          {creatures &&
            creatures.map((creature) => (
              <Grid item key={creature.id} xs={12} sm={6} md={4} lg={3}>
                <MyCard item={creature} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Creatures;
