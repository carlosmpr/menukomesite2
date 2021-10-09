import React from "react";
import { useSpring, animated } from "@react-spring/web";

export default function AnimateText({ text }) {
  const appear = useSpring({
    from: { opacity: 0 },
    to: { opacity: 1 },
    delay: 200,
  });
  return (
    <animated.h3
      className=" text-xl md:text-2xl lg:text-3xl text-center font-semibold"
      style={appear}
    >
      {text}
    </animated.h3>
  );
}
