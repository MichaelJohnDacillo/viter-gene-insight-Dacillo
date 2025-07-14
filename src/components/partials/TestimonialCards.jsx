import React from 'react'
import { BsStarFill } from 'react-icons/bs';

const TestimonialCards = ({image, alt, name, star1: Star1, star2: Star2, star3: Star3, star4: Star4, star5: Star5,   feedback}) => {
  return (
    <>
        <div className="bg-gray-50 p-8 rounded-xl">
            <div className="flex items-center mb-4">
            <img
                src={image}
                alt={`${alt}`}
                className="h-12 w-12 rounded-full mr-4"
            />
            <div>
                <h4 className="font-semibold text-gray-800">{name}</h4>
                <div className="flex">
                <Star1 className="text-yellow-400" />
                <Star2 className="text-yellow-400" />
                <Star3 className="text-yellow-400" />
                <Star4 className="text-yellow-400" />
                <Star5 className="text-yellow-400" />
                </div>
            </div>
            </div>
            <p className="text-gray-600 italic">
            {feedback}
            </p>
        </div>
    </>
  );
};

export default TestimonialCards;