import React, { Component } from "react";
import Creanciers from "./creanciers";
<<<<<<< HEAD
// import Debiteurs from "./debiteurs";
// import Formulairecreancier from "./formulairecreancier";
import Header from "./Header";

=======
import Header from "./Header";
>>>>>>> f94787f7b4606a4bca639e13a749eaf1e483b989
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
