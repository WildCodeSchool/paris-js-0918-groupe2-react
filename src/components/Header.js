import React from "react";

import "./Header.css";
import Logout from "./images/logout.png";

const Header = () => {
  return (
    <div>
      <p className="fl w-80 tr mt4 mb4 pt3 pb3 pr3">Alexandra</p>
      <a
        className="fl w-10 f6 h3 w3 link dim ph3 pv2 mb4 mt4 dib mid-gray"
        href="http://www.google.com"
      >
        <img src={Logout} alt="logout" />
      </a>
      <header className="fl w-10 tr pv3-ns pr2 pl2">
        <img
          src="http://www.arigoni-avocat.com/img/team-02.png"
          className="br-100 pa1 ba b--black-10 h3 w3"
          alt="avatar"
        />
      </header>
    </div>
  );
};

export default Header;
