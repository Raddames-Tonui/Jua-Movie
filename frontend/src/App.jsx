import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';

const App = () => {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Banner />
      <div className="p-4">
        <Carousel title="Trending Now" />
        <Carousel title="Movies" />
        <Carousel title="My List" />
      </div>
    </div>
  );
};

export default App;
