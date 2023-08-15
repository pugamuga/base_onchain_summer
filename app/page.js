import About from "@/components/About";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero"
import Metrics from "@/components/Metrics";

export default function Home() {
  return (
    <main className="flex flex-col px-24 gap-y-2">
      <Header/>
      <Hero/>
      <About/>
      <Metrics/>
      <Footer/>  
    </main>
  );
}
