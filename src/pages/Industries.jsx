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
                        <Link key={industry.id} to={`/industries/${industry.slug}`} className="card service-card slide-up" style={{
                            display: 'flex',
                            flexDirection: 'column',
                            height: '100%',
                            textDecoration: 'none',
                            padding: '2.5rem',
                            transitionDelay: `${(idx % 3) * 0.1}s`
                        }}>
                            <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                                <industry.icon size={28} strokeWidth={1.5} />
                            </div>

                            <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 700, color: 'var(--color-heading)' }}>{industry.name}</h3>
                            <p style={{
                                color: 'var(--color-text-muted)',
                                fontSize: '0.95rem',
                                marginBottom: '1.5rem',
                                flexGrow: 1,
                                lineHeight: 1.7
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
                                gap: '0.5rem'
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
