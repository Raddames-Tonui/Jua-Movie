import React from 'react';

const Banner = () => {
  return (
    <div className="relative h-[400px] bg-cover bg-center" style={{ backgroundImage: 'url(/path-to-your-banner-image.jpg)' }}>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900"></div>
      <div className="absolute bottom-8 left-8">
        <h1 className="text-5xl font-bold">MOVIE TITLE</h1>
        <p className="mt-2 max-w-md text-lg">A brief description of the movie goes here.</p>
        <div className="mt-4">
          <button className="bg-red-600 text-white px-4 py-2 rounded-lg mr-2">Play</button>
          <button className="bg-gray-700 text-white px-4 py-2 rounded-lg">My List</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
