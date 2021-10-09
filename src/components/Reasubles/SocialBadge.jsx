import React from 'react'

export default function SocialBadge({icon, url}) {
    return (
        <a href={url} className="bg-white flex p-4 items-center justify-center rounded-full shadow-md text-primary cursor-pointer">
        <i className={icon}></i>
        </a>
    )
}
