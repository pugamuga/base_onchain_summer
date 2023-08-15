import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Metrics from "../components/Metrics";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center select-none ">
      <div className="w-full ">
        <Navbar />
        <Hero />
        <About />
        <Metrics />
        <Footer />
      </div>
    </main>
  );
}
