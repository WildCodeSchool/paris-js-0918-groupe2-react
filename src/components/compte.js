import React, { Component } from "react";
import "./compte.css";
import modifier from "./Icones_Arigoni/icone_modifier.png";
import upload from "./Icones_Arigoni/icone_upload.png";
// import signature from "./Icones_Arigoni/signature.png";
import Axios from "axios";
import { confirmAlert } from "react-confirm-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
// import Formulairecompte from "./formulairecompte";
import { NavLink } from "react-router-dom";
import valider from "./Icones_Arigoni/valider.svg";

import EditAction from "./EditAction";

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
        // app.post("/dashboard/entete", upload.single("entete"), (req, res, next) => {
        //   console.log(req.files);
        //   for (f of req.files)
        //     fs.rename(f.path, "public/images/" + f.originalname, function(err) {
        //       if (err) {
        //         res.send("problème durant le déplacement");
        //       } else {
        //         res.send("Fichier uploadé avec succès");
        //       }
        //     });
        // });
        "content-type": "multipart/form-data"
      }
    };
    Axios.post("http://localhost:4848/dashboard/", formData, config)
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
      <div className="fl w-100 pt3">
        <EditAction />
        {/* <div className="fl w-60 pl4 enlarge">
          <h1 className="f2 db lh-copy ">Les informations de mon cabinet</h1>
          <div className="mglft">
            <div className="fl w-40">
              <div className="pt3 div_inputleft">
                <span className="db pr3 inputleft mtInfo nowrap">Titre:</span>
                <span className="db pr3 inputleft mtInfo nowrap">Nom:</span>
                <span className="db pr3 inputleft mtInfo nowrap">Prénom:</span>
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
            </div> */}

        {/* Fomulaires avec input */}
        {/* <div className="fl w-60">
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
          </div> */}

        {/* Bouton sauvegarder */}
        {/* <div className="pt4 sauvegarderbouton">
            <a
              className="f6 link dim br1 ph3 pv2 mt2 mb4 dib white bg-dark-blue btn-save"
              href="#0"
              onClick={() => this.handleChange(infosCompte.id)}
            >
              Sauvegarder
            </a>
          </div>
        </div> */}

        {/* ce que le modèle va donner */}
        <div className="fl w-100 pt3 tc stylish-cab">
          <span className="f1 b title-seysey">Cabinet {infosCompte.nom}</span>
          <div className="ba br4 mt4 w-60-ns nested-copy-line-height tc b--gray firstBorder size-think">
            <p className="b black">
              {infosCompte.titre} {infosCompte.nom} {infosCompte.prenom}
            </p>
            <p className="b black">
              {infosCompte.num_rue} {infosCompte.libelle_rue}
              {infosCompte.code_postal} {infosCompte.ville}
            </p>
            <p className="b black">Tel: {infosCompte.tel}</p>
            <p className="b black">Fax: {infosCompte.fax}</p>
            <p className="b black">Email: {infosCompte.mail}</p>
            <p className="b black">Nº TVA: {infosCompte.num_TVA}</p>
            <NavLink
              to="/dashboard/formulairecompte"
              onClick={() => this.props.pageChangeSub("formulairecompte")}
            >
              <img
                className="icone pointer ml2 mb2"
                src={modifier}
                alt="modifier"
              />
            </NavLink>
          </div>

          <div className="ba br4 mt3 w-60-ns nested-copy-line-height tc pb2 h4 b--gray otherBorder">
            <p className="b black tl ml3">
              {" "}
              En-tête:{" "}
              {/* <span className="athelas navy f4 ml2">Alexandra Arigoni </span>
              <br /> <span className="athelas navy f4 job"> AVOCAT</span> */}
            </p>{" "}
            <img className="icone pointer ml3" src={upload} alt="upload" />{" "}
            <img
              className="valider icone pointer ml3"
              src={valider}
              alt="valider"
            />
          </div>
          <div className="ba br4 mt3 w-60-ns nested-copy-line-height tc pb2 h4 b--gray otherBorder">
            <p className="b black tl ml3"> Signature: </p>
            <form onSubmit={this.onFormSubmitSignature}>
              {/* <img
                className="w-33-ns ml3 h3 signature"
                src="http://localhost:4848/public/images/signature.jpeg"
                alt="signature"
              />{" "}
              <br /> */}
              <div className="mt3">
                <input
                  type="file"
                  name="file"
                  id="file"
                  className="inputfile"
                  onChange={this.onChange}
                />
                <label htmlFor="file">
                  <img
                    className="icone pointer ml3"
                    src={upload}
                    alt="upload"
                  />
                </label>
                <img
                  className="icone pointer ml3"
                  src={valider}
                  alt="valider"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Compte;
