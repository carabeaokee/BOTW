import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconButton,
  Box,
  Divider,
  Card,
  CardCover,
  CardContent,
  Typography,
  Link,
  AspectRatio,
  CardOverflow,
} from "@mui/joy";
import Favorite from "@mui/icons-material/Favorite";

function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, (char, index) => {
    if (index > 0 && str[index - 1] === "'") {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  });
}

export default function MyCard({ item }) {
  return (
    <>
      <Card sx={{ minHeight: "280px", width: 320 }}>
        <CardCover>
          <img src={item.image} alt={item.name} />
        </CardCover>
        <CardCover
          sx={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
          }}
        />
        <CardContent sx={{ justifyContent: "flex-end" }}>
          <Typography level="title-lg">
            <NavLink to={`/${item.id}`} style={{ color: "white" }}>
              {capitalizeWords(item.name)}
            </NavLink>
          </Typography>
        </CardContent>
      </Card>
    </>
  );
}
