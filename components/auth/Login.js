// Login component

import Link from "next/link";

import { MdClose } from "react-icons/md";

import { useState, useEffect } from "react";
import { Router, useRouter } from "next/router";

import { useSession, signIn, signOut } from "next-auth/react"
import jwt from "jsonwebtoken";

export default function LoginComponent() {
  const [formData, setformData] = useState({});
  const [error, setError] = useState("");

  const router = useRouter();

  const handleChange = (e) => {
    e.preventDefault();
    setformData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const onClick = (e) => {
    e.preventDefault();
    console.log(formData);

    // Validate Input Field

    if (formData === {}) {
      setError("Please Fill The Form");
    } else if (!formData.email) {
      setError("User Name or Email is required");
    } else if (!formData.password) {
      setError("Password is required");
    } else {
      setError("");

      document.querySelector(".alert").style.display = "none";

      handleSubmit(e);
    }

    if (error.length > 0) {
      document.querySelector(".alert").style.display = "block";
    } else if (error.length === 0) {
      document.querySelector(".alert").style.display = "none";
    }
  };

  function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

 
  let secretKey = process.env.SECRET || "ANARWALAKASCRET";

  const handleSubmit = (e) => {
    e.preventDefault();

    const res = fetch("/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    res.then((res) => {
      if (res.status === 200) {
        res.json().then((data) => {
          console.log("Line 36");
          console.log(data.token);

          let tokenData = jwt.verify(data.token, secretKey);

          console.log("Verify Login <<<<<");
          console.log(tokenData.verify);
          if (tokenData.verify == 0) {
            router.push("/verify");
          } else if (tokenData.verify == 1) {
            setCookie("OurSiteJWT", data.token, 1);
            router.push("/dashboard");
          }
        });
      } else {
        res.json().then((data) => {
          console.log(data);
          setError(data.message);
          document.querySelector(".alert").style.display = "block";
        });
      }
    });
  };

  const { data: session } = useSession()

  if(session) {
    router.push("/dashboard");
  }
  return (
    <section id="login">
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <Alert message={error} />

        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">

            <div className="border-buttom-5 mb-5 max-w-auto mx-auto">
          <button 
            className=""
            onClick={() => signIn()}> Login with Google </button> 
            </div>

            <div className="max-w-md mx-auto">
              <div> 
                <h1 className="text-2xl font-semibold">
                  Login at ANARWALA TUTORS
                </h1>
              </div>
              <div className="divide-gray-200">
                <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="email"
                      name="email"
                      type="text"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Email address"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      User Name or Email Address
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      autoComplete="off"
                      id="password"
                      name="password"
                      type="password"
                      className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                      placeholder="Password"
                      onChange={handleChange}
                    />
                    <label
                      htmlFor="password"
                      className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <button
                      className="bg-blue-500 text-white rounded-md px-2 py-1"
                      onClick={onClick}
                    >
                      Submit
                    </button>
                  </div>
                </div>

                <Link href={"/register"} className="text-base sm:text-lg">
                  {" "}
                  {`Don't Have Account ?`}{" "}
                </Link>
                <br />
                <Link href={"/forget"} className="text-base sm:text-lg">
                  {" "}
                  Forget Password ?{" "}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Alert({ message }) {
  return (
    <section id="alertBox">
      <div
        className="alert hidden absolute z-10 w-auto top-15 right-2 bg-red-200 rounded-lg py-5 px-6 mb-3 text-base text-red-700 items-center alert-dismissible"
        role="alert"
      >
        <span className=""> {message} </span>

        <button
          onClick={() => {
            document.querySelector(".alert").style.display = "none";
          }}
          type="button"
          className="btn-close animate-bounce box-content w-4 h-4 p-1 ml-5 text-yellow-900 border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-yellow-900 hover:opacity-75 hover:no-underline"
          data-bs-dismiss="alert"
          aria-label="Close"
        >
          <MdClose />
        </button>
      </div>
    </section>
  );
}
