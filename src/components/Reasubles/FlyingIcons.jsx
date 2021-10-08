import React from "react";
import { useSpring, animated } from "@react-spring/web";
export default function FlyingIcons({ text, icon, position }) {
  const iconsDissapear = useSpring({
    delay: 800,
    to: [
      {
        opacity: 1,
      },
    ],
    from: { opacity: 0 },
  });
  return (
    <animated.div
      className="absolute w-3/12 "
      style={{ ...position, ...iconsDissapear }}
    >
      <div className="flex flex-col items-center justify-center text-primary hidden xl:flex">
        <i className={`${icon} text-7xl `}></i>
        <p className="text-xl">{text}</p>
      </div>
    </animated.div>
  );
}
