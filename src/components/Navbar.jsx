import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-content">
                <Link to="/" className="brand-logo">
                    <span style={{ color: 'var(--color-secondary)' }}>Vaibhav</span> Language Services
                </Link>

                <button className="mobile-menu-btn" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={`nav-links ${isOpen ? 'open' : ''}`}>
                    <Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Home</Link>
                    <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link>
                    <Link to="/founder" className={`nav-link ${location.pathname === '/founder' ? 'active' : ''}`}>Founder</Link>

                    <div className="dropdown">
                        <span className="nav-link dropdown-toggle" style={{ display: 'flex', alignItems: 'center', gap: '4px', cursor: 'pointer' }}>
                            Services <ChevronDown size={14} />
                        </span>
                        <div className="dropdown-menu">
                            <Link to="/services/translation" className="dropdown-item">Multi Language Translation</Link>
                            <Link to="/services/equipment" className="dropdown-item">Equipment Import</Link>
                            <Link to="/services/manpower" className="dropdown-item">Manpower Supply</Link>
                            <Link to="/services/visa" className="dropdown-item">Visa Services</Link>
                            <Link to="/services/frro" className="dropdown-item">FRRO & Immigration</Link>
                        </div>
                    </div>

                    <Link to="/industries" className={`nav-link ${location.pathname === '/industries' ? 'active' : ''}`}>Industries</Link>
                    <Link to="/gallery" className={`nav-link ${location.pathname === '/gallery' ? 'active' : ''}`}>Gallery</Link>
                    <Link to="/contact" className="btn btn-primary" style={{ padding: '0.6rem 1.5rem', fontSize: '0.9rem' }}>Contact Us</Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
