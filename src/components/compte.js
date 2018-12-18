import React, { Component } from "react";
import "./compte.css";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import supprimer from "./Icones_Arigoni/icone_supprimer.png";
// import upload from "./Icones_Arigoni/icone_upload.png";
// import signature from "./Icones_Arigoni/signature.png";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";

class Compte extends Component {
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
    file: null,
    otherFile: null
  };

  onFormSubmit = e => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("signature", this.state.file);
    formData.append("signature", this.state.otherFile);
    console.log(formData);
    const config = {
      headers: {
        "content-type": "multipart/form-data"
      }
    };
    Axios.post("http://localhost:4848/dashboard/moncompte", formData, config)
      .then(response => {
        alert("The file is successfully uploaded");
      })
      .catch(error => {});
  };
  onChange = e => {
    this.setState({ file: e.target.files[0] });
  };

  onChangeSignature = e => {
    this.setState({ otherFile: e.target.files[0] });
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
      <div className="fl w-100 pt3">
        <div className="fl w-60 pl4 enlarge">
          <h1 className="f2 db lh-copy ">Les informations de mon cabinet</h1>
          <div className="mglft">
            <div className="fl w-40">
              <div className="div_inputleft">
                <span className="db inputleft pr3 nowrap">Titre:</span>
                <span className="db inputleft pr3 nowrap">Nom:</span>
                <span className="db inputleft pr3 nowrap">Prénom:</span>
                <span className="db inputleft pr3 nowrap">Numéro de rue:</span>
                <span className="db inputleft pr3 nowrap">Libellé de rue:</span>
                <span className="db inputleft pr3 nowrap">Code postal:</span>
                <span className="db inputleft pr3 nowrap">Ville:</span>
                <span className="db inputleft pr3 nowrap">Tel:</span>
                <span className="db inputleft pr3 nowrap">Fax:</span>
                <span className="db inputleft pr3 nowrap">Email:</span>
                <span className="db inputleft pr3 nowrap">Numéro de TVA:</span>
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
          <div className="pt4 tc sauvegarderbouton">
            <a
              className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue btn-save"
              href="#0"
              onClick={() => this.handleChange(infosCompte.id)}
            >
              Sauvegarder
            </a>
          </div>
        </div>

        {/* ce que le modèle va donner */}
        <div className="fl w-40 pt3 tc stylish-cab">
          <span className="f1 b title-seysey">Cabinet {infosCompte.nom}</span>
          <div className="ba mt3 w-60-ns nested-copy-line-height tc b--gray firstBorder size-think">
            <p className="b black">
              {infosCompte.titre} {infosCompte.nom} {infosCompte.prenom}
            </p>
            <p className="b black">
              {infosCompte.num_rue} {infosCompte.libelle_rue}{" "}
              {infosCompte.code_postal} {infosCompte.ville}
            </p>
            <p className="b black">Tel: {infosCompte.tel}</p>
            <p className="b black">Fax: {infosCompte.fax}</p>
            <p className="b black">Email: {infosCompte.mail}</p>
            <p className="b black">Nº TVA: {infosCompte.num_TVA}</p>
          </div>
          <div className="ba mt3 w-60-ns nested-copy-line-height tc pb2 h4 b--gray otherBorder">
            <p className="b black tl ml3">
              {" "}
              En-tête:{" "}
              <span className="athelas navy f4 ml2">
                {infosCompte.nom} {infosCompte.prenom}
              </span>
              {/* <br /> <span className="athelas navy f4 job"> AVOCAT</span> */}
            </p>
            <form onSubmit={this.onFormSubmit}>
              <input type="file" name="signature" onChange={this.onChange} />

              <img
                className="icone pointer ml2"
                src={modifier}
                alt="modifier"
              />
              <img
                className="icone pointer ml2 "
                src={supprimer}
                alt="supprimer"
              />

              <p className="b black tl ml3"> Signature: </p>

              <input
                type="file"
                name="signature"
                onChange={this.onChangeSignature}
              />
              <button> upload </button>
            </form>

            <br />
            <div className="mt3">
              <img
                className="icone pointer ml2"
                src={modifier}
                alt="modifier"
              />
              <img
                className="icone pointer ml2"
                src={supprimer}
                alt="supprimer"
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Compte;
