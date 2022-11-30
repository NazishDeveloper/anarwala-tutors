// Left Side Bar For DashBoard

import Link from "next/link";
import Image from "next/image";
// Icons
import { GoDashboard } from "react-icons/go";
import {
  MdOutlineMicNone,
  MdModeEdit,
  MdHeadphones,
  MdBook,
  MdSettings,
  MdKeyboardArrowDown
} from "react-icons/md";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function LeftSidebar({data}) {
  const router = useRouter();

  useEffect(() => {
    let linkList = [
      {
        id : "dashboard",
        link : "/dashboard",
      },{
        id : "speaking",
        link : "/dashboard/speaking",
      },{
        id : "writing",
        link : "/dashboard/writing",
      },{
        id : "reading",
        link : "/dashboard/reading",
      },{
        id : "writing",
        link : "/dashboard/writing",
      },{
        id : "listening",
        link : "/dashboard/listening",
      }
    ];

    linkList.forEach((link) => {
      let elements = document.getElementById(link.id);

      if (elements) {
        if (link.link === router.pathname) {
          {/*  Active: "bg-gray-100 text-gray-900"  */}
          elements.classList.add("bg-gray-100");
          elements.classList.add("text-gray-900");
          elements.classList.remove("text-gray-700");
        } else {
          {/* Not Active: "text-gray-700"  */}
          elements.classList.remove("bg-gray-100");
          elements.classList.remove("text-gray-900");
          elements.classList.add("text-white");
        }
      }
    });
  });
  
  if(data.role == "Admin") {
    return (
        <>
            <h1> Admin Left Bar</h1>
        </>
    );    
  } else if( data.role == "Teacher"){
    return (
      <>
          <aside className=" sm:flex sm:flex-col bg-gradient-to-b from-purple-600 to-purple-600">
              <Link
                  href="/"
                  className="inline-flex items-center justify-center py-4 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500"
              >
              
              <Image
                  src={"/logo.svg"}
                  width={50}
                  height={50}
                  alt={`${process.env.NEXT_PUBLIC_APP_NAME} Logo`}
              />
          </Link>
  
          {/* Left Side Bar Menue List */}
          <ul className="space-y-2">
           <li>
              <Link id="dashboard" href="/dashboard" className="flex items-center p-2 text-lg font-normal dark:text-white dark:hover:bg-gray-700">
              <GoDashboard className="w-7 h-4" />
                 <span className="ml-3 ">Dashboard</span>
              </Link>
           </li>
  
           <li>
              <button id="speaking" type="button" className="link flex items-center p-2 w-full text-base font-normal transition duration-75 group text-white hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700 "
              onClick={ () => {
                  document.getElementById("speaking-dropdown").classList.toggle("hidden");
              }} >
                  <MdOutlineMicNone className="w-7 h-4" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Speaking</span>
                  <MdKeyboardArrowDown className="w-7 h-4"/>
              </button>
              <ul id="speaking-dropdown" className="hidden py-2 space-y-2">
                    <li>
                       <button onClick={() => {
                          document.getElementById("speaking-dropdown").classList.toggle("hidden");
                       }} className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Read Aloud [RA]</button>
                    </li>
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Repeat Sentence [RS]</a>
                    </li>
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Describe Image [DI]</a>
                    </li>
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Re-Tell Lecture [RL]</a>
                    </li>
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Answer Short Question [ASQ]</a>
                    </li>
              </ul>
           </li>
           <li>
              <button id="writing" type="button" className="flex items-center p-2 w-full text-base font-normal transition duration-75 group text-white hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={ () => {
                  document.getElementById("writing-dropdown").classList.toggle("hidden");
              }}
              >
                  <MdModeEdit className="w-7 h-4" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Writing</span>
                  <MdKeyboardArrowDown className="w-7 h-4"/>
              </button>
              <ul id="writing-dropdown" className="hidden py-2 space-y-2">
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> R&W: Fill in The Blanks [RWFIB] </a>
                    </li>
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> MC, Choose Multiple Answers </a>
                    </li>
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">  Re-Order Paragraphs </a>
                    </li>
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">  R: Fill in The Blanks [RFIB]  </a>
                    </li>
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">  MC, Choose Single Answer  </a>
                    </li>
              </ul>
           </li>
           <li>
              <button id="reading" type="button" className="link flex items-center p-2 w-full text-base font-normal transition duration-75 group text-white hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={ () => {
                  document.getElementById("reading-dropdown").classList.toggle("hidden");
              }}>
                  <MdBook className="w-7 h-4" />
                  <span className="flex-1 ml-3 text-left whitespace-nowrap">Reading</span>
                  <MdKeyboardArrowDown className="w-7 h-4"/>
              </button>
              <ul id="reading-dropdown" className="hidden py-2 space-y-2">
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Summarize Written Text [SWT]</a>
                    </li>
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Write Essay [WE]</a>
                    </li>
              </ul>
           </li>        
           <li>
              <button id="listening" type="button" className="link flex items-center p-2 w-full text-base font-normal transition duration-75 group text-white hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
              onClick={ () => {
                  document.getElementById("listning-dropdown").classList.toggle("hidden");
              }}
              >
                  <MdHeadphones className="w-7 h-4" />
                  <span className=" flex-1 ml-3 text-left whitespace-nowrap" >Listening</span>
                  <MdKeyboardArrowDown className="w-7 h-4"/>
              </button>
              <ul id="listning-dropdown" className="hidden py-2 space-y-2">
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Summarize Written Text [SWT]</a>
                    </li>
                    <li>
                       <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Write Essay [WE]</a>
                    </li>
              </ul>
           </li>
          
          </ul>
  
          <ul className="relative bottom-0 ">
              <li>
              <button type="button" className="flex items-center p-2 w-full text-base font-normal transition duration-75 group text-white hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                  <MdSettings className="w-7 h-4" />
                  <span className=" flex-1 ml-3 text-left whitespace-nowrap">Settings</span>
              </button>
              </li>
          </ul>
  
      </aside>
      
      </>);
  } else if (data.role == "Student") {
    return (
    <>
        <aside className=" sm:flex sm:flex-col bg-gradient-to-b from-purple-600 to-purple-600">
            <Link
                href="/"
                className="inline-flex items-center justify-center py-4 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500"
            >
            
            <Image
                src={"/logo.svg"}
                width={50}
                height={50}
                alt={`${process.env.NEXT_PUBLIC_APP_NAME} Logo`}
            />
        </Link>

        {/* Left Side Bar Menue List */}
        <ul className="space-y-2">
         <li>
            <Link id="dashboard" href="/dashboard" className="flex items-center p-2 text-lg font-normal dark:text-white dark:hover:bg-gray-700">
            <GoDashboard className="w-7 h-4" />
               <span className="ml-3 ">Dashboard</span>
            </Link>
         </li>

         <li>
            <button id="speaking" type="button" className="link flex items-center p-2 w-full text-base font-normal transition duration-75 group text-white hover:bg-gray-100 hover:text-black dark:text-white dark:hover:bg-gray-700 "
            onClick={ () => {
                document.getElementById("speaking-dropdown").classList.toggle("hidden");
            }} >
                <MdOutlineMicNone className="w-7 h-4" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Speaking</span>
                <MdKeyboardArrowDown className="w-7 h-4"/>
            </button>
            <ul id="speaking-dropdown" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Read Aloud [RA]</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Repeat Sentence [RS]</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Describe Image [DI]</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Re-Tell Lecture [RL]</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Answer Short Question [ASQ]</a>
                  </li>
            </ul>
         </li>
         <li>
            <button id="writing" type="button" className="flex items-center p-2 w-full text-base font-normal transition duration-75 group text-white hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            onClick={ () => {
                document.getElementById("writing-dropdown").classList.toggle("hidden");
            }}
            >
                <MdModeEdit className="w-7 h-4" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Writing</span>
                <MdKeyboardArrowDown className="w-7 h-4"/>
            </button>
            <ul id="writing-dropdown" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> R&W: Fill in The Blanks [RWFIB] </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> MC, Choose Multiple Answers </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">  Re-Order Paragraphs </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">  R: Fill in The Blanks [RFIB]  </a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">  MC, Choose Single Answer  </a>
                  </li>
            </ul>
         </li>
         <li>
            <button id="reading" type="button" className="link flex items-center p-2 w-full text-base font-normal transition duration-75 group text-white hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            onClick={ () => {
                document.getElementById("reading-dropdown").classList.toggle("hidden");
            }}>
                <MdBook className="w-7 h-4" />
                <span className="flex-1 ml-3 text-left whitespace-nowrap">Reading</span>
                <MdKeyboardArrowDown className="w-7 h-4"/>
            </button>
            <ul id="reading-dropdown" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Summarize Written Text [SWT]</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Write Essay [WE]</a>
                  </li>
            </ul>
         </li>        
         <li>
            <button id="listening" type="button" className="link flex items-center p-2 w-full text-base font-normal transition duration-75 group text-white hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
            onClick={ () => {
                document.getElementById("listning-dropdown").classList.toggle("hidden");
            }}
            >
                <MdHeadphones className="w-7 h-4" />
                <span className=" flex-1 ml-3 text-left whitespace-nowrap" >Listening</span>
                <MdKeyboardArrowDown className="w-7 h-4"/>
            </button>
            <ul id="listning-dropdown" className="hidden py-2 space-y-2">
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Summarize Written Text [SWT]</a>
                  </li>
                  <li>
                     <a href="#" className="flex items-center p-2 pl-11 w-full text-base font-normal text-white transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Write Essay [WE]</a>
                  </li>
            </ul>
         </li>
        
        </ul>

        <ul className="relative bottom-0 ">
            <li>
            <button type="button" className="flex items-center p-2 w-full text-base font-normal transition duration-75 group text-white hover:text-black hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
                <MdSettings className="w-7 h-4" />
                <span className=" flex-1 ml-3 text-left whitespace-nowrap">Settings</span>
            </button>
            </li>
        </ul>

    </aside>
    
    </>);
  } else {
    return (
      <>
        <aside className="hidden sm:flex sm:flex-col">
          <Link
            href="/"
            className="inline-flex items-center justify-center py-4 bg-purple-600 hover:bg-purple-500 focus:bg-purple-500"
          >
            <Image
              src={"/logo.svg"}
              width={50}
              height={50}
              alt={`${process.env.NEXT_PUBLIC_APP_NAME} Logo`}
            />
          </Link>

          <div className="flex-grow flex flex-col justify-between text-gray-500 bg-gray-800">
            <nav className="flex flex-col mx-4 my-6 space-y-4">
              <Link
                id="dashboard"
                href="/dashboard"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Dashboard</span>
                <GoDashboard className="text-white" />
              </Link>

              <Link
                id="speaking"
                href="#"
                className=" align-middle py-3 text-purple-600 bg-white rounded-lg"
              >
                <MdOutlineMicNone className="text-left" />
                <span className="text-sm text-right">Speaking</span>
              </Link>

              {/* Speaking Sub Menue*/}
              <div
                className=" hidden relative right-0 z-10 w-60 origin-top-right focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  {/*  Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700"  */}
                  <a
                    href="#"
                    className="text-white block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    Read Aloud [RA]
                  </a>
                  <a
                    href="#"
                    className="text-white block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    Repeat Sentence [RS]
                  </a>
                  <a
                    href="#"
                    className="text-white block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Describe Image [DI]
                  </a>
                  <a
                    href="#"
                    className="text-white block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Re-Tell Lecture [RL]
                  </a>
                  <a
                    href="#"
                    className="text-white block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-2"
                  >
                    Answer Short Question [ASQ]
                  </a>
                </div>
              </div>

              <Link
                id="write"
                href="#"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Write</span>
                <MdModeEdit className="text-white" />
              </Link>

              {/* Writing Sub Menue*/}
              <div
                className=" relative right-0 z-10 w-60 origin-top-right focus:outline-none"
                role="menu"
                aria-orientation="vertical"
                aria-labelledby="menu-button"
                tabindex="-1"
              >
                <div className="py-1" role="none">
                  {/*  Active: "bg-gray-100 text-gray-900", Not Active: "text-gray-700"  */}
                  <a
                    href="#"
                    className="text-white block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-0"
                  >
                    {" "}
                    Summarize written text [SWT]{" "}
                  </a>
                  <a
                    href="#"
                    className="text-white block px-4 py-2 text-sm"
                    role="menuitem"
                    tabindex="-1"
                    id="menu-item-1"
                  >
                    {" "}
                    Write essay [WE]{" "}
                  </a>
                </div>
              </div>

              <Link
                id="listen"
                href="#"
                className="inline-flex items-center justify-center py-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg"
              >
                <span className="sr-only">Listen</span>
                <MdHeadphones className="text-white" />
              </Link>
            </nav>
            <div className="inline-flex items-center justify-center h-20 w-20 border-t border-gray-700">
              <button className="p-3 hover:text-gray-400 hover:bg-gray-700 focus:text-gray-400 focus:bg-gray-700 rounded-lg">
                <span className="sr-only">Settings</span>
                <MdSettings className="text-white" />
              </button>
            </div>
          </div>
        </aside>
      </>
    );
  }
}