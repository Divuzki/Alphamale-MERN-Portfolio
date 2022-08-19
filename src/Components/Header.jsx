import React from "react";
import Logo from "../svgs/logo.svgr.svg";
function Header() {
  return (
    <header className="py-6 flex fixed w-full bg-[#000000a3] backdrop-blur-md z-40">
      <div className="ml-4 md:ml-[4rem]">
        <Logo className="w-8 h-8" />
      </div>
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
        <div className="text-lg font-bold hidden md:block">Datalphamale Studio</div>
        <div className="text-lg font-bold w-full md:hidden text-center mr-[2.5rem]">Datalphamale Studio</div>
        <div className="hidden md:flex space-x-12 items-center">
          <a href="#" className="text-selected-text">
            Home
          </a>
          <a href="#work">My work</a>
          <a href="#skills">Skills</a>
          <a href="#hire">
            <button className="px-6 py-2 bg-theme font-bold text-[11px]">
              Make Enquiries
            </button>
          </a>
        </div>
        <div className="md:hidden">
          <svg
            width="26"
            height="18"
            viewBox="0 0 26 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M13 17.5H0.25V14.6667H13V17.5ZM25.75 10.4167H0.25V7.58333H25.75V10.4167ZM25.75 3.33333H13V0.5H25.75V3.33333Z"
              fill="white"
            />
          </svg>
        </div>
      </div>
    </header>
  );
}

export default Header;
