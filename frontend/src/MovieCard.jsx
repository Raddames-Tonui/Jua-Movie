import React from 'react';

const MovieCard = ({ imageUrl }) => {
  return (
    <div className="flex-shrink-0 w-40">
      <img src={imageUrl} alt="Movie Poster" className="rounded-lg shadow-lg w-full h-auto object-cover" />
      <div className="mt-2 text-center">
        <span className="block text-sm font-semibold">Movie Title</span>
        <span className="block text-sm text-gray-400">Year</span>
      </div>
    </div>
  );
};

export default MovieCard;
