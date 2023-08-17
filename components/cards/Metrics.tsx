export default function Metrics() {
  return (
    <>
      <div className=" font-lilita text-white flex justify-center items-center space-x-2">
        <p className="text-[100px]">1</p>
        <img src="./whiteLogo.png" alt="0" className="w-[80px] h-[80px]" />
        <img
          src="./whiteLogo.png"
          alt="0"
          className="w-[80px] h-[80px] rotate-45"
        />
        <img
          src="./whiteLogo.png"
          alt="0"
          className="w-[80px] h-[80px] rotate-90"
        />
      </div>
      <div>
        <p className=" text-2xl text-center font-lilita text-white">
          Get one of 1,000 unique summer vibes NFTs!
        </p>
        <p className=" text-2xl text-center font-lilita text-white">
          Mint yours for free to remember this summer.
        </p>
      </div>
    </>
  );
}
