import React, { Component } from "react";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import previous from "./Icones_Arigoni/previous.svg";
import { NavLink } from "react-router-dom";
class Formulairecompte extends Component {
  state = {
    data: [],
    titre: "",
    nom: "",
    prenom: "",
    num_rue: "",
    libelle_rue: "",
    code_postal: "",
    ville: "",
    tel: "",
    fax: "",
    mail: "",
    num_TVA: "",
    file: ""
  };

  onFormSubmitSignature = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("signature", this.state.file);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    Axios.post("http://localhost:4848/dashboard/signature", formData, config)
      .then(response => {
        alert("Le fichier a été téléchargé avec succès");
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  };

  onFormSubmitEntete = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("entete", this.state.file);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    Axios.post("http://localhost:4848/dashboard/entete", formData, config)
      .then(response => {
        alert("Le fichier a été téléchargé avec succès");
      })
      .catch(error => {
        console.log(error);
      });
  };

  onChange = e => {
    this.setState({ file: e.target.files[0] });
    // setTimeout(this.onFormSubmitSignature(), 5000);
  };

  reloadNow = () => {
    Axios.get("http://www.localhost:4848/api/cabinet")
      .then(response => {
        this.setState({
          data: response.data[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleChange = id => {
    const myId = id;
    confirmAlert({
      title: "Merci de confirmer",
      message:
        "Voulez-vous vraiment modifier les informations de votre cabinet d'avocat ?",
      buttons: [
        {
          label: "Oui",
          onClick: () =>
            Axios.put(`http://localhost:4848/api/cabinet/${myId}`, this.state)
              .then(response => {
                this.reloadNow(myId);
                alert(`Vos informations ont bien été modifiées.`);
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
  };

  handleMyUserInputs = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  componentDidMount() {
    Axios.get("http://www.localhost:4848/api/cabinet")
      .then(response => {
        this.setState({
          data: response.data[0]
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    const infosCompte = this.state.data;
    return (
      <div>
        <div className="fl w-100 pt3">
          <div className="fl w-60 pl4 enlarge">
            <NavLink
              to="/dashboard/moncompte"
              onClick={() => this.props.pageChangeSub("Compte")}
            >
              <img className="f2" src={previous} alt="previous" />
            </NavLink>
            <h1 className="f2 db lh-copy ">Les informations de mon cabinet</h1>
            <div className="mglft">
              <div className="fl w-40">
                <div className="pt3 div_inputleft">
                  <span className="db pr3 inputleft mtInfo nowrap">Titre:</span>
                  <span className="db pr3 inputleft mtInfo nowrap">Nom:</span>
                  <span className="db pr3 inputleft mtInfo nowrap">
                    Prénom:
                  </span>
                  <span className="db pr3 inputleft mtInfo nowrap">
                    Numéro de rue:
                  </span>
                  <span className="db pr3 inputleft mtInfo nowrap">
                    Libellé de rue:
                  </span>
                  <span className="db pr3 inputleft mtInfo nowrap">
                    Code postal:
                  </span>
                  <span className="db pr3 inputleft mtInfo nowrap">Ville:</span>
                  <span className="db pr3 inputleft mtInfo nowrap">Tel:</span>
                  <span className="db pr3 inputleft mtInfo nowrap">Fax:</span>
                  <span className="db pr3 inputleft mtInfo nowrap">Email:</span>
                  <span className="db pr3 inputleft mtInfo nowrap">
                    Numéro de TVA:
                  </span>
                </div>
              </div>

              {/* Fomulaires avec input */}
              <div className="fl w-60">
                <div className="pt3 pb3">
                  <form action="infos ">
                    <input
                      type="text"
                      name="titre"
                      placeholder="Titre"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                    <input
                      type="text"
                      name="nom"
                      placeholder="Nom"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                    <input
                      type="text"
                      name="prenom"
                      placeholder="Prénom"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                    <input
                      type="text"
                      name="num_rue"
                      placeholder="Numéro de rue"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                    <input
                      type="text"
                      name="libelle_rue"
                      placeholder="Libellé de rue"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                    <input
                      type="text"
                      name="code_postal"
                      placeholder="Code postal"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                    <input
                      type="text"
                      name="ville"
                      placeholder="Ville"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                    <input
                      type="text"
                      name="tel"
                      placeholder="Tel"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                    <input
                      type="text"
                      name="fax"
                      placeholder="Fax"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                    <input
                      type="text"
                      name="mail"
                      placeholder="Email"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                    <input
                      type="text"
                      name="num_TVA"
                      placeholder="Numéro de TVA"
                      className="db mt3"
                      onChange={this.handleMyUserInputs}
                    />
                  </form>
                </div>
              </div>
            </div>

            {/* Bouton sauvegarder */}
            <div className="pt4 sauvegarderbouton">
              <NavLink
                to="/dashboard/moncompte"
                onClick={() => this.props.pageChangeSub("Compte")}
              >
                <a
                  className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue btn-save"
                  href="#0"
                  onClick={() => this.handleChange(infosCompte.id)}
                >
                  Sauvegarder
                </a>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Formulairecompte;
