import React, { useRef } from "react";
// import logo from "../../assets/images/texas.png";
import logo from "../../assets/images/texaslogo.png";

import { NavLink } from "react-router-dom";

const nav__links = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/about",
    display: "About",
  },

  {
    path: "/members",
    display: "Members",
  },
  {
    path: "/ptamacs",
    display: (
      <>
        <span className="text-[red]">* </span>
        PTA MACS
      </>
    ),
  },
  {
    path: "/resources",
    display: "Resources",
  },
  {
    path: "/upcoming-ccus",
    display: "Upcoming CCUs",
  },
];

export default function Topbar() {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");
  return (
    <div className="h-[75px] w-full flex items-center justify-center sticky top-0 z-[999] bg-[#27335933] rounded-2xl shadow-md backdrop-blur-[15px] border border-solid border-[#0000004d]">
      <div className="absolute left-0">
        <div className="w-[70px] ml-[12px]">
          <img className="border-[2px] border-[#d06767] rounded-3xl pr-1 cursor-pointer" src={logo} alt="" />
        </div>
      </div>

      <div className="navigation ml-[64px]" ref={menuRef} onClick={toggleMenu}>
        <ul className="flex mb-0 items-center gap-3">
          {nav__links.map((item, index) => (
            <li className="nav__item" key={index}>
              <NavLink to={item.path} className={(navClass) => (navClass.isActive ? "active__link" : "")}>
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
