import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BallAnimation from "../components/BallAnimation";
import { ethers } from "ethers";

export default function Home() {

  async function connectToMetaMask() {
    if (window.ethereum) {
      try {
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        return provider;
      } catch (error) {
        console.error("Error connecting to MetaMask:", error);
        return null;
      }
    } else {
      console.log("No Ethereum browser detected");
      return null;
    }
  }

  const handleConnectClick = async () => {
    const provider = await connectToMetaMask();
    if (provider) {
      //mint fn
    }
  };

  return (
    <>
      <main className="flex  flex-col items-center  ">
        <div className="fixed w-screen h-screen bg-violet-300/10 -z-50" />
        <div className="w-full space-y-6">
          <Navbar />
          <Hero handleConnectClick={handleConnectClick}/>
          <BallAnimation />
          <div className="p-12" />
          <Footer />
        </div>
      </main>
    </>
  );
}
