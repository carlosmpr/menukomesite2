import React from 'react'
import Menu from '../assets/images/menu.png'
import Confuse from '../assets/icons/confuse.svg'
export default function DigitalMenu() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center">
            <h3 className="text-5xl text-center font-semibold">is this your Digital Menu?</h3>
            <div className="w-full flex p-4 items-center justify-evenly">
            <div className="w-2/5">
            <img src={Menu} alt={Menu} className="w-full"/>
            </div>
            <div className="w-2/5">
            <img src={Confuse} alt={Confuse} className="w-4/5"/>
            </div>
            </div>
           
        </div>
    )
}
