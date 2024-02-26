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
import "./css/NavStyle.css";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const { user, logoutUser, loginUser } = useContext(AuthContext) ?? {};

  const handleClick = () => {
    if (user) {
      logoutUser?.();
    } else {
      loginUser?.("example@example.com", "password");
    }
  };

  const navPath = user ? "/" : "/login";
  const navLabel = user ? "Log Out" : "Log In";

  return (
    <Nav>
      <TriforceIcon />
      <NavMenu>
        <NavLink className="home-link" to="/">
          Home
        </NavLink>
        <NavLink className="category-link" to="/creatures">
          <img
            src={Spidericon}
            style={{
              height: "52px",
              width: "52px",
              borderBottom:
                location.pathname === "/creatures" ? "2px solid #000" : "none",
            }}
            alt="Creatures-Icon"
          />
        </NavLink>
        <NavLink className="category-link" to="/monsters">
          <img
            src={Monstericon}
            style={{ height: "52px", width: "52px" }}
            alt="Monsters-Icon"
          />
        </NavLink>
        <NavLink className="category-link" to="/equipment">
          <img
            src={Swordicon}
            style={{ height: "52px", width: "52px" }}
            alt="Equipment-Icon"
          />
        </NavLink>
        <NavLink className="category-link" to="/materials">
          <img
            src={Mushroomsicon}
            style={{ height: "52px", width: "52px" }}
            alt="Materials-Icon"
          />
        </NavLink>
        <NavLink className="category-link" to="/treasure">
          <img
            src={Rupeeicon}
            style={{ height: "52px", width: "52px" }}
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
