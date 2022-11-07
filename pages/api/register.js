import { db } from "./db.js";
import bcrypt from "bcryptjs";

export default async  function handler(req, res) {
    if (req.method !== 'POST') {
        return;
      }
          console.log(req.body.password)
 
    //Hash the password and create a user
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt);

    const q = "INSERT INTO user(`email`,`password`) VALUES (?)";
    const values = [ req.body.email, hash];

    db.query(q, [values], (err, data) => {
      if (err) return res.status(500).json(err);
      return res.status(200).json("User has been created.");
    });

};