// import React from "react";
// import Navbar from "../components/Navbar";
// import { useParams } from "react-router-dom";
// import { useEffect, useState } from "react";
// import {
//   CreatureType,
//   MaterialType,
//   MonsterType,
//   EquipmentItem,
//   TreasureType,
// } from "../types/Customtypes";

// type DetailResponse<Data> = {
//   data: Data;
// };
// type TreasureResponse = DetailResponse<TreasureType>;
// type EquipmentResponse = DetailResponse<EquipmentItem>;
// type MonsterResponse = DetailResponse<MonsterType>;
// type MaterialResponse = DetailResponse<MaterialType>;
// type CreatureResponse = DetailResponse<CreatureType>;

// const DetailsPage = () => {
//   const [entry, setEntry] = useState<Item[]>();
//   const params = useParams();

//   useEffect(() => {
//     const getEntry = async () => {
//       const result = await fetch(`http://localhost:8000/data/${params.id}`);
//       const data = await result.json();

//       setEntry(data);
//     };
//     getEntry();
//   }, []);

//   console.log("entry", entry);

//   return (
//     <>
//       <Navbar />
//       <div className="entry-container">
//         <div className="entry-item" key={id}>
//           <img src={image} alt={name} />
//           <h1>{name}</h1>
//           <p>{description}</p>
//         </div>
//         <div className="special-info">
//           <p>Common Locations: {common_locations}</p>
//           {attack && <p>Attack: {attack}</p>}
//           {defense && <p>Defense: {defense}</p>}
//           <p>Cooking Effect: {cooking_effect}</p>
//           <p>Edible: {edible}</p>
//           <p>Hearts Effect: {hearts_effect}</p>
//           <p>Drops: {drops}</p>
//         </div>
//       </div>
//     </>
//   );
// };

// export default DetailsPage;
