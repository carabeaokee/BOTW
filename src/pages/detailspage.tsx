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
import ErrorComponent from "./ErrorComponent";

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
      <h1>{capitalizeWords(entry.name)}</h1>
      <img src={entry.image} alt={entry.name} />
      {"common_locations" in entry && entry.common_locations && (
        <p>
          <strong>Common Locations:</strong> {entry.common_locations.join(", ")}
        </p>
      )}
      <p>
        <strong>Description:</strong> {entry.description}{" "}
      </p>
      {"properties" in entry && (
        <>
          <p>
            <strong>Attack Power:</strong> {entry.properties.attack}
          </p>
          <p>
            <strong>Defense Power:</strong> {entry.properties.defense}
          </p>
        </>
      )}

      {"cooking_effect" in entry && (
        <p>
          <strong>Cooking Effect:</strong>{" "}
          {capitalizeWords(entry.cooking_effect)}
        </p>
      )}
      {"edible" in entry && (
        <p>
          <strong> Edible:</strong> {entry.edible ? "Yes" : "No"}
        </p>
      )}
      {"hearts_recovered" in entry && (
        <p>
          <strong>Hearts Recovered:</strong> {entry.hearts_recovered}
        </p>
      )}
      {"drops" in entry && entry.drops && entry.drops.length > 0 && (
        <p>
          <strong>Drops:</strong> {capitalizeWords(entry.drops.join(", "))}
        </p>
      )}
    </>
  );
};

export default DetailsPage;
