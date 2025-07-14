import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const MobileMenu = () => {
  return (
    <>
        {/* Full-height Mobile Menu */}
      <div
        className={`
        md:hidden fixed inset-0 z-40 bg-white transition-all duration-300 ease-in-out
        ${isMenuOpen ? "translate-y-0" : "-translate-y-full"}
        pt-20
      `}
      >
        <div className="container mx-auto px-6 py-8 flex flex-col">
          <a
            href="#home"
            className="font-medium text-gray-700 hover:text-blue-600 py-4 px-4 text-lg transition duration-300 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Home
          </a>
          <a
            href="#services"
            className="font-medium text-gray-700 hover:text-blue-600 py-4 px-4 text-lg transition duration-300 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="font-medium text-gray-700 hover:text-blue-600 py-4 px-4 text-lg transition duration-300 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            How It Works
          </a>
          <a
            href="#testimonials"
            className="font-medium text-gray-700 hover:text-blue-600 py-4 px-4 text-lg transition duration-300 border-b border-gray-100"
            onClick={() => setIsMenuOpen(false)}
          >
            Testimonials
          </a>
          <button
            className="mt-8 w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
            onClick={() => setIsMenuOpen(false)}
          >
            Get Started <FaChevronRight className="ml-2" />
          </button>
        </div>
      </div>
    </>
  );
};

export default MobileMenu;