import React from 'react'
import { FaChevronRight, FaDna, FaMapMarkerAlt, FaUserMd } from 'react-icons/fa';
import ServiceCards from '../../../partials/ServiceCards';

const Services = () => {
  return (
    <>
        {/* Services Section */}
      <section id="services" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our DNA Testing Services
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive genetic analysis tailored to your personal needs and
              goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <ServiceCards
            icon={FaUserMd}
            title={"Health & Wellness"}
            details={"Understand your genetic health risks and get personalized wellness recommendations."}/>

            {/* Service 2 */}
            <ServiceCards
            icon={FaMapMarkerAlt}
            title={"Ancestry & Heritage"}
            details={"Trace your lineage and discover your ethnic origins with detailed ancestry breakdown."}/>

            {/* Service 3 */}
            <ServiceCards
            icon={FaDna}
            title={"Carrier Status"}
            details={"Learn about genetic variants you may carry and their implications for your family."}/>

          </div>
        </div>
      </section>
    </>
  );
};

export default Services;