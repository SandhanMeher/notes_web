import React from "react";
import notes from "../assets/notes.gif";

export default function TitleName() {
  return (
    <div className=" outline outline-2 hover:outline-cyan-300 ml-1 p-5 mb-5 rounded-lg">
      <div className="scroll-m-11 text-4xl font-extrabold  tracking-tight lg:text-5xl text-white sm:flex sm:gap-3 sm:justify-center">
        <span className=" text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 via-slate-300 to-green-700 ">
          WELCOME
        </span>
        <div className=" flex flex-row gap-5">
          <span> TO NOTES </span>
          <img className="h-12" src={notes} alt="" />
        </div>
      </div>
    </div>
  );
}
