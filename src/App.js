import React, { Component } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import dashboard from "./components/dashboard";
import Login from "./components/LoginPage";
import creanciers from "./components/creanciers";
import debiteurs from "./components/debiteurs";
import actions from "./components/actions";
import Historique from "./components/Historique";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={dashboard} />
        <Route exact path="/creanciers" component={creanciers} />
        <Route exact path="/debiteurs" component={debiteurs} />
        <Route exact path="/actions" component={actions} />
        <Route exact path="/historique" component={Historique} />
      </Switch>
    );
  }
}

export default App;
