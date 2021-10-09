import React from "react";
import AnimatedDiv from "./AnimatedDiv";
import { useInView } from "react-intersection-observer";
export default function SideInfo({ text, image, reverse, pic }) {

  let {  ref, inView,  } = useInView({
    /* Optional options */
    threshold: 0,
    triggerOnce: true
  });
  return (
    <div className=" w-screen md:h-screen flex flex-col items-center justify-center bg-gray-100">
      <div
        className={`w-full ${reverse} flex flex-col md:flex-row items-center justify-center`}
      >
        <div className="md:w-2/5">
          <h3 className="text-lg md:text-2xl  text-center font-semibold" ref={ref}>
            {text}
          </h3>
        </div>

        {inView ?    <AnimatedDiv image={image} pic={pic} /> : null }
     
       
      </div>
    </div>
  );
}
