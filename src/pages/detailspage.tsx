import React, { useState, useEffect } from "react";
// import { Box, Card, CardCover, CardContent, Typography } from "@mui/joy";
import { useParams, useNavigate } from "react-router-dom";
import {
  CreatureType,
  EquipmentItem,
  MaterialType,
  MonsterType,
  TreasureType,
} from "../types/Customtypes";
import Navbar from "../components/Navbar";
import "../App.css";
import Infinity from "../assets/icons/infinity.svg";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Container } from "react-bootstrap";
import Bow from "../assets/icons/bow.svg";
import Cooked from "../assets/icons/cooked.svg";
import Chickenleg from "../assets/icons/chickenleg.svg";
import Location from "../assets/icons/location.svg";
import Plusheart from "../assets/icons/plusheart.svg";
import Shield from "../assets/icons/shield.svg";
import Suitheart from "../assets/icons/suitheart.svg";
import Drops from "../assets/icons/drops.svg";

type EntryType =
  | CreatureType
  | MaterialType
  | MonsterType
  | TreasureType
  | EquipmentItem;

const DetailsPage = <T extends EntryType>() => {
  const [entry, setEntry] = useState<T | null>(null);
  const params = useParams<{ id: string }>();
  const navigate = useNavigate();
  const iconStyle = {
    width: "25px",
    height: "25px",
    marginRight: "8px",
    marginBottom: "-3px",
  };

  useEffect(() => {
    const getEntry = async () => {
      try {
        const result = await fetch(
          `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${params.id}`
        );
        if (!result.ok) {
          throw new Error("Network response was not ok");
        }
        const data: T = await result.json();
        console.log("data post fetch", data);
        setEntry(data.data);
      } catch (error) {
        console.error(error);
        navigate("/error");
      }
    };

    getEntry();
  }, [params.id, navigate]);

  const handleNext = () => {
    const nextId = Number(params.id) + 1;
    navigate(`/${nextId}`);
  };

  const handlePrev = () => {
    const prevId = Number(params.id) - 1;
    if (prevId > 0) {
      navigate(`/${prevId}`);
    }
  };

  if (!entry) {
    return (
      <div>
        <img
          src={Infinity}
          alt="Loading-Icon"
          style={{
            width: "500px", // Set the width
            height: "500px", // Set the height
            display: "block",
            margin: "auto",
            position: "absolute",
            top: "0",
            bottom: "0",
            left: "0",
            right: "0",
          }}
        />
      </div>
    );
  }

  function capitalizeWords(str: string) {
    return str.replace(/\b\w+\b/g, (word) => {
      // Regular expression to match Roman numerals
      const romanNumeralRegex =
        /^(M{0,3})(CM|CD|D?C{0,3})(XC|XL|L?X{0,3})(IX|IV|V?I{0,3})$/;

      if (romanNumeralRegex.test(word.toUpperCase())) {
        // If the word is a Roman numeral, return it in uppercase
        return word.toUpperCase();
      } else {
        // Otherwise, apply the original capitalization rules
        return word.replace(/\b\w/g, (char, index) => {
          if (index > 0 && word[index - 1] === "'") {
            return char.toLowerCase();
          } else {
            return char.toUpperCase();
          }
        });
      }
    });
  }

  // console.log(entry);

  return (
    <>
      <Navbar />
      <Container style={{ backgroundColor: "black" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "10px 0",
          }}
        >
          <button
            style={{
              padding: "10px 0",
              width: "100px",
              height: "50px",
              color: "black",
              backgroundColor: "lightgrey",
              marginLeft: "20px",
            }}
            onClick={handlePrev}
          >
            Previous
          </button>
          <button
            style={{
              padding: "10px 0",
              width: "100px",
              height: "50px",
              color: "black",
              backgroundColor: "lightgrey",
            }}
            onClick={handleNext}
          >
            Next
          </button>
        </div>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <Card
              style={{
                color: "white",
                width: "28rem",
                marginLeft: "70px",
                padding: "1rem",
              }}
            >
              <Card.Title style={{ fontFamily: "Hylian", fontSize: "50px" }}>
                {capitalizeWords(entry.name)}
              </Card.Title>
              <br />
              <Card.Img
                style={{
                  borderRadius: "10%",
                  border: "2px solid #ffffff",
                }}
                variant="top"
                src={entry.image}
              />
              <Card.Text
                style={{
                  color: "white",
                  fontFamily: "Macondo",
                  fontSize: "24px",
                }}
              >
                {entry.description}
              </Card.Text>
            </Card>
          </div>
          <Card
            style={{
              color: "white",
              width: "28rem",
              marginTop: "10rem",
              padding: "1rem",
            }}
          >
            <Card.Body
              style={{
                fontFamily: "Macondo",
                fontSize: "24px",
                color: "white",
              }}
            >
              <ListGroup className="list-group-flush">
                <ListGroup.Item>
                  {"common_locations" in entry && entry.common_locations && (
                    <p>
                      <span style={{ fontFamily: "Hylian" }}>
                        <img
                          src={Location}
                          alt="Location-Icon"
                          style={iconStyle}
                        />
                        Common Locations:{" "}
                      </span>
                      <span
                        style={{ fontFamily: "Macondo", color: "lightgrey" }}
                      >
                        {entry.common_locations.join(", ")}
                      </span>
                    </p>
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  {"properties" in entry && (
                    <>
                      <p>
                        <span style={{ fontFamily: "Hylian" }}>
                          <img src={Bow} alt="Attack-Icon" style={iconStyle} />{" "}
                          Attack Power:{" "}
                        </span>
                        <span
                          style={{ fontFamily: "Macondo", color: "lightgrey" }}
                        >
                          {entry.properties.attack}
                        </span>
                      </p>
                      <p>
                        <span style={{ fontFamily: "Hylian" }}>
                          <img
                            src={Shield}
                            alt="Defense-Icon"
                            style={iconStyle}
                          />
                          Defense Power:{" "}
                        </span>
                        <span
                          style={{ fontFamily: "Macondo", color: "lightgrey" }}
                        >
                          {entry.properties.defense}
                        </span>
                      </p>
                    </>
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  {"cooking_effect" in entry && (
                    <p>
                      <span style={{ fontFamily: "Hylian" }}>
                        <img
                          src={Cooked}
                          alt="Cooking-Icon"
                          style={iconStyle}
                        />
                        Cooking Effect:{" "}
                      </span>
                      <span
                        style={{ fontFamily: "Macondo", color: "lightgrey" }}
                      >
                        {capitalizeWords(entry.cooking_effect)}
                      </span>
                    </p>
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  {"edible" in entry && (
                    <p>
                      <span style={{ fontFamily: "Hylian" }}>
                        {" "}
                        <img
                          src={Chickenleg}
                          alt="Edible-Icon"
                          style={iconStyle}
                        />
                        Edible:{" "}
                      </span>
                      <span
                        style={{ fontFamily: "Macondo", color: "lightgrey" }}
                      >
                        {entry.edible ? "Yes" : "No"}
                      </span>
                    </p>
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  {"hearts_recovered" in entry && (
                    <p>
                      <span style={{ fontFamily: "Hylian" }}>
                        <img
                          src={Plusheart}
                          alt="Heart-Icon"
                          style={iconStyle}
                        />{" "}
                        Hearts Recovered:{" "}
                      </span>
                      <span
                        style={{ fontFamily: "Macondo", color: "lightgrey" }}
                      >
                        {entry.hearts_recovered}
                      </span>
                    </p>
                  )}
                </ListGroup.Item>
                <ListGroup.Item>
                  {" "}
                  {"drops" in entry &&
                    entry.drops &&
                    entry.drops.length > 0 && (
                      <p>
                        <span style={{ fontFamily: "Hylian" }}>
                          <img src={Drops} alt="Drops-Icon" style={iconStyle} />
                          Drops:{" "}
                        </span>
                        <span
                          style={{ fontFamily: "Macondo", color: "lightgrey" }}
                        >
                          {capitalizeWords(entry.drops.join(", "))}
                        </span>
                      </p>
                    )}
                </ListGroup.Item>
              </ListGroup>
            </Card.Body>
          </Card>
        </div>
      </Container>
    </>
  );
};

export default DetailsPage;
