import React, { Component } from "react";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import "./Acomptes.css";

class Acomptes extends Component {
    state = {};
    render() {
        return (
            <div className="creancier">
                <div className="fl w-60">
                    <div className="title_créancier pl4">
                        <h1 className="f2 lh-copy">Acomptes liés à cette facture</h1>
                    </div>
                </div>
                <div className='tab'>
                    <div className="fl w-100 pa4 ">
                        <div className="overflow-auto">
                            <table className="f6 w-100 center" cellSpacing="0">
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
                        <div className="buttonNewac ">
                                    <span
                                        className="f6 link dim br1 ph3 pv2 mt4 mb4 mr6 dib white bg-dark-blue"
                                        href="#0"
                                    >
                                        {" "}
                                        Creer un nouvel acompte{" "}
                                    </span>
                                    </div>
                                <p className="titre">Taux de pénalitées de retard applicables :</p>
                            
                                <div className="fl w-60 pt4 tr ml4">
                                    <div className="fl w-60 ml6">
                                        <span className="pr2 ">BCE +10 points</span>
                                        <input type="checkbox" name="produitsV" value="produitsV" />
                                        <br />
                                        <span className="pr2 pl4">BCE +8 points  </span>
                                        <input type="checkbox" name="servicesF" value="servicesF" />
                                    </div>
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
              
        );
    }
}

export default Acomptes;