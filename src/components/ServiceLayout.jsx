import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail } from 'lucide-react';
import Hero from './Hero';

const ServiceLayout = ({ title, description, children }) => {
    return (
        <>
            <Hero
                title={title}
                subtitle={description}
                ctaText="Get a Quote"
            />

            <div className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '4rem' }}>

                    {/* Main Content */}
                    <div className="service-content fade-in">
                        {children}
                    </div>

                    {/* Sidebar */}
                    <aside className="sidebar slide-up" style={{ height: 'fit-content' }}>

                        {/* Services Navigation */}
                        <div className="card" style={{ marginBottom: '2rem', padding: '1.5rem' }}>
                            <h4 style={{ marginBottom: '1rem', borderBottom: '1px solid var(--border-color)', paddingBottom: '0.5rem' }}>Our Services</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <li>
                                    <Link to="/services/translation" className="nav-link" style={{ display: 'block', padding: '0.5rem', borderRadius: '4px', background: window.location.pathname.includes('translation') ? 'rgba(255, 193, 7, 0.1)' : 'transparent', color: window.location.pathname.includes('translation') ? 'var(--color-secondary)' : 'inherit' }}>
                                        Multi Language Translation
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/equipment" className="nav-link" style={{ display: 'block', padding: '0.5rem', borderRadius: '4px', background: window.location.pathname.includes('equipment') ? 'rgba(255, 193, 7, 0.1)' : 'transparent', color: window.location.pathname.includes('equipment') ? 'var(--color-secondary)' : 'inherit' }}>
                                        Industrial Equipment
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/manpower" className="nav-link" style={{ display: 'block', padding: '0.5rem', borderRadius: '4px', background: window.location.pathname.includes('manpower') ? 'rgba(255, 193, 7, 0.1)' : 'transparent', color: window.location.pathname.includes('manpower') ? 'var(--color-secondary)' : 'inherit' }}>
                                        Industrial Manpower
                                    </Link>
                                </li>
                                <li>
                                    <Link to="/services/visa" className="nav-link" style={{ display: 'block', padding: '0.5rem', borderRadius: '4px', background: window.location.pathname.includes('visa') ? 'rgba(255, 193, 7, 0.1)' : 'transparent', color: window.location.pathname.includes('visa') ? 'var(--color-secondary)' : 'inherit' }}>
                                        Visa & FRRO Services
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        {/* Quick Contact */}
                        <div className="card" style={{ padding: '1.5rem', background: 'var(--color-primary)' }}>
                            <h4 style={{ marginBottom: '1rem' }}>Need Help?</h4>
                            <p style={{ marginBottom: '1.5rem', fontSize: '0.9rem', color: 'var(--color-grey)' }}>
                                Contact our experts for a detailed consultation.
                            </p>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem' }}>
                                <div style={{ background: 'var(--color-secondary)', padding: '0.5rem', borderRadius: '50%' }}>
                                    <Phone size={18} color="var(--color-dark)" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-grey)' }}>Call Us</p>
                                    <p style={{ fontWeight: 600 }}>+91 98765 43210</p>
                                </div>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <div style={{ background: 'var(--color-secondary)', padding: '0.5rem', borderRadius: '50%' }}>
                                    <Mail size={18} color="var(--color-dark)" />
                                </div>
                                <div>
                                    <p style={{ fontSize: '0.8rem', color: 'var(--color-grey)' }}>Email Us</p>
                                    <p style={{ fontWeight: 600 }}>contact@globalind.com</p>
                                </div>
                            </div>
                        </div>

                    </aside>
                </div>
            </div>
        </>
    );
};

export default ServiceLayout;
