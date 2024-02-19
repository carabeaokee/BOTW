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
      loginUser?.();
    }
  };

  const navPath = user ? "/" : "/login";
  const navLabel = user ? "Log Out" : "Log In";

  return (
    <Nav>
      <TriforceIcon />
      <NavMenu>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/creatures">Creatures</NavLink>
        <NavLink to="/monsters">Monsters</NavLink>
        <NavLink to="/equipment">Equipment</NavLink>
        <NavLink to="/materials">Materials</NavLink>
        <NavLink to="/treasure">Treasure</NavLink>
        <NavLink to="/account">Account</NavLink>
      </NavMenu>
      <NavBtn onClick={handleClick}>
        <NavBtnLink to={navPath}>{navLabel}</NavBtnLink>
      </NavBtn>
    </Nav>
  );
};

export default Navbar;
