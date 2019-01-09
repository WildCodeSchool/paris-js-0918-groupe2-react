import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import previous from "./Icones_Arigoni/previous.svg";
import "./Facture.css";
import Axios from "axios";

class Formulairefacture extends Component {
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
      <div>
        <div className="ml4">
          <NavLink
            to="/dashboard/EditAction"
            onClick={() => this.props.pageChangeSub("EditAction")}
          >
            <img className="previousbutton" src={previous} alt="previous" />
          </NavLink>
        </div>
        <div className="fl w-100">
          <h2 className="ml4">Facture</h2>
          <form className="pa4">
            <div className="">
              <div>
                <div className="stripe-dark pa2 b">N° de commande</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="facture"
                  placeholder=""
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className="stripe-dark pa2 b">
                  N° de confirmation de commande
                </div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="facture"
                  placeholder=""
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className="stripe-dark pa2 b">
                  N° document de transport
                </div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="facture"
                  placeholder=""
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className="stripe-dark pa2 b">N° facture</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="facture"
                  placeholder=""
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className="stripe-dark pa2 b">Date facture</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="facture"
                  placeholder=""
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className="stripe-dark pa2 b">
                  Montant HT de la facture
                </div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="facture"
                  placeholder=""
                />
              </div>
            </div>
            <div className="">
              <div>
                <div className="stripe-dark pa2 b">Echeance de la facture</div>
                <input
                  className="white-dark pa1"
                  type="text"
                  name="facture"
                  placeholder=""
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default Formulairefacture;
