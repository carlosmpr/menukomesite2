import React from "react";

export default function Card({ title, description, position }) {
  return (
    <div className="absolute hidden lg:inline w-1/5  shadow-md rounded-3xl " style={position}>
      <div className="w-full flex flex-col items-center justify-center p-4 space-y-3">
        <h1 className="font-bold">{title}</h1>
        <p className="text-center">{description}</p>
        <div className="flex space-x-3 text-sm text-primary">
          <p>User Favorites</p>
          <p>House Recomended</p>
        </div>
      </div>
    </div>
  );
}
