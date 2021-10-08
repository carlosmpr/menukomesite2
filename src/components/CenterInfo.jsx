import React from 'react'
import Iphone from '../assets/icons/full.svg'
import Card from './Reasubles/Card'
export default function CenterInfo() {
    return (
        <div className=" relative w-screen md:h-screen flex flex-col items-center justify-center gap-y-4 p-4">
        <h1 className="
        text-2xl text-center md:text-3xl font-bold ">Use The Amazon Recommendations Secret <span className="text-primary">to sell more  </span></h1>
        <h3 className="md:text-2xl font-regular">Side dishes, Drinks , Similar plates and more</h3>
        {/* <Card position={{left:'10%'}} title="Suggest Drinks" description="Help your customers by showing recomendations of drinks that best fit with the plate"/>
        <Card position={{right:'10%'}} title="Side dish" description="Help your customers by showing recomendations of drinks that best fit with the plate"/>
        <Card position={{right:'10%', bottom:'10%'}} title="Similar Plates" description="Help your customers by showing recomendations of drinks that best fit with the plate"/> */}
        <div className="relative md:w-1/4">
        <img src={Iphone} alt={Iphone} className="w-full"/>
        <div className="absolute   bg-red-400" style={{left:'19.2%', top:'10%', width:'61.5%', height:"81%"}}></div>
        </div>
    </div>
    )
}
