import React from "react";
import Half from "../assets/icons/iphone.svg";
import FlyingIcons from "./Reasubles/FlyingIcons";
import Demo from "../assets/images/demo.png";
import { useSpring, animated } from "@react-spring/web";
export default function Banner() {
  const styles = useSpring({
    delay: 500,
    to: [
      {
        opacity: 1,
        y: 0,
      },
    ],
    from: { opacity: 0, y: 100 },
  });

  const textAnimation = useSpring({
    delay: 200,
    from: { opacity: 0 },
    to: { opacity: 1 },
  });

  
  return (
    <div className="w-screen relative  flex flex-col items-center justify-center mt-10 md:mt-20">
      <FlyingIcons
        text="House Favorites"
        position={{ left: "10%" }}
        icon={`fas fa-heart`}
      />
      <FlyingIcons
        text="Chef Favorites"
        position={{ right: "10%" }}
        icon={`fas fa-utensils`}
      />
      <FlyingIcons
        text="User likes"
        position={{ left: "10%", bottom: "10%" }}
        icon={`fas fa-thumbs-up`}
      />
      <animated.div className={"text-center"} style={textAnimation}>
        <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold ">
          Welcome to <span className="text-primary">MenuKome</span>
        </h1>
        <h3 className="text-xl  md:text-2xl lg:text-3xl font-regular">
          Smart menu for Restaurants
        </h3>
      </animated.div>
      <div className="relative w-full  md:w-9/12  xl:w-2/5  overflow-hidden">
        <animated.img
          src={Half}
          alt={Half}
          className="w-full "
          style={styles}
        />
        <div
          className="absolute  "
          style={{ left: "21%", top: "22%", width: "70%", height: "77%" }}
        >
          <animated.img
            src={"https://menukome.s3.amazonaws.com/menupresent.gif"}
            alt={Demo}
            className="w-full"
            style={styles}
          />
        </div>
      </div>
    </div>
  );
}
