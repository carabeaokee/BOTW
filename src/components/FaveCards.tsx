import * as React from "react";
import AspectRatio from "@mui/joy/AspectRatio";
import CardOverflow from "@mui/joy/CardOverflow";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Favorite, FavoriteBorder } from "@mui/icons-material";
import {
  arrayRemove,
  arrayUnion,
  deleteDoc,
  doc,
  getDoc,
  setDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebaseConfig";
import {
  IconButton,
  Card,
  CardCover,
  CardContent,
  Typography,
  CardActions,
  Grid,
} from "@mui/joy";
import { CardMedia } from "@mui/material";

interface Fave {
  id: string;
  image: string;
  name: string;
  category: string;
}

// function capitalizeWords(str: string) {
//   return str.replace(/\b\w+\b/g, (word) => {
//     const romanNumeralRegex =
//       /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

//     if (romanNumeralRegex.test(word.toUpperCase())) {
//       return word.toUpperCase();
//     } else {
//       return word.replace(/\b\w/g, (char, index) => {
//         if (index > 0 && word[index - 1] === "'") {
//           return char.toLowerCase();
//         } else {
//           return char.toUpperCase();
//         }
//       });
//     }
//   });
// }

export default function FaveCards({ fave }: { fave: Fave }) {
  const { user } = useContext(AuthContext);
  const [favourites, setFavourites] = useState([]);

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

  const isFavourite = favourites.includes(fave.id);

  const handleFavourite = async () => {
    console.log("Favourite clicked", fave);
    if (user) {
      const uid = user.uid;
      const path = doc(db, "users", uid);
      if (isFavourite) {
        await updateDoc(path, { favourites: arrayRemove(fave.id) });
        console.log("Item removed from favourites");
        setFavourites(favourites.filter((fav) => fav !== fave.id)); // remove item from favourites
      } else {
        await updateDoc(path, { favourites: arrayUnion(fave.id) });
        console.log("Item added to favourites");
        setFavourites([...favourites, fave.id]); // add item to favourites
      }
    }
  };

  return (
    <>
      <Grid container spacing={2}>
        <Card orientation="horizontal" variant="outlined" sx={{ width: 260 }}>
          <CardOverflow>
            <AspectRatio ratio="1" sx={{ width: 90 }}>
              <img src={fave.image} alt={fave.name} />
            </AspectRatio>
          </CardOverflow>
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
          <CardContent>
            <CardMedia image={fave.image} title={fave.name} />
            <Typography fontWeight="md" textColor="success.plainColor">
              {fave.name}
            </Typography>
            <Typography level="body-sm">{fave.category}</Typography>
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
            }}
          >
            {fave.category}
          </CardOverflow>
        </Card>
      </Grid>
    </>
  );
}
