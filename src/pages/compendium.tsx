import { Grid, Container, Paper } from "@mui/material";
import React from "react";
import { useEffect, useState } from "react";
import { CompendiumItem } from "../types/Customtypes";
import MyCard from "../components/MyCard";

export default function Compendium() {
  const [compendium, setCompendium] = useState<CompendiumItem[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/data")
      .then((response) => response.json())
      .then((data) => setCompendium(data));
  }, []);

  return (
    <Container>
      <Grid container>
        {compendium.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
            <MyCard item={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
