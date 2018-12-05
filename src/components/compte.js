import React, { Component } from "react";
import "./compte.css";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import upload from "./Icones_Arigoni/icone_upload.png";
import signature from "./Icones_Arigoni/signature.png";
// import Facture from "./Facture";

class Compte extends Component {
  state = {};
  render() {
    return (
      <div className="fl w-100 pt3">
        <div className="fl w-60 pl4 enlarge">
          <h1 className="f2 db lh-copy ">Les informations de mon cabinet</h1>
            <div className="mglft">
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

          {/* Fomulaires avec input */}
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
            </div>

              {/* Bouton sauvegarder */}
              <div className="pt4 moveSave">
                <a
                  className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue btn-save"
                  href="#0"
                >
                  Sauvegarder
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ce que le modèle va donner */}
        <div className="fl w-40 pt3 tc stylish-cab">
          <span className="f1 b title-seysey">Cabinet Arigoni</span>
          <div className="ba mt3 w-60-ns nested-copy-line-height tc b--gray firstBorder size-think">
            <p className="b black">
              {" "}
              Maître Arigoni Alexandra <br />
              38 avenue Hoche 75008 Paris <br />
              +33 (0)1 53 75 79 00 <br />
              +33 (0)1 53 75 00 15 <br />
              a.arigoni@arigoni-avocat.com <br />
              TVA FR 34453740755
            </p>
          </div>
          <div className="ba mt3 w-60-ns nested-copy-line-height tc pb2 h4 b--gray otherBorder">
            <p className="b black tl ml3">
              {" "}
              En-tête:{" "}
              <span className="athelas navy f4 ml4">Alexandra Arigoni </span>
              <br /> <span className="athelas navy f4 job"> AVOCAT</span>
            </p>

            <img className="icone pointer ml3" src={upload} alt="upload" />
            <img className="icone pointer ml2" src={modifier} alt="modifier" />
            <img
              className="icone pointer ml2"
              src={supprimer}
              alt="supprimer"
            />
          </div>
          <div className="ba mt3 w-60-ns nested-copy-line-height tc pb2 h4 b--gray otherBorder">
            <p className="b black tl ml3"> Signature: </p>
            <img
              className="w-33-ns ml3 h3 signature"
              src={signature}
              alt="signature"
            />{" "}
            <br />
            <div className="mt3">
              <img className="icone pointer ml3" src={upload} alt="upload" />
              <img
                className="icone pointer ml2"
                src={modifier}
                alt="modifier"
              />
              <img
                className="icone pointer ml2"
                src={supprimer}
                alt="supprimer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Compte;
