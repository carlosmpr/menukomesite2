import React, { useState } from "react";

export default function SocialBadge({ icon, url, info }) {
  const [show, setShow] = useState(false);
  return (
    <div className="flex flex-col">
      <a
        href={url}
        className="bg-white hover:bg-yellow-200 hover:text-white flex p-4 items-center justify-center rounded-full shadow-md text-primary cursor-pointer"
        onClick={() => setShow(!show)}
      >
        <i className={icon}></i>
      </a>
      {show ? <p>{info}</p> : null}
    </div>
  );
}
