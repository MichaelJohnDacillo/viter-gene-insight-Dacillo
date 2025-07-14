import React from 'react'
import { BsStarFill, BsStarHalf } from 'react-icons/bs';
import TestimonialCards from '../../../partials/TestimonialCards';

const Testimonials = () => {
  return (
    <>
        {/* Testimonials Section */}
      <section id="testimonials" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands who have discovered their genetic stories
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <TestimonialCards
            image={"./images/testimonials-1.webp"}
            alt={"Sarah J."}
            name={"Sarah J."}
            star1={BsStarFill}
            star2={BsStarFill}
            star3={BsStarFill}
            star4={BsStarFill}
            star5={BsStarFill}
            feedback={"The ancestry results were incredibly detailed and helped me connect with distant relatives I never knew about. Highly recommend!"}/>
            

            {/* Testimonial 2 */}
            <TestimonialCards
            image={"./images/testimonials-2.webp"}
            alt={"Michael T."}
            name={"Michael T."}
            star1={BsStarFill}
            star2={BsStarFill}
            star3={BsStarFill}
            star4={BsStarFill}
            star5={BsStarFill}
            feedback={"The health insights were eye-opening. I discovered a genetic predisposition that helped me make important lifestyle changes."}/>

            {/* Testimonial 3 */}
            <TestimonialCards
            image={"./images/testimonials-3.webp"}
            alt={"Emma K."}
            name={"Emma K."}
            star1={BsStarFill}
            star2={BsStarFill}
            star3={BsStarFill}
            star4={BsStarFill}
            star5={BsStarHalf}
            feedback={"The process was so simple and the results were presented in a way that was easy to understand. Great experience overall!!"}/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonials;