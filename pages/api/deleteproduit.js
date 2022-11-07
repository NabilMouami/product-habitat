import { db } from "./db.js";

export default async  function handler(req, res) {
 
  try {
    const { nom, type,code,sscategorie} = req.body;
    console.log(req.body)
    db.query("DELETE FROM produit WHERE nom = ? AND type = ? AND code = ? AND sscategorie = ?", [nom,type,code,sscategorie], (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.send(result);
      }
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
