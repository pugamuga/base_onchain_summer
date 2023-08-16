"use client";

export default function Navbar() {
  const buttons = [
    { name: "Home", link: "/", active: true },
    { name: "About", link: "/about", active: false },
    { name: "Metrics", link: "/metrics", active: false },
  ];
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
          <div className="space-x-6">
            {buttons.map((button, i) => (
              <a
                key={i}
                href={button.link}
                className={`${
                  button.active
                    ? "border-b-4 border-violet-500"
                    : ""
                }`}
              >
                {button.name}
              </a>
            ))}
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
