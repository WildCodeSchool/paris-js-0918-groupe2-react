import React, { Component } from "react";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
class Acompte extends Component {
  state = {};
  render() {
    return (
      <div className="fl w-100">
        <p>Nouvel acompte</p>
        <div className="overflow-auto">
          <table cellSpacing="0">
            <thead>
              <tr className="stripe-dark">
                <th className="fw6 tl pa3 bg-white">XXXXXXXX</th>
                <th className="fw6 tl pa3 bg-white">XXXXXXXX</th>
                <th className="fw6 tl pa3 bg-white">XXXXXXXX</th>
                <th className="fw6 tl pa3 bg-white">XXXXXXXX</th>
                <th className="fw6 tl pa3 bg-white">XXXXXXXX</th>
              </tr>
            </thead>
            <tbody className="lh-copy">
              <tr className="stripe-dark">
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
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
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
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
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
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
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
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
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
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
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
                <td className="pa3">XXXX</td>
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
        </div>
        {/* Bouton +nouvel acompte */}
        <div className="buttonNewac ">
          <span
            className="f6 link dim br1 ph3 pv2 mt4 mb4 mr6 dib white bg-dark-blue"
            href="#0"
          >
            {" "}
            Creer un nouvel acompte{" "}
          </span>
        </div>{" "}
      </div>
    );
  }
}

export default Acompte;
