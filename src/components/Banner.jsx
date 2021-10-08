import React from 'react'
import Half from '../assets/icons/iphone.svg'
export default function Banner() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-4 ">
            <h1 className="text-7xl font-bold ">Welcome to <span className="text-primary">MenuKome</span></h1>
            <h3 className="text-3xl font-regular">Smart menu for Restaurants</h3>
            <img src={Half} alt={Half} className="w-5/12"/>
        </div>
    )
}
