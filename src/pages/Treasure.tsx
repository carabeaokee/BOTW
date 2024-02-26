import React from "react";
import { useEffect, useState } from "react";
import { TreasureType } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";
import Infinity from "../assets/icons/infinity.svg";

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

  if (!treasure) {
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

  const filteredTreasure = treasure?.filter((treasure) =>
    treasure.name.toLowerCase().includes(searchTerm.toLowerCase())
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
            {filteredTreasure &&
              filteredTreasure.map((treasure) => (
                <Grid item key={treasure.id} xs={12} sm={6} md={4} lg={3}>
                  <MyCard item={treasure} />
                </Grid>
              ))}
          </Grid>
        </Container>
      </div>
    </>
  );
}

export default Treasure;
