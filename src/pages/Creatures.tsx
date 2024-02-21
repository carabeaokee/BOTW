import React from "react";
import { useEffect, useState } from "react";
import { CreatureType } from "../types/Customtypes";
import { Container, Grid, TextField } from "@mui/material";
import MyCard from "../components/MyCard";
import Navbar from "../components/Navbar";
import Infinity from "../assets/icons/infinity.svg";

function Creatures() {
  const [creatures, setCreatures] = useState<CreatureType[] | null>(null);
  const [searchTerm, setSearchTerm] = useState("");
  const creaturesUrl =
    "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures";

  const getCreatures = async () => {
    try {
      const response = await fetch(creaturesUrl);
      const result = await response.json();
      // console.log("result :>> ", result);
      setCreatures(result.data);
    } catch (error) {
      console.log("error :>> ", error);
    }
  };

  useEffect(() => {
    getCreatures();
  }, []);

  if (!creatures) {
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

  const filteredCreatures = creatures?.filter((creature) =>
    creature.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <Container>
        <TextField
          label="Search"
          variant="outlined"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Grid container spacing={3}>
          {filteredCreatures &&
            filteredCreatures.map((creature) => (
              <Grid item key={creature.id} xs={12} sm={6} md={4} lg={3}>
                <MyCard item={creature} />
              </Grid>
            ))}
        </Grid>
      </Container>
    </>
  );
}

export default Creatures;

// import React from "react";
// import { useEffect, useState } from "react";
// import { CreatureType } from "../types/Customtypes";
// import { Container, Grid } from "@mui/material";
// import MyCard from "../components/MyCard";
// import Navbar from "../components/Navbar";
// import { TriforceIcon } from "../assets/icons/TriforceIcon";

// function Creatures() {
//   const [creatures, setCreatures] = useState<CreatureType[] | null>(null);
//   const creaturesUrl =
//     "https://botw-compendium.herokuapp.com/api/v3/compendium/category/creatures";

//   const getCreatures = async () => {
//     try {
//       const response = await fetch(creaturesUrl);
//       const result = await response.json();
//       // console.log("result :>> ", result);
//       setCreatures(result.data);
//     } catch (error) {
//       console.log("error :>> ", error);
//     }
//   };

//   useEffect(() => {
//     getCreatures();
//   }, []);

//   return (
//     <>
//       <Navbar />
//       <Container>
//         <Grid container spacing={3}>
//           {creatures &&
//             creatures.map((creature) => (
//               <Grid item key={creature.id} xs={12} sm={6} md={4} lg={3}>
//                 <MyCard item={creature} />
//               </Grid>
//             ))}
//         </Grid>
//       </Container>
//     </>
//   );
// }

// export default Creatures;
