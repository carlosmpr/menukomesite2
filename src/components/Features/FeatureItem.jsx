import React from 'react'

export default function FeatureItem({text, title , icon}) {
    return (
        <div className="bg-yellow-300 w-1/4 h-full flex flex-col items-center justify-center shadow-md opacity-30 p-4 gap-y-3 rounded-xl">
        <div className="w-5/12 h-2/6 bg-white flex items-center justify-center rounded-full shadow-md">
        <i class={icon}></i>
        </div>
        <h5 className="font-bold text-xl">{title}</h5>
        <p>{text}</p>
    </div>
    )
}
