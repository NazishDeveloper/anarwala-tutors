import Head from "next/head";

import HeaderComponent from "../components/layout/header";
import RegisterComponent from "../components/auth/Register";
import FooterComponent from "../components/layout/footer";

export default function Register() {
  return (
    <>
      <Head>
        <title> REGISTER - {process.env.NEXT_PUBLIC_APP_NAME} </title>
        <meta
          name="description"
          content={`Register Page of ${process.env.NEXT_PUBLIC_APP_NAME} `}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent />

      <RegisterComponent />

      <FooterComponent />
    </>
  );
}
