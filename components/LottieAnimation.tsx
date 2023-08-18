import Lottie from "lottie-react";
import animationData from "../public/animHero/baseAnimation.json";

export default function LottieAnimation({ handleConnectClick }: any) {
  const zoraLink =
    "https://zora.co/collect/base:0xbad640dd4472fd98cbdc1b42a3f0663d901ba345";
  const mintFunLink =
    "https://mint.fun/base/0xbaD640dd4472Fd98cbDC1b42a3f0663d901Ba345";
  return (
    <>
      <div className="sm:w-2/3 w-[60vh] relative">
        <Lottie animationData={animationData} />
        <div className="center flex flex-col  mt-2">
          <button
            onClick={handleConnectClick}
            className="button-main text-2xl font-lilita text-white mb-2"
          >
            Mint
          </button>
          <div className="flex space-x-4 justify-center">
            <ButtonLink link={mintFunLink}>
              <img src="./mintfun.png" alt="" className="w-8" />
            </ButtonLink>
            <ButtonLink link={zoraLink}>
              <img src="./zora.png" alt="" className="w-8" />
            </ButtonLink>
          </div>
        </div>
      </div>
    </>
  );
}

function ButtonLink({ children, link }: any) {
  return (
    <a
      className="hover:scale-110 cursor-pointer tr-300 opacity-50 hover:opacity-100"
      href={link}
      target="_blank"
    >
      {children}
    </a>
  );
}
