import React, { Component } from "react";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { NavLink } from "react-router-dom";
import previous from "./Icones_Arigoni/previous.svg";

class Formulaireacompte extends Component {
  state = {
    targetacompte: [],
    acompte: [],
    acompteFiltered: [],
    acompteSearch: "",
    loaded: false,
    num_acompte: "",
    date_acompte: "",
    montant_ht: "",
    montant_ttc: "",
    factureId: "",
    active: true
  };

  handleMyUserInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    confirmAlert({
      title: "Merci de confirmer",
      message: "Voulez-vous vraiment enregistrer cet acompte ?",
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            Axios.post("http://localhost:4848/api/acomptes", this.state)
              .then(response => {
                this.props.pageChangeSub("Acomptes");
                this.props.history.push("/dashboard/acomptes");
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

  handleSubmitChange = () => {
    const id = this.state.targetacompte[0].id;

    confirmAlert({
      title: "Merci de confirmer",
      message:
        "Voulez-vous vraiment modifier les informations de cet acompte ?",
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            Axios.put(`http://localhost:4848/api/acomptes/${id}`, this.state)
              .then(response => {
                this.props.pageChangeSub("Acomptes");
                this.props.history.push("/dashboard/acomptes");
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

  componentDidMount() {
    const acompteId = this.props.acompteId;
    Axios.get("http://localhost:4848/api/acomptes")
      .then(response => {
        this.setState({
          // returns target acompte
          targetacompte: response.data.filter(
            acompte => acompte.id === parseInt(acompteId)
          ),
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.props.acompteId === undefined) {
      return (
        <div>
          <p>Nouvel acompte</p>
          {/* Formulaire */}
          <div className="fl w-100">
            <article className="pa4 black-80">
              <form action="submit" method="post" acceptCharset="utf-8">
                <fieldset className="ba b--transparent ph0 mh0 mh2">
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">N° acompte</label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="num_acompte"
                      onChange={this.handleMyUserInputs}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">Date acompte</label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="date_acompte"
                      onChange={this.handleMyUserInputs}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">Montant HT</label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="montant_ht"
                      onChange={this.handleMyUserInputs}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">Montant TTC</label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="montant_ttc"
                      onChange={this.handleMyUserInputs}
                    />
                  </div>
                </fieldset>
              </form>
            </article>

            {/* Bouton sauvegarder */}
            <div className="buttonsauvegarder tc pt1">
              <a
                className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                href="#0"
                onClick={this.handleSubmitChange}
              >
                Sauvegarder
              </a>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default Formulaireacompte;
