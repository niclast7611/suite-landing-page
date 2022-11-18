import React from "react";

export default function Stats() {
  const statsObject = [
    {
      number: "2K+",
      word: "Companies",
    },
    {
      number: "8",
      word: "Languages",
    },
    {
      number: "1.2M",
      word: "Leads",
    },
  ];

  return (
    <div className="flex flex-col mb-56 text-center space-y-7 md:space-y-0 md:flex-row md:justify-evenly md:mb-60 lg:flex-col lg:mb-0 lg:text-left">
      {statsObject.map((value) => {
        return (
          <div className="space-y-2">
            <div className="text-5xl font-bold">{value.number}</div>
            <div className="text-sm tracking-[2.5px] uppercase">
              {value.word}
            </div>
          </div>
        );
      })}
    </div>
  );
}
