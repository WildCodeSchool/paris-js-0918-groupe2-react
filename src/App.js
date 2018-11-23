import React, { Component } from "react";
import "./App.css";
import Creanciers from "./components/creanciers";
import Debiteurs from "./components/debiteurs";
import Formulairecreancier from "./components/formulairecreancier";
import Nav from "./components/Nav";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Creanciers /> */}
        {/* <Debiteurs /> */}
        {/* <Formulairecreancier /> */}
        <Nav />
      </div>
    );
  }
}

export default App;
