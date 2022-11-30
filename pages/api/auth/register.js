import excuteQuery from "../../../config/db.js";

import CryptoJS from 'crypto-js';

export default function handler(req, res) {
  if (req.method === "POST") {
    // Process a POST request
    const result = postSignup(req.body);

    res.status(200).json({ create : result });
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}

const encrypt = (text) => {
    return CryptoJS.AES.encrypt(text, process.env.SECRET).toString();
  };
  

async function postSignup(data) {
  console.log(data);

  // Filter Data from Request
  let userData = {
    firstName: data.firstName,
    lastName: data.lastName,
    userName: data.userName,
    eMail: data.email,
    passwordHash: encrypt(data.password),
    verify: false,
    role: 2,
  };

  // Store Data into Table

    const sql = "INSERT INTO users SET ?";

    const result = await excuteQuery({
        query: sql,
        values: [userData],
    });

    if ( result.length > 0 ) {
        return true;        
    }
}
