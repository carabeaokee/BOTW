import React from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

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

export function DetailsCard({ item }) {
  return (
    <>
      <Card style={{ width: "8rem" }}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title>{capitalizeWords(item.name)}</Card.Title>
          <Card.Text>{item.description}</Card.Text>
        </Card.Body>
        <ListGroup className="list-group-flush">
          <ListGroup.Item>Cras justo odio</ListGroup.Item>
          <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
          <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </Card>
    </>
  );
}

// import React from "react";
// import { DetailType } from "../types/Customtypes";
// import {
//   Card,
//   CardHeader,
//   CardMedia,
//   CardContent,
//   Typography,
// } from "@mui/material";

// type DetailType = {};

// const DetailsCard = ({ entry }) => {
//   const { id, name, image, description } = entry;
//   return (
//     <div>
//       <Card elevation={3}>
//         <CardHeader key={id} title={name} className="card-title" />
//         <CardMedia
//           component="img"
//           height="194"
//           image={image}
//           alt="entry image"
//         />
//         <CardContent>
//           <Typography variant="body2" color="text.secondary">
//             {description}
//           </Typography>
//         </CardContent>
//       </Card>
//     </div>
//   );
// };

export default DetailsCard;

//   <div class="card" style="width: 18rem;">
//   <img class="card-img-top" src={item.image} alt="Card image">
//   <div class="card-body">
//     <h5 class="card-title">{item.name}</h5>
//     <p class="card-text">{item.description}</p>
//   </div>
//   <ul class="list-group list-group-flush">
//     <li class="list-group-item">Cras justo odio</li>
//     <li class="list-group-item">Dapibus ac facilisis in</li>
//     <li class="list-group-item">Vestibulum at eros</li>
//   </ul>
//   <div class="card-body">
//     <a href="#" class="card-link">Card link</a>
//     <a href="#" class="card-link">Another link</a>
//   </div>
// </div>

//! HEART CARD STYLE

// <Card variant="outlined" sx={{ width: 320 }}>
// <CardOverflow>
// <AspectRatio ratio="2">
//   <img src={item.image} alt="" />
// </AspectRatio>
// <IconButton
//   aria-label="Like minimal photography"
//   size="md"
//   variant="solid"
//   color="danger"
//   sx={{
//     position: "absolute",
//     zIndex: 2,
//     borderRadius: "50%",
//     right: "1rem",
//     bottom: 0,
//     transform: "translateY(50%)",
//   }}
// >
//   <Favorite />
// </IconButton>
// </CardOverflow>
// <CardContent>
// <Typography level="title-md">
//   <NavLink to={`/${item.id}`}>{capitalizeWords(item.name)}</NavLink>
// </Typography>
// </CardContent>
// </Card>
// </>
// );
// }

//! IMG CARD STYLE

//   return (
//     <Box
//       component="ul"
//       sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', p: 0, m: 0 }}
//     >
//       <Card component="li" sx={{ minWidth: 300, flexGrow: 1 }}>
//         <CardCover>
//           <img
//             src={entry.image}
//             alt=""
//           />
//         </CardCover>
//         <CardContent>
//           <Typography
//             level="body-lg"
//             fontWeight="lg"
//             textColor="#fff"
//             mt={{ xs: 12, sm: 18 }}
//           >
//             {capitalizeWords(entry.name)}
//           </Typography>
//         </CardContent>
//       </Card>
//     </Box>
//   );
// }

// export default function MyCard({ item }) {
//   return (
//     <>
//       <Card sx={{ minHeight: "280px", width: 320 }}>
//         <CardCover>
//           <img src={item.image} alt={item.name} />
//         </CardCover>
//         <CardCover
//           sx={{
//             background:
//               "linear-gradient(to top, rgba(0,0,0,0.4), rgba(0,0,0,0) 200px), linear-gradient(to top, rgba(0,0,0,0.8), rgba(0,0,0,0) 300px)",
//           }}
//         />
//         <CardContent sx={{ justifyContent: "flex-end" }}>
//           <Typography level="title-lg">
//             <NavLink to={`/${item.id}`} style={{ color: "white" }}>
//               {capitalizeWords(item.name)}
//             </NavLink>
//           </Typography>
//         </CardContent>
//       </Card>
//     </>
//   );
// }
