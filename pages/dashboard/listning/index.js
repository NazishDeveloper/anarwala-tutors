// listning/index.js

import Head from "next/head";

export default function ListningIndex({ userData }) {
  return (
    <>
      <Head >
        <title> | Dashboard</title>
      </Head>
      
    </>
  );
}


export async function getServerSideProps(context) {
  const token = context.req.cookies["OurSiteJWT"];

  const decode = await jwtVerify(token, new TextEncoder().encode(process.env.SECRET));

  const res = await fetch(`${process.env.BASE_URL}/api/profile`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email: decode.payload.email }),
  });
  const data = await res.json();

  let userData = {
    firstName : data.firstName,
    lastName : data.lastName,
    profilePic : data.profilePic,
    userName : data.userName,
    eMail : data.eMail,
  }

  if(data.role == 0) {
    userData.role = "Admin"; 
  } else if(data.role == 1) {
    userData.role = "Teacher";
  } else if(data.role == 2) {
    userData.role = "Student";
  }


  return {
    props: {
      userData : userData
    },
  };
}