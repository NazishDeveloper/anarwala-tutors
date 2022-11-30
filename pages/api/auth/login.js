import excuteQuery from "../../../config/db.js";

import CryptoJS from "crypto-js";
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  if (req.method === "POST") {
    postLogin(req.body).then((result) => {
      res.status(200).json({ token : result });
    });

  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}

const decrypt = (data) => {
  var bytes = CryptoJS.AES.decrypt(data, process.env.SECRET);
  var originalText = bytes.toString(CryptoJS.enc.Utf8);

  return originalText;
};

const encrypt = (text) => {
  return CryptoJS.AES.encrypt(text, process.env.SECRET).toString();
};

async function postLogin(data) {
  // Filter Data from Request
  let userData = {
    eMail: data.email,
    passwordHash: data.password,
  };

  // Store Data into Table

  const sql = "SELECT * FROM users WHERE eMail = ? OR userName = ?";

  const result = await excuteQuery({
    query: sql,
    values: [userData.eMail, userData.eMail],
  });

  if (result.length > 0) {
    const password = decrypt(result[0].passwordHash);


    if( password === userData.passwordHash ) {

      const token = jwt.sign({ id: result[0].id, email: result[0].eMail, verify: result[0].verify }, process.env.SECRET, {
        expiresIn: "1h",
      });

      return token;
      }
  }
}
