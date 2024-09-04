import React from 'react';
import Banner from './Banner';
import Carousel from './Carousel';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Home = () => {

  return (
    <div className="bg-gray-900 text-white h-screen">
      <Navbar/>
      <Banner />
      <div>
        <Carousel title="Trending Now" />
        <Carousel title="Movies" />
        <Carousel title="My List" />
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
