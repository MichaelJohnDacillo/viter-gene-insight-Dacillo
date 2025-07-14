import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const ServiceCards = ({icon: Icon, title, details}) => {
  return (
    <>
        <div className="bg-gray-50 p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
            <Icon className="text-blue-600 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
            {title}
            </h3>
            <p className="text-gray-600 mb-4">
            {details}
            </p>
            <button className="flex items-center text-blue-600 font-medium hover:text-blue-700 transition">
            Learn more <FaChevronRight className="ml-1" />
            </button>
        </div>
    </>
  );
};

export default ServiceCards;