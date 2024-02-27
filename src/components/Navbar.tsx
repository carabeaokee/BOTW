import React, { useContext } from "react";
import "./NavEl.js";
import { AuthContext } from "./AuthContext";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink, Icon } from "./NavEl.js";
import { TriforceIcon } from "../assets/icons/TriforceIcon.js";
import Spidericon from "../assets/icons/spidericon.svg";
import Mushroomsicon from "../assets/icons/mushroomsicon.svg";
import Monstericon from "../assets/icons/monstericon.svg";
import Swordicon from "../assets/icons/swordicon.svg";
import Rupeeicon from "../assets/icons/rupeeicon.svg";
import { useLocation } from "react-router-dom";

// Define the Navbar component
const Navbar = () => {
  // Get the current location from the useLocation hook
  const location = useLocation();
  // Get the user, logoutUser function, and loginUser function from the AuthContext
  const { user, logoutUser, loginUser } = useContext(AuthContext) ?? {};

  const handleClick = () => {
    if (user) {
      logoutUser?.();
    } else {
      loginUser?.("example@example.com", "password");
    }
  };

  // Define the path for the navbar button. If the user is logged in, it should go to the home page. If the user is not logged in, it should go to the login page.
  const navPath = user ? "/" : "/login";
  // Define the label for the navbar button. If the user is logged in, it should say "Log Out". If the user is not logged in, it should say "Log In".
  const navLabel = user ? "Log Out" : "Log In";

  // Return the JSX for the Navbar component
  return (
    <Nav>
      <TriforceIcon />
      <NavMenu>
        <NavLink className="home-link" to="/">
          Home
        </NavLink>
        <NavLink className="category-link" to="/creatures">
          <img
            className="nav-icon"
            src={Spidericon}
            style={{
              height: "52px",
              width: "52px",
              filter:
                location.pathname === "/creatures" ? "brightness(0.7)" : "none",
            }}
            alt="Creatures-Icon"
          />
        </NavLink>
        <NavLink className="category-link" to="/monsters">
          <img
            src={Monstericon}
            style={{
              height: "52px",
              width: "52px",
              filter:
                location.pathname === "/monsters" ? "brightness(0.7)" : "none",
            }}
            alt="Monsters-Icon"
          />
        </NavLink>
        <NavLink className="category-link" to="/equipment">
          <img
            src={Swordicon}
            style={{
              height: "52px",
              width: "52px",
              filter:
                location.pathname === "/equipment" ? "brightness(0.7)" : "none",
            }}
            alt="Equipment-Icon"
          />
        </NavLink>
        <NavLink className="category-link" to="/materials">
          <img
            src={Mushroomsicon}
            style={{
              height: "52px",
              width: "52px",
              filter:
                location.pathname === "/materials" ? "brightness(0.7)" : "none",
            }}
            alt="Materials-Icon"
          />
        </NavLink>
        <NavLink className="category-link" to="/treasure">
          <img
            src={Rupeeicon}
            style={{
              height: "52px",
              width: "52px",
              filter:
                location.pathname === "/treasure" ? "brightness(0.7)" : "none",
            }}
            alt="Treasure-Icon"
          />
        </NavLink>
        <NavLink className="account-link" to="/account">
          Account
        </NavLink>
      </NavMenu>
      <NavBtn onClick={handleClick}>
        <NavBtnLink to={navPath}>{navLabel}</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
