import Lottie from "lottie-react";
import animationData from "../public/animWords/data.json";
import animationDataTwo from "../public/animWordsTwo/data.json";

export default function WordsAnim() {
  return (
    <>
      <div className="space-y-[-50px]">
        <Lottie animationData={animationData} />
        {/* <Lottie animationData={animationDataTwo} />
        <Lottie animationData={animationData} /> */}
      </div>
    </>
  );
}
