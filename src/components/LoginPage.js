import React from "react";
import "./LoginPage.css";
import contract from "./images/contract.jpg";

class LoginPage extends React.Component {
  render() {
    return (
      <div>
        <img className="contract" src={contract} alt="home page" />
        <div>
          <h1 className="tc mt4 athelas navy f1"> Alexandra ARIGONI </h1>
          <h2 className="tc nt3 athelas navy f2"> AVOCAT </h2>
        </div>

        <div className="fl w-100 mt3 tc">
          <input
            className="w-20 mr3 f6"
            type="text"
            placeholder="Identifiant"
          />
          <input className="w-20 f6" type="text" placeholder="Mot de passe" />
        </div>

        <div className="fl w-60 pa2 nt1" />
        <div className="fl w-40 pa2 nt1">
          <p className="pointer f6"> Mot de passe oublié? </p>
        </div>

        <div className="fl w-100 tc">
          <a
            class="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue"
            href="#0"
          >
            {" "}
            Se connecter{" "}
          </a>
        </div>
      </div>
    );
  }
}

export default LoginPage;
