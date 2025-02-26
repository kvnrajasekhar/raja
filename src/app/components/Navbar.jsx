"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  {
    title: "About",
    path: "#about",
  },
  {
    title:"Skills",
    path:"#skills"
  },
  {
    title: "Projects",
    path: "#projects",
  },
  {
    title: "Contact",
    path: "#contact",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className=" top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100 py-2 border-b border-[#33353F]">
        <div className="flex container items-center justify-between mx-auto px-4 py-0">
          {/* Logo on the left */}
          <Link href={"/"} className="text-2xl md:text-3xl text-white font-semibold no-underline">
            Portfolio
          </Link>

          {/* Mobile menu toggle */}
          <div className="mobile-menu block md:hidden">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>

          {/* Navigation Links on the right */}
          <div className="menu hidden md:block md:w-auto px-6">
            <ul className="flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0 py-0">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        {navbarOpen ? <MenuOverlay links={navLinks} /> : null}
      </nav>
    </>
  );
};

export default Navbar;
