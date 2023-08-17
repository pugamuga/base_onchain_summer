import Lottie from "lottie-react";
import animationData from "../public/animHero/baseAnimation.json";

export default function LottieAnimation() {
  return (
    <>
      <div className="sm:w-2/3 w-[60vh] relative">
        <Lottie animationData={animationData} />
        <div className="center flex flex-col  mt-2">
          <button className="button-main text-lg font-lilita text-white mb-2">
            Mint
          </button>
          <a
            href="/"
            target="_blank"
            className="font-lilita border-2 border-purple-800 rounded-md px-2 opacity-50 
          cursor-pointer hover:opacity-100 tr-300
          "
          >
            Or check collection on <span className="text-purple-800">mint.fun</span>
          </a>
        </div>
      </div>
    </>
  );
}
