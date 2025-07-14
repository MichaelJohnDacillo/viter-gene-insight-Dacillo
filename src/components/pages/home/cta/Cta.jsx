import React from 'react'
import { FaChevronRight } from 'react-icons/fa';

const Cta = () => {
  return (
    <>
        {/* CTA Section */}
      <section className="py-20 px-6 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Discover Your DNA Story?
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Order your DNA test kit today and begin your journey of genetic
            discovery.
          </p>
          <button className="flex items-center justify-center mx-auto bg-white text-blue-600 hover:bg-gray-100 font-semibold py-3 px-8 rounded-lg text-lg transition duration-300 shadow-md">
            Order Your Kit Now <FaChevronRight className="ml-2" />
          </button>
        </div>
      </section>
    </>
  );
};

export default Cta;