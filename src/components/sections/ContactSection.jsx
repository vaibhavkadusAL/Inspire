import React from 'react';
import './ContactSection.css';
import contactImg from '../../assets/images/contactIMG.jpg';

const ContactSection = () => {
    return (
        <section className="contact-section">
            <div className="container">

                {/* HEADER */}
                <div className="contact-header">
                    <h1 className="serif">Get in Touch</h1>
                    <p>We’re here to help you take the next step.</p>
                </div>

                {/* CARD */}
                <div className="contact-card">

                    {/* LEFT IMAGE */}
                    <div className="contact-image">
                        <img src={contactImg} alt="Team Meeting" />
                    </div>

                    {/* RIGHT FORM */}
                    <div className="contact-form-wrapper">
                        <form className="contact-form">

                            <div className="form-group">
                                <label>Full Name <span className="required">*</span></label>
                                <input type="text" placeholder="Enter your full name" />
                            </div>

                            <div className="form-group">
                                <label>Email ID <span className="required">*</span></label>
                                <input type="email" placeholder="Enter email" />
                            </div>

                            <div className="form-group">
                                <label>Phone Number <span className="required">*</span></label>
                                <input type="tel" placeholder="Enter phone number" />
                            </div>

                            <div className="form-group">
                                <label>Service Interest <span className="required">*</span></label>
                                <div className="select-wrapper">
                                    <select defaultValue="">
                                        <option value="" disabled>Select Service</option>
                                        <option value="setup">Business Setup</option>
                                        <option value="government">Government Services</option>
                                        <option value="funding">Funding & Project Management</option>
                                        <option value="marketing">Marketing & Events</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Enter your message"></textarea>
                            </div>

                            <div className="form-submit">
                                <button type="button" className="form-btn">
                                    Submit Inquiry
                                </button>
                            </div>

                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;