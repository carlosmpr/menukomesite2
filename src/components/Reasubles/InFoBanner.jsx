import React from 'react'

export default function InFoBanner({text}) {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100">
            <div className="w-1/2">
            <h3 className="text-3xl text-center font-semibold">{text}</h3>
            </div>
     
        </div>
    )
}
