import React from "react";

export default function SideInfo({ text, image, reverse }) {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className={`w-full ${reverse} flex p-4 items-center justify-center`}>
        <div className="w-2/5">
          <h3 className="text-3xl text-center font-semibold">{text}</h3>
        </div>
        <div className="w-2/5">
          <img src={image} alt={image} className="w-4/5" />
        </div>
      </div>
    </div>
  );
}