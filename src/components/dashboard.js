import React, { Component } from "react";
/*import creanciers from "./creanciers";*/

import Actions from "./actions";

// import Debiteurs from "./debiteurs";
// import Formulairecreancier from "./formulairecreancier";

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
          <Actions />
        </div>
        {/* <Debiteurs /> */}
        {/* <Formulairecreancier /> */}
      </div>
    );
  }
}

export default Dashboard;
