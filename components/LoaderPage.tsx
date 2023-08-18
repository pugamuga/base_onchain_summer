"use client";
import Lottie from "lottie-react";
import animationData from "../public/animLoader/data.json";
import Shine from "./Shine";
import { motion as m, AnimatePresence } from "framer-motion";

export default function LoaderPage() {
  return (
    <>
      <m.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="text-white h-screen w-screen bg-black fixed z-[999900]"
      >
        <div className="w-full h-full flex justify-center items-center">
          <div className="w-[144px] h-[144px]">
            <Lottie animationData={animationData} loop={false} />
          </div>
        </div>

        <Shine />
      </m.div>
    </>
  );
}
