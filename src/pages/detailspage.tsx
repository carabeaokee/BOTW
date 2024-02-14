import React from "react";
import Navbar from "../components/Navbar";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { DetailType } from "../types/Customtypes";
import { Grid, Container } from "@mui/material";
import MyCard from "../components/MyCard";

const DetailsPage = () => {
  const [item, setItem] = useState<DetailType[]>([]);
  const params = useParams<{ id: string }>();
  const { id } = params;

  useEffect(() => {
    fetch(`https://botw-compendium.herokuapp.com/api/v3/compendium/entry/${id}`)
      .then((res) => res.json())
      .then((data) => setItem([data]))
      .catch((error) => {
        console.error(error);
      });
  }, [id]);

  return (
    <>
      <Navbar />
      <Container>
        <Grid container>
          {item.map((item) => (
            <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
              <MyCard item={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  );
};

export default DetailsPage;

// import { Grid, Container, Paper } from "@mui/material";
// import React from "react";
// import { useEffect, useState } from "react";
// import { CompendiumItem } from "../types/Customtypes";
// import MyCard from "../components/MyCard";

// export default function Compendium() {
//   const [compendium, setCompendium] = useState<CompendiumItem[]>([]);

//   useEffect(() => {
//     fetch("http://localhost:3000/data")
//       .then((response) => response.json())
//       .then((data) => setCompendium(data));
//   }, []);

//   return (
//     <Container>
//       <Grid container>
//         {compendium.map((item) => (
//           <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
//             <MyCard item={item} />
//           </Grid>
//         ))}
//       </Grid>
//     </Container>
//   );
// }
