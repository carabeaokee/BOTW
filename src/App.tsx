import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Creatures from "./pages/Creatures";
import React from "react";
import Home from "./pages/home";
import Monsters from "./pages/Monsters";
import Equipment from "./pages/Equipment";
import Materials from "./pages/Materials";
import Treasure from "./pages/Treasure";
import Register from "./registration/register";
import Login from "./registration/login";
import ErrorComponent from "./pages/ErrorComponent";
import "./App.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/creatures",
    element: <Creatures />,
  },
  {
    path: "/monsters",
    element: <Monsters />,
  },
  {
    path: "/equipment",
    element: <Equipment />,
  },
  {
    path: "/materials",
    element: <Materials />,
  },
  {
    path: "/treasure",
    element: <Treasure />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "*",
    element: <ErrorComponent />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
