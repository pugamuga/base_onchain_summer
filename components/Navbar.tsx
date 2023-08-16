"use client";

import { use, useEffect, useRef, useState } from "react";
import { motion as m, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [button, setButton] = useState(1);
  const [scrollNav, setScrollNav] = useState(false);

  const changeNav = () => {
    if (window.scrollY > 0) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const buttons = [
    { name: "Home", link: "/", active: button === 1 },
    { name: "About", link: "/about", active: button === 2 },
    { name: "Contact", link: "/contact", active: button === 3 },
  ];
  return (
    <>
      <div
        className={`flex justify-center fixed top-0 left-0 w-full z-[10000] `}
      >
        <section className={`flex justify-between items-center w-2/3 text-white py-4 font-lilita text-xl tr-700 
         bg-black/0 px-6 rounded-br-lg rounded-bl-lg ${scrollNav?"bg-black/30 backdrop-blur-sm ":"backdrop-blur-none "}`}>
          <div className="flex items-center">
            <img src="/logo_sun_white.png" alt="" className="w-12" />
            <div className="pl-2 font-base">
              <p>Summer</p>
              <p className="-mt-2">Vibes</p>
            </div>
          </div>
          <div className="space-x-6 hidden  md:inline-block">
            {buttons.map((button, i) => (
              <button
                key={i}
                onClick={() => setButton(i + 1)}
                className={`tr-300 ${
                  button.active
                    ? "border-b-2 border-violet-500"
                    : "border-b-2 border-violet-500/0"
                }`}
              >
                {button.name}
              </button>
            ))}
          </div>
          <div>
            <button className="bg-violet-800 rounded-md px-6 py-2 ">
              Connect
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
