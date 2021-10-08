import React from 'react'
import FeatureItem from './FeatureItem'
import {data} from './Items'

export default function Features() {
    return (
        <div className="w-screen md:h-screen flex flex-col items-center justify-center md:gap-y-4 bg-gray-100">
             <h1 className="text-5xl font-bold ">About</h1>
             <div className="w-10/12 h-3/6  p-4 flex flex-col md:flex-row gap-x-5">
               {data.map(item => <FeatureItem key={item.title} {...item} />)}
             </div>
        </div>
    )
}
