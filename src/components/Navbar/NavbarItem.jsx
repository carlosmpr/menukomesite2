import React from 'react'

export default function NavbarItem({text, url}) {
    return (
        <a href={url} className="font-medium text-lg">{text}</a>
    )
}
