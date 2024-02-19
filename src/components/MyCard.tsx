import React from "react";
import { Card, CardHeader, CardMedia, IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import FavoriteIcon from "@mui/icons-material/Favorite";

function capitalizeWords(str: string) {
  return str.replace(/\b\w/g, (char, index) => {
    if (index > 0 && str[index - 1] === "'") {
      return char.toLowerCase();
    } else {
      return char.toUpperCase();
    }
  });
}

export default function MyCard({ item }) {
  return (
    <div>
      <Card elevation={3}>
        <CardHeader title={capitalizeWords(item.name)} className="card-title" />
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt={item.name}
        />
        <NavLink to={`/${item.id}`}>More Info</NavLink>
      </Card>
    </div>
  );
}

// import React from "react";
// import { Card, CardHeader, CardMedia, IconButton } from "@mui/material";
// import { NavLink } from "react-router-dom";
// import FavoriteIcon from "@mui/icons-material/Favorite";

// export default function MyCard({ item }) {
//   return (
//     <div>
//       <Card elevation={3}>
//         <CardHeader title={item.name} className="card-title" />
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <CardMedia
//           component="img"
//           height="194"
//           image={item.image}
//           alt={item.name}
//         />
//         <NavLink to={`/${item.id}`}>More Info</NavLink>
//       </Card>
//     </div>
//   );
// }
