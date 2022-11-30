import Head from "next/head";

import HeaderComponent from "../components/layout/header";
import FooterComponent from "../components/layout/footer";
import ForgetComponent from "../components/auth/Forget";

export default function Forget() {
  return (
    <>
      <Head>
        <title> HOME - {process.env.NEXT_PUBLIC_APP_NAME} </title>
        <meta
          name="description"
          content={`Home Page of ${process.env.NEXT_PUBLIC_APP_NAME} `}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent />

      <ForgetComponent />

      <FooterComponent />
    </>
  );
}
