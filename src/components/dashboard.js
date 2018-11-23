import React, { Component } from "react";
import Creanciers from "./creanciers";
// import Debiteurs from "./debiteurs";
// import Formulairecreancier from "./formulairecreancier";
import Nav from "./Nav";

class dashboard extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="fl w-20">
          <Nav />
        </div>
        <div className="fl w-80">
          <div className="navPlaceholder" />
          <Creanciers />
        </div>

        {/* <Debiteurs /> */}
        {/* <Formulairecreancier /> */}
      </div>
    );
  }
}

export default dashboard;
