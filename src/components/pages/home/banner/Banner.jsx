import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const Banner = () => {
  return (
    <>
        {/* Hero Section */}
      <section
        id="home"
        className="py-20 px-6 bg-gradient-to-r from-blue-50 to-indigo-50"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Unlock Your{" "}
              <span className="text-blue-600">Genetic Potential</span> with DNA
              Testing
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover your ancestry, health risks, and personalized wellness
              insights with our advanced genetic analysis.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300">
                Order Test Kit <FaChevronRight className="ml-2" />
              </button>
              <button className="flex items-center justify-center border border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold py-3 px-6 rounded-lg transition duration-300">
                Learn More
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
              <div className="bg-blue-100 w-64 h-64 md:w-80 md:h-80 rounded-full absolute -z-10 top-4 left-4"></div>
              <img
                src="./images/banner-home.webp"
                alt="DNA Testing Illustration"
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg shadow-xl relative"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;