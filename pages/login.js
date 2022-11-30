import Head from "next/head";
import { useState, useEffect } from "react";

import HeaderComponent from "../components/layout/header";
import LoginComponent from "../components/auth/Login";
import FooterComponent from "../components/layout/footer";

export default function Login() {

  const [title, setTitle] = useState("LOGIN - " +  process.env.NEXT_PUBLIC_APP_NAME);
  return (
    <>
      <Head>
        <title> {title} </title>
        <meta
          name="description"
          content={`Login Page of ${process.env.NEXT_PUBLIC_APP_NAME} `}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent />

      <LoginComponent />

      <FooterComponent />
    </>
  );
}
