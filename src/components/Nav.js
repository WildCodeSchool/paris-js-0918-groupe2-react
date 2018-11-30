import React from "react";
import icone_mon_compte from "./Icones_Arigoni/icone_mon_compte.png";
import icone_creanciers from "./Icones_Arigoni/icone_creanciers.png";
import icone_debiteurs from "./Icones_Arigoni/icone_debiteurs.png";
import icone_centre_actions from "./Icones_Arigoni/icone_centre_actions.png";
import icone_historique from "./Icones_Arigoni/icone_historique.png";
import "./Nav.css";
// import { Switch, Route } from "react-router-dom"

class Nav extends React.Component {
  render() {
    return (
      <div className=" ba-ns b--transparent allNav white">
        <div className="topNav">
          <h1 className="ml4 mt4 bb b--transparent h3">TABLEAU DE BORD</h1>
        </div>
        <div className="colorNav">
          <nav className="ml4 navPage">
            <a
              className="f3 b db mb6 mt5 no-underline hover-white grow"
              href="http://www.google.com"
            >
              <img src={icone_mon_compte} alt="compte" className="iconeNav" />{" "}
              Mon compte
            </a>
            <a
              className="f3 b db mb6 no-underline hover-white grow"
              href="http://www.google.com"
            >
              <img src={icone_creanciers} alt="compte" className="iconeNav" />{" "}
              Créanciers
            </a>
            <a
              className="f3 b db mb6 no-underline hover-white grow"
              href="http://www.google.com"
            >
              <img src={icone_debiteurs} alt="compte" className="iconeNav" />{" "}
              Débiteurs
            </a>
            <a
              className="f3 b db mb6 no-underline hover-white grow"
              href="http://www.google.com"
            >
              <img
                src={icone_centre_actions}
                alt="compte"
                className="iconeNav"
              />{" "}
              Actions
            </a>
            <a
              className="f3 b db no-underline hover-white grow"
              href="http://www.google.com"
            >
              <img src={icone_historique} alt="compte" className="iconeNav" />{" "}
              Historique
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
