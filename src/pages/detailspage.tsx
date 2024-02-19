import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  CreatureType,
  EquipmentItem,
  MaterialType,
  MonsterType,
  TreasureType,
} from "../types/Customtypes";
import Navbar from "../components/Navbar";

type EntryType =
  | CreatureType
  | MaterialType
  | MonsterType
  | TreasureType
  | EquipmentItem;

const DetailsPage = <T extends EntryType>() => {
  const [entry, setEntry] = useState<T | null>(null);
  const params = useParams<{ id: string }>();

  useEffect(() => {
    const getEntry = async () => {
      const result = await fetch(
        `https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${params.id}`
      );
      const data: T = await result.json();

      setEntry(data);
    };
    getEntry();
  }, [params.id]);

  if (!entry) {
    return <div>Loading...</div>; // Add loading state
  }
  function capitalizeWords(str: string) {
    return str.replace(/\b\w/g, (char, index) => {
      if (index > 0 && str[index - 1] === "'") {
        return char.toLowerCase();
      } else {
        return char.toUpperCase();
      }
    });
  }

  // <h1>{capitalizeWords(entry.name)}</h1>
  // {capitalizeWords(entry.cooking_effect)}
  // {capitalizeWords(entry.drops.join(", "))}

  return (
    <>
      <Navbar />
      <h1>{entry.name}</h1>
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
          <strong>Cooking Effect:</strong> {entry.cooking_effect}
        </p>
      )}
      {"edible" in entry && <p>Edible: {entry.edible ? "Yes" : "No"}</p>}
      {"hearts_recovered" in entry && (
        <p>
          <strong>Hearts Recovered:</strong> {entry.hearts_recovered}
        </p>
      )}
      {"drops" in entry && entry.drops && entry.drops.length > 0 && (
        <p>
          <strong>Drops:</strong> {entry.drops.join(", ")}
        </p>
      )}
    </>
  );
};

export default DetailsPage;
