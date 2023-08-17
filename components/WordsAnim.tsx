import Lottie from "lottie-react";
import animationData from "../public/animWords/data.json";

export default function WordsAnim() {
  return (
    <>
      <div>
        <Lottie animationData={animationData} />
      </div>
    </>
  );
}
