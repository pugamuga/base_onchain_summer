"use client";
import baseAnimation from "./../public/baseAnimation.json";
import Lottie from "lottie-react";

export default function Hero() {
  return (
    <>
      <section>
        <Lottie
          animationData={baseAnimation}
          className="hover:blur-[2px] blur-none tr-300 hover:cursor-pointer"
        />
      </section>
    </>
  );
}
