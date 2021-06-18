import React, { useState } from "react";
import { Button } from "../Button/Button";
import { Dropdown } from "../Dropdown/Dropdown";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          EPIC
        </Link>
      </nav>
    </>
  );
};
