import React from 'react'
import Iphone from '../assets/icons/full.svg'
export default function CenterInfo() {
    return (
        <div className=" relative w-screen h-screen flex flex-col items-center justify-center gap-y-4 ">
        <h1 className="text-4xl font-bold ">Use The Amazon Recommendations Secret <span className="text-primary">to sell more  </span></h1>
        <h3 className="text-2xl font-regular">Side dishes, Drinks , Similar plates and more</h3>
        <img src={Iphone} alt={Iphone} className="w-1/4"/>
        <div className="absolute   bg-red-400" style={{left:'42.2%', top:'30%', width:'15.6%', height:"55%"}}></div>
    </div>
    )
}
