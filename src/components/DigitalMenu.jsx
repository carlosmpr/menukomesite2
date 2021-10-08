import React from "react";
import Menu from "../assets/images/menu.png";
import Confuse from "../assets/icons/confuse.svg";
import Blob from "../assets/icons/blob.svg";
export default function DigitalMenu() {
  return (
    <div className="w-screen relative h-screen flex flex-col items-center justify-center">
      <img src={Blob} alt={Blob} className="absolute w-8/12 z-0 left-0" />
      <h3 className="text-2xl  md:text-4xl lg:text-5xl text-center font-semibold z-10">
        is this your Digital Menu?
      </h3>
      <div className="w-full flex flex-col md:flex-row p-4 items-center justify-evenly z-10">
        <div className="md:w-2/5">
          <img src={Menu} alt={Menu} className="w-full" />
        </div>
        <div className="md:w-2/5">
          <img src={Confuse} alt={Confuse} className="w-4/5 " />
        </div>
      </div>
    </div>
  );
}
