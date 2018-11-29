import React from "react";

class Med extends React.Component {
  render() {
    return (
      <div className="fl w-100">
        <div className="title_débiteur pl4">
          <h1 className="f2 tc lh-copy"> Historique des actions </h1>
        </div>

        <div className="fl w-100 pt4 ">
          <div className="fl w-60 tc">
            <span className="pr2"> Mise en demeure </span>
            <input type="checkbox" name="MED" value="MED" />
            <span className="pr2 pl4"> Injonction de payer </span>
            <input type="checkbox" name="injonction" value="injonction" />
          </div>
          <div className="fl w-40" />
        </div>

        <div className="fl w-100 pa4 ">
          <div className="overflow-auto">
            <table className="f6 w-100 center" cellSpacing="0">
              <thead>
                <tr className="stripe-dark">
                  <th className="fw6 tl pa3 bg-white">xxxxxx</th>
                  <th className="fw6 tl pa3 bg-white">xxxxxx</th>
                  <th className="fw6 tl pa3 bg-white">xxxxxx</th>
                  <th className="fw6 tl pa3 bg-white">xxxxxx</th>
                  <th className="fw6 tl pa3 bg-white">xxxxxx</th>
                </tr>
              </thead>
              <tbody className="lh-copy">
                <tr className="stripe-dark">
                  <td className="pa3">xxxxxx</td>
                  <td className="pa3">xxxxxx</td>
                  <td className="pa3">xxxxxx</td>
                  <td className="pa3"> xxxxxx</td>
                  <td className="pa3"> xxxxxx</td>
                </tr>
              </tbody>
            </table>
            <div className="buttondebiteur tc pt4">
              <a
                className="boutoncouleur f6 grow no-underline br-pill pa3 mb2 dib white "
                href="#0"
              >
                Supprimer le document
              </a>
            </div>
            <div className="buttondebiteur tc pt4">
              <a
                className="boutoncouleur f6 grow no-underline br-pill pa3 mb2 dib white "
                href="#0"
              >
                Télécharger le document
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Med;
