import Lottie from "lottie-react";
import animationData from "../public/animAbout/dataBall.json";
import Carousel from "./Carousel";

export default function BallAnimation() {
  return (
    <>
      <div className="w-full flex justify-center items-center relative" id="about">
        <div className="w-3/4 pointer-events-none z-20">
          <Lottie
            animationData={animationData}
            className="pointer-events-none"
          />
        </div>
        <div className="">
          <Carousel />
        </div>
      </div>
    </>
  );
}
