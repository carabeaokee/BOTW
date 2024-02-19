import React from "react";
import { useEffect, useState } from "react";
import { MonsterType } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";

function Monsters() {
  const [monsters, setMonsters] = useState<MonsterType[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const monstersUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/monsters";

  const getMonsters = async () => {
    try {
      const response = await fetch(monstersUrl);
      const result = await response.json();
      // console.log("result :>> ", result);
      setMonsters(result.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getMonsters();
  }, []);

  const filteredMonsters = monsters?.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          {filteredMonsters &&
            filteredMonsters.map((monster) => (
              <Grid item key={monster.id} xs={12} sm={6} md={4} lg={3}>
                <MyCard item={monster} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Monsters;
