import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { NavLink } from "react-router-dom";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  IconButton,
  Card,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/joy";
import { CardMedia } from "@mui/material";

// Define the Fave interface
interface Fave {
  id: string;
  image: string;
  name: string;
  category: string;
}

// Function to capitalize words in a string
function capitalizeWords(str: string) {
  return str.replace(/\b\w+\b/g, (word) => {
    // Define a regex for Roman numerals
    const romanNumeralRegex =
      /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

    // If the word is a Roman numeral, return it in uppercase
    if (romanNumeralRegex.test(word.toUpperCase())) {
      return word.toUpperCase();
    } else {
      // Otherwise, capitalize the first letter of each word
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

// Define the FaveCards component
export default function FaveCards({ fave }: { fave: Fave }) {
  // Get the current user from the AuthContext
  const { user } = useContext(AuthContext);
  // Initialize state variables for favourites and hover
  const [favourites, setFavourites] = useState([]);
  const [hover, setHover] = useState(false);

  // Fetch the user's favourites when the user changes
  useEffect(() => {
    if (user) {
      const fetchFavourites = async () => {
        const uid = user.uid;
        const path = doc(db, "users", uid);
        const docSnap = await getDoc(path);

        if (docSnap.exists()) {
          setFavourites(docSnap.data().favourites || []);
        }
      };

      fetchFavourites();
    }
  }, [user]);

  // Check if the current fave is in the user's favourites
  const isFavourite = favourites.includes(fave.id);

  // Handle the user clicking on a fave
  const handleFavourite = async () => {
    console.log("Favourite clicked", fave);
    if (user) {
      const uid = user.uid;
      const path = doc(db, "users", uid);
      if (isFavourite) {
        // If the fave is already in the user's favourites, remove it
        await updateDoc(path, { favourites: arrayRemove(fave.id) });
        console.log("Item removed from favourites");
        setFavourites(favourites.filter((fav) => fav !== fave.id));
      } else {
        // If the fave is not in the user's favourites, add it
        await updateDoc(path, { favourites: arrayUnion(fave.id) });
        console.log("Item added to favourites");
        setFavourites([...favourites, fave.id]);
      }
    }
  };

  // Get the color for a category section of card
  function getCategoryColor(category: string) {
    switch (category) {
      case "monsters":
        return "lightgrey";
      case "creatures":
        return "lightblue";
      case "treasure":
        return "lightgreen";
      case "equipment":
        return "pink";
      case "materials":
        return "orange";
      default:
        return "defaultColor";
    }
  }

  // Return the FaveCards component
  return (
    <>
      <Grid container spacing={2} sx={{ margin: "0.5rem" }}>
        <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }}>
          <CardOverflow>
            <AspectRatio ratio="1" sx={{ width: 115 }}>
              <img src={fave.image} alt={fave.name} />
            </AspectRatio>
          </CardOverflow>
          <CardActions
            buttonFlex="0 1 120px"
            sx={{
              position: "absolute",
              top: 60,
              right: 30,
            }}
          >
            <IconButton
              color="neutral"
              sx={{
                mr: "auto",
                color: isFavourite ? "black" : "red",
                ":hover": {
                  color: "red",
                },
              }}
              onClick={handleFavourite}
            >
              {isFavourite ? <DeleteForeverIcon /> : <DeleteForeverIcon />}
            </IconButton>
          </CardActions>
          <CardContent>
            <CardMedia image={fave.image} title={fave.name} />
            <Typography fontWeight="md" textColor="success.plainColor">
              {" "}
              <NavLink
                className="item-link"
                to={`/${fave.id}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                  color: hover ? "blue" : "black",
                  fontFamily: "Orbitron",
                  fontSize: "18px",
                }}
              >
                {capitalizeWords(fave.name)}
              </NavLink>
            </Typography>
          </CardContent>
          <CardOverflow
            variant="soft"
            color="primary"
            sx={{
              px: 0.2,
              writingMode: "vertical-rl",
              justifyContent: "center",
              fontSize: "xs",
              fontWeight: "xl",
              letterSpacing: "1px",
              textTransform: "uppercase",
              borderLeft: "1px solid",
              borderColor: "divider",
              backgroundColor: getCategoryColor(fave.category),
            }}
          >
            {fave.category}
          </CardOverflow>
        </Card>
      </Grid>
    </>
  );
}
