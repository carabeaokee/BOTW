import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { AuthContext } from "../components/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import FavouritesPage from "../components/Faves";
import Sheikah from "../assets/icons/sheikah.svg";

// Define the Account component
function Account() {
  // Initialize the favourites state variable with an empty array
  const [favourites, setFavourites] = useState([]);

  // Get the current user from the AuthContext
  const { user } = useContext(AuthContext);

  // Use the useEffect hook to fetch the user's favourites when the user changes
  useEffect(() => {
    const getFavourites = async () => {
      // If the user is logged in
      if (user) {
        // Get the user's ID
        const uid = user.uid;
        // Define the path to the user's favourites in the database
        const path = collection(db, "users", uid, "favourites");
        // Fetch the user's favourites from the database
        const querySnapshot = await getDocs(path);
        // Map the fetched documents to their data
        const favourites = querySnapshot.docs.map((doc) => doc.data());
        // Update the favourites state variable
        setFavourites(favourites || []);
      }
    };

    getFavourites();
  }, [user]);

  // Return the JSX for the Account component
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          color: "white",
        }}
      >
        <Navbar />
        <h1 style={{ color: "lightgray" }}>Welcome, {user?.displayName}!</h1>
        <div
          className="eye-header"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={Sheikah} alt="Sheikah" />
        </div>
        <FavouritesPage />
      </div>
    </>
  );
}

export default Account;
