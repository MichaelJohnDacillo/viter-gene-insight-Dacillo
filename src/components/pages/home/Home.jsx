import React from 'react'
import Navigation from '../../partials/Navigation';
import MobileMenu from '../../partials/MobileMenu';
import Banner from './banner/Banner';
import Services from './services/Services';
import HowItWorks from './how_it_works/HowItWorks';
import Testimonials from './testimonials/Testimonials';
import Cta from './cta/Cta';
import Footer from '../../partials/Footer';

const Home = () => {
  return (
    <>
    <div className="bg-gray-50 min-h-screen">
        <Navigation/>
        <Banner/>
        <Services/>
        <HowItWorks/>
        <Testimonials/>
        <Cta/>
        <Footer/>
    </div>
    </>
  );
};

export default Home;