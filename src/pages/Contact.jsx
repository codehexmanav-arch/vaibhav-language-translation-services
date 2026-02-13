import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import Hero from '../components/Hero';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Thank you for contacting us. We will get back to you shortly!');
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <>
            <Helmet>
                <title>Contact Us | Vaibhav Language Translation Services</title>
                <meta name="description" content="Get in touch for expert industrial consultancy, translation services, and equipment sourcing. Offices in New Delhi." />
            </Helmet>

            <Hero
                title="Contact Us"
                subtitle="Ready to start your next project? Our team is here to help you navigate global industrial challenges."
                ctaText="WhatsApp Us"
                ctaLink="https://wa.me/919876543210"
                secondaryCtaText="Email Us"
                secondaryCtaLink="mailto:contact@globalind.com"
            />

            <section className="section container">
                <div className="grid-cols-2" style={{ gap: '4rem' }}>

                    {/* Contact Info */}
                    <div className="slide-up">
                        <span style={{ color: 'var(--color-secondary)', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.875rem', display: 'block', marginBottom: '1rem' }}>Get in Touch</span>
                        <h2 style={{ marginBottom: '2rem', fontSize: '2.5rem' }}>We'd Love to Hear From You</h2>

                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ background: 'var(--bg-surface)', padding: '0.75rem', borderRadius: '12px', color: 'var(--color-secondary)' }}>
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Head Office</h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>123 Industrial Area, Phase II<br />New Delhi, India - 110020</p>
                                </div>
                            </div>

                            <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ background: 'var(--bg-surface)', padding: '0.75rem', borderRadius: '12px', color: 'var(--color-secondary)' }}>
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Phone Support</h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="card" style={{ padding: '1.5rem', display: 'flex', alignItems: 'flex-start', gap: '1.5rem', border: '1px solid var(--border-color)', boxShadow: 'var(--shadow-sm)' }}>
                                <div style={{ background: 'var(--bg-surface)', padding: '0.75rem', borderRadius: '12px', color: 'var(--color-secondary)' }}>
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h4 style={{ marginBottom: '0.25rem' }}>Email Us</h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>contact@globalind.com</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form */}
                    <div className="fade-in">
                        <div className="card" style={{ padding: '2.5rem', boxShadow: 'var(--shadow-lg)' }}>
                            <h3 style={{ marginBottom: '2rem' }}>Send Us a Message</h3>
                            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label htmlFor="name" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>Full Name</label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', outline: 'none', color: 'var(--color-text-main)' }}
                                        placeholder="John Doe"
                                    />
                                </div>

                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                                        <label htmlFor="email" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>Email Address</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', outline: 'none', color: 'var(--color-text-main)' }}
                                            placeholder="john@example.com"
                                        />
                                    </div>
                                    <div style={{ display: 'grid', gap: '0.5rem' }}>
                                        <label htmlFor="phone" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>Phone Number</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleChange}
                                            style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', outline: 'none', color: 'var(--color-text-main)' }}
                                            placeholder="+91 9876543210"
                                        />
                                    </div>
                                </div>

                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label htmlFor="service" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>Service Required</label>
                                    <select
                                        id="service"
                                        name="service"
                                        value={formData.service}
                                        onChange={handleChange}
                                        style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', outline: 'none', color: 'var(--color-text-main)' }}
                                    >
                                        <option value="">Select a Service</option>
                                        <option value="translation">Translation Services</option>
                                        <option value="equipment">Industrial Equipment</option>
                                        <option value="manpower">Manpower Supply</option>
                                        <option value="visa">Visa & FRRO</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>

                                <div style={{ display: 'grid', gap: '0.5rem' }}>
                                    <label htmlFor="message" style={{ fontSize: '0.9rem', fontWeight: 600, color: 'var(--color-text-main)' }}>Message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        rows="4"
                                        required
                                        style={{ width: '100%', padding: '0.875rem', borderRadius: 'var(--border-radius-sm)', border: '1px solid var(--border-color)', background: 'var(--bg-surface)', resize: 'vertical', outline: 'none', color: 'var(--color-text-main)' }}
                                        placeholder="Tell us about your project requirements..."
                                    ></textarea>
                                </div>

                                <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '0.5rem' }}>
                                    Send Message <Send size={18} style={{ marginLeft: '0.5rem' }} />
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Contact;
