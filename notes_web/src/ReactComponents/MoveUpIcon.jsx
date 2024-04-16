import React from 'react'
import { Link, animateScroll as scroll } from "react-scroll";

export default function MoveUpIcon() {
  return (
    <div className="fixed bottom-5 w-screen ">
          <Link
            activeClass="active"
            to="a"
            spy={true}
            smooth={true}
            offset={-70}
            duration={900}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-7 h-7 text-white font-bold mx-auto p-1 rounded-full z-50 animate-bounce lg:h-10  lg:w-10 outline-1 outline outline-white  bg-slate-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 15.75 7.5-7.5 7.5 7.5"
              />
            </svg>
          </Link>
        </div>
  )
}
