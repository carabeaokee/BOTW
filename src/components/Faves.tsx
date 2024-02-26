import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { Card, CardContent, Typography } from "@mui/material";
import FaveCards from "./FaveCards";
import { Container, Grid } from "@mui/material";

interface Fave {
  id: string;
  image: string;
  name: string;
  category: string;
}

export default function FavouritesPage() {
  const { user } = useContext(AuthContext);
  const [favourites, setFavourites] = useState<Fave[]>([]);

  useEffect(() => {
    if (user) {
      const fetchFavourites = async () => {
        const uid = user.uid;
        const userDoc = doc(db, "users", uid);
        const userDocSnap = await getDoc(userDoc);

        if (userDocSnap.exists()) {
          const favouriteIds = userDocSnap.data().favourites || [];
          const fetchedFavourites: Fave[] = [];

          for (const id of favouriteIds) {
            const faveDoc = doc(db, "data", id); // replace "data" with the name of your collection
            const faveDocSnap = await getDoc(faveDoc);

            if (faveDocSnap.exists()) {
              fetchedFavourites.push(faveDocSnap.data() as Fave);
            }
          }

          setFavourites(fetchedFavourites);
        }
      };

      fetchFavourites();
    }
  }, [user]);

  return (
    <>
      <Container>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={3}>
            {favourites &&
              favourites.map((fave) => (
                <Grid item key={fave.id} xs={12} sm={6} md={4} lg={3}>
                  <FaveCards fave={fave} />
                </Grid>
              ))}
          </Grid>
        </div>
      </Container>
    </>
  );
}
