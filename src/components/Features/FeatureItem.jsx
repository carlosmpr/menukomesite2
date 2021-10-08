import React from 'react'

export default function FeatureItem({text, title , icon}) {
    return (
        <div className="bg-yellow-300 md:w-1/4 md:h-full flex flex-col items-center justify-center shadow-md opacity-50 p-4 md:gap-y-3   rounded-xl">
        <div className="w-5/12 h-2/6 bg-white flex items-center justify-center rounded-full shadow-md">
        <i class={icon}></i>
        </div>
        <h5 className="font-bold text-xl">{title}</h5>
        <p>{text}</p>
    </div>
    )
}
