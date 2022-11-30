// speaking/index.js
import {jwtVerify} from "jose";

import { DashBoardHeader } from "../../../components/layout/header";
import LeftSidebar from "../../../components/layout/leftSidebar";
import Index from "../../../components/dashboard/speaking";
import { DashBoardFooter } from "../../../components/layout/footer";

export default function MainIndex({ userData }) {
  return (
    <>
        <div className="flex bg-gray-100 min-h-screen">
        <LeftSidebar data={userData} />

        <div className="flex-grow text-gray-800">
          <DashBoardHeader data={userData} />

          <main className="p-6 sm:p-10 space-y-6">
            <Index data={userData} />

            <DashBoardFooter />
          </main>
        </div>
      </div>
    </>
  );
}

export function SpeakIndex({ userData }) {

  if (userData.role == "Admin") {
    return (
      <>
        <h1>Admin Dashboard</h1>
      </>
    );
  } else if (userData.role == "Teacher") {
    return (
      <>
        <h1>Teacher Dashboard</h1>
      </>
    );
  } else if (userData.role == "Student") {
    return (
      <>
        <h1>Student Dashboard</h1>
      </>
    );
  }
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