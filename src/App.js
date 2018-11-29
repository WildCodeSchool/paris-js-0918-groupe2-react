import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import Login from "./components/LoginPage";
import { Switch, Route } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    );
  }
}

export default App;
