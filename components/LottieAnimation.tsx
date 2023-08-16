import Lottie from "lottie-react";
import animationData from "../public/data.json";

export default function LottieAnimation() {
  return (
    <>
      <div className="sm:w-2/3 w-[60vh] absolute z-[-10] center">
        <Lottie animationData={animationData} />
      </div>
    </>
  );
}
