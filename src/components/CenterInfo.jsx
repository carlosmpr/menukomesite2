import React from "react";
import Iphone from "../assets/icons/full.svg";
import Card from "./Reasubles/Card";
import { useSpring, animated } from "@react-spring/web";
export default function CenterInfo() {
  const animation = useSpring({
    from: { rotate: 0 },
    to: [{ rotate: -25 }, { rotate: 25 }, { rotate: 0 }],
  });
  return (
    <div className=" relative w-screen md:h-screen flex flex-col items-center justify-center gap-y-4 p-4">
      <h1
        className="
        text-2xl text-center md:text-3xl font-bold "
      >
        Use The Amazon Recommendations Secret{" "}
        <span className="text-primary">to sell more </span>
      </h1>
      <h3 className="md:text-2xl font-regular">
        Side dishes, Drinks , Similar plates and more
      </h3>
      <Card
        position={{ left: "10%" }}
        title="Suggest Drinks"
        description="Help your customers by showing recomendations of drinks that best fit with the plate"
      />
      <a
        href="https://menukomedemomenu.s3.amazonaws.com/index.html"
        className="hidden md:inline absolute p-4 bg-yellow-400 rounded-md cursor-pointer shadow-md text-2xl"
        style={{ left: "15%", bottom: "15%" }}
      >
        View demo{" "}
      </a>

      <Card
        position={{ right: "10%" }}
        title="Side dish"
        description="Sell more with side dishes that acompany your plates"
      />

      <Card
        position={{ right: "10%", bottom: "10%" }}
        title="Similar Plates"
        description="Suggest similar plates to your customers "
      />
      <animated.div className="relative md:w-1/4" style={animation}>
        <img src={Iphone} alt={Iphone} className="w-full" />
        <div
          className="absolute  "
          style={{ left: "19.2%", top: "15%", width: "61.5%", height: "90%" }}
        >
          <img
            src="https://menukome.s3.amazonaws.com/menupresent2.gif"
            className="w-full"

            alt="gift"
          />
        </div>
      </animated.div>
    </div>
  );
}
