import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

import axios from "axios";
import Cookie from "js-cookie";
import { toast } from "react-toastify";
import { RadioGroup, RadioButton } from "react-radio-buttons";
import Topbar from "../components/Topbar";
export default function PostScreen() {
  const router = useRouter();

  console.log(Cookie.get("emailhabitat"));

  const [post, setUser] = useState({
    image: "",
    nom: "",
    type: "",
    code: "",
    fornisseur: "",
    sscategorie: "",
    epaisseur: "",
    longueur: "",
    nature: "",
    largeur: "",
  });
  console.log(post);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...post,
      [name]: value,
    });
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
  const submitHandler = (e) => {
    e.preventDefault();
    axios.post("/api/postdata", post).then(() => {
      toast.success("Success: Vous avez ajouter Le Produit");
    });
  };
  return (
    <Fragment>
      {Cookie.get("emailhabitat") ? (
        <>
          <Topbar />
          <div className="login">
            <h3>Post Data:</h3>
            <form onSubmit={submitHandler}>
              <div>
                <label>Image Url:</label>
                <input
                  type="text"
                  name="image"
                  placeholder="Image Url Copie..."
                  value={post.image}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Nom:</label>
                <input
                  type="text"
                  name="nom"
                  placeholder="Nom..."
                  value={post.nom}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label>Type(Gloss/High Gloss/Gloss Max):</label>
                <RadioGroup onChange={handleRadio1} horizontal>
                  <RadioButton value="Gloss">Gloos</RadioButton>
                  <RadioButton value="Gloss Max">Gloss Max</RadioButton>
                  <RadioButton value="High Gloss">High Gloos</RadioButton>
                </RadioGroup>
              </div>

              <div>
                <label>Sscategorie:</label>
                <RadioGroup onChange={handleRadio2} horizontal>
                  <RadioButton value="bois">bois</RadioButton>
                  <RadioButton value="unis">unis</RadioButton>
                  <RadioButton value="fantaisies">fantaisies</RadioButton>
                </RadioGroup>
              </div>
              <div>
                <label>Nature:</label>
                <input
                  type="text"
                  value={post.nature}
                  onChange={handleChange}
                  placeholder="Nature (Brillant,Mat,Fr,Os,Wood) ..."
                  name="nature"
                />
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
                <label>Fornisseur:</label>
                <input
                  type="text"
                  value={post.fornisseur}
                  onChange={handleChange}
                  placeholder="Fornisseur ..."
                  name="fornisseur"
                />
              </div>
              <div>
                <label>Epaisseur:</label>
                <input
                  type="text"
                  value={post.epaisseur}
                  onChange={handleChange}
                  placeholder="Epaisseur ..."
                  name="epaisseur"
                />
              </div>
              <div>
                <label>Longueur:</label>
                <input
                  type="text"
                  value={post.longueur}
                  onChange={handleChange}
                  placeholder="Longueur ..."
                  name="longueur"
                />
              </div>
              <div>
                <label>Largeur:</label>
                <input
                  type="text"
                  value={post.largeur}
                  onChange={handleChange}
                  placeholder="Largeur ..."
                  name="largeur"
                />
              </div>
              <button type="submit" className="btn">
                Enregistrer
              </button>
              <p className="parag">
                Et Si Vous Voulez Suprimez{" "}
                <span className="link" onClick={() => router.push("/delete")}>
                  Un Produit
                </span>
              </p>
            </form>
          </div>
        </>
      ) : (
        <li>
          <Link href="/">
            <a>Login!!</a>
          </Link>
        </li>
      )}
    </Fragment>
  );
}
