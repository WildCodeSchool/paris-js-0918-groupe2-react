import React, { Component } from "react";
import Creanciers from "./creanciers";
// import Debiteurs from "./debiteurs";
// import Formulairecreancier from "./formulairecreancier";
import Header from "./Header";

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
          <Header />
          <Creanciers />
        </div>

        {/* <Debiteurs /> */}
        {/* <Formulairecreancier /> */}
      </div>
    );
  }
}

export default dashboard;
