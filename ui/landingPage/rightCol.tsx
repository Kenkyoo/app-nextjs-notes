import Image from "next/image";
import macbook from "../../app/appPic.png";
import appstore from "../../app/App Store.svg";
import playstore from "../../app/Play Store.svg";
import LoginButton from "./loginButton";

export default function RightCol() {
  return (
    <>
      <div className="w-full xl:w-3/5 p-12 overflow-hidden">
        <Image
          width={1000}
          height={1000}
          alt="macbook"
          className="mx-auto w-full md:w-4/5 transform -rotate-6 transition hover:scale-105 duration-700 ease-in-out hover:rotate-6"
          src={macbook}
        />
      </div>
      <div className="mx-auto md:pt-16">
        <p className="text-blue-400 font-bold pb-8 lg:pb-6 text-center">
          do we start?
        </p>
        <LoginButton />
        <div className="flex w-full justify-center md:justify-start pb-24 lg:pb-0 fade-in">
          <Image
            width={1000}
            height={1000}
            alt="app store"
            src={appstore}
            className="h-12 pr-12 transform hover:scale-125 duration-300 ease-in-out"
          />
          <Image
            width={1000}
            height={1000}
            alt="play store"
            src={playstore}
            className="h-12 transform hover:scale-125 duration-300 ease-in-out"
          />
        </div>
      </div>
    </>
  );
}
