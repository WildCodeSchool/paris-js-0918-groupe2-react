import React, { Component } from "react";
import Compte from "./compte";
import Creanciers from "./creanciers";
import Debiteurs from "./debiteurs";
import Historique from "./Historique";
import Actions from "./actions";
import Header from "./Header";
import Nav from "./Nav";
import Formulairecreancier from "./formulairecreancier";
import Formulairedebiteur from "./formulairedebiteur";
import "./dashboard.css";
import Formulairefacture from "./formulairefacture";
import Formulairecompte from "./formulairecompte";
import EditAction from "./EditAction";
import Formulaireacompte from "./formulaireacompte";
import FormulaireAvoirs from "./formulaireavoir";

class Dashboard extends Component {
  // la page d'origine c'est "Compte" on la défini dans une state
  state = {
    activePage: "Compte",
    activeCreancier: "",
    creancierId: undefined,
    activeDebiteur: "",
    debiteurId: undefined,
    actionId: undefined
  };

  //on va changer la state pour changer la page active vers la page demandée
  handlePageChange = (
    activePage,
    creancierId,
    debiteurId,
    actionId,
    creancier,
    debiteur
  ) => {
    this.setState({
      activePage: activePage,
      activeCreancier: creancier,
      creancierId: creancierId,
      activeDebiteur: debiteur,
      debiteurId: debiteurId,
      actionId: actionId
    });
  };

  // Cette fonction sert charger le bon composant selon ce qu'il y a dans le state
  handleDisplay = () => {
    if (this.state.activePage === "Compte") {
      return <Compte pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "formulairecompte") {
      return <Formulairecompte pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "Debiteurs") {
      return <Debiteurs pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "Creanciers") {
      return <Creanciers pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "Actions") {
      return <Actions pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "Historique") {
      return <Historique pageChangeSub={this.handlePageChange} />;
    } else if (this.state.activePage === "FormFacture") {
      return (
        <Formulairefacture
          actionId={this.state.actionId}
          pageChangeSub={this.handlePageChange}
          creancier={this.state.activeCreancier}
          debiteur={this.state.activeDebiteur}
        />
      );
    } else if (this.state.activePage === "FormAcompte") {
      return (
        <Formulaireacompte
          acompteId={this.state.acompteId}
          pageChangeSub={this.handlePageChange}
        />
      );
    } else if (this.state.activePage === "FormAvoir") {
      return (
        <FormulaireAvoirs
          avoirId={this.state.avoirId}
          pageChangeSub={this.handlePageChange}
        />
      );
    } else if (this.state.activePage === "FormCreancier") {
      return (
        <Formulairecreancier
          creancierId={this.state.creancierId}
          pageChangeSub={this.handlePageChange}
        />
      );
    } else if (this.state.activePage === "FormDebiteur") {
      return (
        <Formulairedebiteur
          debiteurId={this.state.debiteurId}
          pageChangeSub={this.handlePageChange}
        />
      );
    } else if (this.state.activePage === "EditAction") {
      return (
        <EditAction
          actionId={this.state.actionId}
          creancier={this.state.activeCreancier}
          debiteur={this.state.activeDebiteur}
          pageChangeSub={this.handlePageChange}
        />
      );
    } else {
      return "Page non existante";
    }
  };

  render() {
    if (this.state.activePage != null) {
      return (
        <div>
          <div className="fl w-20 fixed">
            <Nav pageChange={this.handlePageChange} />
          </div>
          <div className="fl w-80 ml-20">
            <Header />

            {this.handleDisplay()}
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
