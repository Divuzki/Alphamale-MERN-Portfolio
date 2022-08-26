import React from "react";
import { Link } from "react-router-dom";
import Logo from "../svgs/logo.svgr.svg";
import MobileHeader from "./MobileHeader";
function Header({ indexPage }) {
  const links = [
    {
      name: "Home",
      to: "",
    },
    {
      name: "My Work",
      to: "work",
    },
    {
      name: "Skills",
      to: "skills",
    },
    {
      name: "Make Enquiries",
      to: "pages/hire",
      button: true,
      className: "px-6 py-2 bg-theme font-bold text-[11px]",
    },
  ];
  return (
    <header className="pb-6 pt-4 flex top-0 fixed w-full bg-[#000000a3] backdrop-blur-md z-40">
      <Link to="/" className="ml-4 md:ml-[4rem] flex items-center gap-4 md:w-full">
        <Logo className="w-8 h-8" />
        <div to="/" className="text-lg font-bold hidden md:block">
          Datalphamale Studio
        </div>
      </Link>
      {/* {__SNOWPACK_ENV__.SNOWPACK_PUBLIC_ADMIN_PASSWORD} */}
      {/*  */}
      <Link
        to="/"
        className="text-lg font-bold w-full h-full -top-[0.4375rem] absolute md:hidden text-center flex justify-center items-center"
      >
        Datalphamale Studio
      </Link>
      {/*  */}
      <div className="flex justify-end md:px-14 px-0 lg:px-24 md:w-full">
        <div className="hidden md:flex space-x-12 items-center">
          {links.map((n, idx) => {
            return n.button === false ? (
              <React.Fragment key={idx}>
                {indexPage ? (
                  <React.Fragment>
                    <a href={`#${n.to}`} className="hover:text-selected-text">
                      {n.name}
                    </a>
                  </React.Fragment>
                ) : (
                  <React.Fragment>
                    <Link to={`/#${n.to}`} className="hover:text-selected-text">
                      {n.name}
                    </Link>
                  </React.Fragment>
                )}
              </React.Fragment>
            ) : (
              <Link to={`/${n.to}`}>
                <button className={n.className}>{n.name}</button>
              </Link>
            );
          })}
        </div>
        {/* Mobile Header */}
        <div className="md:hidden">
          <MobileHeader links={links} />
        </div>
      </div>
    </header>
  );
}

export default Header;
