import React from "react";

import "./Header.css";
import Logout from "./images/logout.png";

const Header = () => {
  return (
    <div>
      <header className="fl w-100 tr">
        <p className="fl w-90">
          <img
            src="http://www.arigoni-avocat.com/img/team-02.png"
            className="br-100 b--black-10 h3 w3"
            alt="avatar"
          />
        </p>
        <a
          className="fl w-10 f6 h3 w3 link ph3 mt4"
          href="http://www.google.com"
        >
          <img src={Logout} alt="logout" />
        </a>
      </header>
    </div>
  );
};

export default Header;
