"use client";
import { useState } from "react";
import LottieAnimation from "./LottieAnimation";
import WordsAnim from "./WordsAnim";
import Shine from "./Shine";


const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  

  return (
    <>
      <div className="w-full justify-center flex flex-col items-center pt-[10vh]">
        <LottieAnimation />
        <div className="mt-[100px]"/>
        <WordsAnim />
      </div>
      <Shine/>
    </>
  );
}
