import React from "react";
// import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import download from "./Icones_Arigoni/icone_upload.png";
import Axios from "axios";
import "./Historique.css";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
import modifier from "./Icones_Arigoni/icone_modifier.png";
class Historique extends React.Component {
  state = {
    checkboxActive: true,
    actionsActive: [],
    actionsNotActive: [],
    creanciers: [],
    debiteurs: []
  };

  componentDidMount() {
    Axios.get("http://localhost:4848/api/actions")
      .then(response => {
        this.setState({
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

  handleCheckbox() {
    this.setState({
      checkboxActive: !this.state.checkboxActive
    });
  }

  handleCheckboxDisplay() {
    return this.state.checkboxActive ? "actions en cours" : "actions clôturées";
  }

  render() {
    const actionsActive = this.handleTabSwitch();
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
          <div className="fl w-100 pa5 ">
            <div className="overflow-auto">
              <table className="f6 w-100 center" cellSpacing="0">
                <thead>
                  <tr className="stripe-dark">
                    <th className="fw6 tl pa3 bg-white">Nom</th>
                    <th className="fw6 tl pa3 bg-white">Créditeur</th>
                    <th className="fw6 tl pa3 bg-white">Débiteur</th>
                    <th className="fw6 tl pa3 bg-white">Clôturer</th>
                    <th className="fw6 tl pa3 bg-white">Mise en demeure</th>
                    <th className="fw6 tl pa3 bg-white">Injonction de payer</th>
                    <th className="fw6 tl pa3 bg-white">Tableau recap</th>
                  </tr>
                </thead>
                <tbody className="lh-copy">
                  {actionsActive
                    .sort((a, b) => b.id - a.id)
                    .slice(0, 50)
                    .map(action => {
                      return (
                        <tr className="stripe-dark" key={`${action.id}`}>
                          <td>{action.nom_action}</td>
                          <td>xxXXX XX XXx</td>
                          <td>xxx XX XX xxx</td>
                          <td>
                            <img
                              className="icone download pointer"
                              src={supprimer}
                              alt="supprimer"
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
  }
}

export default Historique;
