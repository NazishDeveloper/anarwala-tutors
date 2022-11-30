import excuteQuery from "../../config/db.js";

export default async function handler(req, res) {
    if ( req.method == "GET") {
        const result = await getUserProfile(data);

        res.status(200).json({ data : "User Data"});
    } else if ( req.method == "POST") {
        let data;
        if (req.body.email) {
            console.log("E-Mail : " + req.body.email);
            data = await getUserProfile(req.body.email);
        } else {
            console.log("User Name : " + req.body.userName);
            data = await getUserProfile(req.body.userName);            

        }
        res.status(200).json(data);
    } else {
        res.status(200).json({message : "Method Not Allowed"});
    }
}


async function getUserProfile(data) {
    const sql = "SELECT * FROM users WHERE userName = ? OR eMail = ? AND verify = 1";

    const result = await excuteQuery({
        query : sql,
        values : [ data, data]
    })

    if( result.length > 0 ) {
        return result[0];
    } else {
        return { msg : "Record Not Found"}
    }
}