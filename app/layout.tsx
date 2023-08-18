"use client";
import "./globals.css";
import { useState, useEffect } from "react";
import Mobile from "@/components/Mobile";
import LoaderPage from "@/components/LoaderPage";
import { AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    }
  }, []);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const resizeHandler = () => {
      if (window.innerWidth < 768) {
        setIsMobile(true);
      } else {
        setIsMobile(false);
      }
    };
    window.addEventListener("resize", resizeHandler);
    return () => window.removeEventListener("resize", resizeHandler);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);

  return (
    <head>
      <link rel="icon" href="./logo_sun_black.ico" sizes="any" />
      <title>Summer Vibes</title>
      <html lang="en">
        <body>
          <AnimatePresence>{loading && <LoaderPage />}</AnimatePresence>
          {isMobile ? <Mobile /> : children}
        </body>
      </html>
    </head>
  );
}
