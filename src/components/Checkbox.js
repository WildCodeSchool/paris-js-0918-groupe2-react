import React, { Component } from "react";

class Checkbox extends Component {
  state = {};
  render() {
    return (
      <div className="">
        <div className="fl w-60 pt4 tr">
          <div className="fl w-60">
            <span className="pr2">Produits vendus</span>
            <input type="checkbox" name="produitsV" value="produitsV" />
            <span className="pr2 pl4">Services fournis</span>
            <input type="checkbox" name="servicesF" value="servicesF" />
          </div>
        </div>
        <br />
        <div className="fl w-40 pt2">
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
        <div className=" fl w-100 tc pt4 mt3 buttonsauvegarder">
          <a
            className="boutoncouleur f6 grow no-underline br-pill pa3 mb2 dib white "
            href="#0"
          >
            Créer une injonction de payer
          </a>
          <a
            className="boutoncouleur ml4 f6 grow no-underline br-pill pa3 mb2 dib white "
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
