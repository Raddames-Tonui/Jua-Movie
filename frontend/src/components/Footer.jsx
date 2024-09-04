import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black text-gray-400 py-8">
      <div className="max-w-screen-lg mx-auto px-4">
        <div className="flex justify-center">
                
          
          <div className="space-y-2">
            <a href="#" className="hover:underline">
              Media Center
            </a>
            <a href="#" className="hover:underline">
              Terms of Use
            </a>
            <a href="#" className="hover:underline">
              Contact Us
            </a>
          </div>
        </div>
        <div className="mt-8 flex justify-center">
          <button className="px-4 py-2 border border-gray-400 text-gray-400 text-sm hover:text-white hover:border-white">
            Service Code
          </button>
        </div>
        <div className="mt-4 text-sm  flex justify-center">
          <p>&copy; 2024 Your Brand, Inc.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
