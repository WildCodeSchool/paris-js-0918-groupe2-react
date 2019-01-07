import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import previous from "./Icones_Arigoni/previous.svg";
import "./Facture.css";
import Axios from "axios";
import Acomptes from "./acompte";
import Avoirs from "./avoirs";
import Formulairefacture from "./formulairefacture";
import Facture from "./Facture";
import Factures from "./Facture";
class EditAction extends Component {
  state = {
    factures: [],
    facturesFiltered: [],
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
    Axios.get("http://localhost:4848/api/factures")
      .then(response => {
        this.setState({
          factures: response.data,
          facturesFiltered: response.data.filter(facture => facture.active)
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="Factureimpayee ml4 mt4">
        <div className="title_créancier">
          <NavLink
            to="/dashboard/actions"
            onClick={() => this.props.pageChangeSub("Actions")}
          >
            <img className="previousbutton" src={previous} alt="previous" />
          </NavLink>
        </div>
        <Factures />
        {/* factures impayées */}
        <div className="fl w-60">
          <div className="StylishForm">
            {/* Formulaire en input */}

            {/* checkbox */}

            <div className="fl w-100">
              {" "}
              <p className="titre">
                Taux de pénalitées de retard applicables :
              </p>
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
            </div>
            <div className="fl w-60 pt4 tr ml4" />
          </div>
        </div>
        <div className="fl w-100">
          <Acomptes />
        </div>
        <div className="fl w-100">
          <Avoirs />
        </div>
      </div>
    );
  }
}

export default EditAction;
