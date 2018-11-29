import React, { Component } from "react";
import Tabfacture from "./Tabfacture";
import Tabavoir from "./Tabavoir";

class Actions extends Component {
  state = {};
  render() {
    return (
      <div className="fl w-100 pa4 ">
        <Tabfacture />
        <Tabavoir />
      </div>
    );
  }
}

export default Actions;
