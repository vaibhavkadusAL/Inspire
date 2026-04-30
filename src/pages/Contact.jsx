import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactSection from '../components/sections/ContactSection';
import contactDirectImg from '../assets/images/contact.png';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <Navbar />

            <div className="contact-top-bg">
                <div className="container">
                    <div className="breadcrumb">
                        <a href="#/" className="back-link">&lt; Contact</a>
                        <div className="path"><a href="#/">Home</a> &gt; <span>Contact</span></div>
                    </div>
                </div>

                <ContactSection />

                {/* Speak to Us Directly */}
                <section className="direct-contact-section">
                    <div className="container">
                        <div className="direct-contact-card">

                            {/* LEFT */}
                            <div className="direct-contact-content">
                                <h2>Speak to Us Directly</h2>

                                <p className="subtitle">
                                    Schedule a consultation with our team and get expert guidance tailored to your business needs.
                                </p>

                                <div className="direct-btns">
                                    <button className="btn dark-btn">
                                        Book Appointment
                                    </button>

                                    <button className="btn call-btn-white">
                                        Call Now: +971 50 520 3821
                                    </button>
                                </div>

                                <p className="bottom-text">
                                    We look forward to helping you launch and grow your business with confidence.
                                </p>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="direct-contact-image">
                                <img src={contactDirectImg} alt="Contact" />
                            </div>

                        </div>
                    </div>
                </section>
            </div>

            <Footer />
        </div>
    );
};

export default Contact;