import React, { Component } from "react";
import "./App.css";
import Creanciers from "./components/creanciers";
import Debiteurs from "./components/debiteurs";
import Header from "./components/Header";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    );
  }
}

export default App;
