import React, { Component } from "react";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";

class Tabavoir extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="overflow-auto">
          Tableau des avoirs
          <table className="f6 w-100 center" cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3 bg-white">Numero avoir</th>
                <th className="fw6 tl pa3 bg-white">Date</th>
                <th className="fw6 tl pa3 bg-white">Montant HT</th>
                <th className="fw6 tl pa3 bg-white">Modifier</th>
                <th className="fw6 tl pa3 bg-white">Supprimer</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr className="stripe-dark">
                <td className="pa3">xxxxxx</td>
                <td className="pa3">xxxxxx</td>
                <td className="pa3">xxxxxx</td>
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
          <div className="buttondebiteur tc pt4">
            <a
              className="boutoncouleur f6 grow no-underline br-pill pa3 mb2 dib white "
              href="#0"
            >
              Créer un avoir
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Tabavoir;
