import React, { Component } from "react";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import "./debiteurs.css";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class Debiteurs extends Component {
  state = {
    debiteurs: [],
    debiteursFiltered: [],
    myReloadCounter: 0
  };

  reloadNow = id => {
    this.setState(previousState => ({
      debiteurs: previousState.debiteurs,
      debiteursFiltered: previousState.debiteursFiltered.filter(
        debiteur => debiteur.id !== id
      ),
      myReloadCounter: this.state.myReloadCounter + 1
    }));
    this.forceUpdate();
  };

  handleDelete = (id, denomination) => {
    const myId = id;
    confirmAlert({
      title: "Merci de confirmer",
      message: "Voulez-vous vraiment supprimer ce débiteur ?",
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            Axios.put(`http://localhost:4848/api/debiteurs/${myId}`, {
              active: "false"
            })
              .then(response => {
                this.reloadNow(myId);
                alert(`Le débiteur ${denomination} a bien été supprimé.`);
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

  componentDidMount = () => {
    Axios.get("http://localhost:4848/api/debiteurs").then(response => {
      this.setState({
        debiteurs: response.data,
        debiteursFiltered: response.data.filter(res => res.active)
        // res.active forcement true pas besoin de mettre ===true
      });
    });
  };
  render() {
    const mesDebiteurs = this.state.debiteursFiltered;
    const myReloadCounter = this.state.myReloadCounter;
    return (
      <div className="debiteur">
        <div className="fl w-60">
          <div className="pl4">
            <h1 className="f2 lh-copy nowrap">
              Informations sur les débiteurs
            </h1>
            <h2 className="pt2 f4 lh-copy">Liste des débiteurs</h2>
          </div>
        </div>
        {/* Search bar */}
        <div className="fl w-40">
          <div className="wraparigo">
            <div className="searcharigo">
              <input
                type="text"
                className="searchTerm"
                placeholder="trouver un débiteur"
              />
              <button type="submit" className="searchButton">
                <i className="fa fa-search" />
              </button>
            </div>
          </div>
        </div>
        {/* tableau des débiteurs */}
        <div className="tableau fl w-100 pa4 ">
          <div className="overflow-auto">
            <table className="f6 w-100 center" cellSpacing="0">
              <thead>
                <tr className="stripe-dark">
                  <th>Dénomination sociale</th>
                  <th>Forme juridique</th>
                  <th>Pays</th>
                  <th>Modifier</th>
                  <th>Supprimer</th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                {mesDebiteurs.map(deb => {
                  return (
                    <tr
                      key={`${myReloadCounter}-${deb.denomination_sociale}`}
                      className="stripe-dark"
                    >
                      <td>{deb.denomination_sociale}</td>
                      <td>{deb.forme_juridique}</td>
                      <td>{deb.pays_siege}</td>
                      <td>
                        <img
                          className="icone pointer"
                          src={modifier}
                          alt="modifier"
                        />
                      </td>
                      <td>
                        <img
                          className="icone pointer"
                          src={supprimer}
                          alt="supprimer"
                          onClick={() =>
                            this.handleDelete(deb.id, deb.denomination_sociale)
                          }
                        />
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            {/* Bouton  */}
            <div className="buttondebiteur tc pt4">
              <NavLink
                to="/dashboard/formDebiteur"
                className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                onClick={() => this.props.pageChangeSub("FormDebiteur")}
              >
                Créer un débiteur
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Debiteurs;
