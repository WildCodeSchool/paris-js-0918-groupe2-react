import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import previous from "./Icones_Arigoni/previous.svg";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import "./Facture.css";
import Axios from "axios";

class EditAction extends Component {
  state = {
    selectedFacture: undefined,
    isSelected: false,
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

  handleSelectFacture = (event, id) => {
    if (this.state.isSelected === true && this.state.selectedFacture !== id) {
      alert("Vous ne pouvez sélectionner qu'une facture à la fois.");
      event.stopPropagation();
      event.preventDefault();
    } else {
      if (this.state.selectedFacture === undefined) {
        this.setState({
          selectedFacture: id,
          isSelected: !this.state.isSelected
        });
      } else {
        this.setState({
          selectedFacture: undefined,
          isSelected: !this.state.isSelected
        });
      }
    }
  };

  handleAcomptesAvoirs = () => {
    const myAcomptes = this.state.acomptesFiltered.filter(
      ac => ac.factureId === this.state.selectedFacture
    );
    const myAvoirs = this.state.avoirsFiltered.filter(
      av => av.factureId === this.state.selectedFacture
    );
    if (this.state.isSelected !== true) {
      return (
        <p className="f2 lh-title tc">
          Merci de sélectionner une facture pour les voir les acomptes et avoirs
          associés
        </p>
      );
    } else {
      return (
        <div>
          <p className="f2 mt3 mb2 lh-title tc">
            Liste des acomptes et avoirs liés à cette facture
          </p>
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
                                      0,
                                      0,
                                      this.props.actionId,
                                      this.props.creancier,
                                      this.props.debiteur,
                                      this.state.selectedFacture,
                                      acompte.id
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
                    onClick={() =>
                      this.props.pageChangeSub(
                        "FormAcompte",
                        0,
                        0,
                        this.props.actionId,
                        this.props.creancier,
                        this.props.debiteur,
                        this.state.selectedFacture
                      )
                    }
                  >
                    Créer un acompte
                  </NavLink>
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
                                        0,
                                        0,
                                        this.props.actionId,
                                        this.props.creancier,
                                        this.props.debiteur,
                                        this.state.selectedFacture,
                                        0,
                                        avoir.id
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
                      onClick={() =>
                        this.props.pageChangeSub(
                          "FormAvoir",
                          0,
                          0,
                          this.props.actionId,
                          this.props.creancier,
                          this.props.debiteur,
                          this.state.selectedFacture
                        )
                      }
                    >
                      Créer un avoir
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    }
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
    // const filterByID = item => {
    //   let length = this.state.facturesFiltered.length;
    //   for (let i = 0; i < length; i++) {
    //     if (item.factureId === this.state.facturesFiltered[i].id) {
    //       return true;
    //     } else {
    //       return false;
    //     }
    //   }
    // };
    Axios.get("http://localhost:4848/api/acomptes")
      .then(response => {
        this.setState({
          acomptesFiltered: response.data.filter(acompte => acompte.active)
          // .filter(filterByID)
        });
      })
      .catch(error => {
        console.log(error);
      });
    Axios.get("http://localhost:4848/api/avoirs")
      .then(response => {
        this.setState({
          avoirsFiltered: response.data.filter(avoir => avoir.active),
          // .filter(filterByID),
          isLoaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const myFactures = this.state.facturesFiltered;

    if (this.state.isLoaded === true) {
      return (
        <div className="Factureimpayee ml4">
          <div className="fl w-100 tc">
            <p className="f1 mt4 mb4">Centre de gestion des actions</p>
            <p className="f2 mt3 mb2 lh-title">
              {this.state.actionFiltered[0].nom_action}: {this.props.creancier}{" "}
              vs. {this.props.debiteur}
            </p>
          </div>

          <div className="facture">
            <div className="fl w-60">
              <div className="title_créancier pl4">
                <h2 className="pt4 f4 lh-copy">Liste des factures</h2>
              </div>
            </div>

            {/* tableau */}
            <div className=" tableau fl w-100 pa4 ">
              <div className="overflow-auto">
                <table className="f6 w-100 center tc" cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="tc">N° facture </th>
                      <th className="tc">Date de facture </th>

                      <th className="tc">Montant TTC </th>
                      <th className="tc">Echéance facture </th>

                      <th className="tc">Modifier</th>
                      <th className="tc">Supprimer</th>

                      <th className="tc">Sélectionner</th>
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
                                      0,
                                      0,
                                      this.props.actionId,
                                      this.props.creancier,
                                      this.props.debiteur,
                                      facture.id
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
                            <td>
                              {/* <form> */}
                              <input
                                type="checkbox"
                                onClick={e =>
                                  this.handleSelectFacture(e, facture.id)
                                }
                                // name="selectFacture"
                                // value="selectFacture"
                                // id="selectFacture"
                              />
                              {/* <label for="selectFacture" /> */}
                              {/* </form> */}
                            </td>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>

                <div className="buttonfacture tc pt4">
                  <NavLink
                    to="/dashboard/formFacture"
                    className="f6 link dim br1 ph3 pv2 mt2 dib white bg-dark-blue "
                    onClick={() =>
                      this.props.pageChangeSub(
                        "FormFacture",
                        0,
                        0,
                        this.props.actionId,
                        this.props.creancier,
                        this.props.debiteur
                      )
                    }
                  >
                    Créer une facture
                  </NavLink>
                </div>
              </div>
            </div>
          </div>

          <div className="fl w-100">{this.handleAcomptesAvoirs()}</div>
          <div className="fl w-100 ml4 tc">
            {" "}
            <h2 className="f4 lh-copy">
              Taux de pénalitées de retard applicables :
            </h2>
            <span>BCE +10 points</span>
            <input type="checkbox" name="produitsV" value="produitsV" />
            <br />
            <span>BCE +8 points </span>
            <input type="checkbox" name="servicesF" value="servicesF" />
            <div className="buttonSave">
              <span
                className="f6 link dim br1 ph3 pv2 mt4 mb4 mr6 dib white bg-dark-blue"
                href="#0"
              >
                Générer mise en demeure
              </span>
            </div>
            <div className="buttonSave">
              <span
                className="f6 link dim br1 ph3 pv2 mt4 mb4 mr6 dib white bg-dark-blue"
                href="#0"
              >
                Générer injonction de payer
              </span>
            </div>
            <div className="buttonSave">
              <span
                className="f6 link dim br1 ph3 pv2 mt4 mb4 mr6 dib white bg-dark-blue"
                href="#0"
              >
                Générer tableau récapitulatif
              </span>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

export default EditAction;
