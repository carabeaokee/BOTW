import React from "react";
import { useEffect, useState } from "react";
import { MonsterType } from "../types/Customtypes";
import { Container, Grid } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";

function Monsters() {
  const [monsters, setMonsters] = useState<MonsterType[] | null>(null);
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

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          {monsters &&
            monsters.map((monster) => (
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

// {monster &&
//     monster.drops.map((drop) => {
//       return <p>{drop}</p>;
//     })}

// {monsters.drops.map((drop) => {
//     return <p>{drop}</p>;
//   })}
