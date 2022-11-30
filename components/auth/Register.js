import Link from "next/link";

import { MdClose } from "react-icons/md";

import { useState } from "react";
import { useRouter } from "next/router";


export default function RegisterComponent() {
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

  function isValidEmail(mail) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(mail);
  }

 function isEmailUnique(e_mail) {
    const res = fetch("/api/auth/unique", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: e_mail }),
    });

    res.then((res) => {
      if ( res.status == 200) {
        res.json().then( (data) => {
          console.log("Line 37")
          console.log(data);
          return data.exist;

        })
      }
    })
  }

  function isUserNameUnique(user_name) {
    let res = fetch("/api/auth/unique", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: user_name }),
    })
    
    res.then((res) => {
      if ( res.status == 200) {
        res.json().then( (data) => {
          console.log("Line 58")
          console.log(data);
          return data.exist;

        })
      }
    })

    // return data.exist;
  }

  const onClick = async (e) => {
    e.preventDefault();

    // Validate The Form Here

    if (formData === {}) {
      setError("Please Fill The Form");
    } else if (!formData.firstName) {
      setError("Enter First Name");
    } else if (!formData.lastName) {
      setError("Enter Last Name");
    } else if (!formData.userName) {
      setError("Enter User Name");
    } else if (!formData.email) {
      setError("Enter Email");
    } else if (!isValidEmail(formData.email)) {
      setError("Enter Valid Email");
    } else if (!formData.password) {
      setError("Enter Password");
    } else if (!formData.confirmPassword) {
      setError("Enter Confirm Password");
    } else if (formData.password !== formData.confirmPassword) {
      setError("Password and Confirm Password must be same");
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("Called Handle Submit");

    // Make A Post Request to the server
    const res = fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    res.then((res) => {
      if (res.status == 200) {
        res.json().then((data) => {
          console.log(data);
          router.push("/verify")
        });
      }
    });
  };



  return (
    <section id="register">
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <Alert message={error} />

        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="max-w-md mx-auto">
              <div>
                <h1 className="text-2xl font-semibold">Create A New Account</h1>
              </div>

              {/* <Steps /> */}

              <form>
                <div className=" divide-gray-200">
                  <div className="py-8 text-base leading-6 space-y-4 text-gray-700 sm:text-lg sm:leading-7">
                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="firstName"
                        name="firstName"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="First Name"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="firstName"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        First Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="lastName"
                        name="lastName"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Last Name"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="lastName"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Last Name
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        autoComplete="off"
                        id="userName"
                        name="userName"
                        type="text"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="User Name"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="userName"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        User Name
                      </label>
                    </div>

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
                        Email Address
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
                      <input
                        autoComplete="off"
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        className="peer placeholder-transparent h-10 w-full border-b-2 border-gray-300 text-gray-900 focus:outline-none focus:borer-rose-600"
                        placeholder="Password"
                        onChange={handleChange}
                      />
                      <label
                        htmlFor="confirmPassword"
                        className="absolute left-0 -top-3.5 text-gray-600 text-sm peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-440 peer-placeholder-shown:top-2 transition-all peer-focus:-top-3.5 peer-focus:text-gray-600 peer-focus:text-sm"
                      >
                        Confirm Password
                      </label>
                    </div>

                    <div className="relative">
                      <input
                        type={"button"}
                        value={"Register"}
                        name={"register"}
                        className="bg-blue-500 text-white rounded-md px-2 py-1 "
                        onClick={onClick}
                      />
                    </div>
                  </div>

                  <Link href="/login" className="text-base sm:text-lg">
                    {" "}
                    Have Account ?{" "}
                  </Link>
                </div>
              </form>
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

function Steps() {
  return (
    <>
      <div className="max-w-xl mx-auto my-2 ">
        <div className="flex pb-3">
          <div className="flex-1">
            <div
              id="circle1"
              className="w-10 h-10 bg-red-500 mx-auto rounded-full text-lg text-green flex items-center"
            >
              <span className="text-center w-full">
                <i
                  id="text-circle1"
                  className="fa fa-check w-full fill-current text-white"
                >
                  1
                </i>
              </span>
            </div>
          </div>

          <div className="w-1/2 align-center items-center align-middle content-center flex">
            <div className="w-full rounded items-center align-middle align-center flex-1">
              <div
                id="step1"
                className="bg-gray-400 text-xs leading-none py-1 text-center text-grey-darkest rounded "
                style={{ width: "100%" }}
              ></div>
            </div>
          </div>

          <div className="flex-1">
            <div
              id="circle2"
              className="w-10 h-10 bg-white border-2 mx-auto rounded-full text-lg text-green flex items-center"
            >
              <span className="text-center w-full">
                <i
                  id="text-circle2"
                  className="fa fa-check w-full fill-current text-gray-400"
                >
                  2
                </i>
              </span>
            </div>
          </div>
        </div>

        <div className="flex text-xs content-center text-center">
          <div className="w-1/2 pr-7">Personal Detail</div>

          <div className="w-1/2 pl-10 ">User Credential</div>
        </div>
      </div>
    </>
  );

  /* 
  
  
  1 Circle one
    id : circle1
      start 
        bg-blue-400
      fill form
          validation false
            bg-red-500
          validation true
            bg-lime-400
      end

      text
        id : text-circle1
          text-white-400

      id : step1
        bg-lime-400
      
  2 Circle Two

    id : text-circle2 
      text-grey-400

    id : circle2
      start 
        bg-blue-400
      fill form
          validation false
            bg-red-400
          validation true
            bg-lime-400
      end
  
  */
}
