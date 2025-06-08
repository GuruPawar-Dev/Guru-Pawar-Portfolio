import React, { useState } from "react";
import { RiCloseLine, RiMenu2Line } from "@remixicon/react";
import logo from "../assets/logo pic.jpg"

const Navbar = () => {
  const [menu, openMenu] = useState(false);
  const [showMenu, setShowmenu] = useState(true);

  return (
    <div className="">
      <nav className="max-w-6xl mx-auto g">
        <div className="flex justify-between items-center px-6 py-3 bg-gradient-to-r from-black via-gray-900 to-blue-900 relative">

          {/* Logo */}
          <div className="flex items-center gap-2">
            <img
              src={logo} // Replace with your image path
              alt="logo"
              className="w-10 h-10 rounded-full"
            />
          </div>

          {/* Navigation Links */}
          <ul
            className={`${
              menu ? "block" : "hidden"
            } md:flex md:gap-8 font-semibold text-white text-sm md:text-base 
              absolute top-20 md:top-0 md:relative left-0 w-full md:w-auto text-center 
              bg-black md:bg-transparent bg-opacity-50 md:bg-opacity-100 rounded-xl md:rounded-none py-4 md:py-0 transition-all duration-300`}
          >
            <a href="#About">
              <li className="hover:text-purple-300 px-4 py-1">About</li>
            </a>
            <a href="#Experience">
              <li className="hover:text-purple-300 px-4 py-1">Experience</li>
            </a>
            <a href="#Projects">
              <li className="hover:text-purple-300 px-4 py-1">Projects</li>
            </a>
            <a href="#Footer">
              <li className="hover:text-purple-300 px-4 py-1">Contact</li>
            </a>
          </ul>

          {/* Mobile Menu Icons */}
          {showMenu ? (
            <RiMenu2Line
              size={28}
              className="md:hidden text-white cursor-pointer"
              onClick={() => {
                openMenu(!menu);
                setShowmenu(!showMenu);
              }}
            />
          ) : (
            <RiCloseLine
              size={28}
              className="md:hidden text-white cursor-pointer"
              onClick={() => {
                openMenu(!menu);
                setShowmenu(!showMenu);
              }}
            />
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
