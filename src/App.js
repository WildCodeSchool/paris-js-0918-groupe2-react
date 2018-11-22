import React, { Component } from "react";
import "./App.css";
import Creanciers from "./components/creanciers";
import Debiteurs from "./components/debiteurs";
import Formulairecreancier from "./components/formulairecreancier";

class App extends Component {
  render() {
    return (
      <div>
        <Creanciers />
        <Debiteurs />
        <Formulairecreancier />
      </div>
    );
  }
}

export default App;
