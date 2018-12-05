import React, { Component } from "react";
import icone_mon_compte from "./Icones_Arigoni/icone_mon_compte.png";
import icone_creanciers from "./Icones_Arigoni/icone_creanciers.png";
import icone_debiteurs from "./Icones_Arigoni/icone_debiteurs.png";
import icone_centre_actions from "./Icones_Arigoni/icone_centre_actions.png";
import icone_historique from "./Icones_Arigoni/icone_historique.png";
import { NavLink } from "react-router-dom";
import "./Nav.css";

class Nav extends Component {
  render() {
    return (
      <div className="nav-css">
        <div className=" ba-ns b--transparent allNav white">
          <div className="topNav">
            <h1 className="ml4 mt4 bb b--transparent h3">TABLEAU DE BORD</h1>
          </div>

          {/* Navlink partout quand on clique ça affiche le composant qu'on demande*/}
          <div className="colorNav">
            <nav className="ml4 navPage">
              <NavLink
                to="/dashboard/moncompte"
                onClick={() => this.props.pageChange("Compte")}
              >
                <p className="f3 b db mb6 mt5 no-underline hover-white grow bowl">
                  <img
                    src={icone_mon_compte}
                    alt="compte"
                    className="iconeNav"
                  />{" "}
                  Mon compte
                </p>
              </NavLink>

              <NavLink
                to="/dashboard/creanciers"
                onClick={() => this.props.pageChange("Creanciers")}
              >
                <p className="f3 b db mb6 no-underline hover-white grow bowl">
                  <img
                    src={icone_creanciers}
                    alt="compte"
                    className="iconeNav"
                  />{" "}
                  Créanciers
                </p>
              </NavLink>
              <NavLink
                to="/dashboard/debiteurs"
                onClick={() => this.props.pageChange("Debiteurs")}
              >
                <p className="f3 b db mb6 no-underline hover-white grow bowl">
                  <img
                    src={icone_debiteurs}
                    alt="compte"
                    className="iconeNav"
                  />{" "}
                  Débiteurs
                </p>
              </NavLink>
              <NavLink
                to="/dashboard/actions"
                onClick={() => this.props.pageChange("Actions")}
              >
                <p className="f3 b db mb6 no-underline hover-white grow bowl">
                  <img
                    src={icone_centre_actions}
                    alt="compte"
                    className="iconeNav"
                  />{" "}
                  Actions
                </p>
              </NavLink>
              <NavLink
                to="/dashboard/historique"
                onClick={() => this.props.pageChange("Historique")}
              >
                <p className="f3 b db no-underline hover-white grow bowln">
                  <img
                    src={icone_historique}
                    alt="compte"
                    className="iconeNav"
                  />{" "}
                  Historique
                </p>
              </NavLink>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
