import React from "react";
import Logo from "../../assets/images/menukome.png";
import NavbarItem from "./NavbarItem";
import { navbarItems } from "./Items";


export default function Navbar() {
  return (
    <div className="w-screen h-14 flex p-4 shadow-md items-center">
      <div className="flex-1">
        <img src={Logo} alt="logo" className="w-1/6" />
      </div>
      <div className="flex gap-x-8">
        {navbarItems.map((items) => (
          <NavbarItem key={items.text} {...items} />
        ))}
      </div>
    </div>
  );
}
