import React from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
  IconButton,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function MyCard({ item }) {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader title={item.name} className="card-title" />
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt={item.name}
        />
        <CardContent>
          {/* <Typography variant="body2" color="text.secondary">
            {item.description}
          </Typography> */}
        </CardContent>
        <NavLink to={`/${item.category}/${item.id}`}>More Info</NavLink>
      </Card>
    </div>
  );
}

// import Card from "react-bootstrap/Card";
// import Col from "react-bootstrap/Col";
// import Row from "react-bootstrap/Row";
// import React from "react";
// import { CompendiumItem } from "../@types/Categorytypes";

// type MyCardProps = {
//   image: string;
//   name: string;
//   id: number;
//   description: string;
// };

// function MyCard({ image, name, id, description }: CompendiumItem) {
//   return (
//     <Row xs={1} md={2} className="g-4">
//       {Array.from({ length: 4 }).map((_, id) => (
//         <Col key={id}>
//           <Card>
//             <Card.Img variant="top" src="holder.js/100px160" />
//             <Card.Body>
//               <Card.Title>Card title</Card.Title>
//               <Card.Text>
//                 This is a longer card with supporting text below as a natural
//                 lead-in to additional content. This content is a little bit
//                 longer.
//               </Card.Text>
//             </Card.Body>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   );
// }

// export default MyCard;

// <div class="card">
//   <img src="img_avatar.png" alt="Avatar" style="width:100%">
//   <div class="container">
//     <h4><b>John Doe</b></h4>
//     <p>Architect & Engineer</p>
//   </div>
// </div>
