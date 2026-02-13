import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero';
import { Globe } from 'lucide-react';

const Translation = () => {
    return (
        <>
            <Helmet>
                <title>Language Translation & Interpretation | Vaibhav Language Services</title>
                <meta name="description" content="Professional translation services for Chinese, Japanese, Korean, Russian, German, Spanish, and Portuguese. Technical & legal expertise." />
            </Helmet>

            <Hero
                title="Translation & Interpretation"
                subtitle="Breaking down language barriers for global business success. Accurate. Confidential. Culturally Aware."
                ctaText="Get a Quote"
                ctaLink="/contact"
                backgroundImage="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1950&q=80"
            />

            <section className="section container">
                <div className="text-center slide-up" style={{ marginBottom: '4rem' }}>
                    <span className="section-label">Our Expertise</span>
                    <h2 style={{ marginBottom: '1rem' }}>Specialized Language Solutions for Industry</h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto' }}>
                        Effective communication is the cornerstone of any successful international joint venture. We provide comprehensive language solutions tailored for industrial environments.
                    </p>
                </div>

                <div className="grid-cols-2" style={{ gap: '3rem' }}>
                    <div>
                        <h3 style={{ marginBottom: '2rem', color: 'var(--color-heading)' }}>Specialized Languages</h3>
                        <div style={{ display: 'grid', gap: '1.5rem' }}>
                            {[
                                { name: 'Chinese (Mandarin)', desc: 'Expert technical interpreters for plant setup & machinery installation.' },
                                { name: 'Japanese', desc: 'Precision translation for automotive & electronics sectors.' },
                                { name: 'Korean', desc: 'Specialized support for manufacturing & IT collaborations.' },
                                { name: 'Russian', desc: 'Defense, energy, and heavy engineering interpretations.' },
                                { name: 'European (German/Spanish)', desc: 'Legal & compliance document translations.' }
                            ].map((lang, idx) => (
                                <div key={idx} className="card slide-up" style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', padding: '1.5rem', transitionDelay: `${idx * 0.08}s` }}>
                                    <div className="icon-box" style={{ width: '48px', height: '48px' }}>
                                        <Globe size={22} />
                                    </div>
                                    <div>
                                        <h4 style={{ fontSize: '1.05rem', marginBottom: '0.25rem', color: 'var(--color-heading)' }}>{lang.name}</h4>
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>{lang.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h3 style={{ marginBottom: '2rem', color: 'var(--color-heading)' }}>Our Services Include</h3>
                        <div className="card" style={{ padding: '2.5rem', height: 'calc(100% - 3.5rem)' }}>
                            {[
                                { title: 'Technical Interpretation', desc: 'On-site interpreters for shop floors, board meetings, and training sessions. Our linguists understand technical jargon and safety protocols.' },
                                { title: 'Document Translation', desc: 'Accurate translation of user manuals, SOPs, legal contracts, and engineering drawings ensuring 100% fidelity to the source.' },
                                { title: 'Localization', desc: 'Adapting software, websites, and marketing materials for local Indian or foreign markets.' }
                            ].map((service, idx) => (
                                <div key={idx} style={{ marginBottom: idx < 2 ? '2rem' : 0 }}>
                                    <h4 style={{ marginBottom: '0.75rem', color: 'var(--color-secondary)' }}>{service.title}</h4>
                                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7, margin: 0 }}>{service.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            <section className="section bg-surface">
                <div className="container">
                    <div className="grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div>
                            <span className="section-label">Advantages</span>
                            <h2 style={{ marginBottom: '1.5rem' }}>Why Choose Vaibhav Language Services?</h2>
                            <ul className="custom-list">
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong style={{ color: 'var(--color-heading)' }}>Industry Expertise:</strong> Deep understanding of industrial, technical, and legal terminology.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong style={{ color: 'var(--color-heading)' }}>Native-Level Linguists:</strong> Our team comprises native speakers with specialized domain knowledge.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong style={{ color: 'var(--color-heading)' }}>Confidentiality Assured:</strong> Strict protocols to protect your sensitive information.
                                </li>
                                <li style={{ marginBottom: '1rem' }}>
                                    <strong style={{ color: 'var(--color-heading)' }}>Cultural Nuance:</strong> Translations that resonate culturally and avoid misunderstandings.
                                </li>
                            </ul>
                        </div>
                        <div className="card" style={{ padding: '3rem', background: 'white' }}>
                            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-heading)' }}>Why Accuracy Matters?</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                In industrial sectors, a mistranslated instruction can lead to costly errors or safety hazards. We ensure that your technical intent is preserved 100%.
                            </p>
                            <Link to="/contact" className="btn btn-primary">Consult an Expert</Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Translation;
