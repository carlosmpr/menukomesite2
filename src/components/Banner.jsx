import React from 'react'
import Half from '../assets/icons/iphone.svg'
import FlyingIcons from './Reasubles/FlyingIcons'
export default function Banner() {
    return (
        <div className="w-screen relative  flex flex-col items-center justify-center  ">
           <FlyingIcons text="House Favorites" position={{left:'10%'}} icon={`fas fa-heart`}/>
           <FlyingIcons text="Chef Favorites" position={{right:'10%'}} icon={`fas fa-utensils`}/>
           <FlyingIcons text="User likes" position={{left:'10%' , bottom:'10%'}} icon={`fas fa-thumbs-up`}/>
            <div className={"text-center"} >
            <h1 className="text-3xl md:text-6xl lg:text-7xl font-bold ">Welcome to <span className="text-primary">MenuKome</span></h1>
            <h3 className="text-xl  md:text-2xl lg:text-3xl font-regular">Smart menu for Restaurants</h3>
            </div>
            <div className="relative w-full  md:w-9/12  xl:w-2/5 ">
            <img src={Half} alt={Half} className="w-full "/>
            <div className="absolute   bg-red-400" style={{left:'21%', top:'22%', width:'70%', height:"77%"}}></div>
            </div>
        </div>
    )
}




