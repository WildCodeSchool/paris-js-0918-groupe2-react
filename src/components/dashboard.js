import React, { Component } from "react";
import Compte from "./compte";
import Creanciers from "./creanciers";
import Debiteurs from "./debiteurs";
import Historique from "./Historique";
import Actions from "./actions";
import Header from "./Header";
import Nav from "./Nav";
import Acomptes from "./Acomptes"

class Dashboard extends Component {
  state = {
    activePage: "moncompte"
  };

  handlePageChange = activePage => {
    this.setState({
      activePage: activePage
    });
  };

  render() {
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
    } else if (this.state.activePage === "factures") {
      return (
        <div>
          <div className="fl w-20">
            <Nav pageChange={this.handlePageChange} />
          </div>
          <div className="fl w-80">
            <Header />
            <Acomptes />
          </div>
        </div>
      );
    } else if (this.state.activePage === "404") {
      return (
        <div>
          <div className="fl w-20">Ceci est une erreur ! Aaaah !</div>
        </div>
      );
    } else return null;
  }
}

export default Dashboard;
