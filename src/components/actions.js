import React, { Component } from "react";
import "./actions.css";
import Tabfacture from "./tabfacture";
import Tabavoir from "./tabavoir";
import Axios from "axios";
import Autocomplete from "./autocomplete";

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
    honoraires: ""
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

  handleTabSwitch() {
    return this.state.checkboxFacture ? (
      <Tabfacture pageChangeSub={this.props.pageChangeSub} />
    ) : (
      <Tabavoir pageChangeSub={this.props.pageChangeSub} />
    );
  }

  handleCheckbox() {
    this.setState({
      checkboxFacture: !this.state.checkboxFacture
    });
  }

  handleCheckboxDisplay() {
    return this.state.checkboxFacture ? "factures" : "avoirs";
  }

  handleProduits() {
    this.setState({
      checkboxProduits: !this.state.checkboxProduits
    });
  }

  handleServices() {
    this.setState({
      checkboxServices: !this.state.checkboxServices
    });
  }

  handleHonoraires = e => {
    this.setState({
      honoraires: e.target.value
    });
  };

  handleName = name => {
    let myCreancier = this.state.creanciersFiltered.filter(c =>
      c.denomination_sociale.includes(name)
    );
    let myDebiteur = this.state.debiteursFiltered.filter(c =>
      c.denomination_sociale.includes(name)
    );

    console.log(myCreancier);
    console.log(myDebiteur);

    if (myCreancier === true) {
      let myCreancier = this.state.creanciersFiltered.filter(c =>
        c.denomination_sociale.includes(name)
      );

      this.setState({
        idCreancierSelected: myCreancier[0].id
      });
    } else if (myDebiteur === true) {
      let myDebiteur = this.state.debiteursFiltered.filter(c =>
        c.denomination_sociale.includes(name)
      );

      this.setState({
        idDebiteurSelected: myDebiteur[0].id
      });
    }
  };

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
              <Autocomplete
                suggestions={this.state.creanciersNames}
                name={this.handleName}
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
                name={this.handleName}
              />
            </form>
          </div>
        </div>

        {/* <div className=" tableau fl w-100 pa4 ">
          <div className="overflow-auto">
            <table className="f6 w-100 center" cellSpacing="0">
              <thead>
                <tr className="stripe-dark">
                  <th>Créancier</th>
                  <th>Débiteur</th>
                  <th>Action</th>
                  <th>Créée le</th>
                  <th>Sélection</th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                {myDebiteurs
                  .sort((a, b) => b.id - a.id)
                  .slice(0, 10)
                  .map(debiteur => {
                    return (
                      <tr
                        className="stripe-dark"
                        key={`${myReloadCounter}-${
                          debiteur.denomination_sociale
                        }`}
                      >
                        <td>{debiteur.denomination_sociale}</td>
                        <td>{debiteur.forme_juridique}</td>
                        <td>{debiteur.pays_siege}</td>
                        <td>
                          <NavLink to="/dashboard/formDebiteur">
                            <img
                              className="icone pointer"
                              src={modifier}
                              alt="modifier"
                              onClick={() =>
                                this.props.pageChangeSub(
                                  "FormDebiteur",
                                  0,
                                  `${debiteur.id}`
                                )
                              }
                            />
                          </NavLink>
                        </td>
                        <td>
                          <img
                            className="icone pointer"
                            src={supprimer}
                            alt="supprimer"
                            onClick={() =>
                              this.handleDelete(
                                debiteur.id,
                                debiteur.denomination_sociale
                              )
                            }
                          />
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Actions;
