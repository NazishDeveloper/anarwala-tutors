import HeaderComponent from "../components/layout/header";
import FooterComponent from "../components/layout/footer";

export default function Verify() {

  return (
    <>
      <HeaderComponent />
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
        <div className="relative py-3 sm:max-w-xl sm:mx-auto">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-blue-600 shadow-lg transform -skew-y-6 sm:skew-y-0 sm:-rotate-6 sm:rounded-3xl"></div>
          <div className="relative px-4 py-10 bg-white shadow-lg sm:rounded-3xl sm:p-20">
            <div className="flex justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-24 h-24 text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1"
                  d="M3 19v-8.93a2 2 0 01.89-1.664l7-4.666a2 2 0 012.22 0l7 4.666A2 2 0 0121 10.07V19M3 19a2 2 0 002 2h14a2 2 0 002-2M3 19l6.75-4.5M21 19l-6.75-4.5M3 10l6.75 4.5M21 10l-6.75 4.5m0 0l-1.14.76a2 2 0 01-2.22 0l-1.14-.76"
                />
              </svg>
            </div>

            <div className="max-w-md mx-auto">
              Please Verify Yourself We Have Send You An E-Mail
            </div>

            <span className=" flex justify-center">
              {" "}
              Kindly Check Your Inbox{" "}
            </span>
          </div>
        </div>
      </div>
      <FooterComponent />
    </>
  );
}