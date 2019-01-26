import React from "react";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      {/* c'est un header */}
      <header className="header">
        <img
          src="http://www.arigoni-avocat.com/img/team-02.png"
          className="avatar"
          alt="avatar"
        />
        <NavLink to="/" className="deconnexion">
          Déconnexion
        </NavLink>
      </header>
    </div>
  );
};

export default Header;
