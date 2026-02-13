import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import { Globe, Award, TrendingUp, Users, ArrowRight, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <>
            <Helmet>
                <title>About Us | Vaibhav Language Translation Services</title>
                <meta name="description" content="Learn about our journey in bridging global industrial markets with expert translation, import, and manpower services." />
            </Helmet>

            <Hero
                title="Our Vision & Mission"
                subtitle="To be the bridge that connects Indian Industry with Global Excellence."
                ctaText="Join Our Network"
                ctaLink="/contact"
            />

            <section className="section container">
                <div className="grid-cols-2" style={{ alignItems: 'center', gap: '4rem' }}>
                    <div className="slide-up">
                        <span className="section-label">Our Story</span>
                        <h2 style={{ marginBottom: '0.5rem' }}>Our Story</h2>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-text-muted)', fontWeight: 500 }}>10+ Years of Industrial Excellence</h3>
                        <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Vaibhav Language Translation Services is a premier consultancy firm dedicated to bridging the communication gap between global enterprises and local workforces. Established in 2011, we have grown from a translation service provider to a comprehensive industrial consultancy.
                        </p>
                        <p style={{ marginBottom: '1rem', color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            Our expertise lies in Technical Interpretation, Translation, and Industrial Manpower Supply. We specialize in projects involving Chinese, Japanese, Korean, and Russian collaborations in India.
                        </p>
                        <p style={{ color: 'var(--color-text-muted)', fontSize: '1.05rem', lineHeight: 1.8 }}>
                            With a team of seasoned professionals and linguists, we ensure that your projects proceed smoothly, without language acting as a barrier to safety, quality, or efficiency.
                        </p>

                        <div style={{ marginTop: '2rem', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '1.5rem' }}>
                            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <Globe size={32} color="var(--color-secondary)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-secondary)' }}>10+</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>Years Experience</p>
                            </div>
                            <div className="card" style={{ padding: '1.5rem', textAlign: 'center' }}>
                                <Award size={32} color="var(--color-secondary)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--color-secondary)' }}>500+</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>Projects Done</p>
                            </div>
                        </div>

                        <div className="card" style={{ marginTop: '2rem', padding: '2rem' }}>
                            <h3 style={{ marginBottom: '1rem' }}>Key Highlights</h3>
                            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                {[
                                    "Active in China, Russia, India, & Middle East.",
                                    "ISO 9001:2015 Certified Processes.",
                                    "Helping clients scale operations efficiently.",
                                    "50+ Full-time consultants & engineers."
                                ].map((item, idx) => (
                                    <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                        <CheckCircle size={20} color="var(--color-secondary)" />
                                        <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)', margin: 0 }}>{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="fade-in" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1.5rem' }}>
                        {[
                            { icon: Globe, title: 'Global Reach', desc: 'Active in China, Russia, India, & Middle East.' },
                            { icon: Award, title: 'Certified Quality', desc: 'ISO 9001:2015 Certified Processes.' },
                            { icon: TrendingUp, title: 'Growth Focused', desc: 'Helping clients scale operations efficiently.' },
                            { icon: Users, title: 'Expert Team', desc: '50+ Full-time consultants & engineers.' }
                        ].map((card, idx) => (
                            <div key={idx} className="card" style={{ textAlign: 'center', padding: '2rem' }}>
                                <card.icon size={40} color="var(--color-secondary)" style={{ marginBottom: '1rem' }} />
                                <h4 style={{ color: 'var(--color-heading)' }}>{card.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="section bg-surface">
                <div className="container text-center" style={{ maxWidth: '1000px' }}>
                    <span className="section-label">Our Principles</span>
                    <h2 style={{ marginBottom: '4rem' }}>The Core Values Driving Our Success</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Transparency', desc: 'No hidden costs, no ambiguous terms. We believe in clear, honest communication with our clients and partners.' },
                            { title: 'Precision', desc: "Whether it's translating a technical manual or sourcing a valve, we ensure 100% accuracy and specification compliance." },
                            { title: 'Reliability', desc: 'We deliver on time, every time. Our logistics and manpower deployment schedules are rock solid.' }
                        ].map((value, index) => (
                            <div key={index} className="card" style={{ padding: '2.5rem', textAlign: 'left', position: 'relative' }}>
                                <div style={{
                                    fontSize: '3rem',
                                    fontWeight: 800,
                                    color: 'var(--color-text-light)',
                                    position: 'absolute',
                                    top: '1.5rem',
                                    right: '1.5rem',
                                    zIndex: 0,
                                    fontFamily: 'var(--font-heading)',
                                    opacity: 0.5
                                }}>0{index + 1}</div>
                                <div style={{ position: 'relative', zIndex: 1 }}>
                                    <h4 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--color-heading)' }}>{value.title}</h4>
                                    <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.7 }}>{value.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Leadership Section */}
            <section className="section container">
                <div className="text-center" style={{ marginBottom: '4rem' }}>
                    <span className="section-label">Leadership</span>
                    <h2 style={{ marginTop: '0.5rem' }}>Meet Our Founder</h2>
                </div>

                <div className="card" style={{ padding: '3rem', maxWidth: '1000px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', gap: '2rem', flexWrap: 'wrap' }}>
                        <div style={{
                            width: '150px', height: '150px', borderRadius: '50%',
                            background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))',
                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '3rem', fontWeight: 700, fontFamily: 'var(--font-heading)', flexShrink: 0
                        }}>NR</div>

                        <div style={{ flex: 1 }}>
                            <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-heading)' }}>Nitesh 'Raj'</h3>
                            <p style={{ color: 'var(--color-secondary)', fontWeight: 600, marginBottom: '1.5rem' }}>Founder & Principal Consultant</p>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.8 }}>
                                With over 13 years of extensive experience in Indo-China industrial relations, Nitesh Raj bridges the linguistic and cultural gap for global businesses. His expertise spans interpretation, technical translation, and project management across diverse sectors including Chemicals, Steel, Cement, and Mobile manufacturing.
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div>
                                    <h5 style={{ marginBottom: '0.5rem', fontSize: '1rem', color: 'var(--color-heading)' }}>Core Expertise</h5>
                                    <ul className="custom-list" style={{ fontSize: '0.9rem' }}>
                                        <li>Chinese-English Interpretation</li>
                                        <li>Industrial Project Coordination</li>
                                        <li>Cross-border Negotiation</li>
                                        <li>Technical Training Translation</li>
                                    </ul>
                                </div>
                                <div>
                                    <h5 style={{ marginBottom: '0.5rem', fontSize: '1rem', color: 'var(--color-heading)' }}>Industry Experience</h5>
                                    <ul className="custom-list" style={{ fontSize: '0.9rem' }}>
                                        <li>Steel & Power (Jindal, Tata Steel)</li>
                                        <li>Chemicals (Neogen)</li>
                                        <li>Construction (DMRC)</li>
                                        <li>Electronics (Vivo Mobile)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section" style={{
                background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))',
                color: 'white',
                textAlign: 'center'
            }}>
                <div className="container" style={{ maxWidth: '700px' }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem' }}>Ready to Transform Your Business?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                        Partner with us for world-class industrial consultancy and support services.
                    </p>
                    <Link to="/contact" className="btn" style={{
                        background: 'white', color: 'var(--color-secondary)',
                        border: 'none', padding: '1rem 2.5rem', fontSize: '1.05rem',
                        fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '0.5rem',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                    }}>
                        Get in Touch <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default About;
