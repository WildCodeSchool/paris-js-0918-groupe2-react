import React, { Component } from "react";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import "./debiteurs.css";
import { NavLink } from "react-router-dom";

class Debiteurs extends Component {
  state = {};
  render() {
    return (
      <div className="debiteur">
        <div className="fl w-60">
          <div className="pl4">
            <h1 className="f2 lh-copy nowrap">
              Informations sur les débiteurs
            </h1>
            <h2 className="pt2 f4 lh-copy">Liste des débiteurs</h2>
          </div>
        </div>
        {/* Search bar */}
        <div className="fl w-40">
          <div className="wraparigo">
            <div className="searcharigo">
              <input
                type="text"
                className="searchTerm"
                placeholder="trouver un débiteur"
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
        {/* tableau des débiteurs */}
        <div className="fl w-100 pa4 ">
          <div className="overflow-auto">
            <table className="f6 w-100 center" cellSpacing="0">
              <thead>
                <tr className="stripe-dark">
                  <th className="fw6 tl pa3 bg-white">Dénomination sociale</th>
                  <th className="fw6 tl pa3 bg-white">Forme juridique</th>
                  <th className="fw6 tl pa3 bg-white">Pays</th>
                  <th className="fw6 tl pa3 bg-white">Modifier</th>
                  <th className="fw6 tl pa3 bg-white">Supprimer</th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                <tr className="stripe-dark">
                  <td className="pa3">Hassan Johnson</td>
                  <td className="pa3">@hassan</td>
                  <td className="pa3">hassan@companywithalongdomain.co</td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={modifier}
                      alt="modifier"
                    />
                  </td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={supprimer}
                      alt="supprimer"
                    />
                  </td>
                </tr>
                <tr className="stripe-white">
                  <td className="pa3">Hassan Johnson</td>
                  <td className="pa3">@hassan</td>
                  <td className="pa3">hassan@companywithalongdomain.co</td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={modifier}
                      alt="modifier"
                    />
                  </td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={supprimer}
                      alt="supprimer"
                    />
                  </td>
                </tr>
                <tr className="stripe-dark">
                  <td className="pa3">Hassan Johnson</td>
                  <td className="pa3">@hassan</td>
                  <td className="pa3">hassan@companywithalongdomain.co</td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={modifier}
                      alt="modifier"
                    />
                  </td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={supprimer}
                      alt="supprimer"
                    />
                  </td>
                </tr>
                <tr className="stripe-white">
                  <td className="pa3">Hassan Johnson</td>
                  <td className="pa3">@hassan</td>
                  <td className="pa3">hassan@companywithalongdomain.co</td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={modifier}
                      alt="modifier"
                    />
                  </td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={supprimer}
                      alt="supprimer"
                    />
                  </td>
                </tr>
                <tr className="stripe-dark">
                  <td className="pa3">Hassan Johnson</td>
                  <td className="pa3">@hassan</td>
                  <td className="pa3">hassan@companywithalongdomain.co</td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={modifier}
                      alt="modifier"
                    />
                  </td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={supprimer}
                      alt="supprimer"
                    />
                  </td>
                </tr>
                <tr className="stripe-white">
                  <td className="pa3">Hassan Johnson</td>
                  <td className="pa3">@hassan</td>
                  <td className="pa3">hassan@companywithalongdomain.co</td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={modifier}
                      alt="modifier"
                    />
                  </td>
                  <td className="pa3">
                    <img
                      className="icone pointer"
                      src={supprimer}
                      alt="supprimer"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
            {/* Bouton  */}
            <div className="buttondebiteur tc pt4">
              <NavLink
                to="/dashboard/formDebiteur"
                className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                onClick={() => this.props.pageChangeSub("FormDebiteur")}
              >
                Créer un débiteur
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Debiteurs;
