import React, { Component } from "react";
import "./formulairecreancier.css";

class Formulairedebiteur extends Component {
  state = {};
  render() {
    return (
      <div>
        <div className="fl w-100">
          <div className="title_créancier pl4">
            <h1 className="f2 lh-copy">Informations sur les débiteurs</h1>
            <h2 className="compagnietitre pt2 f2 lh-copy">Compagnie XYZ</h2>
          </div>
        </div>
        {/* Formulaire */}
        <div className="fl w-50">
          <article className="pa4 black-80">
            <form action="submit" method="get" acceptCharset="utf-8">
              <fieldset className="ba b--transparent ph0 mh0 mh7">
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="email-address">
                    Dénomination sociale
                  </label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="email-address">
                    Forme juridique
                  </label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="password">
                    Nationalité de la société
                  </label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="password">
                    Adresse du siège social
                  </label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="password">
                    Code postal du siège social
                  </label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="password">
                    Ville du siège social
                  </label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">
                      Pays du siège social
                    </label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                  </div>
                </div>
              </fieldset>
            </form>
          </article>
        </div>

        <div className="fl w-50 ">
          <article className="pa4 black-80">
            <form action="submit" method="get" acceptCharset="utf-8">
              <fieldset id="submit" className="ba b--transparent ph0 mh0 ">
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="email-address">
                    Ville du RCS
                  </label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="email-address">
                    Pays du RCS
                  </label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="password">
                    Nom du représentant légal
                  </label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                </div>
                <div className="mt3">
                  <label className="db fw4 lh-copy f6" htmlFor="password">
                    Prénom du représentant légal
                  </label>
                  <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                  <p>Civilité</p>
                  {/* checkbox */}
                  <div>
                    <input type="checkbox" name="scales" />
                    <label htmlFor="scales">Mme.</label>
                  </div>

                  <div>
                    <input type="checkbox" name="horns" />
                    <label htmlFor="horns">M.</label>
                  </div>
                  {/* Input */}
                  <div className="mt3">
                    <label className="db fw4 lh-copy f6" htmlFor="password">
                      Fonction du représentant légal
                    </label>
                    <input className="pa2 input-reset ba bg-transparent w-100 measure" />
                  </div>
                </div>
              </fieldset>
            </form>
          </article>
          {/* Bouton */}
          <div className="buttonsauvegarder tc pt4">
            <a
              className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue "
              href="#0"
            >
              Sauvegarder
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulairedebiteur;
