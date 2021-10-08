import React from "react";

export default function FlyingIcons({text, icon , position}) {
  return (
    <div className="absolute w-3/12 " style={ position}>
      <div className="flex flex-col items-center justify-center text-primary">
        <i className={`${icon} text-7xl `}></i>
        <p className="text-xl">{text}</p>
      </div>
    </div>
  );
}
