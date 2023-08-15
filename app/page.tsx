import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";
import Metrics from "../components/Metrics";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="w-full space-y-6">
        <Navbar />
        <Hero />
        <div  className='p-12'/>
        <About />
        <div  className='p-12'/>
        <Metrics />
        <Footer />
      </div>
    </main>
  );
}
