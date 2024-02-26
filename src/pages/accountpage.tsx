import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import "../components/css/account.css";
import { AuthContext } from "../components/AuthContext";
// import { collection, doc, getDocs, query, where } from "firebase/firestore";
// import { db } from "../firebaseConfig";

function Account() {
  // const [userName, setUserName] = useState("");
  const { user } = useContext(AuthContext);
  // const displayName = user?.displayName;

  // const getFavourites = async () => {
  //   if (user) {
  //     const uid = user.uid;
  //     const path = collection(db, "users", uid, "favourites");
  //     const querySnapshot = await getDocs(path);
  //     const favourites = querySnapshot.docs.map((doc) => doc.data());
  //     console.log("Favourites", favourites);
  //     return favourites;
  //   }
  // };

  // useEffect(() => {
  //   const getUserName = async () => {
  //     try {
  //       if (user) {
  //         setUserName(user.displayName || "");
  //       }
  //     } catch (error) {
  //       console.error("Error getting user name: ", error);
  //     }
  //   };
  //   getUserName();
  // }, []);

  return (
    <>
      <div
        style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}
      >
        <Navbar />
        <h1>Welcome, {user.displayName}!</h1>
      </div>
    </>
  );
}

export default Account;
