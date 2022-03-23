import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="flex items-center mb-16">
       <svg version="1.0" xmlns="http://www.w3.org/2000/svg"
            className="h-10  w-10  fill-[#664de5]"
            fill="currentColor">

        <g transform="translate(0.000000,43.000000) scale(0.100000,-0.100000)"
            fill="#664de5" stroke="none">
            <path d="M70 265 c0 -97 16 -153 52 -182 24 -20 96 -36 132 -29 l36 7 -30 38
            c-23 28 -33 54 -40 99 -10 76 -32 114 -80 141 -67 37 -70 33 -70 -74z"/>
            <path d="M280 250 c-11 -11 -20 -33 -20 -49 0 -37 40 -96 65 -96 24 0 55 56
            55 98 0 32 -31 67 -60 67 -11 0 -29 -9 -40 -20z"/>
        </g>
      </svg>
      <span className="text-4xl font-bold ml-1">Eden</span>
    </header>
  );
};

export default Header;