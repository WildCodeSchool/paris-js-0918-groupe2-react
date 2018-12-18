import React, { Component } from "react";
import "./actions.css";
import Tabfacture from "./tabfacture";
import Checkbox from "./Checkbox";
import Axios from "axios";
import Autocomplete from "./autocomplete";

class Actions extends Component {
  state = {
    creanciers: [],
    creanciersFiltered: [],
    debiteurs: [],
    debiteursFiltered: [],
    creancierSelected: "",
    debiteurSelected: "",
    creanciersNames: [],
    debiteursNames: []
  };

  componentDidMount() {
    Axios.get("http://localhost:4848/api/creanciers")
      .then(response => {
        this.setState({
          // returns all creanciers
          creanciers: response.data,
          // returns all creanciers whose active status is true
          creanciersFiltered: response.data.filter(
            creancier => creancier.active
          ),
          creanciersNames: response.data
            .filter(creancier => creancier.denomination_sociale !== null)
            .map(creancier => creancier.denomination_sociale)
        });
      })
      .catch(error => {
        console.log(error);
      });
    Axios.get("http://localhost:4848/api/debiteurs")
      .then(response => {
        this.setState({
          // returns all debiteurs
          debiteurs: response.data,
          // returns all debiteurs whose active status is true
          debiteursFiltered: response.data.filter(debiteur => debiteur.active),
          debiteursNames: response.data
            .filter(debiteur => debiteur.denomination_sociale !== null)
            .map(debiteur => debiteur.denomination_sociale)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

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
              {/* <input type="text" placeholder="Entrer le nom d'un creancier" />
               */}
              <Autocomplete suggestions={this.state.creanciersNames} />
            </form>
          </div>
          <div className="fl w-20 ">
            <p className="f2 lh-title">vs</p>
          </div>
          <div className="fl w-40">
            <p className="f3">Sélectionner un débiteur</p>
            <form action="debiteur">
              <Autocomplete suggestions={this.state.debiteursNames} />
            </form>
          </div>
        </div>
        <div className="fl w-100 pt4 tc">
          <div className="fl w-60">
            <span className="tc">
              Gérer les factures
              <input type="checkbox" name="factures" value="factures" />
            </span>
            <span className="tc">
              Gérer les avoirs
              <input type="checkbox" name="avoirs" value="avoirs" />
            </span>
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
        <div className="fl w-100 pa4 ">
          <Tabfacture />
          {/* <Tabavoir /> */}
          <Checkbox />
        </div>
      </div>
    );
  }
}

export default Actions;
