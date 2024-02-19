import React from "react";
import { useEffect, useState } from "react";
import { TreasureType } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";

function Treasure() {
  const [treasure, setTreasure] = useState<TreasureType[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
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

  const filteredTreasure = treasure?.filter((treasure) =>
    treasure.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Container>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Grid container spacing={3}>
          {filteredTreasure &&
            filteredTreasure.map((treasure) => (
              <Grid item key={treasure.id} xs={12} sm={6} md={4} lg={3}>
                <MyCard item={treasure} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Treasure;
