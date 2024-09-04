import React from 'react';
import { RiMovie2Fill } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-6 py-4 bg-transparent fixed w-full top-0 z-50">
      {/* Logo */}
      <div className="text-red-600 text-3xl font-bold">
        <a href="#" className='flex items-center'>
          Jua m <span className='ml-2'><RiMovie2Fill className='text-white'/></span> vie
        </a>
      </div>

      {/* Navigation Links */}
      <ul className="hidden md:flex space-x-6 text-white">
        <li className="cursor-pointer hover:text-gray-300">
          <a href="#">Home</a>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <a href="#">TV Shows</a>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <a href="#">Movies</a>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <a href="#">Recently Added</a>
        </li>
        <li className="cursor-pointer hover:text-gray-300">
          <a href="#">My List</a>
        </li>
      </ul>

      {/* Mobile Menu Toggle */}
      <div className="md:hidden flex items-center space-x-4">
        <button className="text-white cursor-pointer hover:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* User Profile */}
      <div className="flex items-center space-x-4">
        {/* Search Icon */}
        <div className="text-white cursor-pointer hover:text-gray-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.35 4.35a7.5 7.5 0 0012.3 12.3z"
            />
          </svg>
        </div>
        {/* User Profile Image */}
        {/* <div className="cursor-pointer">
          <img
            src="https://via.placeholder.com/30"
            alt="User Profile"
            className="rounded-full w-8 h-8"
          />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
