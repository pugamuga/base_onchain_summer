"use client";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BallAnimation from "../components/BallAnimation";
import LoaderPage from "../components/LoaderPage";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Home() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <>
      <AnimatePresence>{loading && <LoaderPage />}</AnimatePresence>
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
