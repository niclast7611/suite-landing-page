import React from "react";
const assetsPath = process.env.PUBLIC_URL + "/assets/";

export default function Footer() {
  return (
    <div className="flex flex-col space-y-7 bg-[#F3EDE7] bottom-0 h-60 py-9 align-middle items-center">
      <div className="text-[28px] leading-8 font-[900]">suite</div>
      <div className="text-[15px] leading-8">Copyright - Suite</div>
      <div className="flex flex-row justify-center space-x-6">
        <img src={`${assetsPath}icon-facebook.svg`} alt="Facebook Logo" />
        <img src={`${assetsPath}icon-twitter.svg`} alt="Twitter Logo" />
        <img src={`${assetsPath}icon-instagram.svg`} alt="Instagram Logo" />
      </div>
    </div>
  );
}
