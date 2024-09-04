import React from 'react';
import backgroundImage from "../assets/background.webp";

const Banner = () => {
  return (
    <div 
      className="relative h-screen sm:h-[400px] bg-cover bg-center" 
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute bottom-8 left-8 p-4 sm:p-8 text-white">
        <h1 className="text-3xl sm:text-5xl font-bold">MOVIE TITLE</h1>
        <p className="mt-2 text-base sm:text-lg max-w-xs sm:max-w-md">
          A brief description of the movie goes here.
        </p>
        <div className="mt-4 flex flex-col sm:flex-row">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg mb-2 sm:mb-0 sm:mr-2">Play</button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">My List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
