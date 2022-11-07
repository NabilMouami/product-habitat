import { db } from "./db.js";

export default async  function handler(req, res) {
 
  try {
    db.query(
        "SELECT * FROM produit",
        (err, result) => {
          if (err) {
            console.log(err);
          } else {
            res.status(200).json(result);
          }
        }
      );
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
