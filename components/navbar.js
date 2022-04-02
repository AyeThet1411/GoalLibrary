import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import logo from "../images/logo.png";
import "../style.css";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={logo} className="logo" />
      <div>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input type="text" placeholder="Search" className="nav--search" />
      </div>

      <ul className="nav--lists">
        <li>About</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
