import React from 'react';
import Navbar from '../components/layout/Navbar';
import Hero from '../components/sections/Hero';
import TrustSection from '../components/sections/TrustSection';
import AboutUs from '../components/sections/AboutUs';
import ServicesSection from '../components/sections/ServicesSection';
import WhyChoose from '../components/sections/WhyChoose';
import CtaSection from '../components/sections/CtaSection';
import PartnersSection from '../components/sections/PartnersSection';
import Footer from '../components/layout/Footer';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <Navbar />
      <main>
        <Hero />
        <TrustSection />
        <AboutUs />
        <ServicesSection />
        <WhyChoose />
        <CtaSection />
      </main>
      <PartnersSection />
      <Footer />
    </div>
  );
};

export default LandingPage;
