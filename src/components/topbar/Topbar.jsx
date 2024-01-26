import React, { useRef } from "react";
import { NavLink } from "react-router-dom";

import logo from "../../assets/images/texaslogo-01.png";

const nav__links = [
  {
    path: "/home",
    display: <span className="text-[blue]">Home</span>,
  },
  {
    path: "/about",
    display: "About Us",
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
  // {
  //   path: "/resources",
  //   display: "Members Portal",
  // },
  // {
  //   path: "/upcoming-ccus",
  //   display: "Upcoming CCUs",
  // },
  {
    path: "/contact-us",
    display: "Contact Us",
  },
];

export default function Topbar() {
  const menuRef = useRef(null);
  const toggleMenu = () => menuRef.current.classList.toggle("show__menu");

  return (
    <div className="h-[75px] w-full flex items-center justify-center fixed top-0 z-[999] bg-[#e0e6f6] rounded-2xl shadow-md backdrop-blur-[15px] border border-solid border-[#0000004d]">
      <div className="absolute left-0 ">
        <div className="w-[70px] ml-[12px]">
          <img
            className="border-[2px] border-[#d06767] rounded-3xl pr-1"
            src={logo}
            alt=""
          />
        </div>
      </div>

      <div
        className="navigation ml-[64px] justify-center"
        ref={menuRef}
        onClick={toggleMenu}
      >
        <ul className="flex mb-0 items-center gap-1">
          {nav__links.map((item, index) => (
            <li className="nav__item" key={index}>
              <NavLink
                to={item.path}
                className={(navClass) =>
                  navClass.isActive ? "active__link" : ""
                }
              >
                {item.display}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="absolute right-6 top-6 font-semibold hover:shadow hover:text-[blue]">
          <a href="/login" className="">
            members portal
          </a>
        </div>
      </div>
    </div>
  );
}
