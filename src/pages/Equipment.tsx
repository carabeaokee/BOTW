import React from "react";
import { useEffect, useState } from "react";
import { EquipmentItem } from "../types/Customtypes";
import { Container, Grid } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";

function Equipment() {
  const [equipment, setEquipment] = useState<EquipmentItem[] | null>(null);

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

  return (
    <>
      <Navbar />
      <Container>
        <Grid container spacing={3}>
          {equipment &&
            equipment.map((equipments) => (
              <Grid item key={equipments.id} xs={12} sm={6} md={4} lg={3}>
                <MyCard item={equipments} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Equipment;
