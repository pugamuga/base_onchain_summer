import Image from "next/image";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div  className='fixed w-screen h-screen bg-violet-300/10 -z-50'/>
      <div className="w-full space-y-6">
        <Navbar />
        <Hero />
        <div  className='p-[100px]'/>
        <About />
        <div  className='p-12'/>
        <Footer />
      </div>
    </main>
  );
}
