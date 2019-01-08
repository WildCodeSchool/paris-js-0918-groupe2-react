import React from "react";
// import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import download from "./Icones_Arigoni/icone_upload.png";
import Axios from "axios";
import "./Historique.css";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class Historique extends React.Component {
  state = {
    checkboxActive: true,
    actions: [],
    actionsActive: [],
    actionsNotActive: [],
    creanciers: [],
    debiteurs: []
  };

  componentDidMount() {
    Axios.get("http://localhost:4848/api/actions")
      .then(response => {
        this.setState({
          actions: response.data,
          // returns filtered actions
          actionsActive: response.data.filter(action => action.active === true),
          actionsNotActive: response.data.filter(
            action => action.active === false
          )
        });
      })
      .catch(error => {
        console.log(error);
      });
    Axios.get("http://localhost:4848/api/creanciers")
      .then(response => {
        this.setState({
          creanciers: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
    Axios.get("http://localhost:4848/api/debiteurs")
      .then(response => {
        this.setState({
          debiteurs: response.data
        });
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleTabSwitch() {
    return this.state.checkboxActive
      ? this.state.actionsActive
      : this.state.actionsNotActive;
  }

  handleDelete = (id, denomination) => {
    if (this.state.checkboxActive === false) {
      // alert(`L'action ${denomination} est déjà clôturée.`);
      confirmAlert({
        title: "Merci de confirmer",
        message: `L'action ${denomination} est clôturée. Êtes-vous sûr de vouloir la rendre active à nouveau?`,
        buttons: [
          {
            label: "Oui",
            onClick: () =>
              Axios.put(`http://localhost:4848/api/actions/${id}`, {
                active: "true"
              })
                .then(response => {
                  Axios.get("http://localhost:4848/api/actions")
                    .then(response => {
                      this.setState({
                        actions: response.data,
                        // returns filtered actions
                        actionsActive: response.data.filter(
                          action => action.active === true
                        ),
                        actionsNotActive: response.data.filter(
                          action => action.active === false
                        )
                      });
                    })
                    .catch(error => {
                      console.log(error);
                    });
                  alert(`L'action ${denomination} est de nouveau active.`);
                  console.log(response);
                })
                .catch(error => {
                  console.log(error);
                })
          },
          {
            label: "Non"
            // onClick: () => alert("Le créancier n'a pas été supprimé.")
          }
        ]
      });
    } else {
      confirmAlert({
        title: "Merci de confirmer",
        message: `Voulez-vous vraiment clôturer l'action ${denomination}?`,
        buttons: [
          {
            label: "Oui",
            onClick: () =>
              Axios.put(`http://localhost:4848/api/actions/${id}`, {
                active: "false"
              })
                .then(response => {
                  // const myActive = this.state.actionsActive.filter(
                  //   a => a.id !== id
                  // );
                  // this.setState({
                  //   actionsActive: myActive
                  // });
                  Axios.get("http://localhost:4848/api/actions")
                    .then(response => {
                      this.setState({
                        actions: response.data,
                        // returns filtered actions
                        actionsActive: response.data.filter(
                          action => action.active === true
                        ),
                        actionsNotActive: response.data.filter(
                          action => action.active === false
                        )
                      });
                    })
                    .catch(error => {
                      console.log(error);
                    });

                  alert(`L'action ${denomination} a bien été clôturée.`);
                  console.log(response);
                })
                .catch(error => {
                  console.log(error);
                })
          },
          {
            label: "Non"
            // onClick: () => alert("Le créancier n'a pas été supprimé.")
          }
        ]
      });
    }
  };

  handleCheckbox = () => {
    this.setState({
      checkboxActive: !this.state.checkboxActive
    });
  };

  handleCheckboxDisplay = () => {
    return this.state.checkboxActive ? "actions en cours" : "actions clôturées";
  };

  handleCreancier = actionId => {
    const selectedAction = this.state.actions.filter(a => a.id === actionId);
    const myCreancier = this.state.creanciers.filter(
      c => c.id === selectedAction[0].creancierId
    );
    return myCreancier[0].denomination_sociale;
  };

  handleDebiteur = actionId => {
    const selectedAction = this.state.actions.filter(a => a.id === actionId);
    const myDebiteur = this.state.debiteurs.filter(
      c => c.id === selectedAction[0].debiteurId
    );
    return myDebiteur[0].denomination_sociale;
  };

  render() {
    const actionsActive = this.handleTabSwitch();
    if (
      this.state.creanciers[0] !== undefined &&
      this.state.debiteurs[0] !== undefined &&
      this.state.actions[0] !== undefined
    ) {
      return (
        <div>
          <div className="fl w-100">
            <div className="title_débiteur pl4">
              <h1 className="f2 tc lh-copy"> Historique des actions </h1>
            </div>

            <div className="fl w-100 ">
              {/* checkbox */}
              {/* <div className="fl w-100 tc">
              <span className="pr2"> Actions en cours </span>
              <input type="checkbox" name="MED" value="MED" />
              <span className="pr2 pl4"> Actions cloturées </span>
              <input type="checkbox" name="injonction" value="injonction" />
            </div> */}
              <div className="fl w-100 tc">
                <div className="checkbox-wrap custom style-2">
                  <input
                    type="checkbox"
                    id="custom-checkbox-2"
                    onClick={() => this.handleCheckbox()}
                  />
                  <label htmlFor="custom-checkbox-2">
                    Gérer les {this.handleCheckboxDisplay()}
                  </label>
                </div>
              </div>

              <div className="fl w-40" />
            </div>
            {/* tableau */}
            <div className="fl w-100 pt2 pl4 pr4 ">
              <div className="overflow-auto">
                <table className="f6 w-100 center" cellSpacing="0">
                  <thead>
                    <tr className="stripe-dark">
                      <th className="fw6 tl pa3 bg-white tc">Créancier</th>
                      <th className="fw6 tl pa3 bg-white tc">Débiteur</th>
                      <th className="fw6 tl pa3 bg-white tc">
                        Nom de l'action
                      </th>
                      <th className="fw6 tl pa3 bg-white tc">
                        Modifier statut
                      </th>
                      <th className="fw6 tl pa3 bg-white tc">
                        Mise en demeure
                      </th>
                      <th className="fw6 tl pa3 bg-white tc">
                        Injonction de payer
                      </th>
                      <th className="fw6 tl pa3 bg-white tc">Tableau recap</th>
                    </tr>
                  </thead>
                  <tbody className="lh-copy">
                    {actionsActive
                      .sort((a, b) => b.id - a.id)
                      .slice(0, 200)
                      .map(action => {
                        return (
                          <tr className="stripe-dark tc" key={`${action.id}`}>
                            <td>{this.handleCreancier(action.id)}</td>
                            <td>{this.handleDebiteur(action.id)}</td>
                            <td>{action.nom_action}</td>
                            <td>
                              <img
                                className="icone pointer"
                                src={modifier}
                                alt="Modifier le statut de l'action"
                                onClick={() =>
                                  this.handleDelete(
                                    action.id,
                                    action.nom_action
                                  )
                                }
                              />
                            </td>
                            <td>
                              <img
                                className="icone download pointer"
                                src={download}
                                alt="download"
                                // onClick={() =>
                                //   this.props.pageChangeSub(
                                //     "FormDebiteur",
                                //     0,
                                //     `${debiteur.id}`
                                //   )
                                // }
                              />
                            </td>
                            <td>
                              <img
                                className="icone download pointer"
                                src={download}
                                alt="download"
                                // onClick={() =>
                                //   this.handleDelete(
                                //     debiteur.id,
                                //     debiteur.denomination_sociale
                                //   )
                                // }
                              />
                            </td>
                            <td>
                              <img
                                className="icone download pointer"
                                src={download}
                                alt="download"
                                // onClick={() =>
                                //   this.handleDelete(
                                //     debiteur.id,
                                //     debiteur.denomination_sociale
                                //   )
                                // }
                              />
                            </td>
                          </tr>
                        );
                      })}
                    {/* <tr className="stripe-dark">
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">
                      <button className="button">cloturer</button>
                    </td>

                    <td className="pa3">
                      <img
                        className="icone download pointer"
                        src={download}
                        alt="download"
                      />
                    </td>
                  </tr>
                  <tr className="stripe-white">
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>

                    <td className="pa3">
                      <button className="button">cloturer</button>
                    </td>

                    <td className="pa3">
                      <img
                        className="icone download pointer"
                        src={download}
                        alt="download"
                      />
                    </td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>

                    <td className="pa3">
                      <button className="button">cloturer</button>
                    </td>

                    <td className="pa3">
                      <img
                        className="icone download pointer"
                        src={download}
                        alt="download"
                      />
                    </td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>

                    <td className="pa3">
                      <button className="button">cloturer</button>
                    </td>

                    <td className="pa3">
                      <img
                        className="icone download pointer"
                        src={download}
                        alt="download"
                      />
                    </td>
                  </tr>
                  <tr className="stripe-dark">
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>
                    <td className="pa3">xxxxxx</td>

                    <td className="pa3">
                      <button className="button">cloturer</button>
                    </td>

                    <td className="pa3">
                      <img
                        className="icone download pointer"
                        src={download}
                        alt="download"
                      />
                    </td>
                  </tr> */}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    } else return null;
  }
}

export default Historique;
