import Shine from "./Shine";
import Lottie from "lottie-react";
import animationData from "../public/animAbout/dataBall.json";

export default function Mobile() {
  return (
    <>
      <div className="bg-black w-screen h-screen px-[10vw] fixed flex flex-col justify-center text-sm">
        <Lottie
          animationData={animationData}
          className="pointer-events-none "
        />
        <div className="mt-[-10vh]">
          <p className="text-white text-center font-lilita">Ups sorry...</p>
          <p className="text-white text-center font-lilita">
            {" "}
            For the best experience,
          </p>
          <p className="text-white text-center font-lilita">
            please use the desktop version
          </p>
          <p className="text-white text-center font-lilita">
            Mobile version is in development
          </p>
        </div>
        <Shine />
      </div>
    </>
  );
}
