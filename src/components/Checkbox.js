import React, { Component } from "react";

class Checkbox extends Component {
  state = {};
  render() {
    return (
      <div>
        {/* checkbox pour produits */}
        <div className="fl w-60 pt4 tr">
          <div className="fl w-60">
            <span className="pr2">Produits vendus</span>
            <input type="checkbox" name="produitsV" value="produitsV" />
            <span className="pr2 pl4">Services fournis</span>
            <input type="checkbox" name="servicesF" value="servicesF" />
          </div>
        </div>
        <br />
        {/* Input pour honoraires */}
        <div className="fl w-20 pt2">
          <form action="facture">
            {" "}
            Mes Honoraires:
            <input
              className="ml2"
              type="text"
              name="honos"
              placeholder="Honoraires"
            />
          </form>
        </div>
        {/* Boutons */}
        <div className=" fl w-100 tc pt4 mt3 buttonsauvegarder">
          <a
            className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
            href="#0"
          >
            Créer une injonction de payer
          </a>
          <a
            className="f6 ml4 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
            href="#0"
          >
            Créer une mise en demeure
          </a>
        </div>
      </div>
    );
  }
}

export default Checkbox;
