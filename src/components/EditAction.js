import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import tick from "./Icones_Arigoni/tick.png";
import "./Facture.css";
import "./editaction.css";
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
    intérets_capitalises: "",
    HTouTTCHono: undefined,
    HTHono: false,
    TTCHono: false,
    HTouTTC: undefined,
    HT: false,
    TTC: false,
    huit: false,
    dix: false,
    points: "",
    produits: false,
    services: false,
    honoraires: "0",
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

  handleHTouTTC = (event, typeDeCalcul) => {
    if (
      (typeDeCalcul === "HT" && this.state.HTouTTC === "TTC") ||
      (typeDeCalcul === "TTC" && this.state.HTouTTC === "HT")
    ) {
      alert(
        "Vous pouvez sélectionner uniquement HT ou TTC pour le calcul des intérêts."
      );
      event.stopPropagation();
      event.preventDefault();
    } else {
      if (typeDeCalcul === "HT" && this.state.HT === false) {
        this.setState({
          HTouTTC: "HT",
          HT: true,
          TTC: false
        });
      } else if (typeDeCalcul === "HT" && this.state.HT === true) {
        this.setState({
          HTouTTC: "",
          HT: false,
          TTC: false
        });
      } else if (typeDeCalcul === "TTC" && this.state.TTC === false) {
        this.setState({
          HTouTTC: "TTC",
          HT: false,
          TTC: true
        });
      } else {
        this.setState({
          HTouTTC: "",
          HT: false,
          TTC: false
        });
      }
    }
  };

  handleHTouTTCHono = (event, typeDeCalcul) => {
    if (
      (typeDeCalcul === "HT" && this.state.HTouTTCHono === "TTC") ||
      (typeDeCalcul === "TTC" && this.state.HTouTTCHono === "HT")
    ) {
      alert(
        "Vous pouvez sélectionner uniquement HT ou TTC pour le montant de vos honoraires."
      );
      event.stopPropagation();
      event.preventDefault();
    } else {
      if (typeDeCalcul === "HT" && this.state.HTHono === false) {
        this.setState({
          HTouTTCHono: "HT",
          HTHono: true,
          TTCHono: false
        });
      } else if (typeDeCalcul === "HT" && this.state.HTHono === true) {
        this.setState({
          HTouTTCHono: "",
          HTHono: false,
          TTCHono: false
        });
      } else if (typeDeCalcul === "TTC" && this.state.TTCHono === false) {
        this.setState({
          HTouTTCHono: "TTC",
          HTHono: false,
          TTCHono: true
        });
      } else {
        this.setState({
          HTouTTCHono: "",
          HTHono: false,
          TTCHono: false
        });
      }
    }
  };

  handleType = (event, type) => {
    if (type === "produits" && this.state.produits === false) {
      this.setState({
        type: "produits",
        produits: true
      });
    } else if (type === "produits" && this.state.produits === true) {
      this.setState({
        type: "",
        produits: false
      });
    } else if (type === "services" && this.state.services === false) {
      this.setState({
        type: "services",
        services: true
      });
    } else {
      this.setState({
        type: "",
        services: false
      });
    }
  };

  handlePoints = (event, myPoints) => {
    if (
      (myPoints === "8" && this.state.points === "10") ||
      (myPoints === "10" && this.state.points === "8")
    ) {
      alert(
        "Vous pouvez sélectionner uniquement 8 ou 10 points pour le calcul des intérêts. Sinon, merci d'entrer la valeur manuellement."
      );
      event.stopPropagation();
      event.preventDefault();
    } else {
      if (myPoints === "8" && this.state.huit === false) {
        this.setState({
          points: "8",
          huit: true,
          dix: false
        });
      } else if (myPoints === "8" && this.state.huit === true) {
        this.setState({
          points: "",
          huit: false,
          dix: false
        });
      } else if (myPoints === "10" && this.state.dix === false) {
        this.setState({
          points: "10",
          huit: false,
          dix: true
        });
      } else {
        this.setState({
          points: "",
          huit: false,
          dix: false
        });
      }
    }
  };

  handleDelete = (id, denomination, type) => {
    const typeMessageInitial = whatType => {
      if (whatType === "factures") {
        return `Voulez-vous vraiment supprimer cette facture ?`;
      } else if (whatType === "acomptes") {
        return `Voulez-vous vraiment supprimer cet acompte ?`;
      } else if (whatType === "avoirs") {
        return `Voulez-vous vraiment supprimer cet avoir ?`;
      }
    };

    const typeMessageConfirm = whatType => {
      if (whatType === "factures") {
        return `La facture ${denomination} a bien été supprimée.`;
      } else if (whatType === "acomptes") {
        return `L'acompte ${denomination} a bien été supprimé.`;
      } else if (whatType === "avoirs") {
        return `L'avoir ${denomination} a bien été supprimé.`;
      }
    };

    const myMessageInitial = typeMessageInitial(type);
    const myMessageConfirm = typeMessageConfirm(type);

    confirmAlert({
      title: "Merci de confirmer",
      message: myMessageInitial,
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            Axios.put(`http://localhost:4848/api/${type}/${id}`, {
              active: "false"
            })
              .then(response => {
                alert(myMessageConfirm);
                console.log(response);
                this.setState({
                  isUpdated: false
                });
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
          Merci de sélectionner une facture pour visualiser les acomptes et
          avoirs associés
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
            <div className=" tableau fl w-100 pa4 tc">
              <div className="overflow-auto">
                <table className="f6 w-100 center tc" cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="tc">N° acompte</th>
                      <th className="tc">Date</th>
                      <th className="tc">montant HT</th>
                      <th className="tc">montant TTC</th>
                      <th className="tc">Modifier</th>
                      <th className="tc">Supprimer</th>
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
                                onClick={() =>
                                  this.handleDelete(
                                    acompte.id,
                                    acompte.num_acompte,
                                    "acomptes"
                                  )
                                }
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
              <div className=" tableau fl w-100 pa4 tc">
                <div className="overflow-auto">
                  <table className="f6 w-100 center tc" cellSpacing="0">
                    <thead>
                      <tr className="stripe-dark">
                        <th className="tc">N° avoir</th>
                        <th className="tc">Date</th>
                        <th className="tc">montant HT</th>
                        <th className="tc">montant TTC</th>
                        <th className="tc">Modifier</th>
                        <th className="tc">Supprimer</th>
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
                                  onClick={() =>
                                    this.handleDelete(
                                      avoir.id,
                                      avoir.num_avoir,
                                      "avoirs"
                                    )
                                  }
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

  tick = () => {
    if (this.state.points !== "") {
      return <img className="icone pl2" src={tick} alt="ok" />;
    } else {
      return null;
    }
  };

  tick2 = () => {
    if (this.state.HTouTTC === "HT") {
      return (
        <div>
          <span>Les calculs seront effectués sur les montants HT</span>
          <img className="icone pl2 pt4" src={tick} alt="ok" />
        </div>
      );
    } else if (this.state.HTouTTC === "TTC") {
      return (
        <div>
          <span>Les calculs seront effectués sur les montants TTC</span>
          <img className="icone pl2 pt4" src={tick} alt="ok" />
        </div>
      );
    } else return null;
  };

  tick3 = () => {
    if (this.state.produits === true && this.state.services === true) {
      return (
        <div>
          <span>
            La transaction concerne des produits vendus et des services fournis
          </span>
          <img className="icone pl2 pt4" src={tick} alt="ok" />
        </div>
      );
    } else if (this.state.services === true) {
      return (
        <div>
          <span>La transaction concerne des services fournis</span>
          <img className="icone pl2 pt4" src={tick} alt="ok" />
        </div>
      );
    } else if (this.state.produits === true) {
      return (
        <div>
          <span>La transaction concerne des produits vendus</span>
          <img className="icone pl2 pt4" src={tick} alt="ok" />
        </div>
      );
    } else
      return (
        <p className="pt4">
          La transaction concerne-t-elle des produits vendus, des services
          fournis, ou les deux ?
        </p>
      );
  };

  tick4 = () => {
    if (this.state.HTouTTCHono === "HT") {
      return (
        <div>
          <span>
            Le montant de vos honoraires est de {this.state.honoraires} € HT
          </span>
          <img className="icone pl2 pt4" src={tick} alt="ok" />
        </div>
      );
    } else if (this.state.HTouTTCHono === "TTC") {
      return (
        <div>
          <span>
            Le montant de vos honoraires est de {this.state.honoraires} € TTC
          </span>
          <img className="icone pl2 pt4" src={tick} alt="ok" />
        </div>
      );
    } else return null;
  };

  componentDidUpdate() {
    if (
      this.state.isUpdated === false &&
      this.state.actionFiltered !== undefined
    ) {
      Axios.get("http://localhost:4848/api/factures")
        .then(response => {
          this.setState({
            facturesFiltered: response.data
              .filter(facture => facture.active)
              .filter(facture => facture.actionId === this.props.actionId),
            isUpdated: true
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
            acomptesFiltered: response.data.filter(acompte => acompte.active),
            isUpdated: true
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
            isUpdated: true,
            isLoaded: true
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
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
            <div className=" tableau fl w-100 pa4 tc">
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
                                onClick={() =>
                                  this.handleDelete(
                                    facture.id,
                                    facture.num_facture,
                                    "factures"
                                  )
                                }
                              />
                            </td>
                            <td>
                              {/* <form> */}
                              <input
                                type="checkbox"
                                className="autreInput"
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
          <div className="fl w-100 bt">
            <p className="f2 lh-title tc">Options supplémentaires</p>
            <div className="fl w-50 pa2 tc">
              <p className="f3">Choisir le taux d'intérêt appliqué:</p>
              <div className="pt4">
                <input
                  type="checkbox"
                  name="8points"
                  className="autreInput"
                  onClick={e => this.handlePoints(e, "8")}
                />
                <label for="8points">BCE + 8 points</label>
              </div>
              <div className="pt4">
                <input
                  type="checkbox"
                  name="10points"
                  className="autreInput"
                  onClick={e => this.handlePoints(e, "10")}
                />
                <label for="10points">BCE + 10 points</label>
              </div>
              <div className="pl3 pt4">
                <span className="pr2">
                  Le taux retenu sera de celui de la BCE +
                </span>
                <input
                  type="text"
                  className="autreInput2"
                  name="points"
                  onChange={this.handleMyUserInputs}
                  value={this.state.points}
                />
                <span className="pl2"> points</span>
                {this.tick()}
              </div>
            </div>
            <div className="fl w-50 pa2 tc">
              <p className="f3">Choisir le montant appliqué au calcul:</p>
              <div className="pt4">
                <input
                  type="checkbox"
                  name="ht"
                  className="autreInput"
                  onClick={e => this.handleHTouTTC(e, "HT")}
                />
                <label for="8points">HT</label>
              </div>
              <div className="pt4">
                <input
                  type="checkbox"
                  name="ttc"
                  className="autreInput"
                  onClick={e => this.handleHTouTTC(e, "TTC")}
                />
                <label for="10points">TTC</label>
              </div>
              {this.tick2()}
            </div>
            <div className="fl w-100 pt3">
              <div className="fl w-50 pa2 tc">
                <p className="f3">Choisir le type de transaction concerné:</p>
                <div className="pt4">
                  <input
                    type="checkbox"
                    name="produits"
                    className="autreInput"
                    onClick={e => this.handleType(e, "produits")}
                  />
                  <label for="produits">Produits vendus</label>
                </div>
                <div className="pt4">
                  <input
                    type="checkbox"
                    name="services"
                    className="autreInput"
                    onClick={e => this.handleType(e, "services")}
                  />
                  <label for="services">Services fournis</label>
                </div>
                {this.tick3()}
              </div>
              <div className="fl w-50 pa2 tc">
                <p className="f3">Choisir le montant de mes honoraires:</p>
                <div className="pt4 pl3">
                  <input
                    type="text"
                    name="honoraires"
                    onChange={this.handleMyUserInputs}
                    className="autreInput3"
                  />
                  <label for="honoraires"> Euros.</label>
                </div>
                <div className="dib pt3">
                  <input
                    type="checkbox"
                    name="ht"
                    className="autreInput"
                    onClick={e => this.handleHTouTTCHono(e, "HT")}
                  />
                  <label for="ht">HT</label>
                </div>
                <div className="dib">
                  <input
                    type="checkbox"
                    name="ttc"
                    className="autreInput"
                    onClick={e => this.handleHTouTTCHono(e, "TTC")}
                  />
                  <label for="ttc">TTC</label>
                </div>
                {this.tick4()}
              </div>
            </div>
            <div className="fl w-100 pt4 pb4">
              <p className="f2 lh-title tc bt pt4 ">Génération des documents</p>
              <div className="fl w-third pa2 tc">
                <div className="">
                  <span
                    className="f6 link dim br1 ph3 pv2 mt4 mb4 mr6 dib white bg-dark-blue"
                    href="#0"
                  >
                    Générer mise en demeure
                  </span>
                </div>
              </div>
              <div className="fl w-third pa2 tc">
                <div className="">
                  <span
                    className="f6 link dim br1 ph3 pv2 mt4 mb4 mr6 dib white bg-dark-blue"
                    href="#0"
                  >
                    Générer injonction de payer
                  </span>
                </div>
              </div>
              <div className="fl w-third pa2 tc">
                <div className="">
                  <span
                    className="f6 link dim br1 ph3 pv2 mt4 mb4 mr6 dib white bg-dark-blue"
                    href="#0"
                  >
                    Générer tableau récapitulatif
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

export default EditAction;
