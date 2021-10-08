import React from 'react'
import FeatureItem from './FeatureItem'
import {data} from './Items'

export default function Features() {
    return (
        <div className="w-screen md:h-screen flex flex-col items-center justify-center  md:gap-y-4 bg-gray-100 p-4">
             <h1 className="text-5xl font-bold ">About</h1>
             <div className="lg:w-10/12 lg:h-3/6  flex flex-col md:flex-row md:gap-x-2 lg:gap-x-5 space-y-4 md:space-y-0 p-4">
               {data.map(item => <FeatureItem key={item.title} {...item} />)}
             </div>
        </div>
    )
}
