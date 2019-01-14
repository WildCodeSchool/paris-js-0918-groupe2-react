import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import previous from "./Icones_Arigoni/previous.svg";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import "./Facture.css";
import Axios from "axios";
import Acomptes from "./acompte";
import Avoirs from "./avoirs";
// import Factures from "./Facture";

class EditAction extends Component {
  state = {
    isLoaded: false,
    actionFiltered: [],
    facturesFiltered: [],
    acomptesFiltered: [],
    avoirsFiltered: [],
    myReloadCounter: 0,
    num_commande: "",
    num_confirmation_commande: "",
    num_document_transport: "",
    num_facture: "",
    date_facture: "",
    montant_ht: "",
    montant_ttc: "",
    echeance_facture: "",
    taux_applicable: "",
    intérets_capitalises: "",
    active: true
  };

  handleMyUserInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    Axios.get("http://localhost:4848/api/actions")
      .then(response => {
        this.setState({
          actionFiltered: response.data.filter(
            action => action.id === this.props.actionId
          )
        });
      })
      .catch(error => {
        console.log(error);
      });
    Axios.get("http://localhost:4848/api/factures")
      .then(response => {
        this.setState({
          facturesFiltered: response.data
            .filter(facture => facture.active)
            .filter(facture => facture.actionId === this.props.actionId)
        });
      })
      .catch(error => {
        console.log(error);
      });
    const filterByID = item => {
      let length = this.state.facturesFiltered.length;
      for (let i = 0; i < length; i++) {
        if (item.factureId === this.state.facturesFiltered[i].id) {
          return true;
        } else {
          return false;
        }
      }
    };
    Axios.get("http://localhost:4848/api/acomptes")
      .then(response => {
        this.setState({
          acomptesFiltered: response.data
            .filter(acompte => acompte.active)
            .filter(filterByID)
        });
      })
      .catch(error => {
        console.log(error);
      });
    Axios.get("http://localhost:4848/api/avoirs")
      .then(response => {
        this.setState({
          avoirsFiltered: response.data
            .filter(avoir => avoir.active)
            .filter(filterByID),
          isLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const myFactures = this.state.facturesFiltered;
    const myAcomptes = this.state.acomptesFiltered;
    const myAvoirs = this.state.avoirsFiltered;
    if (this.state.isLoaded === true) {
      return (
        <div className="Factureimpayee ml4">
          <div className="fl w-100 tc">
            <p className="f1 mt4 mb4">Centre de contrôle des actions</p>
            <p className="f2 mt3 mb2 lh-title">
              {this.state.actionFiltered[0].nom_action}: {this.props.creancier}{" "}
              vs. {this.props.debiteur}
            </p>
          </div>

          <div className="facture">
            <div className="fl w-60">
              <div className="title_créancier pl4">
                <h2 className="pt2 f4 lh-copy">Liste des factures</h2>
              </div>
            </div>

            {/* tableau */}
            <div className=" tableau fl w-100 pa4 ">
              <div className="overflow-auto">
                <table className="f6 w-100 center" cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th>N° facture </th>
                      <th>Date de facture </th>

                      <th>Montant TTC </th>
                      <th>Echéance facture </th>

                      <th>Modifier</th>
                      <th>Supprimer</th>
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    {myFactures
                      .sort((a, b) => b.id - a.id)
                      .slice(0, 50)
                      .map(facture => {
                        return (
                          <tr
                            className="stripe-dark"
                            key={`${facture.num_facture}`}
                          >
                            <td>{facture.num_facture}</td>
                            <td>{facture.date_facture}</td>

                            <td>{facture.montant_ttc}</td>
                            <td>{facture.echeance_facture}</td>

                            <td>
                              <NavLink to="/dashboard/formFacture">
                                <img
                                  className="icone pointer"
                                  src={modifier}
                                  alt="modifier"
                                  onClick={() =>
                                    this.props.pageChangeSub(
                                      "FormFacture",
                                      `${facture.id}`
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
                                onClick={() => this.handleDelete(facture.id)}
                              />
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>

                <div className="buttonfacture tc pt4">
                  <NavLink
                    to="/dashboard/formFacture"
                    className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                    onClick={() => this.props.pageChangeSub("FormFacture")}
                  >
                    Créer une facture
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
          {/* factures impayées */}
          <div className="fl w-60">
            <div className="StylishForm">
              {/* Formulaire en input */}

              {/* checkbox */}

              <div className="fl w-60 pt4 tr ml4" />
            </div>
          </div>
          <div className="fl w-100">
            {" "}
            <div className="acompte">
              <div className="fl w-60">
                <div className="title_créancier pl4">
                  <h2 className="pt2 f4 lh-copy">Liste des acomptes</h2>
                </div>
              </div>

              {/* tableau */}
              <div className=" tableau fl w-100 pa4 ">
                <div className="overflow-auto">
                  <table className="f6 w-100 center" cellSpacing="0">
                    <thead>
                      <tr className="stripe-dark">
                        <th>N° acompte</th>
                        <th>Date</th>
                        <th>montant HT</th>
                        <th>montant TTC</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                      </tr>
                    </thead>
                    <tbody className="lh-copy">
                      {myAcomptes
                        .sort((a, b) => b.id - a.id)
                        .slice(0, 50)
                        .map(acompte => {
                          return (
                            <tr
                              className="stripe-dark"
                              key={`${acompte.num_acompte}`}
                            >
                              <td>{acompte.num_acompte}</td>
                              <td>{acompte.date_acompte}</td>
                              <td>{acompte.montant_ht}</td>
                              <td>{acompte.montant_ttc}</td>
                              <td>
                                <NavLink to="/dashboard/formAcompte">
                                  <img
                                    className="icone pointer"
                                    src={modifier}
                                    alt="modifier"
                                    onClick={() =>
                                      this.props.pageChangeSub(
                                        "FormAcompte",
                                        `${acompte.id}`
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
                                  onClick={() => this.handleDelete(acompte.id)}
                                />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>

                  <div className="buttonacompte tc pt4">
                    <NavLink
                      to="/dashboard/formAcompte"
                      className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                      onClick={() => this.props.pageChangeSub("FormAcompte")}
                    >
                      Créer un acompte
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fl w-100">
            <div className="avoir">
              <div className="fl w-60">
                <div className="title_créancier pl4">
                  <h2 className="pt2 f4 lh-copy">Liste des avoirs</h2>
                </div>
              </div>

              {/* tableau */}
              <div className=" tableau fl w-100 pa4 ">
                <div className="overflow-auto">
                  <table className="f6 w-100 center" cellSpacing="0">
                    <thead>
                      <tr className="stripe-dark">
                        <th>N° avoir</th>
                        <th>Date</th>
                        <th>montant HT</th>
                        <th>montant TTC</th>
                        <th>Modifier</th>
                        <th>Supprimer</th>
                      </tr>
                    </thead>
                    <tbody className="lh-copy">
                      {myAvoirs
                        .sort((a, b) => b.id - a.id)
                        .slice(0, 10)
                        .map(avoir => {
                          return (
                            <tr
                              className="stripe-dark"
                              key={`${avoir.num_avoir}`}
                            >
                              <td>{avoir.num_avoir}</td>
                              <td>{avoir.date_avoir}</td>
                              <td>{avoir.montant_ht}</td>
                              <td>{avoir.montant_ttc}</td>
                              <td>
                                <NavLink to="/dashboard/formAvoir">
                                  <img
                                    className="icone pointer"
                                    src={modifier}
                                    alt="modifier"
                                    onClick={() =>
                                      this.props.pageChangeSub(
                                        "FormAvoir",
                                        `${avoir.id}`
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
                                  onClick={() => this.handleDelete(avoir.id)}
                                />
                              </td>
                            </tr>
                          );
                        })}
                    </tbody>
                  </table>

                  <div className="buttonavoir tc pt4">
                    <NavLink
                      to="/dashboard/formAvoir"
                      className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                      onClick={() => this.props.pageChangeSub("FormAvoir")}
                    >
                      Créer un avoir
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fl w-100 ml4">
            {" "}
            <h2 className="pt2 f4 lh-copy">
              Taux de pénalitées de retard applicables :
            </h2>
            <span>BCE +10 points</span>
            <input type="checkbox" name="produitsV" value="produitsV" />
            <br />
            <span>BCE +8 points </span>
            <input type="checkbox" name="servicesF" value="servicesF" />
            <div className="buttonSave ">
              <span
                className="f6 link dim br1 ph3 pv2 mt4 mb4 mr6 dib white bg-dark-blue"
                href="#0"
              >
                Sauvegarder
              </span>
            </div>
            <div className="title_créancier">
              <NavLink
                to="/dashboard/actions"
                onClick={() => this.props.pageChangeSub("Actions")}
              >
                <img className="previousbutton" src={previous} alt="previous" />
              </NavLink>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

export default EditAction;
