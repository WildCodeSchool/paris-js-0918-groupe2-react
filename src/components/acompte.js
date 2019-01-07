import React, { Component } from "react";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import { NavLink } from "react-router-dom";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class Acompte extends Component {
  state = {
    acompte: [],
    acompteFiltered: [],
    myReloadCounter: 0,
    active: true
  };
  reloadNow = id => {
    this.setState(previousState => ({
      acompte: previousState.acompte,
      acompteFiltered: previousState.acompteFiltered.filter(
        acompte => acompte.id !== id
      ),
      myReloadCounter: this.state.myReloadCounter + 1
    }));
    this.forceUpdate();
  };

  handleDelete = (id, denomination) => {
    const myId = id;
    confirmAlert({
      title: "Merci de confirmer",
      message: "Voulez-vous vraiment supprimer cet acompte ?",
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            Axios.put(`http://localhost:4848/api/acompte/${myId}`, {
              active: "false"
            })
              .then(response => {
                this.reloadNow(myId);
                alert(`L'acompte a bien été supprimé.`);
                console.log(response);
              })
              .catch(error => {
                console.log(error);
              })
        },
        {
          label: "Non"
          // onClick: () => alert("L'acompte n'a pas été supprimé.")
        }
      ]
    });
  };

  componentDidMount() {
    Axios.get("http://localhost:4848/api/acomptes")
      .then(response => {
        this.setState({
          // returns all acompte
          acompte: response.data,
          // returns all acompte whose active status is true
          acompteFiltered: response.data.filter(acompte => acompte.active)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    const myacompte = this.state.acompteFiltered;
    const myReloadCounter = this.state.myReloadCounter;
    return (
      <div className="fl w-100">
        <h2 className="pt2 f4 lh-copy">Liste des acomptes</h2>
        <div className="overflow-auto">
          <div className=" tableau fl w-100 pa4 ">
            <div className="overflow-auto">
              <table className="f6 w-100 center" cellSpacing="0">
                <thead>
                  <tr className="stripe-dark">
                    <th>N° acompte</th>
                    <th>Date acompte</th>
                    <th>Montant HT</th>
                    <th>Montant TTC</th>
                    <th>Modifier</th>
                    <th>Supprimer</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {myacompte
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 10)
                    .map(acompte => {
                      return (
                        <tr
                          className="stripe-dark"
                          key={`${myReloadCounter}-${acompte.num_acompte}`}
                        >
                          <td>{acompte.num_acompte}</td>
                          <td>{acompte.date_acompte}</td>
                          <td>{acompte.montant_ht}</td>
                          <td>{acompte.montant_ttc}</td>
                          <td>
                            <NavLink to="/dashboard/FormAcompte">
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
                                // onClick={this.handleModification}
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
                                  acompte.num_acompte
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
                  to="/dashboard/FormAcompte"
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
    );
  }
}

export default Acompte;
