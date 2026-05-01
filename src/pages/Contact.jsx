import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import ContactSection from '../components/sections/ContactSection';
import SEO from '../components/seo/SEO';
import contactDirectImg from '../assets/images/contact.png';
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact-page">
            <SEO
                title="Contact Inspire | Book a Business Consultation in UAE"
                description="Get in touch with Inspire to start your business journey in Dubai. Book a free consultation, submit an enquiry, or call us directly — we're ready to help."
                keywords="contact business consultant Dubai, book consultation UAE, business setup enquiry, Inspire UAE contact, Al Ilham Management"
                canonical="https://inspireuae.com/#/contact"
            />
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
                                    <a
                                        href="https://wa.me/971505203821"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn dark-btn"
                                        style={{ textDecoration: 'none', display: 'inline-block' }}
                                    >
                                        Book Appointment
                                    </a>

                                    <a
                                        href="tel:+971505203821"
                                        className="btn call-btn-white"
                                        style={{ textDecoration: 'none', display: 'inline-block' }}
                                    >
                                        📞 Call Now: +971 50 520 3821
                                    </a>
                                </div>

                                <p className="bottom-text">
                                    We look forward to helping you launch and grow your business with confidence.
                                </p>
                            </div>

                            {/* RIGHT IMAGE */}
                            <div className="direct-contact-image">
                                <img src={contactDirectImg} alt="Inspire business consultants ready to speak with you" />
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