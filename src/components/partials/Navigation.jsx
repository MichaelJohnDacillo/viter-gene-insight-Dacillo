import React from 'react'
import { FaChevronRight, FaDna } from 'react-icons/fa';
import { FiMenu, FiX } from 'react-icons/fi';


const Navigation = () => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <>
        {/* Navigation */}
      <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <FaDna className="text-blue-600 text-2xl mr-2" />
            <span className="text-xl font-semibold text-gray-800">
              GeneInsight
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <a
              href="#home"
              className="font-medium text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Home
            </a>
            <a
              href="#services"
              className="font-medium text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Services
            </a>
            <a
              href="#how-it-works"
              className="font-medium text-gray-700 hover:text-blue-600 transition duration-300"
            >
              How It Works
            </a>
            <a
              href="#testimonials"
              className="font-medium text-gray-700 hover:text-blue-600 transition duration-300"
            >
              Testimonials
            </a>
          </div>

          {/* Mobile Burger Menu */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          <button className="hidden md:flex items-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-300">
            Get Started <FaChevronRight className="ml-2" />
          </button>
        </div>
      </nav>

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

export default Navigation;