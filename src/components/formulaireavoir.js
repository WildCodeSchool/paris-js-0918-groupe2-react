import React, { Component } from "react";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { NavLink } from "react-router-dom";
import previous from "./Icones_Arigoni/previous.svg";

class FormulaireAvoirs extends Component {
  state = {
    targetavoirs: [],
    avoirs: [],
    avoirsFiltered: [],
    avoirsSearch: "",
    loaded: false,
    num_avoir: "",
    date_avoir: "",
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
      message: "Voulez-vous vraiment enregistrer cet avoir ?",
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            Axios.post("http://localhost:4848/api/Avoirs", this.state)
              .then(response => {
                this.props.pageChangeSub("Avoirs");
                this.props.history.push("/dashboard/Avoirs");
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
    const id = this.state.targetavoirs[0].id;

    confirmAlert({
      title: "Merci de confirmer",
      message: "Voulez-vous vraiment modifier les informations de cet avoir ?",
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            Axios.put(`http://localhost:4848/api/Avoirs/${id}`, this.state)
              .then(response => {
                this.props.pageChangeSub("Avoirs");
                this.props.history.push("/dashboard/Avoirs");
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
    const AvoirsId = this.props.AvoirsId;
    Axios.get("http://localhost:4848/api/Avoirs")
      .then(response => {
        this.setState({
          // returns target Avoirs
          targetAvoirs: response.data.filter(
            Avoirs => Avoirs.id === parseInt(AvoirsId)
          ),
          loaded: true
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  render() {
    if (this.props.AvoirsId === undefined) {
      return (
        <div>
          <p>Nouvel avoir</p>
          {/* Formulaire */}
          <div className="fl w-100">
            <article className="pa4 black-80">
              <form action="submit" method="post" acceptCharset="utf-8">
                <fieldset className="ba b--transparent ph0 mh0 mh2">
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">Numéro avoir</label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="num_avoir"
                      onChange={this.handleMyUserInputs}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">Date avoir</label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="date_avoir"
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
                onClick={this.handleSubmit}
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

export default FormulaireAvoirs;
