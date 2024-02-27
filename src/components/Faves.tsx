import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import FaveCards from "./FaveCards";
import { Container, Grid, Box } from "@mui/material";
import CircularProgress from "@mui/material/CircularProgress";

// Define the Fave interface
interface Fave {
  id: string;
  image: string;
  name: string;
  category: string;
}

// Function to fetch data from the API
const fetchData = async () => {
  const response = await fetch(
    "https://botw-compendium.herokuapp.com/api/v3/compendium/"
  );
  const data = await response.json();
  return data;
};

// Define the FavouritesPage component
export default function FavouritesPage() {
  const { user } = useContext(AuthContext);
  // Initialize state variables for favourites and loading status
  const [favourites, setFavourites] = useState<Fave[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Fetch favourites when the user is logged in
  useEffect(() => {
    if (user) {
      // Function to fetch favourites from the database
      const fetchFavourites = async () => {
        setIsLoading(true);
        // Get the user ID
        const uid = user.uid;
        // Get the user document from the database
        const userDoc = doc(db, "users", uid);
        // Get the user document snapshot
        const userDocSnap = await getDoc(userDoc);

        // If the user document exists, fetch the favourites
        if (userDocSnap.exists()) {
          // Get the favourite IDs from the user document
          const favouriteIds = userDocSnap.data().favourites || [];
          // Initialize an empty array to store the fetched favourites
          const fetchedFavourites: Fave[] = [];

          // Fetch the data from the API
          const data = await fetchData();
          console.log(data);

          // Loop through the favourite IDs and fetch the favourite data
          for (const id of favouriteIds) {
            const fave = data.data.find((entry: any) => entry.id === id);

            // If the favourite exists, add it to the fetchedFavourites array
            if (fave) {
              fetchedFavourites.push(fave);
            }
          }

          // Update the favourites state with the fetched favourites
          setFavourites(fetchedFavourites);
        }
        setIsLoading(false);
      };

      // Call the fetchFavourites function
      fetchFavourites();
    }
  }, [user]);

  // Show loading icon if favourites are not yet loaded
  if (isLoading) {
    return (
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        height="100vh"
        pt={5}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  // Return the JSX for the FavouritesPage component
  return (
    <>
      <Container>
        <h1 style={{ textAlign: "center", color: "lightgray" }}>Favourites</h1>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <Grid container spacing={2}>
            {favourites.map((fave) => (
              <Grid item xs={12} sm={6} md={4} lg={3} key={fave.id}>
                <FaveCards fave={fave} />
              </Grid>
            ))}
          </Grid>
        </div>
      </Container>
    </>
  );
}
