export default function Metrics() {
  return (
    <>
      <div className=" font-lilita text-white flex justify-center items-center">
        <img
          src="./cards/1.png"
          alt=""
          className="w-32 rotate-[-12deg]  hover:scale-105 cursor-pointer tr-300"
        />
        <img
          src="./cards/2.png"
          alt=""
          className="w-32 mb-8 hover:scale-105 cursor-pointer tr-300"
        />
        <img
          src="./cards/3.png"
          alt=""
          className="w-32  rotate-[12deg]  hover:scale-105 cursor-pointer tr-300"
        />
      </div>
      <div>
        <p className=" text-2xl text-center font-lilita text-white">
          Get one of 1,000 unique summer vibes NFT!
        </p>
        <p className=" text-base text-center font-lilita text-white/50">
          These memorable NFTs have been created exclusively for Onchain Summer
          2023. Mint your summer BASE picture to commemorate this unforgettable
          season!
        </p>
      </div>
    </>
  );
}
