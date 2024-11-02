import React from "react";
import { BsFillSunFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <nav className=" py-8 mb-1 flex justify-between md:py-7">
      <h1 className="text-xl font-serif dark:text-gray-400">React Portfolio</h1>
      <ul className="flex items-center">
        <li>
          <BsFillSunFill
            onClick={() => setDarkMode(!darkMode)}
            className="cursor-pointer text-xl dark:text-white"
          />
        </li>
        <li>
          <Link
            to="/"
            className="bg-gradient-to-r from-blue-800 to-blue-400 ml-5 text-white font-serif px-4 py-2 rounded-md "
          >
            Resume
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
