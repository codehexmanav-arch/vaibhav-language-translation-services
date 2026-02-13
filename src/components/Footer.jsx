import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem' }}>
                {/* Brand */}
                <div style={{ maxWidth: '300px' }}>
                    <Link to="/" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.4rem', fontWeight: 700, color: 'white', textDecoration: 'none', display: 'block', marginBottom: '1rem' }}>
                        <span style={{ color: '#60a5fa' }}>Vaibhav</span> Language Services
                    </Link>
                    <p style={{ color: '#94a3b8', lineHeight: 1.7, fontSize: '0.95rem' }}>
                        Bridging the gap between languages and industry. Expert translation and interpretation for global business success.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ color: '#f1f5f9', marginBottom: '1.5rem', fontSize: '1.05rem', fontFamily: 'var(--font-heading)' }}>Quick Links</h4>
                    <ul style={{ display: 'grid', gap: '0.75rem' }}>
                        {[
                            { to: '/', label: 'Home' },
                            { to: '/about', label: 'About Us' },
                            { to: '/industries', label: 'Industries' },
                            { to: '/gallery', label: 'Projects Gallery' },
                            { to: '/contact', label: 'Contact Support' }
                        ].map(link => (
                            <li key={link.to}>
                                <Link to={link.to} style={{ color: '#94a3b8', transition: 'all 0.2s', display: 'inline-block' }}
                                    onMouseOver={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.paddingLeft = '4px'; }}
                                    onMouseOut={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.paddingLeft = '0'; }}
                                >{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Services */}
                <div>
                    <h4 style={{ color: '#f1f5f9', marginBottom: '1.5rem', fontSize: '1.05rem', fontFamily: 'var(--font-heading)' }}>Our Services</h4>
                    <ul style={{ display: 'grid', gap: '0.75rem' }}>
                        {[
                            { to: '/services/translation', label: 'Translation Services' },
                            { to: '/services/equipment', label: 'Equipment Import' },
                            { to: '/services/manpower', label: 'Manpower Supply' },
                            { to: '/services/visa', label: 'Visa Services' },
                            { to: '/services/frro', label: 'FRRO & Immigration' }
                        ].map(link => (
                            <li key={link.to}>
                                <Link to={link.to} style={{ color: '#94a3b8', transition: 'all 0.2s', display: 'inline-block' }}
                                    onMouseOver={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.paddingLeft = '4px'; }}
                                    onMouseOut={e => { e.currentTarget.style.color = '#94a3b8'; e.currentTarget.style.paddingLeft = '0'; }}
                                >{link.label}</Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Contact */}
                <div>
                    <h4 style={{ color: '#f1f5f9', marginBottom: '1.5rem', fontSize: '1.05rem', fontFamily: 'var(--font-heading)' }}>Contact Us</h4>
                    <ul style={{ display: 'grid', gap: '1rem' }}>
                        <li style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#94a3b8' }}>
                            <MapPin size={18} color="#60a5fa" style={{ marginTop: '3px', flexShrink: 0 }} />
                            <span style={{ fontSize: '0.95rem' }}>123 Industrial Area, New Delhi, India</span>
                        </li>
                        <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#94a3b8' }}>
                            <Phone size={18} color="#60a5fa" style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: '0.95rem' }}>+91 98765 43210</span>
                        </li>
                        <li style={{ display: 'flex', gap: '12px', alignItems: 'center', color: '#94a3b8' }}>
                            <Mail size={18} color="#60a5fa" style={{ flexShrink: 0 }} />
                            <span style={{ fontSize: '0.95rem' }}>contact@vaibhavlanguage.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container footer-bottom">
                <p style={{ color: '#64748b', fontSize: '0.9rem' }}>&copy; {new Date().getFullYear()} Vaibhav Language Translation Services. All rights reserved.</p>
                <div style={{ display: 'flex', gap: '1rem' }}>
                    {[Linkedin, Facebook, Twitter].map((Icon, idx) => (
                        <a key={idx} href="#" style={{ color: '#64748b', transition: 'color 0.2s' }}
                            onMouseOver={e => e.currentTarget.style.color = '#60a5fa'}
                            onMouseOut={e => e.currentTarget.style.color = '#64748b'}
                        ><Icon size={20} /></a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
