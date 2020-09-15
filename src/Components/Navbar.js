import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/nlj.svg";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/">
        <img src={logo} alt="logo" />
      </NavLink>
      <ul>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/work">Work</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
