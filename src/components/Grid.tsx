// import { makeStyles } from "@mui/material";
// import React from "react";


// const useStyles = makeStyles(() => ({
//     page: {
//         background: '#f9f9f9',
//         width: '100%'
//     }
// }))

// export default function Layout({ children }) {
//     const classes = useStyles();
//     return (
//         <div>
//           {/* NAV BAR */}
//           <div className={classes.page}>
//             {children}
//           </div>
//         </div>
//     )
// }


// import React from "react";
// import {
//   Card,
//   Grid,
//   Typography,
//   CardMedia,
//   CardContent,
//   CardActionArea,
// } from "@mui/material";

// const Layout = () => {
//   return (
//     <div>
//       <Grid container spacing={3}>
//         <Grid item xs={3}>
//           <Card sx={{ maxWidth: 345 }}></Card>
//         </Grid>
//         <Grid item xs={3}>
//           <Card sx={{ maxWidth: 345 }}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="140"
//                 image={creature.image}
//                 alt="image"
//               />
//               <CardContent>
//                 <Typography gutterBottom variant="h5" component="div">
//                 {creature.name}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//       </Grid>
//     </div>
//   );
// };

// export default Layout;

// import React from "react";
// import { CreatureType, EquipmentItem, MaterialType, MonsterType, TreasureType } from "../@types/Categorytypes";
// import MyCard from "./MyCard";
// import { Col } from "react-bootstrap";

// type GridProps = {
//     creatures :CreatureType[] | null;
//     monsters :MonsterType[] | null;
// treasure :TreasureType[] | null;
// equipment :EquipmentItem[] | null;
// materials :MaterialType[] | null;

// const Grid = ({ creatures, monsters }: GridProps) => {
//     return (
//         <>
//         {creatures &&
//             creatures.map((creature) => {
//             return (
//                 <Col>
//                 <div key={creature.id}>
//                 <MyCard
//                 id={creature.id}
//                 image={creature.image}
//                 name={creature.name}
//                 description={creature.description}
//                 />
//                 </div>
//                 </Col>
//             );
//         })}
//         {monsters &&
//             monsters.map((monster) => {
//             return (
//                 <Col>
//                 <div key={monster.id}>
//                 <MyCard
//                 id={monster.id}
//                 image={monster.image}
//                 name={monster.name}
//                 description={monster.description}
//                 />
//                 </div>
//                 </Col>
//             );
//         })}
//         </>
//     );
// };

// export default Grid;

// type Props = {
//     items: CompendiumItem[]
// }

// function GenericGrid({items}: Props) {
//   return (
//     <div>{items.map((item)=>{
//         const {name, description, id, image} = item
//         return (
//             <>
//             <MyCard name={name} description={description} id={id} />
//             <h1>{item.name}</h1>
//             </>
//         )
//     })}</div>
//   )
// }
