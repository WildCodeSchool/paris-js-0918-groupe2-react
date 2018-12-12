import React, { Component } from "react";
import "./formulairecreancier.css";
import axios from "axios";

class Formulairedebiteur extends Component {
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
    nom: "",
    prenom: "",
    civilite: "",
    fonction: "",
    active: true
  };

  handleSubmit = e => {
    console.log(this.state);
    axios
      .post("http://localhost:4848/api/debiteurs", this.state)
      .then(function(response) {
        // handle success
        console.log(response);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
      });
  };
  handleinput = e => {
    this.setState({ [e.target.name]: e.target.value });
    e.preventDefault();
  };

  render() {
    return (
      <div>
        <div className="title_créancier pl4">
          <h1 className="titre1">Informations sur les débiteurs</h1>
          <h2 className="compagnietitre ">
            Compagnie {this.state.denomination_sociale}
          </h2>
        </div>

        <form acceptCharset="utf-8">
          {/* Formulaire */}
          <div className="fl w-50">
            <article className="pa4 black-80">
              <fieldset className="ml4 ba b--transparent ph0 mh0 mh2 ">
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Dénomination sociale
                  </label>
                  <input
                    onChange={this.handleinput}
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="denomination_sociale"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">Forme juridique</label>
                  <input
                    onChange={this.handleinput}
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="forme_juridique"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Nationalité de la société
                  </label>

                  <input
                    onChange={this.handleinput}
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="nationalite_societe"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Adresse du siège social
                  </label>
                  <input
                    onChange={this.handleinput}
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="adresse_siege"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Code postal du siège social
                  </label>

                  <input
                    onChange={this.handleinput}
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="code_postal_siege"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Ville du siège social
                  </label>
                  <input
                    onChange={this.handleinput}
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="ville_siege"
                  />
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">
                      Pays du siège social
                    </label>
                    <input
                      onChange={this.handleinput}
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="pays_siege"
                    />
                  </div>
                </div>
              </fieldset>
            </article>
          </div>

          <div className="fl w-50 ">
            <article className="pa4 black-80">
              <fieldset id="submit" className="ba b--transparent ph0 mh0 ">
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">Ville du RCS</label>
                  <input
                    onChange={this.handleinput}
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="ville_rcs"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Nom du représentant légal
                  </label>
                  <input
                    onChange={this.handleinput}
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="nom"
                  />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6">
                    Prénom du représentant légal
                  </label>
                  <input
                    onChange={this.handleinput}
                    className="pa2 input-reset ba bg-transparent w-100 measure"
                    name="prenom"
                  />
                  <p>Civilité</p>
                  {/* checkbox */}
                  <select name="civilite" onChange={this.handleinput}>
                    <option value="M."> M. </option>
                    <option value="Mme"> Mme</option>
                  </select>

                  {/* Input */}
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6">
                      Fonction du représentant légal
                    </label>
                    <input
                      onChange={this.handleinput}
                      className="pa2 input-reset ba bg-transparent w-100 measure"
                      name="fonction"
                    />
                  </div>
                </div>
              </fieldset>
              <input
                onClick={this.handleSubmit}
                className=" pt2 f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
                href="#0"
                type="submit"
                value="Soumettre"
              />
            </article>
          </div>
        </form>
      </div>
    );
  }
}

export default Formulairedebiteur;
