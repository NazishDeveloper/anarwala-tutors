import Image from "next/image";
import Link from "next/link";

export default function FooterComponent() {
  const Logout = () => {};

  return (
    <>
      <footer className="grid grid-row-3 grid-flow-col gap-4 mt-3 p-6 bg-blue-400 ">
        <div className="row-span-3 ">
          <div className="container p-8">
            <Image
              src={"/logo.svg"}
              width={100}
              height={100}
              alt={`${process.env.NEXT_PUBLIC_APP_NAME} Logo`}
            />

            <p className="text-base mt-2 font-sono">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
              Quisquam, quod. Lorem ipsum dolor sit amet consectetur <br />{" "}
              adipisicing elit.
            </p>
          </div>
        </div>

        <div className="row-span-2">
          <div className="container">
            <span className="text-2xl">
              {`${process.env.NEXT_PUBLIC_APP_NAME}'s Link`}
            </span>

            <ul>
              <li>
                {" "}
                <Link href={"/"}> Home </Link>{" "}
              </li>
              <li> About Us </li>
              <li> Contact Us </li>
              <li> Terms & Conditions </li>
              <li> Privacy Policy </li>
            </ul>
          </div>
        </div>

        <div className="row-span-2">
          <div className="container">
            <span className="text-2xl">Quick Links</span>

            <ul>
              <li>
                {" "}
                <Link href={"/register"}> Register </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/login"}> Login </Link>{" "}
              </li>
              <li>
                {" "}
                <button onClick={Logout}> Logout </button>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/forget"}> Forget </Link>{" "}
              </li>
              <li>
                {" "}
                <Link href={"/dashboard"}> Dashboard </Link>{" "}
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}

export function DashBoardFooter() {
  return (
    <>
    {/* Footer */}
    <section className="text-right font-semibold text-gray-500">
      Made With <span className="text-red-400">❤</span> In India By <Link href="https://zeroxbit.com/" className="text-purple-600 hover:underline">ZeroxBit</Link>
    </section>
    </>
  );  
}
