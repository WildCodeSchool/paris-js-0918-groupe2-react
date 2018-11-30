import React, { Component } from "react";
import "./compte.css";

class Compte extends Component {
  state = {};
  render() {
    return (
      <div className="fl w-100">
        <div className="fl w-60 pt2 pl4">
          <span className="f2 db">Les informations de mon cabinet</span>

          <div className="fl w-40">
            <div className="pt3">
              <span className="db pr3 mtInfo nowrap">Titre:</span>
              <span className="db pr3 mtInfo nowrap">Nom:</span>
              <span className="db pr3 mtInfo nowrap">Prénom:</span>
              <span className="db pr3 mtInfo nowrap">Numéro de rue:</span>
              <span className="db pr3 mtInfo nowrap">Libellé de rue:</span>
              <span className="db pr3 mtInfo nowrap">Code postal:</span>
              <span className="db pr3 mtInfo nowrap">Ville:</span>
              <span className="db pr3 mtInfo nowrap">Tel:</span>
              <span className="db pr3 mtInfo nowrap">Fax:</span>
              <span className="db pr3 mtInfo nowrap">Email:</span>
              <span className="db pr3 mtInfo nowrap">Numéro de TVA:</span>
            </div>
          </div>

          <div className="fl w-60">
            <div className="pt3">
              <form action="infos">
                <input
                  type="text"
                  name="titre"
                  placeholder="Titre"
                  className="db mt2"
                />
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom"
                  className="db mt2"
                />
                <input
                  type="text"
                  name="prenom"
                  placeholder="Prénom"
                  className="db mt2"
                />
                <input
                  type="text"
                  name="numrue"
                  placeholder="Numéro de rue"
                  className="db mt2"
                />
                <input
                  type="text"
                  name="librue"
                  placeholder="Libellé de rue"
                  className="db mt2"
                />
                <input
                  type="text"
                  name="codepostal"
                  placeholder="Code postal"
                  className="db mt2"
                />
                <input
                  type="text"
                  name="ville"
                  placeholder="Ville"
                  className="db mt2"
                />
                <input
                  type="text"
                  name="tel"
                  placeholder="Tel"
                  className="db mt2"
                />
                <input
                  type="text"
                  name="fax"
                  placeholder="Fax"
                  className="db mt2"
                />
                <input
                  type="text"
                  name="email"
                  placeholder="Email"
                  className="db mt2"
                />
                <input
                  type="text"
                  name="numtva"
                  placeholder="Numéro de TVA"
                  className="db mt2"
                />
              </form>
              <div className="pt4 moveSave">
                <a
                  className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                  href="#0"
                >
                  Sauvegarder
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="fl w-40 tc">
          <span className="f1 b">Cabinet Arigoni</span>
        </div>
      </div>
    );
  }
}

export default Compte;
