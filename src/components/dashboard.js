import React, { Component } from "react";
import Creanciers from "./creanciers";
import Header from "./Header";
import Nav from "./Nav";
import Facture from "./Facture";

class dashboard extends Component {
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
          <Facture />
        </div>
        {/* <Debiteurs /> */}
        {/* <Formulairecreancier /> */}
      </div>
    );
  }
}

export default dashboard;
