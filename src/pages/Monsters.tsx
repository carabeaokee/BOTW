import React from "react";
import { useEffect, useState } from "react";
import { MonsterType } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";
import Infinity from "../assets/icons/infinity.svg";

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

  if (!monsters) {
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
