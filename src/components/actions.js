import React, { Component } from "react";
import "./actions.css";
// import Tabfacture from "./tabfacture";
// import Tabavoir from "./tabavoir";
import Axios from "axios";
import Autocomplete from "./autocomplete";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
// import { NavLink } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { NavLink } from "react-router-dom";
// import { throws } from "assert";

class Actions extends Component {
  state = {
    creanciers: [],
    creanciersFiltered: [],
    debiteurs: [],
    debiteursFiltered: [],
    idCreancierSelected: 0,
    idDebiteurSelected: 0,
    creanciersNames: [],
    debiteursNames: [],
    checkboxFacture: true,
    checkboxProduits: false,
    checkboxServices: false,
    honoraires: "",
    isLoaded: false,
    nomCreancierSelected: "",
    nomDebiteurSelected: "",
    actions: [],
    actionsFiltered: []
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

  componentDidUpdate() {
    if (
      this.state.idCreancierSelected !== 0 &&
      this.state.idDebiteurSelected !== 0 &&
      this.state.isLoaded === false
    ) {
      Axios.get("http://localhost:4848/api/actions")
        .then(response => {
          this.setState({
            // returns all actions
            // actions: response.data,
            // returns filtered actions
            actionsFiltered: response.data.filter(
              action =>
                action.creancierId === this.state.idCreancierSelected &&
                action.debiteurId === this.state.idDebiteurSelected &&
                action.active === true
            ),
            isLoaded: true
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }

  // handleTabSwitch() {
  //   return this.state.checkboxFacture ? (
  //     <Tabfacture pageChangeSub={this.props.pageChangeSub} />
  //   ) : (
  //     <Tabavoir pageChangeSub={this.props.pageChangeSub} />
  //   );
  // }

  // handleCheckbox() {
  //   this.setState({
  //     checkboxFacture: !this.state.checkboxFacture
  //   });
  // }

  // handleCheckboxDisplay() {
  //   return this.state.checkboxFacture ? "factures" : "avoirs";
  // }

  // handleProduits() {
  //   this.setState({
  //     checkboxProduits: !this.state.checkboxProduits
  //   });
  // }

  // handleServices() {
  //   this.setState({
  //     checkboxServices: !this.state.checkboxServices
  //   });
  // }

  // handleHonoraires = e => {
  //   this.setState({
  //     honoraires: e.target.value
  //   });
  // };

  handleNomAction = e => {
    this.setState({
      nomNouvelleAction: e.target.value
    });
  };

  handleSubmit = () => {
    const nom_action = this.state.nomNouvelleAction;
    const creancierId = this.state.idCreancierSelected;
    const debiteurId = this.state.idDebiteurSelected;
    confirmAlert({
      title: "Merci de confirmer",
      message: `Voulez-vous vraiment créer une action nommée ${
        this.state.nomNouvelleAction
      } ?`,
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            Axios.post("http://localhost:4848/api/actions", {
              nom_action,
              creancierId,
              debiteurId
            })
              .then(response => {
                this.props.pageChangeSub("EditAction");
                this.props.history.push("/dashboard/EditAction");
                console.log(response);
              })
              .catch(error => {
                console.log(error);
              })
        },
        {
          label: "Non"
        }
      ]
    });
  };

  handleNameCreancier = name => {
    let myCreancier = this.state.creanciersFiltered.filter(c =>
      c.denomination_sociale.includes(name)
    );
    if (myCreancier[0].id !== undefined) {
      this.setState({
        idCreancierSelected: myCreancier[0].id,
        nomCreancierSelected: myCreancier[0].denomination_sociale,
        isLoaded: false
      });
    }
  };

  handleNameDebiteur = name => {
    let myDebiteur = this.state.debiteursFiltered.filter(d =>
      d.denomination_sociale.includes(name)
    );
    if (myDebiteur[0].id !== undefined) {
      this.setState({
        idDebiteurSelected: myDebiteur[0].id,
        nomDebiteurSelected: myDebiteur[0].denomination_sociale,
        isLoaded: false
      });
    }
  };

  render() {
    if (this.state.isLoaded === false) {
      return (
        <div className="fl w-100">
          <div className="fl w-100 tc">
            <h1 className="f2">Actions</h1>
          </div>
          <div className="fl w-100 tc">
            <div className="fl w-40">
              <p className="f3">Sélectionner un créancier</p>
              <form action="creancier">
                <Autocomplete
                  suggestions={this.state.creanciersNames}
                  name={this.handleNameCreancier}
                />
              </form>
            </div>
            <div className="fl w-20 ">
              <p className="f2 lh-title">vs</p>
            </div>
            <div className="fl w-40">
              <p className="f3">Sélectionner un débiteur</p>
              <form action="debiteur">
                <Autocomplete
                  suggestions={this.state.debiteursNames}
                  name={this.handleNameDebiteur}
                />
              </form>
            </div>
            <div className="fl w-100 tc pt3">
              <p className="f3">
                Pour créer une nouvelle action ou suivre une action en cours,
                veuillez sélectionner un créancier et un débiteur.
              </p>
            </div>
          </div>
        </div>
      );
    } else {
      const myActions = this.state.actionsFiltered;
      return (
        <div className="fl w-100">
          <div className="fl w-100 tc">
            <h1 className="f2">
              {this.state.nomCreancierSelected} vs{" "}
              {this.state.nomDebiteurSelected}
            </h1>
          </div>
          <div className="fl w-100 tc">
            <div className="fl w-40">
              <p className="f3">Sélectionner un créancier</p>
              <form action="creancier">
                <Autocomplete
                  suggestions={this.state.creanciersNames}
                  name={this.handleNameCreancier}
                />
              </form>
            </div>
            <div className="fl w-20 ">
              <p className="f2 lh-title">vs</p>
            </div>
            <div className="fl w-40">
              <p className="f3">Sélectionner un débiteur</p>
              <form action="debiteur">
                <Autocomplete
                  suggestions={this.state.debiteursNames}
                  name={this.handleNameDebiteur}
                />
              </form>
            </div>
          </div>
          <div className=" tableau fl w-100 pa4 ">
            <div className="overflow-auto">
              <table className="f6 w-100 center" cellSpacing="0">
                <thead>
                  <tr className="stripe-dark">
                    <th>Créancier</th>
                    <th>Débiteur</th>
                    <th>Nom de l'action</th>
                    <th>Créée le</th>
                    <th>Sélectionner</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {myActions
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 10)
                    .map(action => {
                      return (
                        <tr className="stripe-dark" key={`${action.id}`}>
                          <td>{this.state.nomCreancierSelected}</td>
                          <td>{this.state.nomDebiteurSelected}</td>
                          <td>{action.nom_action}</td>
                          <td>{action.createdAt}</td>
                          <td>
                            <NavLink
                              to="/dashboard/EditAction"
                              className="f6 link dim
                              br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                              onClick={() =>
                                this.props.pageChangeSub("EditAction")
                              }
                            >
                              <img
                                className="icone pointer"
                                src={modifier}
                                alt="modifier"
                                // onClick={() =>
                                //   this.props.pageChangeSub(
                                //     "FormDebiteur",
                                //     0,
                                //     `${debiteur.id}`
                                //   )
                                // }
                              />
                            </NavLink>
                          </td>
                          <td>
                            <img
                              className="icone pointer"
                              src={supprimer}
                              alt="supprimer"
                              // onClick={() =>
                              //   this.handleDelete(
                              //     debiteur.id,
                              //     debiteur.denomination_sociale
                              //   )
                              // }
                            />
                          </td>
                        </tr>
                      );
                    })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="fl w-100 tc">
            <div className="dib pt3">
              <input
                type="text"
                className=""
                placeholder="Nom de la nouvelle action"
                onChange={this.handleNomAction}
              />
            </div>
            <div className="dib pt3 pl2">
              <div className="buttonsauvegarder tc pt1">
                <a
                  className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                  href="#0"
                  onClick={this.handleSubmit}
                >
                  Créer une nouvelle action
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Actions;
