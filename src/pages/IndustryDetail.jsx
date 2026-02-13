import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { industriesData } from '../data/industries.js';
import Hero from '../components/Hero';

const IndustryDetail = () => {
    const { slug } = useParams();
    const industry = industriesData.find(ind => ind.slug === slug);

    if (!industry) {
        return <Navigate to="/industries" replace />;
    }

    return (
        <>
            <Helmet>
                <title>{industry.name} Sector Services | Vaibhav Language Translation Services</title>
                <meta name="description" content={`Specialized services for the ${industry.name} industry including translation, equipment import, and manpower supply.`} />
            </Helmet>

            <Hero
                title={`${industry.name} Industry Solutions`}
                subtitle={industry.shortDesc}
                ctaText="Get Sector Expertise"
                ctaLink="/contact"
            />

            <div className="section container">
                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)', gap: '4rem' }}>
                    <div className="slide-up">
                        <h2 style={{ fontSize: '2rem', marginBottom: '1.5rem' }}>Overview</h2>
                        <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', marginBottom: '2rem', lineHeight: 1.8 }}>
                            {industry.description}
                        </p>

                        <div style={{ display: 'grid', gap: '2rem' }}>
                            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-secondary)' }}>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--color-secondary)' }}>Key Challenges</h3>
                                <p style={{ color: 'var(--color-text-muted)' }}>{industry.challenges}</p>
                            </div>

                            <div className="card" style={{ padding: '2rem', borderLeft: '4px solid var(--color-accent)' }}>
                                <h3 style={{ marginBottom: '1rem', color: 'var(--color-accent)' }}>Our Solutions</h3>
                                <p style={{ color: 'var(--color-text-muted)' }}>{industry.solutions}</p>
                            </div>
                        </div>
                    </div>

                    <aside className="slide-up">
                        <div className="card" style={{ padding: '1.5rem', marginBottom: '2rem' }}>
                            <h4 style={{ marginBottom: '1rem', color: 'var(--color-heading)' }}>Other Industries</h4>
                            <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                {industriesData.filter(ind => ind.slug !== slug).map(ind => (
                                    <li key={ind.id}>
                                        <Link to={`/industries/${ind.slug}`} style={{
                                            display: 'block', padding: '0.5rem 0.75rem',
                                            color: 'var(--color-text-muted)', borderRadius: 'var(--border-radius-sm)',
                                            transition: 'all 0.2s'
                                        }}
                                            onMouseOver={e => { e.currentTarget.style.color = 'var(--color-secondary)'; e.currentTarget.style.background = 'var(--color-secondary-50)'; }}
                                            onMouseOut={e => { e.currentTarget.style.color = 'var(--color-text-muted)'; e.currentTarget.style.background = 'transparent'; }}
                                        >
                                            {ind.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="card" style={{
                            padding: '2rem',
                            background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))',
                            color: 'white',
                            border: 'none'
                        }}>
                            <h4 style={{ marginBottom: '1rem', color: 'white' }}>Need Expert Help?</h4>
                            <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.85)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                                Our team specializes in {industry.name} sector requirements.
                            </p>
                            <Link to="/contact" className="btn" style={{
                                width: '100%', textAlign: 'center',
                                background: 'white', color: 'var(--color-secondary)',
                                border: 'none', fontWeight: 700
                            }}>Contact Us</Link>
                        </div>
                    </aside>
                </div>
            </div>
        </>
    );
};

export default IndustryDetail;
