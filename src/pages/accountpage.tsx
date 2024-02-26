import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../components/css/account.css";
import { AuthContext } from "../components/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import FavouritesPage from "../components/Faves";
import Eye from "../assets/icons/eye.png";

function Account() {
  const [favourites, setFavourites] = useState([]);
  const { user } = useContext(AuthContext);
  // const displayName = user?.displayName;

  useEffect(() => {
    const getFavourites = async () => {
      if (user) {
        const uid = user.uid;
        const path = collection(db, "users", uid, "favourites");
        const querySnapshot = await getDocs(path);
        const favourites = querySnapshot.docs.map((doc) => doc.data());
        console.log("Favourites", favourites);
        setFavourites(favourites || []);
      }
    };
    getFavourites();
  }, [user]);

  // useEffect(() => {
  //   if (user) {
  //     const fetchFavourites = async () => {
  //       const uid = user.uid;
  //       const path = doc(db, "users", uid);
  //       const docSnap = await getDoc(path);

  //       if (docSnap.exists()) {
  //         setFavourites(docSnap.data().favourites || []);
  //       }
  //     };

  //     fetchFavourites();
  //   }
  // }, [user]);

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
        <h1>Welcome, {user?.displayName}!</h1>
      </div>
      <FavouritesPage />
    </>
  );
}

export default Account;
