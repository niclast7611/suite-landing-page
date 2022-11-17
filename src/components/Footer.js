import React from "react";
const assetsPath = process.env.PUBLIC_URL + "/assets/";

export default function Footer() {
  return (
    <div className="flex flex-col space-y-7 bg-[#F3EDE7] h-60 py-9 align-middle items-center md:flex-row md:justify-around">
      <div className="text-3xl font-bold">suite</div>
      <div className="text-sm">Copyright - Suite</div>
      <div className="flex flex-row justify-center space-x-6">
        <img
          className="hover:opacity-60 hover:cursor-pointer"
          src={`${assetsPath}icon-facebook.svg`}
          alt="Facebook Logo"
        />
        <img
          src={`${assetsPath}icon-twitter.svg`}
          className="hover:opacity-60 hover:cursor-pointer"
          alt="Twitter Logo"
        />
        <img
          src={`${assetsPath}icon-instagram.svg`}
          className="hover:opacity-60 hover:cursor-pointer"
          alt="Instagram Logo"
        />
      </div>
    </div>
  );
}
