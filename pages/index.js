import HeaderComponent from "../components/layout/header";
import FooterComponent from "../components/layout/footer";

import Head from "next/head";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [title, setTitle] = useState("LOGIN - " +  process.env.NEXT_PUBLIC_APP_NAME);
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta
          name="description"
          content={`Home Page of ${process.env.NEXT_PUBLIC_APP_NAME} `}
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <HeaderComponent />

      <Link href="/register" className="text-4xl">
        {" "}
        Register{" "}
      </Link>
      <Link href="/login" className="text-4xl">
        {" "}
        Login{" "}
      </Link>
      <Link href="/logout" className="text-4xl">
        {" "}
        Logout{" "}
      </Link>

      <FooterComponent />
    </>
  );
}
