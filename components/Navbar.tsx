"use client";

import { use, useEffect, useRef, useState } from "react";
import { Link } from "react-scroll";

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
    { name: "Home", link: "home", active: button === 1 },
    { name: "About", link: "about", active: button === 2 },
    { name: "Contact", link: "contact", active: button === 3 },
  ];
  return (
    <>
      <div
        className={`flex justify-center fixed top-0 left-0 w-full z-[10000] `}
      >
        <section
          className={`flex justify-between items-center w-2/3 text-white py-4 font-lilita text-xl tr-700 
         bg-black/0 px-6 rounded-br-lg border-b-4 border-r-4 border-l-4 rounded-bl-lg ${
           scrollNav
             ? "bg-black/30 backdrop-blur-sm border-white/20"
             : "backdrop-blur-none border-white/0"
         }`}
        >
          <a className="flex items-center cursor-pointer" href="/">
            <img src="/logo_sun_white.png" alt="" className="w-12" />
            <div className="pl-2 font-base">
              <p>Summer</p>
              <p className="-mt-2">Vibes</p>
            </div>
          </a>
          <div className="space-x-6 hidden  md:inline-block">
            {buttons.map((button, i) => (
              <Link
                to={button.link}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                key={i}
                onClick={() => setButton(i + 1)}
                className={`tr-300 hover:opacity-70 cursor-pointer select-none ${
                  button.active
                    ? "border-b-2 border-violet-500"
                    : "border-b-2 border-violet-500/0"
                }`}
              >
                {button.name}
              </Link>
            ))}
          </div>
          <div>
            <button className="bg-violet-800 rounded-md px-6 py-2 hover:bg-violet-900 tr-300">
              Connect
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
