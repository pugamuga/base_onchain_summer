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

  const zoraLink = 'https://zora.co/collect/base:0xbad640dd4472fd98cbdc1b42a3f0663d901ba345'
  const mintFunLink = 'https://mint.fun/base/0xbaD640dd4472Fd98cbDC1b42a3f0663d901Ba345'

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
