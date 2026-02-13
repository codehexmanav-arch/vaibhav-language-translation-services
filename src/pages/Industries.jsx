import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { industriesData } from '../data/industries.js';

const Industries = () => {
    return (
        <>
            <Helmet>
                <title>Industries We Serve | Vaibhav Language Translation Services</title>
                <meta name="description" content="Serving diverse sectors including Defence, Automotive, Manufacturing, and Oil & Gas with expert translation and manpower solutions." />
            </Helmet>

            <Hero
                title="Industries We Serve"
                subtitle="Powering progress across major sectors with specialized support and global expertise."
                ctaText="Discuss Your Project"
                ctaLink="/contact"
            />

            <section className="section container">
                <div className="grid-cols-3" style={{ gap: '2rem' }}>
                    {industriesData.map((industry, idx) => (
                        <Link
                            key={industry.id}
                            to={`/industries/${industry.slug}`}
                            className="slide-up"
                            style={{
                                display: 'flex',
                                flexDirection: 'column',
                                height: '100%',
                                minHeight: '320px',
                                textDecoration: 'none',
                                padding: '2.5rem',
                                position: 'relative',
                                overflow: 'hidden',
                                borderRadius: 'var(--border-radius-lg)',
                                background: 'white',
                                border: '1px solid var(--border-color)',
                                boxShadow: 'var(--shadow-sm)',
                                transition: 'box-shadow 0.4s ease, transform 0.4s ease',
                                transitionDelay: `${(idx % 3) * 0.1}s`,
                                zIndex: 0
                            }}
                            onMouseOver={e => {
                                e.currentTarget.style.boxShadow = 'var(--shadow-card-hover)';
                                e.currentTarget.style.transform = 'translateY(-4px)';
                                const bg = e.currentTarget.querySelector('.industry-bg');
                                if (bg) {
                                    bg.style.transform = 'scale(1.1)';
                                    bg.style.opacity = '0.18';
                                }
                            }}
                            onMouseOut={e => {
                                e.currentTarget.style.boxShadow = 'var(--shadow-sm)';
                                e.currentTarget.style.transform = 'translateY(0)';
                                const bg = e.currentTarget.querySelector('.industry-bg');
                                if (bg) {
                                    bg.style.transform = 'scale(1)';
                                    bg.style.opacity = '0.08';
                                }
                            }}
                        >
                            {/* Background Image */}
                            <div
                                className="industry-bg"
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    backgroundImage: `url(${industry.image})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    opacity: 0.08,
                                    transition: 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.6s ease',
                                    zIndex: -1
                                }}
                            />

                            {/* Content */}
                            <div className="icon-box" style={{ marginBottom: '1.5rem', position: 'relative' }}>
                                <industry.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 style={{
                                fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700,
                                color: 'var(--color-heading)', position: 'relative'
                            }}>
                                {industry.name}
                            </h3>
                            <p style={{
                                color: 'var(--color-text-muted)',
                                fontSize: '0.95rem',
                                marginBottom: '1.5rem',
                                flexGrow: 1,
                                lineHeight: 1.7,
                                position: 'relative'
                            }}>
                                {industry.shortDesc}
                            </p>

                            <span style={{
                                color: 'var(--color-secondary)',
                                fontWeight: 600,
                                fontSize: '0.9rem',
                                marginTop: 'auto',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '0.5rem',
                                position: 'relative'
                            }}>
                                View Details &rarr;
                            </span>
                        </Link>
                    ))}
                </div>
            </section>
        </>
    );
};

export default Industries;
