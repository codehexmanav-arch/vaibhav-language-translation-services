import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FileText, Clock, Shield, Globe, UserCheck, Briefcase } from 'lucide-react';
import Hero from '../../components/Hero';

const Frro = () => {
    return (
        <>
            <Helmet>
                <title>FRRO Services & Visa Support | Vaibhav Language Translation Services</title>
                <meta name="description" content="Complete FRRO assistance including Registration, Visa Extension, Residential Permits, and Exit Permits for foreign nationals in India." />
            </Helmet>

            <Hero
                title="FRRO & Immigration Services"
                subtitle="Reliable and hassle-free FRRO assistance for foreign nationals. We ensure timely registration and full compliance with Indian immigration rules."
                ctaText="Get FRRO Support"
                ctaLink="/contact"
            />

            {/* Introduction */}
            <section className="section container">
                <div className="text-center slide-up" style={{ marginBottom: '4rem' }}>
                    <span className="section-label">Immigration Services</span>
                    <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.8, maxWidth: '800px', margin: '0 auto' }}>
                        Navigating local regulations can be daunting for foreign nationals. We provide end-to-end assistance for all Foreigners Regional Registration Office (FRRO) requirements in India.
                    </p>
                </div>

                <div className="grid-cols-2" style={{ gap: '2rem' }}>
                    {[
                        { icon: UserCheck, title: 'Registration Support', desc: 'Mandatory registration support for foreign nationals staying beyond the permitted period.', items: ['Form C assistance', 'Online portal registration', 'Document submission'] },
                        { icon: Clock, title: 'Visa Extension', desc: 'Assistance for extending Indian visas as per government guidelines.', items: ['Employment visa extension', 'Medical visa extension', 'Student visa extension'] },
                        { icon: Shield, title: 'Residential Permit (RP)', desc: 'Support for obtaining or renewing Residential Permits in India.', items: ['New RP application', 'Change of address', 'Change of passport details'] },
                        { icon: FileText, title: 'Exit Permits', desc: 'Assistance for foreigners requiring an exit permit before leaving India.', items: ['Overstay processing', 'Lost passport cases', 'Emergency exit permits'] },
                        { icon: Briefcase, title: 'Visa Conversion', desc: 'Guidance for eligible visa conversions as per immigration rules.', items: ['Business to Employment', 'Student to Employment', 'Entry Visa conversions'] },
                        { icon: Globe, title: 'OCI / PIO Services', desc: 'Basic guidance for OCI (Overseas Citizen of India) and PIO related requirements.', items: ['New OCI application', 'OCI renewal', 'Address updates'] }
                    ].map((card, idx) => (
                        <div key={idx} className="card service-card slide-up" style={{ transitionDelay: `${(idx % 2) * 0.1}s` }}>
                            <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                                <card.icon size={28} />
                            </div>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-heading)' }}>{card.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1rem' }}>{card.desc}</p>
                            <ul className="custom-list">
                                {card.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>
            </section>

            {/* Process Section */}
            <section className="section bg-surface">
                <div className="container">
                    <div className="text-center" style={{ marginBottom: '3rem' }}>
                        <span className="section-label">How We Work</span>
                        <h2>Our FRRO Approach</h2>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px', margin: '0 auto' }}>
                        {[
                            "Initial consultation & requirement analysis",
                            "Document collection and verification",
                            "Online FRRO application submission",
                            "Regular follow-ups and status tracking",
                            "Approval support and compliance guidance"
                        ].map((step, idx) => (
                            <div key={idx} className="card slide-up" style={{ padding: '1.5rem', display: 'flex', alignItems: 'center', gap: '1.5rem', transitionDelay: `${idx * 0.08}s` }}>
                                <div style={{
                                    background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))',
                                    color: 'white', width: '44px', height: '44px', borderRadius: '50%',
                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 700, flexShrink: 0, fontFamily: 'var(--font-heading)'
                                }}>
                                    {idx + 1}
                                </div>
                                <span style={{ fontSize: '1.05rem', fontWeight: 500, color: 'var(--color-heading)' }}>{step}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="section container">
                <div className="card" style={{
                    background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))',
                    color: 'white', padding: '4rem', textAlign: 'center', border: 'none'
                }}>
                    <h2 style={{ color: 'white', marginBottom: '2rem' }}>Why Choose Our FRRO Services?</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {[
                            { title: 'Expert Consultants', desc: 'Experienced team with deep knowledge of immigration laws.' },
                            { title: 'Quick Turnaround', desc: 'Efficient processing to ensure timely approvals.' },
                            { title: 'Transparent', desc: 'Clear process and pricing with no hidden surprises.' },
                            { title: 'Personalized', desc: 'Tailored assistance for every unique applicant case.' }
                        ].map((item, idx) => (
                            <div key={idx}>
                                <h4 style={{ color: 'rgba(255,255,255,0.9)', marginBottom: '0.5rem' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.75)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Frro;
