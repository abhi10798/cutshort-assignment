import React, { useState } from "react";
import "./SelectedCard.css"

const SelectedCard = () => {
  const [selectedCard, setSelectedCard] = useState(1);
  return (
    <div className="flex items-center justify-between select-none mb-5">
      <div
        onClick={() => setSelectedCard(1)}
        className={`card h-[160px] w-[160px] p-4 flex justify-between flex-col 
        md:hover:bg-gray-100  border  rounded-md cursor-pointer
        ${selectedCard === 1 ? "border-[#664de5]" : ""}
        `}
      >
        <div>
          <svg  xmlns="http://www.w3.org/2000/svg"
              className={`h-6 w-6 ${
                selectedCard === 1 ? "fill-[#664de5]" : "fill-black"
              }`}
              viewBox="0 0 25 26"
              fill="currentColor"
              >

              <g transform="translate(0.000000,31.000000) scale(0.100000,-0.100000)"
              fill={`${selectedCard === 1 ? "fill-[#664de5]" : "fill-black"}`} 
              stroke="none">
              <path d="M60 240 c-24 -24 -25 -48 -4 -78 31 -44 104 -16 104 40 0 24 -35 58
              -60 58 -11 0 -29 -9 -40 -20z"/>
              <path d="M64 108 c-18 -8 -44 -46 -44 -63 0 -3 36 -5 80 -5 83 0 94 7 67 41
              -15 19 -51 39 -69 38 -7 0 -23 -5 -34 -11z"/>
              </g>
          </svg>
        </div>
        <p className="font-semibold">For Myself</p>
        <p className="text-sm text-gray-400">
          Write better. Think more cleary. Stay organized.
        </p>
      </div>
      <div
        onClick={() => setSelectedCard(2)}
        className={`card h-[160px] w-[160px] p-4 flex justify-between flex-col 
        md:hover:bg-gray-100  border  rounded-md cursor-pointer
        ${selectedCard === 2 ? "border-[#664de5]" : ""}
        `}
      >
        <div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className={`h-6 w-6 ${
              selectedCard === 2 ? "fill-[#664de5]" : "fill-black"
            }`}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
        </div>
        <p className="font-semibold">With my team</p>
        <p className="text-sm text-gray-400">
          Wikis, docs, tasks & projects, all in one place.
        </p>
      </div>
    </div>
  );
};

export default SelectedCard