import React from "react";
import Stats from "./Stats";
const assetsPath = process.env.PUBLIC_URL + "/assets/";

export default function HeroImageAndIntro() {
  return (
    <>
      <div className="lg:mr-72 lg:ml-72 lg:flex lg:flex-row lg:mb-20">
        <div className="flex flex-col w-11/12 mx-auto mt-8 mb-12 md:w-11/12 md:mb-16 space-y-9 md:flex-row lg:justify-around">
          <div className="space-y-9 md:absolute md:z-50 md:mt-20 lg:ml-16">
            <div className="text-4xl md:text-[56px] md:leading-none md:w-4/6 lg:w-7/12 lg:text-6xl">
              <img
                className="pb-2 ml-36 w-36 md:w-48 md:ml-60 md:pb-4 lg:w-56 lg:ml-64 "
                src={`${assetsPath}pattern-curved-line-1.svg`}
                alt="Black Curved Line"
              />
              A <span className="font-bold">super solution</span> for your
              <span className="font-bold"> business.</span>
            </div>
            <div className="text-base text-[#49566D] md:w-1/2 lg:w-1/3">
              Our marketing and sales automations help you scale your outreach
              to get more leads for your company.
            </div>
            <button
              className="w-64 h-16 text-lg font-bold text-white bg-black border border-black rounded-md hover:bg-gradient-to-br from-[#A060FF] via-[#CB30E3] to-[#FFA84E] hover:border-transparent"
              type="button"
            >
              Request Beta Access
            </button>
          </div>
          <div className="md:flex md:ml-auto lg:ml-48">
            <img
              className="md:hidden"
              src={`${assetsPath}image-hero-landscape.png`}
              alt="Phone Hero"
            />
            <img
              className="md:relative hidden md:block md:-z-50 md:w-[281px] md:h-auto"
              src={`${assetsPath}image-hero-portrait.png`}
              alt="Phone Hero"
            />
          </div>
        </div>

        <Stats />
      </div>
    </>
  );
}
