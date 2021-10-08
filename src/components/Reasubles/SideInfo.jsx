import React from "react";

export default function SideInfo({ text, image, reverse }) {
  return (
    <div className=" w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
    
      <div className={`w-full ${reverse} flex flex-col md:flex-row p-4 items-center justify-center`}>
        <div className="md:w-2/5">
          <h3 className="text-lg md:text-3xl text-center font-semibold">{text}</h3>
        </div>
        <div className=" w-full md:w-2/5 relative">
            <div className="absolute w-6/12 h-4/5 bg-red-400" style={{left:'15%', top:'10%'}}></div>
          <img src={image} alt={image} className="w-4/5" />
        </div>
      </div>
    </div>
  );
}
