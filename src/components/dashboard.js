import React, { Component } from "react";
import Compte from "./compte";
import Creanciers from "./creanciers";
import Debiteurs from "./debiteurs";
import Historique from "./Historique";
import Actions from "./actions";
import Header from "./Header";
import Nav from "./Nav";

class Dashboard extends Component {
  state = {
    activePage: "Compte"
  };

  handlePageChange = activePage => {
    this.setState({
      activePage: activePage
    });
  };

  handleDisplay = () => {
    if (this.state.activePage === "Compte") {
      return <Compte />;
    } else if (this.state.activePage === "Debiteurs") {
      return <Debiteurs />;
    } else if (this.state.activePage === "Creanciers") {
      return <Creanciers />;
    } else if (this.state.activePage === "Actions") {
      return <Actions />;
    } else if (this.state.activePage === "Historique") {
      return <Historique />;
    } else {
      return "Page non existante";
    }
  };

  render() {
    if (this.state.activePage != null) {
      return (
        <div>
          <div className="fl w-20">
            <Nav pageChange={this.handlePageChange} />
          </div>
          <div className="fl w-80">
            <Header />
            {this.handleDisplay()}
          </div>
        </div>
      );
    }
  }
}

export default Dashboard;
