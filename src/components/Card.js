import React from "react";
const assetsPath = process.env.PUBLIC_URL + "/assets/";

export default function Card() {
  return (
    <div className="static">
      <div className="absolute right-20 -top-20">
        <img
          src={`${assetsPath}image-jeremy-small.png`}
          alt="Jeremy Robinson"
        />
      </div>
      <div className="flex flex-col text-center bg-[#172339] text-white justify-end h-[748px] space-y-9 pb-20 rounded-2xl">
        <div className="flex justify-center">
          <img
            src={`${assetsPath}pattern-curved-line-2.svg`}
            alt="Curved Line"
          />
        </div>
        <div className="text-4xl">
          It just <span className="font-bold">works.</span>
        </div>
        <div className="px-8 text-lg">
          “I really like how it is an all-in-one solution that handle many of
          the tasks that you would normally need separate tools to do the same
          job. This thing is a miracle worker.”
        </div>
        <div>
          <div className="text-lg font-bold">Jeremy Robinson</div>
          <div className="text-[16px] tracking-[2.5px] uppercase">
            CMO, Fylo
          </div>
        </div>
      </div>
    </div>
  );
}
