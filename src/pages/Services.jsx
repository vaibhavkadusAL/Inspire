import React, { useState } from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import CtaSection from '../components/sections/CtaSection';
import ProcessSection from '../components/sections/ProcessSection';
import './Services.css';

// Images
import iconDubai from '../assets/images/burj-al-arab-icon 1.png';
import iconUae from '../assets/images/united-arab-emirates-dirham-icon 1.png';
import iconSa from '../assets/images/south-africa-flag-round-circle-icon 1.png';
import iconTimezone from '../assets/images/timezone-icon 1.png';
import mainSetupImage from '../assets/images/cfc11b75eb8b1a0d7393d00755df713549bbbc83.jpg';
import servicesCtaBg from '../assets/images/Frame 2147207863.jpg.jpeg';

const Services = () => {
    const [activeTab, setActiveTab] = useState('Business Setup');

    const tabs = [
        'Business Setup',
        'Government Services',
        'Funding & Project Management',
        'Marketing & Events'
    ];

    const tabContent = {
        'Business Setup': [
            'Company formation across Mainland and Free Zones with tailored licensing solutions',
            'Support with leasing, co-working spaces, and full operational setup',
            'Personalized business structure'
        ],
        'Government Services': [
            'Visa and residency processing',
            'PRO services and approvals',
            'Trademark registration',
            'Corporate tax & VAT support'
        ],
        'Funding & Project Management': [
            'Funding & SPV structuring',
            'Project management',
            'Business growth strategy'
        ],
        'Marketing & Events': [
            'Marketing planning',
            'Digital marketing',
            'Event management'
        ]
    };

    const serviceCards = [
        { title: 'Business Setup in Dubai.', icon: iconDubai },
        { title: 'Business Setup in UAE.', icon: iconUae },
        { title: 'Business Setup in South Africa.', icon: iconSa },
        { title: 'You Can Open & Operate in Free Zones or Mainland', icon: iconTimezone }
    ];

    return (
        <div className="services-page">
            <Navbar />

            {/* HEADER */}
            <section className="services-header">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="#/" className="back-link">&lt; Services</a>
                        <div className="path"><a href="#/">Home</a> &gt; <span>Services</span></div>
                    </div>
                    <div className="header-content">
                        <h1 className="serif">End-to-End Business Setup &<br />Growth Solutions</h1>
                        <p>We provide everything you need to start, manage, and grow your business,<br />efficiently and with confidence.</p>
                    </div>
                </div>
            </section>

            {/* MAIN CONTENT */}
            <section className="services-content">
                <div className="container">

                    {/* TABS */}
                    <div className="tabs-container">
                        {tabs.map(tab => (
                            <button
                                key={tab}
                                className={`tab-btn ${activeTab === tab ? 'active' : ''}`}
                                onClick={() => setActiveTab(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>

                    {/* CONTENT BOX */}
                    <div className="tab-content-box">
                        <div className="tab-main-info">

                            {/* LEFT TEXT */}
                            <div className="tab-text-side">
                                <h2>{activeTab}</h2>
                                <h3>End-to-End Business Solutions</h3>

                                <ul>
                                    {tabContent[activeTab].map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>

                                <p className="we-provide-text">What We Provide:</p>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="tab-image-side">
                                <img src={mainSetupImage} alt="Service" />
                            </div>
                        </div>

                        {/* BOTTOM OVERLAY CARDS */}
                        <div className="overlay-cards">
                            {serviceCards.map((card, index) => (
                                <div className="overlay-card" key={index}>
                                    <img src={card.icon} alt="" />
                                    <p>{card.title}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <p className="bottom-note">We help you choose the right structure based on your goals, budget, and operational needs.</p>

                </div>
            </section>

            <ProcessSection />

            <CtaSection 
                bgImage={servicesCtaBg}
                title="Ready to Get Started?"
                description="Let's build your business the right way, from day one."
                primaryBtnText="Start Your Business Today"
                showSecondaryBtn={false}
            />
            <Footer />
        </div>
    );
};

export default Services;