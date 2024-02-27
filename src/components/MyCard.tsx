import React, { useContext, useEffect } from "react";
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
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import "../App.css";
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import {
  arrayRemove,
  arrayUnion,
  doc,
  getDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";

// Define the Item interface
interface Item {
  id: string;
  image: string;
  name: string;
}

// Function to capitalize words in a string
function capitalizeWords(str: string) {
  // Replace each word in the string with a capitalized version
  return str.replace(/\b\w+\b/g, (word) => {
    // Define a regex for Roman numerals
    const romanNumeralRegex =
      /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;
    // If the word is a Roman numeral, return it in uppercase
    if (romanNumeralRegex.test(word.toUpperCase())) {
      return word.toUpperCase();
    } else {
      // Otherwise, capitalize the first letter of each word
      // If the character is preceded by an apostrophe, it should be in lowercase
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

// Define the MyCard component
export default function MyCard({ item }: { item: Item }) {
  const { user } = useContext(AuthContext);
  const [hover, setHover] = useState(false);
  const [favourites, setFavourites] = useState([]);

  // Fetch favourites from database
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

  // Check if item is in favourites
  const isFavourite = favourites.includes(item.id);

  // Add or remove item from favourites
  const handleFavourite = async () => {
    console.log("Favourite clicked", item);
    if (user) {
      const uid = user.uid;
      const path = doc(db, "users", uid);
      if (isFavourite) {
        await updateDoc(path, { favourites: arrayRemove(item.id) });
        console.log("Item removed from favourites");
        setFavourites(favourites.filter((fav) => fav !== item.id)); // remove item from favourites
      } else {
        await updateDoc(path, { favourites: arrayUnion(item.id) });
        console.log("Item added to favourites");
        setFavourites([...favourites, item.id]); // add item to favourites
      }
    }
  };

  // Render the card
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
            <IconButton
              color="neutral"
              sx={{ mr: "auto", color: isFavourite ? "red" : "white" }}
              onClick={handleFavourite}
            >
              {isFavourite ? <Favorite /> : <FavoriteBorder />}
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
                className="item-link"
                to={`/${item.id}`}
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                style={{
                  color: hover ? "aqua" : "white",
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
