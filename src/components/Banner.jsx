import React from 'react'
import Half from '../assets/icons/iphone.svg'
import FlyingIcons from './Reasubles/FlyingIcons'
export default function Banner() {
    return (
        <div className="w-screen relative h-screen flex flex-col items-center justify-center gap-y-4 ">
           <FlyingIcons text="House Favorites" position={{left:'10%'}} icon={`fas fa-heart`}/>
           <FlyingIcons text="Chef Favorites" position={{right:'10%'}} icon={`fas fa-utensils`}/>
           <FlyingIcons text="User likes" position={{left:'10%' , bottom:'10%'}} icon={`fas fa-thumbs-up`}/>
            <h1 className="text-7xl font-bold ">Welcome to <span className="text-primary">MenuKome</span></h1>
            <h3 className="text-3xl font-regular">Smart menu for Restaurants</h3>
            <img src={Half} alt={Half} className="w-5/12"/>
    
        </div>
    )
}




