import React, { useContext } from "react";
import "./NavEl.js";
import { AuthContext } from "./AuthContext";
import { Nav, NavLink, NavMenu, NavBtn, NavBtnLink } from "./NavEl.js";
import { TriforceIcon } from "../assets/icons/TriforceIcon.js";

const Navbar = () => {
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
          <img src="../assets/icons/spider.svg" alt="Monsters Icon" />
        </NavLink>
        <NavLink className="category-link" to="/monsters">
          Monsters
        </NavLink>
        <NavLink className="category-link" to="/equipment">
          Equipment
        </NavLink>
        <NavLink className="category-link" to="/materials">
          Materials
        </NavLink>
        <NavLink className="category-link" to="/treasure">
          Treasure
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
