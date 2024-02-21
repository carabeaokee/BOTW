import React from "react";
import { NavLink } from "react-router-dom";
import {
  IconButton,
  Card,
  CardCover,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/joy";
import { FavoriteBorder } from "@mui/icons-material";
import "../App.css";

function capitalizeWords(str: string) {
  return str.replace(/\b\w+\b/g, (word) => {
    // Regular expression to match Roman numerals
    const romanNumeralRegex =
      /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    if (romanNumeralRegex.test(word.toUpperCase())) {
      // If the word is a Roman numeral, return it in uppercase
      return word.toUpperCase();
    } else {
      // Otherwise, apply the original capitalization rules
      return word.replace(/\b\w/g, (char, index) => {
        if (index > 0 && word[index - 1] === "'") {
          return char.toLowerCase();
        } else {
          return char.toUpperCase();
        }
      });
    }
  });
}

export default function MyCard({ item }) {
  return (
    <>
      <Grid container spacing={2}>
        <Card
          sx={{
            height: "200px",
            width: "320px",
            padding: "1.5rem",
            margin: "1rem",
          }}
        >
          <CardCover>
            <img src={item.image} alt={item.name} />
          </CardCover>
          <CardCover
            sx={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 100px)",
            }}
          />
          <CardActions
            buttonFlex="0 1 120px"
            sx={{
              position: "absolute",
              top: -5,
              right: 12,
            }}
          >
            <IconButton color="neutral" sx={{ mr: "auto" }}>
              <FavoriteBorder />
            </IconButton>
          </CardActions>
          <CardContent
            sx={{
              justifyContent: "space-between",
              position: "absolute",
              bottom: 10,
              left: 12,
            }}
          >
            <Typography level="title-lg">
              <NavLink
                to={`/${item.id}`}
                style={{
                  color: "white",
                  fontFamily: "Orbitron",
                  fontSize: "18px",
                }}
              >
                {capitalizeWords(item.name)}
              </NavLink>
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </>
  );
}
