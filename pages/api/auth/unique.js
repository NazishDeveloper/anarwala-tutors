import excuteQuery from "../../../config/db.js";

export default async function handler(req, res) {
  // Program to Check E-Mail and User Name is Exist or Not
  if (req.method == "POST") {
    if (req.body.email) {
      const result = await checkEmail(req.body.email);

      res.status(200).json( result );
    } else if (req.body.userName) {
      const result = await checkUsername(req.body.userName);

      res.status(200).json( result );
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end("Method Not Allowed");
  }
}

async function checkEmail(email) {
  const sql = "SELECT * FROM users WHERE eMail = ?";

  const result = await excuteQuery({ query: sql, values: [email] });

  if (result.length > 0) {
    return {exist : true}; 
  } else {
    return {exist : false};  
  }
}

async function checkUsername(userName) {
  const sql = "SELECT * FROM users WHERE userName = ?";

  const result = await excuteQuery({ query: sql, values: [userName] });

  // Check Data exist or Not
  if (result.length > 0) {
    return {exist : true}; 
  } else {
    return {exist : false};  
  }
}
