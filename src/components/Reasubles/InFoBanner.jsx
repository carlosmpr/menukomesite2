import React from "react";
import { useInView } from "react-intersection-observer";
import AnimateText from "./AnimateText";
export default function InFoBanner({ text }) {

    let {  ref, inView,  } = useInView({
      /* Optional options */
      threshold: 0,
      triggerOnce: true
    });
  return (
    <div className="relative w-screen h-screen flex flex-col items-center justify-center bg-gray-100"  >
      <div className="absolute bottom-0  w-24 h-24" ref={ref}></div>
      {inView ? 
      <div className="md:w-1/2">
       <AnimateText text={text} />
      </div>

      :null}
    </div>
  );
}
