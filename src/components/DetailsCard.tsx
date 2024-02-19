import React from "react";
import { DetailType } from "../types/Customtypes";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";

// type DetailType = {};

const DetailsCard = ({ entry }) => {
  const { id, name, image, description } = entry;
  return (
    <div>
      <Card elevation={3}>
        <CardHeader key={id} title={name} className="card-title" />
        <CardMedia
          component="img"
          height="194"
          image={image}
          alt="entry image"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
};

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
