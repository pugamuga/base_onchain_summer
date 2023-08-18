import Lottie from "lottie-react";
import animationData from "../public/animHero/baseAnimation.json";

export default function LottieAnimation() {
  return (
    <>
      <div className="sm:w-2/3 w-[60vh] relative">
        <Lottie animationData={animationData} />
        <div className="center flex flex-col  mt-2">
          <button className="button-main text-2xl font-lilita text-white mb-2">
            Mint
          </button>
          <div className="flex space-x-4 justify-center">
            <ButtonLink>
              <img src="./mintfun.png" alt="" className="w-8" />
            </ButtonLink>
            <ButtonLink>
              <img src="./zora.png" alt="" className="w-8" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}

function ButtonLink({ children }: any) {
  return (
    <a
      className="hover:scale-110 cursor-pointer tr-300 opacity-50 hover:opacity-100"
      href="https://github.com/pugamuga/base_onchain_summer"
      target="_blank"
    >
      {children}
    </a>
  );
}
