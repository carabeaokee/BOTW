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
import Account from "./pages/accountpage";
import { AuthContext, AuthProvider } from "./components/AuthContext";
import "./App.css";
import DetailsPage from "./pages/detailspage";
import ProtectedRoute from "./components/ProtectedRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/:id",
    element: <DetailsPage />,
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
    path: "/account",
    element: (
      <ProtectedRoute>
        <Account />
      </ProtectedRoute>
    ),
  },
  {
    path: "*",
    element: <ErrorComponent />,
  },
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
