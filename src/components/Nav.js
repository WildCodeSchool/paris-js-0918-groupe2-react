import React, { Component } from "react";

class Nav extends React.Component {
  render() {
    return (
      <div>
        <div className="fl w-25 ba-ns vh-100 ">
          <h1 className="tc bb mt3 h3">TABLEAU DE BORD</h1>
          <nav className="">
            <a className="f3 b db tc mt6 no-underline hover-red" href="">
              Mon compte
            </a>
            <a className="f3 b db tc mt6 no-underline hover-red" href="">
              Créanciers
            </a>
            <a className="f3 b db tc mt6 no-underline hover-red" href="">
              Débiteurs
            </a>
            <a className="f3 b db tc mt6 no-underline hover-red" href="">
              Actions
            </a>
            <a className="f3 b db tc mt6 no-underline hover-red" href="">
              Historique
            </a>
          </nav>
        </div>
      </div>
    );
  }
}

export default Nav;
