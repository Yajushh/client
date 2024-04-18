import React from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import EastIcon from "@mui/icons-material/East";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 flex w-full h-36 drop-shadow-2xl backdrop-blur bg-stone-200 bg-opacity-75  items-center px-5">
      <Link to="/" className="flex items-center gap-2 ml-5">
        <img src={logo} alt="DeCarbonn logo" className="w-20 h-20" />
        <span className="text-6xl font-extrabold ">DeCarbonn</span>
      </Link>
      <div className="flex justify-center items-center ml-28">
        <ul className="flex gap-10">
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <Link to="/" className="font-semibold text-2xl">
              Home
            </Link>
          </li>
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <Link to="/" className="font-semibold text-2xl">
              Carbon Calculator
            </Link>
          </li>
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <Link to="/" className="font-semibold text-2xl">
              Projects
            </Link>
          </li>
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <Link to="/" className="font-semibold text-2xl ">
              About
            </Link>
          </li>
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <Link to="/" className="font-semibold text-2xl">
              Team
            </Link>
          </li>
          <li className="transition duration-300 transform hover:scale-105 hover:underline">
            <Link to="/" className="font-semibold text-2xl">
              Resources
            </Link>
          </li>
        </ul>
        <button className="bg-white flex gap-2 justify-center items-center font-semibold text-xl rounded-3xl h-12  py-2 px-4 ml-14 w-48 hover:bg-[#1a5130] hover:text-white shadow-md hover:shadow-lg transition duration-300">
          <Link to="/signup" className="text-2xl font-semibold">
            Connect
          </Link>
          <EastIcon />
        </button>
      </div>
    </div>
  );
}
