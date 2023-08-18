export default function Base() {
  return (
    <>
      <div
        className="text-white font-lilita text-[30px] flex flex-col justify-between
         items-center h-full 
      "
      >
        <img src="./base_mans.png" className="w-2/3" alt="" />
        <div className="flex space-x-10">
          <div className="drop-shadow-[0px_0px_10px_5px_#1a202c] ">
            Low fees
          </div>
          <div className="drop-shadow-[0px_0px_10px_5px_#1a202c] ">
            High speed
          </div>
        </div>
      </div>
    </>
  );
}
