import React, { useState } from "react";
import "./NavEl.js";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavEl.js";
import { TriforceIcon } from "../assets/icons/TriforceIcon.js";

const Navbar = () => {
  return (
    <Nav>
      <TriforceIcon />
      <NavMenu>
        <NavLink to="/" className="Home">
          Home
        </NavLink>
        <NavLink to="/creatures">Creatures</NavLink>
        <NavLink to="/monsters">Monsters</NavLink>

        <NavLink to="/equipment">Equipment</NavLink>

        <NavLink to="/materials">Materials</NavLink>

        <NavLink to="/treasure">Treasure</NavLink>
      </NavMenu>
      <NavBtn>
        <NavBtnLink to="/register">Sign Up</NavBtnLink>
        <NavBtnLink to="/login">Log In</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;

// import React from "react";
// import { styled, alpha } from "@mui/material/styles";
// import MenuIcon from "@mui/icons-material/Menu";
// import SearchIcon from "@mui/icons-material/Search";
// import {
//   AppBar,
//   Box,
//   Toolbar,
//   IconButton,
//   Typography,
//   InputBase,
// } from "@mui/material";

// const Search = styled("div")(({ theme }) => ({
//   position: "relative",
//   borderRadius: theme.shape.borderRadius,
//   backgroundColor: alpha(theme.palette.common.white, 0.15),
//   "&:hover": {
//     backgroundColor: alpha(theme.palette.common.white, 0.25),
//   },
//   marginLeft: 0,
//   width: "100%",
//   [theme.breakpoints.up("sm")]: {
//     marginLeft: theme.spacing(1),
//     width: "auto",
//   },
// }));

// const SearchIconWrapper = styled("div")(({ theme }) => ({
//   padding: theme.spacing(0, 2),
//   height: "100%",
//   position: "absolute",
//   pointerEvents: "none",
//   display: "flex",
//   alignItems: "center",
//   justifyContent: "center",
// }));

// const StyledInputBase = styled(InputBase)(({ theme }) => ({
//   color: "inherit",
//   width: "100%",
//   "& .MuiInputBase-input": {
//     padding: theme.spacing(1, 1, 1, 0),
//     // vertical padding + font size from searchIcon
//     paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//     transition: theme.transitions.create("width"),
//     [theme.breakpoints.up("sm")]: {
//       width: "12ch",
//       "&:focus": {
//         width: "20ch",
//       },
//     },
//   },
// }));

// export default function SearchAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="open drawer"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
//           >
//             BOTW
//           </Typography>
//           <Search>
//             <SearchIconWrapper>
//               <SearchIcon />
//             </SearchIconWrapper>
//             <StyledInputBase
//               placeholder="Search…"
//               inputProps={{ "aria-label": "search" }}
//             />
//           </Search>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// import React from "react";
// import {
//   Typography,
//   IconButton,
//   Button,
//   Box,
//   Toolbar,
//   AppBar,
// } from "@mui/material";
// import MenuIcon from "@mui/icons-material/Menu";

// export default function ButtonAppBar() {
//   return (
//     <Box sx={{ flexGrow: 1 }}>
//       <AppBar position="static">
//         <Toolbar>
//           <IconButton
//             size="large"
//             edge="start"
//             color="inherit"
//             aria-label="menu"
//             sx={{ mr: 2 }}
//           >
//             <MenuIcon />
//           </IconButton>
//           <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
//             News
//           </Typography>
//           <Button color="inherit">Login</Button>
//         </Toolbar>
//       </AppBar>
//     </Box>
//   );
// }

// import React from "react";
// import { NavLink } from "react-router-dom";

// const Navbar = () => {
//   const navContainerStyles: React.CSSProperties = {
//     width: "100%",
//     height: "50px",
//     border: "solid 1px black",
//     display: "flex",
//     justifyContent: "space-around",
//     gap: "1em",
//     alignItems: "center",
//     padding: "1rem",
//     backgroundColor: "lightblue",
//     marginBottom: "1em",
//     position: "absolute",
//     top: "1rem",
//     left: "0",
//   };
//   return (
//     <>
//       <nav style={navContainerStyles}>
//         <NavLink to="/">Home</NavLink>
//         <NavLink to="/Creatures">Creatures</NavLink>
{
  /* <NavLink to="/Treasure">Treasure</NavLink>
        <NavLink to="/quipment">Equipment</NavLink>
        <NavLink to="/materials">Materials</NavLink> */
}
//         <NavLink to="/monsters">Monsters</NavLink>
//         <NavLink
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "active" : ""
//           }
//           to={"/Home"}
//         >
//           Home
//         </NavLink>
//         <NavLink
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "active" : ""
//           }
//           to={"/creatures"}
//         >
//           Creatures
//         </NavLink>
//         <NavLink
//           className={({ isActive, isPending }) =>
//             isPending ? "pending" : isActive ? "active" : ""
//           }
//           to={"/monsters"}
//         >
//           Monsters
//         </NavLink>
//       </nav>
//     </>
//   );
// };

// export default Navbar;

// function Navbar() {
//   const navRef = useRef();

//   const showNavbar = () => {
//     navRef.current.classList.toggle("responsive_nav");
//   };
//   return (
//     <>
//       <BrowserRouter>
//         <header>
//           <h3>BOTW</h3>
//           <nav>
//             <NavLink to="/">Home</NavLink>
//             <NavLink to="/creatures">Creatures</NavLink>
//             <NavLink to="/treasure">Treasure</NavLink>
//             <NavLink to="/equipment">Equipment</NavLink>
//             <NavLink to="/materials">Materials</NavLink>
//             <NavLink to="/monsters">Monsters</NavLink>
//             <button onClick={showNavbar}>
//               <FaTimes />
//             </button>
//           </nav>
//           <button onClick={showNavbar}>
//             <FaBars />
//           </button>
//         </header>
//         <main>
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/creatures" element={<Creatures />} />
//             <Route path="/treasure" element={<Treasure />} />
//             <Route path="/equipment" element={<Equipment />} />
//             <Route path="/materials" element={<Materials />} />
//             <Route path="/monsters" element={<Monsters />} />
//           </Routes>
//         </main>
//       </BrowserRouter>
//     </>
//   );
// }
