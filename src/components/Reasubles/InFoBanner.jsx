import React from "react";
import { useSpring, animated } from "@react-spring/web";
export default function InFoBanner({ text }) {
    const appear = useSpring({

        from:{opacity:0},
        to:{opacity:1},
        delay:500
    })
  return (
    <animated.div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100" style={appear}>
      <div className="md:w-1/2">
        <h3 className="text-xl md:text-2xl lg:text-3xl text-center font-semibold">{text}</h3>
      </div>
    </animated.div>
  );
}
