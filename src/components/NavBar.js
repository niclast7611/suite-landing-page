import React from "react";

export default function NavBar() {
  return (
    <div className="flex flex-row justify-between px-3 py-5 md:w-10/12 md:px-0 md:mx-auto ">
      <div className="text-[32px] font-bold">suite</div>
      <div>
        <button
          type="button"
          className="w-48 h-12 font-bold border border-black rounded-md hover:bg-black hover:text-white"
        >
          Request Beta Access
        </button>
      </div>
    </div>
  );
}
