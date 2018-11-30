import React, { Component } from "react";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import "./Facture.css";
class Facture extends Component {
  state = {};
  render() {
    return (
      <div className="Factureimpayee ml4 mt4">
        {/* factures impayées */}
        <div className="fl w-50">
          <h1 className="f4 lh-copy">Facture impayée: compagnie WXY vs AZY</h1>
          <div className="StylishForm">
            {/* Formulaire en input */}
            <form>
              <div className="inputdiv">
                <div>
                  <div className="stripe-dark pa2 b">N° de commande</div>
                  <input
                    className="white-dark pa1"
                    type="text"
                    name="facture"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="inputdiv">
                <div>
                  <div className="stripe-dark pa2 b">
                    N° de confirmation de commande
                  </div>
                  <input
                    className="white-dark pa1"
                    type="text"
                    name="facture"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="inputdiv">
                <div>
                  <div className="stripe-dark pa2 b">
                    N° document de transport
                  </div>
                  <input
                    className="white-dark pa1"
                    type="text"
                    name="facture"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="inputdiv">
                <div>
                  <div className="stripe-dark pa2 b">N° facture</div>
                  <input
                    className="white-dark pa1"
                    type="text"
                    name="facture"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="inputdiv">
                <div>
                  <div className="stripe-dark pa2 b">Date facture</div>
                  <input
                    className="white-dark pa1"
                    type="text"
                    name="facture"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="inputdiv">
                <div>
                  <div className="stripe-dark pa2 b">
                    Montant HT de la facture
                  </div>
                  <input
                    className="white-dark pa1"
                    type="text"
                    name="facture"
                    placeholder=""
                  />
                </div>
              </div>
              <div className="inputdiv">
                <div>
                  <div className="stripe-dark pa2 b">
                    Echeance de la facture
                  </div>
                  <input
                    className="white-dark pa1"
                    type="text"
                    name="facture"
                    placeholder=""
                  />
                </div>
              </div>
            </form>
            <div className="fl w-60 pt4 tr ml4" />
          </div>
        </div>
        {/* Acomptes */}
        <div className="fl w-40 ml5">
          <div className="Acomptefacture pl4">
            <h1 className="f4 lh-copy">Acomptes liés à cette facture</h1>
          </div>
          {/* tableau acompte */}
          <div className="tab">
            <div className="fl pa4 ">
              <div className="overflow-auto">
                <table className="f6  center" cellSpacing="0">
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
              </div>
              <p className="titre">
                Taux de pénalitées de retard applicables :
              </p>
              {/* checkbox */}
              <div className="fl w-60 pt4 tr ml4">
                <div className="fl w-60 ml6">
                  <span className="pr2 ">BCE +10 points</span>
                  <input type="checkbox" name="produitsV" value="produitsV" />
                  <br />
                  <span className="pr2 pl4">BCE +8 points </span>
                  <input type="checkbox" name="servicesF" value="servicesF" />
                </div>
                {/* bouton sauvegarder */}
                <div className="buttonSave ">
                  <span
                    className="f6 link dim br1 ph3 pv2 mt4 mb4 mr6 dib white bg-dark-blue"
                    href="#0"
                  >
                    {" "}
                    Sauvegarder{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Facture;
