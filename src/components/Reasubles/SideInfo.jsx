import React from "react";

export default function SideInfo({ text, image, reverse, pic }) {
  return (
    <div className=" w-screen md:h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        className={`w-full ${reverse} flex flex-col md:flex-row items-center justify-center`}
      >
        <div className="md:w-2/5">
          <h3 className="text-lg md:text-2xl lg:text-3xl text-center font-semibold">
            {text}
          </h3>
        </div>
        <div className=" w-full md:w-2/5 relative">
          <div
            className="absolute md:hidden  h-4/5 bg-red-400 overflow-hidden"
            style={{ left: "20%", top: "10%", width: "60%" }}
          >
            <img src={pic} alt={pic} className="w-full" />
          </div>
          <div
            className="absolute hidden md:inline w-6/12 h-4/5 bg-red-400 overflow-hidden"
            style={{ left: "15%", top: "10%" }}
          >
            <img src={pic} alt={pic} className="w-full" />
          </div>
          <img src={image} alt={image} className="md:w-4/5" />
        </div>
      </div>
    </div>
  );
}
