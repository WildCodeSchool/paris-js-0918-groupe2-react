import React, { Component } from "react";
import "./formulairecreancier.css";
// import { throws } from "assert";
import axios from "axios";

class Formulairecreancier extends Component {
  state = {
    denomination_sociale: "",
    forme_juridique: "",
    nationalite_societe: "",
    adresse_siege: "",
    code_postal_siege: "0",
    ville_siege: "",
    pays_siege: "",
    ville_rcs: "",
    num_rcs: "",
    num_CCIAA: "",
    num_reg_soc: "",
    num_cod_fisc_tva: "",
    capital_social: "",
    nom: "",
    prenom: "",
    civilite: "M.",
    fonction: "",
    active: true
  };

  handleMyUserInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleCivilite = e => {
    this.setState({
      civilite: e.target.value
    });
  };

  handleSubmit = () => {
    axios
      .post("http://localhost:4848/api/creanciers", this.state)
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <div className="title_créancier pl4">
          <h1 className="titre1">Informations sur les créanciers</h1>
          <h2 className="compagnietitre">
            Compagnie {this.state.denomination_sociale}
          </h2>
        </div>

        {/* Formulaire */}
        <div className="fl w-50">
          <article className="pa4 black-80">
            <form action="submit" method="post" acceptCharset="utf-8">
              <fieldset className="ba b--transparent ph0 mh0 mh2">
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Dénomination sociale
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="denomination_sociale"
                    onChange={this.handleMyUserInputs}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">Forme juridique</label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="forme_juridique"
                    onChange={this.handleMyUserInputs}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Nationalité de la société
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="nationalite_societe"
                    onChange={this.handleMyUserInputs}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Adresse du siège social
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="adresse_siege"
                    onChange={this.handleMyUserInputs}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Code postal du siège social
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="code_postal_siege"
                    onChange={this.handleMyUserInputs}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Ville du siège social
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="ville_siege"
                    onChange={this.handleMyUserInputs}
                  />
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">
                      Pays du siège social
                    </label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="pays_siege"
                      onChange={this.handleMyUserInputs}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">Numéro Reg Soc</label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="num_reg_soc"
                      onChange={this.handleMyUserInputs}
                    />
                  </div>
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">Numéro CCIAA</label>
                    <input
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="num_CCIAA"
                      onChange={this.handleMyUserInputs}
                    />
                  </div>
                </div>
              </fieldset>
            </form>
          </article>
        </div>
        <div className="fl w-50 ">
          <article className="pa4 black-80">
            <fieldset id="submit" className="ba b--transparent ph0 mh0 ">
              <div className="mt3">
                <label className="db fw4 lh-copy f6">
                  Numéro Code Fisc TVA
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  name="num_cod_fisc_tva"
                  onChange={this.handleMyUserInputs}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6">Ville du RCS</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  name="ville_rcs"
                  onChange={this.handleMyUserInputs}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6">Numéro de RCS</label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  name="num_rcs"
                  onChange={this.handleMyUserInputs}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6">
                  Nom du représentant légal
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  name="nom"
                  onChange={this.handleMyUserInputs}
                />
              </div>
              <div className="mt3">
                <label className="db fw4 lh-copy f6">
                  Prénom du représentant légal
                </label>
                <input
                  className="pa2 input-reset ba bg-transparent w-100 measure"
                  name="prenom"
                  onChange={this.handleMyUserInputs}
                />
                <p>Civilité</p>

                {/* <div>
                  <input
                    type="checkbox"
                    checked
                    onClick={() => this.handleCheckbox("Mme")}
                  />
                  <label>Mme.</label>
                </div>
                <div>
                  <input
                    type="checkbox"
                    onClick={() => this.handleCheckbox("Mr")}
                  />
                  <label>M.</label>
                </div> */}

                <select onChange={this.handleCivilite}>
                  <option value="M.">Monsieur</option>
                  <option value="Mme">Madame</option>
                </select>

                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Fonction du représentant légal
                  </label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="fonction"
                    onChange={this.handleMyUserInputs}
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">Capital social</label>
                  <input
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="capital_social"
                    onChange={this.handleMyUserInputs}
                  />
                </div>
              </div>
            </fieldset>
          </article>
          {/* Bouton sauvegarder */}
          <div className="buttonsauvegarder tc pt1">
            <a
              className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
              href="#0"
              onClick={this.handleSubmit}
            >
              Sauvegarder
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulairecreancier;
