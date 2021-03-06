import React from 'react'
import { useSpring, animated } from "@react-spring/web";
export default function AnimatedDiv({image, pic}) {
    const rotate = useSpring({
        from:{rotateY:0,rotateZ:0, rotateX:0  },
        to:[
            {rotateY:-15,rotateZ:5,rotateX:10},
            {rotateY:15,rotateZ:-5,rotateX:-10},
            {rotateY:-15,rotateZ:5,rotateX:10},
            {rotateY:0,rotateZ:0, rotateX:0  }
        ]
    })
    return (
        <animated.div className=" w-full md:w-2/5 relative" style={rotate}>
        <div
          className="absolute md:hidden  h-4/5 bg-red-400 overflow-hidden"
          style={{ left: "20%", top: "10%", width: "60%" }}
        >
          <img src={pic} alt={pic} className="w-full" />
        </div>
        <div
          className="absolute hidden md:inline w-6/12 h-4/5 bg-red-400 overflow-hidden"
          style={{ left: "15%", top: "10%" }}
        >
          <img src={pic} alt={pic} className="w-full" />
        </div>
        <img src={image} alt={image} className="md:w-4/5" />
      </animated.div>
    )
}
