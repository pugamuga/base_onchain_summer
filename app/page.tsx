'use client'

import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import BallAnimation from "../components/BallAnimation";
import { ethers } from "ethers";
//zora
import mainnetZoraAddresses from "@zoralabs/v3/dist/addresses/1.json"; // Mainnet addresses, 5.json would be Geroli Testnet 
import { IERC721__factory } from "@zoralabs/v3/dist/typechain/factories/IERC721__factory";

export default function Home() {
  async function connectToMetaMask() {
    // @ts-ignore
    if (window.ethereum) {
      try {
        // @ts-ignore
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
  const mintClick = async () => {
    const provider = await connectToMetaMask();
    if (provider) {
      const signer = await provider.getSigner();
      const moduleManagerAddress = mainnetZoraAddresses.ZoraModuleManager;
      console.log(moduleManagerAddress)
    }
  };

  return (
    <>
      <main className="flex  flex-col items-center  ">
        <div className="fixed w-screen h-screen bg-violet-300/10 -z-50" />
        <div className="w-full space-y-6">
          <Navbar handleConnectClick={handleConnectClick}/>
          <Hero />
          {/* <button className="button-main " onClick={mintClick}>
            TEST
          </button> */}
          <BallAnimation />
          <div className="p-12" />
          <Footer />
        </div>
      </main>
    </>
  );
}
