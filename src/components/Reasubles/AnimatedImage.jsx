import React from 'react'
import { animated } from "@react-spring/web";
export default function AnimatedImage({image, animation}) {
    return (
        <animated.img src={image} alt={image} className="w-full" style={animation}/>
    )
}
