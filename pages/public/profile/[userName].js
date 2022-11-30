import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

import { MdMenu } from "react-icons/md";


export default function PublicProfile({ userData }) {
    // const [ userData, setUserData ] = useState({});
    const router = useRouter();

   /*  useEffect(() => {
        const { userName } = router.query;

        if( userName ) {
            fetch(`/api/profile`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userName: userName }),
            })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                setUserData(data);
            })
            .catch((err) => {
                throw err;
            })
        }
    }, [router.query]) */


    function toggleNavbar(collapseID) {
        document.getElementById(collapseID).classList.toggle("hidden");
        document.getElementById(collapseID).classList.toggle("block");
      }


  return (
    <>
      <div className="text-gray-800 antialiased">


        {/* Navigation */}
        <nav className="top-0 absolute z-50 w-full flex flex-wrap items-center justify-between px-2 py-3 ">
          <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
            <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
              <a
                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
              >
                Tailwind Starter Kit
              </a>
              <button
                className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                type="button"
                onClick={() => {toggleNavbar('example-collapse-navbar')}}
              >
                <MdMenu className="text-white fas fa-bars" />
              </button>
            </div>
            <div
              className="lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none"
              id="example-collapse-navbar"
            >
              <ul className="flex flex-col lg:flex-row list-none mr-auto">
                <li className="flex items-center">
                  <a
                    className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/profile"
                  >
                    <i className="lg:text-gray-300 text-gray-500 far fa-file-alt text-lg leading-lg mr-2"></i>
                    Docs
                  </a>
                </li>
              </ul>
              <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                <li className="flex items-center">
                  <a
                    className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#pablo"
                  >
                    <i className="lg:text-gray-300 text-gray-500 fab fa-facebook text-lg leading-lg "></i>
                    <span className="lg:hidden inline-block ml-2">Share</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#pablo"
                  >
                    <i className="lg:text-gray-300 text-gray-500 fab fa-twitter text-lg leading-lg "></i>
                    <span className="lg:hidden inline-block ml-2">Tweet</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <a
                    className="lg:text-white lg:hover:text-gray-300 text-gray-800 px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                    href="#pablo"
                  >
                    <i className="lg:text-gray-300 text-gray-500 fab fa-github text-lg leading-lg "></i>
                    <span className="lg:hidden inline-block ml-2">Star</span>
                  </a>
                </li>
                <li className="flex items-center">
                  <button
                    className="bg-white text-gray-800 active:bg-gray-100 text-xs font-bold uppercase px-4 py-2 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                    type="button"
                    style={{ transition: "all 0.15s ease 0s" }}
                  >
                    <i className="fas fa-arrow-alt-circle-down"></i> Download
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Body */}
        <main className="profile-page">
          <section className="relative block" style={{ height: "500px" }}>
            <div
              className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')",
              }}
            >
              <span
                id="blackOverlay"
                className="w-full h-full absolute opacity-50 bg-black"
              ></span>
            </div>
            <div
              className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
              style={{ height: "70px" }}
            >
              <svg
                className="absolute bottom-0 overflow-hidden"
                xmlns="http://www.w3.org/2000/svg"
                preserveAspectRatio="none"
                version="1.1"
                viewBox="0 0 2560 100"
                x="0"
                y="0"
              >
                <polygon
                  className="text-gray-300 fill-current"
                  points="2560 0 2560 100 0 100"
                ></polygon>
              </svg>
            </div>
          </section>
          <section className="relative py-16 bg-gray-300">
            <div className="container mx-auto px-4">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                <div className="px-6">
                  <div className="flex flex-wrap justify-center">

                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                      <div className="relative">
                        <Image
                          /* 800x800 */
                          alt="Prfile Pic"
                          src="/profile_pic.jpg"
                          width={150}
                          height={150}

                          className="shadow-xl rounded-full align-middle border-none"
                        />
                      </div>
                    </div>

                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                      <div className="py-6 px-3 mt-32 sm:mt-0">
                        <button
                          className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1"
                          type="button"
                          style={{ transition: "all 0.15s ease 0s" }}
                        >
                          Connect
                        </button>
                      </div>
                    </div>
                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                      <div className="flex justify-center py-4 lg:pt-4 pt-8">
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            22
                          </span>
                          <span className="text-sm text-gray-500">Friends</span>
                        </div>
                        <div className="mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            10
                          </span>
                          <span className="text-sm text-gray-500">Photos</span>
                        </div>
                        <div className="lg:mr-4 p-3 text-center">
                          <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                            89
                          </span>
                          <span className="text-sm text-gray-500">
                            Comments
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="text-center mt-12">
                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800">
                      {` ${userData.firstName} ${userData.lastName}`}
                    </h3>
                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                      <i className="fas fa-map-marker-alt mr-2 text-lg text-gray-500"></i>
                      Los Angeles, California
                    </div>
                    <div className="mb-2 text-gray-700 mt-10">
                      <i className="fas fa-briefcase mr-2 text-lg text-gray-500"></i>
                      Solution Manager - Creative Tim Officer
                    </div>
                    <div className="mb-2 text-gray-700">
                      <i className="fas fa-university mr-2 text-lg text-gray-500"></i>
                      University of Computer Science
                    </div>
                  </div>
                  <div className="mt-10 py-10 border-t border-gray-300 text-center">
                    <div className="flex flex-wrap justify-center">
                      <div className="w-full lg:w-9/12 px-4">
                        <p className="mb-4 text-lg leading-relaxed text-gray-800">
                          An artist of considerable range, Jenna the name taken
                          by Melbourne-raised, Brooklyn-based Nick Murphy
                          writes, performs and records all of his own music,
                          giving it a warm, intimate feel with a solid groove
                          structure. An artist of considerable range.
                        </p>
                        <a href="#pablo" className="font-normal text-pink-500">
                          Show more
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        {/* Footer */}
        <footer className="relative bg-gray-300 pt-8 pb-6">
          <div
            className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
            style={{ height: "80px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 px-4">
                <h4 className="text-3xl font-semibold">{`Let's keep in touch!`}</h4>
                <h5 className="text-lg mt-0 mb-2 text-gray-700">
                  Find us on any of these platforms, we respond 1-2 business
                  days.
                </h5>
                <div className="mt-6">
                  <button
                    className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-twitter"></i>
                  </button>
                  <button
                    className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-facebook-square"></i>
                  </button>
                  <button
                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-dribbble"></i>
                  </button>
                  <button
                    className="bg-white text-gray-900 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                    type="button"
                  >
                    <i className="flex fab fa-github"></i>
                  </button>
                </div>
              </div>
              <div className="w-full lg:w-6/12 px-4">
                <div className="flex flex-wrap items-top mb-6">
                  <div className="w-full lg:w-4/12 px-4 ml-auto">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Useful Links
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/presentation"
                        >
                          About Us
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="https://blog.creative-tim.com"
                        >
                          Blog
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="https://www.github.com/creativetimofficial"
                        >
                          Github
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="https://www.creative-tim.com/bootstrap-themes/free"
                        >
                          Free Products
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="w-full lg:w-4/12 px-4">
                    <span className="block uppercase text-gray-600 text-sm font-semibold mb-2">
                      Other Resources
                    </span>
                    <ul className="list-unstyled">
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="https://github.com/creativetimofficial/argon-design-system/blob/master/LICENSE.md"
                        >
                          MIT License
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/terms"
                        >
                          Terms &amp; Conditions
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/privacy"
                        >
                          Privacy Policy
                        </a>
                      </li>
                      <li>
                        <a
                          className="text-gray-700 hover:text-gray-900 font-semibold block pb-2 text-sm"
                          href="https://creative-tim.com/contact-us"
                        >
                          Contact Us
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}


export async function getServerSideProps(context) {
    // Get Query
    const { userName } = context.query;

      
    const res = await fetch(`${process.env.BASE_URL}/api/profile`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userName: userName }),
    });
    const data = await res.json();
    console.log(data);
  
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
        userData
      },
    };
  }