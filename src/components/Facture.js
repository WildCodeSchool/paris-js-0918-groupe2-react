import React from "react";
import "./Facture.css";

class Facture extends React.Component {
  render() {
    return (
      <div className="StylishForm">
        <form>
          <div className="inputdiv">
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
          <div className="inputdiv">
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
          <div className="inputdiv">
            <div>
              <div className="stripe-dark pa2 b">N° document de transport</div>
              <input
                className="white-dark pa1"
                type="text"
                name="facture"
                placeholder=""
              />
            </div>
          </div>
          <div className="inputdiv">
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
          <div className="inputdiv">
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
          <div className="inputdiv">
            <div>
              <div className="stripe-dark pa2 b">Montant HT de la facture</div>
              <input
                className="white-dark pa1"
                type="text"
                name="facture"
                placeholder=""
              />
            </div>
          </div>
          <div className="inputdiv">
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
    );
  }
}

export default Facture;
