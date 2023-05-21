import React, { useState } from "react";
import { navLinks } from "../constants";
import { logo, close, menu } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="py-6 flex justify-between items-center">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="sm:flex hidden list-none  justify-end items-center ">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`text-white text-[16px]
          ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
          ${active === nav.title ? "text-white" : "text-dimWhite"}
          cursor-pointer
          `}
            onClick={() => setActive(nav.title)}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex justify-end items-center">
        <img
          src={toggle ? close : menu}
          alt=""
          onClick={() => setToggle((prev) => !prev)}
          className="w-[28px] h-[28px] "
        />

        <div
          className={`p-6 absolute top-20 right-0 bg-black-gradient mx-4 my-2 min-w-[140px] rounded-xl sidebar
        ${!toggle ? "hidden" : "flex"}`}
        >
          <ul className="flex-col list-none flex justify-end items-start flex-1 ">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`text-white text-[16px]
          ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}
          ${active === nav.title ? "text-white" : "text-dimWhite"}
          `}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
