import React from "react";

const HeaderComponent = () => {
  return (
    <nav className="w-1/4 bg-gray-800 text-white flex flex-col items-center justify-center" aria-label="Sidebar">
      <a
        href="#"
        className='flex items-center px-3 py-2 border-b'>
        <span className="truncate">We</span>
      </a>
      <a
        href="#"
        className='flex items-center px-3 py-2 border-b'>
        <span className="truncate">Are</span>
      </a>
      <a
        href="#"
        className='flex items-center px-3 py-2 border-b'>
        <span className="truncate">Creatively </span>
      </a>
      <a
        href="#"
        className='flex items-center px-3 py-2 border-b'>
        <span className="truncate">Yours</span>
      </a>
    </nav>
  );
};

export default HeaderComponent;

