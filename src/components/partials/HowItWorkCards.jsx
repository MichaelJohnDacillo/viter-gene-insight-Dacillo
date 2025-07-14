import React from 'react'

const HowItWorkCards = ({number, title, instruction}) => {
  return (
    <>
        <div className="flex flex-col items-center text-center">
            <div className="bg-blue-100 h-16 w-16 rounded-full flex items-center justify-center mb-4">
            <span className="text-blue-600 font-bold text-xl">{number}</span>
            </div>
            <h3 className="font-semibold text-gray-800 mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">
            {instruction}
            </p>
        </div>
    </>
  );
};

export default HowItWorkCards