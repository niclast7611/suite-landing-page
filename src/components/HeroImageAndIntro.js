import React from "react";
import Stats from "./Stats";
const assetsPath = process.env.PUBLIC_URL + "/assets/";

export default function HeroImageAndIntro() {
  return (
    <>
      <div className="flex flex-col w-10/12 mx-auto mt-8 mb-12 space-y-9">
        <div className="text-4xl ">
          <img
            className="pb-2 ml-36 w-36"
            src={`${assetsPath}pattern-curved-line-1.svg`}
            alt="Black Curved Line"
          />
          A <span className="font-bold">super solution</span> for your
          <span className="font-bold"> business.</span>
        </div>
        <div className="text-base text-[#49566D]">
          Our marketing and sales automations help you scale your outreach to
          get more leads for your company.
        </div>
        <button
          className="w-64 h-16 text-lg font-bold text-white bg-black border border-black rounded-md hover:bg-gradient-to-br from-[#A060FF] via-[#CB30E3] to-[#FFA84E]"
          type="button"
        >
          Request Beta Access
        </button>
        <div>
          <img src={`${assetsPath}image-hero-landscape.png`} alt="Phone Hero" />
        </div>
      </div>
      <Stats />
    </>
  );
}
