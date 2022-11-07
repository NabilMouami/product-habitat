import React, { Fragment, useState } from "react";
import Link from 'next/link'
import Swal from "sweetalert2";
import Cookie from "js-cookie";

import {
  RadioGroup,
  RadioButton,
} from "react-radio-buttons";
import axios from "axios";
import Topbar from "../components/Topbar";
const Delete = () => {
  const [post, setUser] = useState({
    nom: "",
    type: "",
    code: "",
    sscategorie: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...post,
      [name]: value,
    });
  };

  const deleteProduit = () => {
    axios.post("/api/deleteproduit", post).then(() => {});
  };
  const handleRadio1 = (value) => {
    setUser({
      ...post,
      type: value,
    });
  };
  const handleRadio2 = (value) => {
    setUser({
      ...post,
      sscategorie: value,
    });
  };
  function popup() {
    Swal.fire({
      title: "Êtes vous sûr?",
      text: "Vous ne pourrez pas revenir en arrière!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Annuler",
      confirmButtonText: "Oui, supprimez " + post.nom,
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduit();
        Swal.fire("Supprimé!", "Le produit a été supprimé.", "success");
      }
    });
  }

  return (
    <Fragment>
    { Cookie.get("emailhabitat")  ?  <>

    <Topbar />
      <div className="login">
        <h3>Supression Produit:</h3>
        <div>
          <label>Nom:</label>
          <input
            type="text"
            name="nom"
            placeholder="Nom ..."
            value={post.nom}
            onChange={handleChange}
          />
        </div>
        <div>
          
            <label>Type(Gloss/High Gloss/Gloss Max):</label>
            <RadioGroup onChange={handleRadio1} horizontal>
              <RadioButton value="Gloss">
                Gloos
              </RadioButton>
              <RadioButton value="Gloss Max">Gloss Max</RadioButton>
              <RadioButton value="High Gloss">High Gloos</RadioButton>
            </RadioGroup>
         
        </div>
        <div>
          <label>Code:</label>
          <input
            type="text"
            value={post.code}
            onChange={handleChange}
            placeholder="Code ..."
            name="code"
          />
        </div>
        <div>
          <label>Sous-Categorie:</label>
          <RadioGroup onChange={handleRadio2} horizontal>
              <RadioButton value="bois">
                bois
              </RadioButton>
              <RadioButton value="unis">unis</RadioButton>
              <RadioButton value="fantaisies">fantaisies</RadioButton>
            </RadioGroup>
        </div>
        <button className="btn" onClick={() => popup()}>
          Suprimez
        </button>
      </div>
      </> : <li>
        <Link href="/">
          <a>Login!!</a>
        </Link>
      </li>
   
    }
    </Fragment>
  );
};

export default Delete;
