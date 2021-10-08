import React from 'react'

export default function SocialBadge({icon}) {
    return (
        <div className="bg-white flex p-4 items-center justify-center rounded-full shadow-md text-primary cursor-pointer">
        <i className={icon}></i>
        </div>
    )
}
