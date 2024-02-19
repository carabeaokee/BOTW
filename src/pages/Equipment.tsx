import React from "react";
import { useEffect, useState } from "react";
import { EquipmentItem } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";

function Equipment() {
  const [equipment, setEquipment] = useState<EquipmentItem[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");

  const equipmentUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/equipment";

  const getEquipment = async () => {
    try {
      const response = await fetch(equipmentUrl);
      const result = await response.json();
      setEquipment(result.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getEquipment();
  }, []);

  const filteredEquipment = equipment?.filter((equipment) =>
    equipment.name.toLowerCase().includes(searchTerm.toLowerCase())
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
          {filteredEquipment &&
            filteredEquipment.map((equipment) => (
              <Grid item key={equipment.id} xs={12} sm={6} md={4} lg={3}>
                <MyCard item={equipment} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Equipment;
