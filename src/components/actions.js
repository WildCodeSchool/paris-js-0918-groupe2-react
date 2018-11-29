import React, { Component } from "react";
import "./actions.css";

class Actions extends Component {
  state = {};
  render() {
    return (
      <div className="fl w-100">
        <div className="fl w-100 tc">
          <h1 className="f2">Actions</h1>
        </div>
        <div className="fl w-100 tc">
          <div className="fl w-40">
            <p className="f3">Sélectionner un créancier</p>
            <form action="creancier">
              <input
                type="text"
                name="creancierlookup"
                placeholder="Tapper le nom du créancier"
              />
            </form>
          </div>
          <div className="fl w-20 ">
            <p className="f2 lh-title">vs</p>
          </div>
          <div className="fl w-40">
            <p className="f3">Sélectionner un débiteur</p>
            <form action="debiteur">
              <input
                type="text"
                name="debiteurlookup"
                placeholder="Tapper le nom du débiteur"
              />
            </form>
          </div>
        </div>
        <div className="fl w-100 pt4">
          <div className="fl w-60 tc">
            <span className="pr2">Gérer les factures</span>
            <input type="checkbox" name="factures" value="factures" />
            <span className="pr2 pl4">Gérer les avoirs</span>
            <input type="checkbox" name="avoirs" value="avoirs" />
          </div>
          <div className="fl w-40">
            <form action="facture">
              <input
                type="text"
                name="facturelookup"
                placeholder="Chercher une facture"
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Actions;
