export default function CardCarousel( {children}:React.PropsWithChildren<{}>) {
  return (
    <>
      <div className=" w-full flex h-full py-4 px-12 ">
        <div className="bg-purple-500/10 border-4 border-white/20 backdrop-blur-md w-full h-full rounded-lg p-10 
        flex flex-col justify-between" >
            {children}
        </div>
      </div>
    </>
  );
}
