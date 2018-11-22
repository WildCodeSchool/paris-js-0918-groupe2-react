import React, { Component } from "react";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import "./creanciers.css";

class Creanciers extends Component {
  state = {};
  render() {
    return (
      <div className="creancier">
        <div className="fl w-70">
          <div className="title_créancier pl4">
            <h1 className="f2 lh-copy">Informations sur les créanciers</h1>
            <h2 className="f4 lh-copy">Liste des créanciers</h2>
          </div>
        </div>
        <div className="fl w-30 pt4">
          <div class="wraparigo">
            <div class="searcharigo">
              <input
                type="text"
                class="searchTerm"
                placeholder="What are you looking for?"
              />
              <button type="submit" class="searchButton">
                <i class="fa fa-search" />
              </button>
            </div>
          </div>
        </div>

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
              </tbody>
            </table>{" "}
            <div className="buttoncreancier tc pt3">
              <a
                className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-blue"
                href="#0"
              >
                Créer un créancier
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Creanciers;
