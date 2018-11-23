import React, { Component } from "react";
import "./App.css";
import Dashboard from "./components/dashboard";
import Login from "./components/LoginPage";

class App extends Component {
  render() {
    return (
      <div>
        <Login />
        {/* <Dashboard /> */}
      </div>
    );
  }
}

export default App;
