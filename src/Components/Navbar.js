import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../images/nlj.png";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li className="title">
          <NavLink to="/">
            <img src={Logo} />
          </NavLink>
        </li>
        <li className="phone-title">
          <NavLink to="/">NLJ</NavLink>
        </li>
      </ul>
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
