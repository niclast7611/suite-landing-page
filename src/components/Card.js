import React from "react";
const assetsPath = process.env.PUBLIC_URL + "/assets/";

export default function Card() {
  return (
    <div className="relative mx-auto md:w-11/12 lg:w-9/12">
      <div className="absolute z-50 -top-44 left-20 md:left-64 lg:-top-12 lg:left-24 ">
        <img
          className="block lg:hidden"
          src={`${assetsPath}image-jeremy-small.png`}
          alt="Jeremy Robinson"
        />
        <img
          className="hidden lg:block"
          src={`${assetsPath}image-jeremy-large.png`}
          alt="Jeremy Robinson"
        />
      </div>
      <div className="absolute z-0 hidden -top-44 left-28 md:block lg:top-24 lg:left-0">
        <img src={`${assetsPath}pattern-blur.svg`} alt="Purple Blur" />
      </div>
      <div className="flex flex-col text-center bg-[#172339] text-white justify-end h-[748px] md:h-[684px] space-y-10 pb-20 rounded-2xl lg:h-[542px]">
        <div className="space-y-10 lg:w-4/12 lg:ml-auto lg:my-auto lg:text-left lg:mr-20">
          <div className="">
            <img
              src={`${assetsPath}pattern-curved-line-2.svg`}
              alt="Curved Line"
            />
          </div>
          <div className="text-4xl lg:text-5xl">
            It just <span className="font-bold">works.</span>
          </div>
          <div className="px-8 text-lg lg:px-0">
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
    </div>
  );
}
