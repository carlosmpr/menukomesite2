import React from 'react'
import SocialBadge from './Reasubles/SocialBadge'
const styles = {
    input:"md:w-2/6 p-4 shadow-md rounded-lg focus:outline-none ring-yellow-200 focus:ring focus:border-yellow-300"
}
export default function Contact() {
    return (
        <div className="w-screen h-screen flex flex-col items-center justify-center gap-y-6 bg-gray-100 ">
        <h1 className="text-2xl md:text-4xl font-bold "> Start your Menu Transformation </h1>
        
        <div className="w-2/6 flex gap-x-4  items-center justify-center">
       <SocialBadge icon="text-2xl md:text-4xl fab fa-facebook" />
       <SocialBadge icon="text-2xl md:text-4xl fab fa-instagram" />
       <SocialBadge icon="text-2xl md:text-4xl fas fa-envelope" />
       <SocialBadge icon="text-2xl md:text-4xl fab fa-whatsapp" />
       <SocialBadge icon="text-2xl md:text-4xl fab fa-tiktok" />
        </div>
        <input className={styles.input} placeholder="Email"/>
        <input className={styles.input} placeholder="Name"/>
        <input className={styles.input} placeholder="Short Message"/>
       <div className="bg-yellow-400 p-4 rounded-md shadow-md cursor-pointer">
            <p className="text-lg">Submit</p>
       </div>
    </div>
    )
}




