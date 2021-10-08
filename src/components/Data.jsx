import React from "react";
import Graph from '../assets/images/graph.png'
export default function Data() {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-4 p-4">
      <h1 className="text-2xl md:text-4xl font-bold ">
        See how your customers interact with your menu
        <span className="text-primary"> and get insigths </span>
      </h1>

      <img src={Graph} alt={Graph} className="w-full md:w-10/12" />
    </div>
  );
}
