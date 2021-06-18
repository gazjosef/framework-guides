import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import "./Navbar.css";

import { FaTimes, FaBars, FaCaretDown } from "react-icons/fa";

export const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          EPIC
        </Link>
        <div className="menu-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Services <FaCaretDown />
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};