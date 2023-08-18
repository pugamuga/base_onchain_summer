import Lottie from "lottie-react";
import animationData from "../../public/animSummer/data.json";

export default function OSummer() {
  return (
    <>
      <div className=" font-lilita text-white h-full flex flex-col justify-around items-center cursor-pointer">
        {/* <Arrow /> */}
        <a className="w-3/4" target="_blank" href="https://onchainsummer.xyz/">
          <Lottie
            animationData={animationData}
            className="grayscale hover:grayscale-0 tr-300 hover:scale-110"
          />
        </a>
        {/* <Arrow /> */}
        <p className="text-center text-xl">
          Embrace the warmth and pleasures of the summer season by becoming a
          part of the Base Onchain summer experience.
        </p>
      </div>
    </>
  );
}

// function Arrow() {
//   return (
//     <>
//       <svg
//         xmlns="http://www.w3.org/2000/svg"
//         fill="none"
//         viewBox="0 0 24 24"
//         strokeWidth={1.5}
//         stroke="currentColor"
//         className="w-6 h-6"
//       >
//         <path
//           strokeLinecap="round"
//           strokeLinejoin="round"
//           d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
//         />
//       </svg>
//     </>
//   );
// }
