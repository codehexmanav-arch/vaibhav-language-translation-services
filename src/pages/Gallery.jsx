import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';

const Gallery = () => {
    const [filter, setFilter] = useState('all');

    const images = [
        { id: 1, cat: 'projects', src: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800', title: 'Steel Plant Commissioning' },
        { id: 2, cat: 'equipment', src: 'https://images.unsplash.com/photo-1531297461136-82lwDe4cwa1a?auto=format&fit=crop&q=80&w=800', title: 'CNC Machinery Import' },
        { id: 3, cat: 'meetings', src: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?auto=format&fit=crop&q=80&w=800', title: 'Delegation Meeting in Shanghai' },
        { id: 4, cat: 'interpretation', src: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800', title: 'On-site Technical Interpretation' },
        { id: 5, cat: 'manpower', src: 'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800', title: 'Engineers on Site' },
        { id: 6, cat: 'projects', src: 'https://images.unsplash.com/photo-1565514020176-892eb6a290a4?auto=format&fit=crop&q=80&w=800', title: 'Automotive Assembly Line' },
    ];

    const categories = [
        { id: 'all', label: 'All' },
        { id: 'projects', label: 'Industrial Projects' },
        { id: 'equipment', label: 'Equipment Imports' },
        { id: 'meetings', label: 'Business Meetings' },
        { id: 'manpower', label: 'Manpower' },
    ];

    const filteredImages = filter === 'all' ? images : images.filter(img => img.cat === filter);

    return (
        <>
            <Helmet>
                <title>Project Gallery | Vaibhav Language Translation Services</title>
                <meta name="description" content="View our portfolio of successful industrial projects, equipment imports, and international business meetings." />
            </Helmet>

            <Hero
                title="Our Work Gallery"
                subtitle="A visual testament to our commitment to industrial excellence and global collaboration."
                ctaText="View Services"
                ctaLink="/services/translation"
            />

            <section className="section container">
                {/* Filter Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '3rem' }}>
                    {categories.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setFilter(cat.id)}
                            className={`btn ${filter === cat.id ? 'btn-primary' : 'btn-outline'}`}
                            style={{ fontSize: '0.9rem', padding: '0.5rem 1.5rem' }}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Gallery Grid */}
                <div className="grid-cols-3 fade-in" style={{ gap: '2rem' }}>
                    {filteredImages.map(img => (
                        <div key={img.id} className="card" style={{
                            padding: 0,
                            overflow: 'hidden',
                            cursor: 'pointer',
                            position: 'relative',
                            height: '350px',
                            border: 'none',
                            borderRadius: 'var(--border-radius-lg)',
                            boxShadow: 'var(--shadow-md)'
                        }}>
                            <img
                                src={img.src}
                                alt={img.title}
                                style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)' }}
                                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.9), transparent)',
                                padding: '4rem 1.5rem 1.5rem',
                                pointerEvents: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'flex-end'
                            }}>
                                <span style={{
                                    color: 'var(--color-secondary)',
                                    fontSize: '0.75rem',
                                    fontWeight: 700,
                                    textTransform: 'uppercase',
                                    letterSpacing: '0.05em',
                                    marginBottom: '0.25rem'
                                }}>
                                    {categories.find(c => c.id === img.cat)?.label}
                                </span>
                                <h5 style={{ margin: 0, color: 'white', fontSize: '1.1rem', fontWeight: 600 }}>{img.title}</h5>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Gallery;
