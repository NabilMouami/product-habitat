import { db } from "./db.js";

export default async  function handler(req, res) {
    if (req.method !== 'POST') {
        return;
      }
 
  try {
    const { image,nom, type,code,fornisseur,sscategorie,epaisseur,longueur,largeur,nature} = req.body;
    db.query(
        "INSERT INTO produit (url, type,code,nom,sscategorie,epaisseur,longueur,largeur,fornisseur,nature) VALUES (?,?,?,?,?,?,?,?,?,?)",
        [image, type,code,nom,sscategorie,epaisseur,longueur,largeur,fornisseur,nature],
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.send("Values Inserted");

          }
        }
      );
    db.end();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}