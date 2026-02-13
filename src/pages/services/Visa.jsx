import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero';
import { Globe, FileCheck, Briefcase, GraduationCap, FileText } from 'lucide-react';

const Visa = () => {
    return (
        <>
            <Helmet>
                <title>Visa Assistance Services | Vaibhav Language Translation Services</title>
                <meta name="description" content="End-to-end visa assistance for Tourist, Business, Student, and Work visas for USA, UK, Canada, Schengen, China, and more." />
            </Helmet>

            <Hero
                title="Global Visa Services"
                subtitle="We provide end-to-end visa assistance to individuals, families, students, and business travelers. Our expert team ensures a smooth, hassle-free visa process."
                ctaText="Start Visa Application"
                ctaLink="/contact"
            />

            <section className="section container">
                <div className="grid-cols-2" style={{ gap: '2rem' }}>
                    {[
                        { icon: Globe, title: 'Tourist Visa', desc: 'Assistance for travelers planning short visits for tourism, family visits, or leisure purposes.', items: ['Document checklist preparation', 'Form filling assistance', 'Interview guidance'] },
                        { icon: Briefcase, title: 'Business Visa', desc: 'Support for professionals attending meetings, conferences, trade fairs, or business activities.', items: ['Invitation letter formatting', 'Company profile preparation', 'Travel itinerary planning'] },
                        { icon: GraduationCap, title: 'Student Visa', desc: 'Complete guidance for students pursuing education abroad.', items: ['University admission support', 'Financial documentation', 'SOP assistance'] },
                        { icon: FileText, title: 'Work Permit', desc: 'Assistance for candidates with overseas job offers.', items: ['Employment contract review', 'Work visa application', 'Pre-departure briefing'] }
                    ].map((card, idx) => (
                        <div key={idx} className="card service-card slide-up" style={{ transitionDelay: `${(idx % 2) * 0.1}s` }}>
                            <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                                <card.icon size={28} />
                            </div>
                            <h3 style={{ marginBottom: '1rem', color: 'var(--color-heading)' }}>{card.title}</h3>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem' }}>{card.desc}</p>
                            <ul className="custom-list" style={{ fontSize: '0.9rem' }}>
                                {card.items.map((item, i) => <li key={i}>{item}</li>)}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="card" style={{ marginTop: '3rem', padding: '2.5rem', background: 'var(--bg-surface)', textAlign: 'center' }}>
                    <h3 style={{ marginBottom: '1rem', color: 'var(--color-heading)' }}>Countries We Support</h3>
                    <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', maxWidth: '800px', margin: '0 auto' }}>
                        Visa assistance for USA, UK, Canada, Schengen countries, Australia, UAE, Singapore, China, Taiwan, Hongkong and more.
                    </p>
                </div>
            </section>

            <section className="section bg-surface">
                <div className="container text-center">
                    <span className="section-label">Our Process</span>
                    <h2 style={{ marginBottom: '1rem' }}>Our Visa Assistance Process</h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto 3rem' }}>
                        We follow a structured approach to minimize rejection risks and ensure a smooth experience.
                    </p>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
                        {[
                            { step: '01', title: 'Consultation', desc: 'Understanding your purpose and eligibility.' },
                            { step: '02', title: 'Documentation', desc: 'Compiling and verifying all required papers.' },
                            { step: '03', title: 'Application', desc: 'Accurate form filling and submission.' },
                            { step: '04', title: 'Follow-up', desc: 'Tracking status until passport delivery.' }
                        ].map((item, idx) => (
                            <div key={idx} className="slide-up" style={{ transitionDelay: `${idx * 0.1}s` }}>
                                <span style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--color-secondary)', fontFamily: 'var(--font-heading)', display: 'block', marginBottom: '0.75rem', opacity: 0.4 }}>{item.step}</span>
                                <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-heading)' }}>{item.title}</h4>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-muted)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Visa;
