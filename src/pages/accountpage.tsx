import React from "react";
import Navbar from "../components/Navbar";
import "../components/css/account.css";
import { useState } from "react";

function Account() {
  const [username, setUsername] = useState("User"); // Replace "User" with the actual username

  return (
    <>
      <Navbar />
      <h1>Welcome {username} </h1>
    </>
  );
}

export default Account;
