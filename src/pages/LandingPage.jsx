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
import SEO from '../components/seo/SEO';
import './LandingPage.css';

const LandingPage = () => {
  return (
    <div className="landing-page">
      <SEO
        title="Inspire | Trusted Business Setup Partner in UAE"
        description="Inspire helps entrepreneurs and businesses set up in Dubai and the UAE. Company formation, government services, funding, project management, marketing and events — all in one place."
        keywords="business setup UAE, company formation Dubai, free zone license, mainland trade license, PRO services, visa residency UAE, business consultant Dubai"
        canonical="https://inspire.com/"
      />
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
