"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BallAnimation from "../components/BallAnimation";
import LoaderPage from "../components/LoaderPage";
import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Home() {
 

  return (
    <>
      
      <main className="flex  flex-col items-center  ">
        <div className="fixed w-screen h-screen bg-violet-300/10 -z-50" />
        <div className="w-full space-y-6">
          <Navbar />
          <Hero />
          <BallAnimation />
          <div className="p-12" />
          <Footer />
        </div>
      </main>
    </>
  );
}
