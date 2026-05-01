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
                        <img src={contactImg} alt="Inspire team meeting with clients to discuss business setup in UAE" />
                    </div>

                    {/* RIGHT FORM */}
                    <div className="contact-form-wrapper">
                        <form
                            className="contact-form"
                            action="https://formsubmit.co/Info@alilhammanagement.com"
                            method="POST"
                        >
                            <input type="hidden" name="_subject" value="New Enquiry from Inspire Website" />
                            <input type="hidden" name="_captcha" value="false" />
                            <input type="hidden" name="_template" value="table" />

                            <div className="form-group">
                                <label>Full Name <span className="required">*</span></label>
                                <input type="text" name="full_name" placeholder="Enter your full name" required />
                            </div>

                            <div className="form-group">
                                <label>Email ID <span className="required">*</span></label>
                                <input type="email" name="email" placeholder="Enter email" required />
                            </div>

                            <div className="form-group">
                                <label>Phone Number <span className="required">*</span></label>
                                <input type="tel" name="phone" placeholder="Enter phone number" required />
                            </div>

                            <div className="form-group">
                                <label>Service Interest <span className="required">*</span></label>
                                <div className="select-wrapper">
                                    <select name="service_interest" defaultValue="" required>
                                        <option value="" disabled>Select Service</option>
                                        <option value="Business Setup">Business Setup</option>
                                        <option value="Government Services">Government Services</option>
                                        <option value="Funding & Project Management">Funding &amp; Project Management</option>
                                        <option value="Marketing & Events">Marketing &amp; Events</option>
                                    </select>
                                </div>
                            </div>

                            <div className="form-group">
                                <label>Message</label>
                                <textarea name="message" placeholder="Enter your message"></textarea>
                            </div>

                            <div className="consent-text">
                                <p>I permit Inspire to collect my details and contact me via telephone, email or WhatsApp.</p>
                            </div>

                            <div className="form-submit">
                                <button type="submit" className="form-btn">
                                    Submit Enquiry
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