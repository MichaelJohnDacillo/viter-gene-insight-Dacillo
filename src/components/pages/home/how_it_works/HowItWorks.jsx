import React from 'react'
import { FiCheck } from 'react-icons/fi';
import HowItWorkCards from '../../../partials/HowItWorkCards';

const HowItWorks = () => {
  return (
    <>
        {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Simple DNA Testing Process
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Get your results in just a few easy steps from the comfort of your
              home
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {/* Step 1 */}
            <HowItWorkCards
            number={"1"}
            title={"Order Kit"}
            instruction={"Choose your test and we'll ship a DNA collection kit to your door."}/>

            {/* Step 2 */}
            <HowItWorkCards
            number={"2"}
            title={"Collect Sample"}
            instruction={"Simple cheek swab takes just minutes in the comfort of your home."}/>

            {/* Step 3 */}
            <HowItWorkCards
            number={"3"}
            title={"Mail It Back"}
            instruction={"Use the prepaid package to return your sample to our lab."}/>

            {/* Step 4 */}
            <HowItWorkCards
            number={"4"}
            title={"Get Results"}
            instruction={"Receive comprehensive results in 4-6 weeks through our secure portal."}/>
            </div>

          <div className="bg-white p-8 rounded-xl shadow-sm max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row items-center">
              <img
                src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80"
                alt="DNA Test Kit"
                className="w-full md:w-1/2 h-auto mb-6 md:mb-0 md:mr-8 rounded-lg"
              />
              <div>
                <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                  What's in Your DNA Test Kit?
                </h3>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <FiCheck className="text-blue-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Sterile cheek swab for DNA collection
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-blue-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Detailed instructions with illustrations
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-blue-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Protective specimen container
                    </span>
                  </li>
                  <li className="flex items-start">
                    <FiCheck className="text-blue-500 mr-2 mt-0.5" />
                    <span className="text-gray-700">
                      Prepaid return shipping package
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HowItWorks;