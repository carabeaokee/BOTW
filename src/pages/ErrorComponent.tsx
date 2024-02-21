import React from "react";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import Error from "../assets/icons/error.svg";
import Button from "@mui/joy/Button";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import Box from "@mui/joy/Box";

function ErrorComponent() {
  const navigate = useNavigate();
  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "85vh", // This makes the div take up the full height of the viewport
        }}
      >
        <h1>Error!</h1>
        <img
          src={Error}
          alt="Error-Icon"
          style={{ width: "260px", height: "260px" }}
        />
        <h1>You seem to have found a bug</h1>
        <div>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              startDecorator={<KeyboardArrowLeft />}
              color="success"
              onClick={() => navigate(-2)}
            >
              Return to Previous Page
            </Button>
            <Button
              endDecorator={<KeyboardArrowRight />}
              color="success"
              onClick={() => navigate("/", { replace: true })}
            >
              Go to Home Page
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
}

export default ErrorComponent;
