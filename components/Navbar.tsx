"use client";

export default function Navbar() {
  return (
    <>
      <div className="flex justify-center">
        <section className="flex justify-between items-center w-2/3 text-white py-4 font-lilita text-xl ">
          <div className="flex items-center">
            <img src="/logo_sun_white.png" alt="" className="w-12" />
            <div className="pl-2 font-base">
              <p>Summer</p>
              <p className="-mt-2">Vibes</p>
            </div>
          </div>
          <div className="space-x-4">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Metrics</a>
          </div>
          <div>
            <button className="bg-violet-800 rounded-md px-6 py-2 ">
              Connect
            </button>
          </div>
        </section>
      </div>
    </>
  );
}
