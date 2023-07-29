import React from "react";

import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import "./MyNavBar.css";

function MyNavbar() {
  return (
    <nav className="my-navbar">
      <img src={logo} height={70} alt="logo" />
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/">Accueil</Link>
        </li>
        <li className="nav-item">
          <Link to="/about">A propos</Link>
        </li>
      </ul>
      <Link className="nav-toggle" to="/signin">
        s'inscrire
      </Link>
      <Link className="nav-toggle" to="/login">
        se connecter
      </Link>
    </nav>
  );
}

export default MyNavbar;
