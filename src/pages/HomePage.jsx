import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import PopularDestinations from '../components/home/PopularDestinations';
import PromoSections from '../components/home/PromoSections';
import RecommendedHotels from '../components/home/RecommendedHotels';
import Testimonials from '../components/home/Testimonials';
import Footer from '../components/home/Footer';

function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Hero />
      <PopularDestinations />
      <PromoSections />
      <RecommendedHotels />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default HomePage;