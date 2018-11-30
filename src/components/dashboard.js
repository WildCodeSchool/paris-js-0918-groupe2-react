import React, { Component } from "react";
import Compte from "./compte";
import Creanciers from "./creanciers";
import Debiteurs from "./debiteurs";
import Historique from "./Historique";
import Actions from "./actions";
import Header from "./Header";
import Nav from "./Nav";

class Dashboard extends Component {
  // la page d'origine c'est "moncompte on la défini dans une state"
  state = {
    activePage: "moncompte"
  };

  //on va changer la state pour changer la page active vers la page demandée
  handlePageChange = activePage => {
    this.setState({
      activePage: activePage
    });
  };

  render() {
    //si la page cliquée c'est moncompte alors return du composant nav,header et compte
    if (this.state.activePage === "moncompte") {
      return (
        <div>
          <div className="fl w-20">
            <Nav pageChange={this.handlePageChange} />
          </div>
          <div className="fl w-80">
            <Header />
            <Compte />
            {/* <button onClick={() => this.handlePageChange()}>
              Changer vers historique
            </button>
            <p>{this.props.match.params.composant}</p> */}
          </div>
        </div>
      );
      //si la page cliquée c'est creanciers alors return du composant nav,header et creanciers
    } else if (this.state.activePage === "creanciers") {
      return (
        <div>
          <div className="fl w-20">
            <Nav pageChange={this.handlePageChange} />
          </div>
          <div className="fl w-80">
            <Header />
            <Creanciers />
          </div>
        </div>
      );

      //si la page cliquée c'est debiteurs alors return du composant nav,header et debiteurs
    } else if (this.state.activePage === "debiteurs") {
      return (
        <div>
          <div className="fl w-20">
            <Nav pageChange={this.handlePageChange} />
          </div>
          <div className="fl w-80">
            <Header />
            <Debiteurs />
          </div>
        </div>
      );
      //si la page cliquée c'est action alors return du composant nav,header et action
    } else if (this.state.activePage === "actions") {
      return (
        <div>
          <div className="fl w-20">
            <Nav pageChange={this.handlePageChange} />
          </div>
          <div className="fl w-80">
            <Header />
            <Actions />
          </div>
        </div>
      );
      //si la page cliquée c'est historique alors return du composant nav,header et historique
    } else if (this.state.activePage === "historique") {
      return (
        <div>
          <div className="fl w-20">
            <Nav pageChange={this.handlePageChange} />
          </div>
          <div className="fl w-80">
            <Header />
            <Historique />
          </div>
        </div>
      );
      //si la page cliquée c'est nawak alors return erreur
    } else if (this.state.activePage === "404") {
      return (
        <div>
          <div className="fl w-20">Ceci est une erreur ! Aaaah !</div>
        </div>
      );
    }
    //sinon return rien
    else return null;
  }
}

export default Dashboard;
