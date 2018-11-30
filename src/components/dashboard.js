import React, { Component } from "react";
import Compte from "./compte";
import Header from "./Header";
import Nav from "./Nav";

class Dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="fl w-20">
          <Nav />
        </div>
        <div className="fl w-80">
          <Header />
          {/* <Creanciers /> */}
          {/* <Actions /> */}
          <Compte />
        </div>
        {/* <Debiteurs /> */}
        {/* <Formulairecreancier /> */}
      </div>
    );
  }
}

export default Dashboard;
