import React from 'react';
import MovieCard from './MovieCard';

const Carousel = ({ title }) => {
  return (
    <div className="my-8">
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
        <MovieCard imageUrl="/path-to-movie-poster1.jpg" />
        <MovieCard imageUrl="/path-to-movie-poster2.jpg" />
        <MovieCard imageUrl="/path-to-movie-poster3.jpg" />
        {/* Add more MovieCards here */}
      </div>
    </div>
  );
};

export default Carousel;
