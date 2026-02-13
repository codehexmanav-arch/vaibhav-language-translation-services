import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero';
import { Users, HardHat, ShieldCheck } from 'lucide-react';

const Manpower = () => {
    return (
        <>
            <Helmet>
                <title>Industrial Manpower Supply | Vaibhav Language Translation Services</title>
                <meta name="description" content="Reliable and skilled manpower for Mechanical, Civil, Electrical, Programming, and Maintenance projects." />
            </Helmet>

            <Hero
                title="Industrial Manpower Supply"
                subtitle="Reliable. Skilled. Professional. Providing highly skilled workforce for Mechanical, Civil, Electrical, and Automation projects."
                ctaText="Request Manpower"
                ctaLink="/contact"
            />

            <section className="section container">
                <div className="text-center slide-up" style={{ maxWidth: '800px', margin: '0 auto 4rem' }}>
                    <span className="section-label">Workforce Solutions</span>
                    <h2 style={{ marginBottom: '1rem' }}>Skilled Workforce Solutions</h2>
                    <p style={{ fontSize: '1.05rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                        We specialize in providing skilled and semi-skilled workforce for large-scale industrial projects. Our rigorous screening process ensures that you get reliable and competent professionals.
                    </p>
                </div>

                <div className="grid-cols-3" style={{ gap: '2rem' }}>
                    <div className="card service-card slide-up stagger-1">
                        <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                            <Users size={28} />
                        </div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-heading)' }}>Technical Engineers</h3>
                        <ul className="custom-list">
                            <li>Mechanical & Electrical Engineers</li>
                            <li>Site Supervisors</li>
                            <li>Quality Control Inspectors</li>
                            <li>Commissioning Specialists</li>
                        </ul>
                    </div>

                    <div className="card service-card slide-up stagger-2">
                        <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                            <HardHat size={28} />
                        </div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-heading)' }}>Skilled Technicians</h3>
                        <ul className="custom-list">
                            <li>Welders (TIG/MIG/Arc)</li>
                            <li>Fitters & Machinists</li>
                            <li>Industrial Electricians</li>
                            <li>CNC Operators</li>
                        </ul>
                    </div>

                    <div className="card service-card slide-up stagger-3">
                        <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                            <ShieldCheck size={28} />
                        </div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-heading)' }}>Safety Personnel</h3>
                        <ul className="custom-list">
                            <li>Safety Officers (HSE)</li>
                            <li>Fire Watchers</li>
                            <li>First Aid Responders</li>
                            <li>Compliance Auditors</li>
                        </ul>
                    </div>
                </div>

                <div className="card" style={{ marginTop: '3rem', padding: '3rem', textAlign: 'center', background: 'var(--bg-surface)' }}>
                    <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem', color: 'var(--color-heading)' }}>Why Choose Our Manpower?</h3>
                    <div className="grid-cols-3" style={{ gap: '2rem', textAlign: 'left' }}>
                        {[
                            { title: 'Verified Backgrounds', desc: 'Every candidate undergoes strict background checks and police verification.' },
                            { title: 'Skill Tested', desc: 'Practical trade tests conducted by industry experts before deployment.' },
                            { title: 'Statutory Compliant', desc: 'Full adherence to labor laws, PF, ESI, and other statutory requirements.' }
                        ].map((item, idx) => (
                            <div key={idx}>
                                <h4 style={{ marginBottom: '0.5rem', color: 'var(--color-secondary)' }}>{item.title}</h4>
                                <p style={{ color: 'var(--color-text-muted)' }}>{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Manpower;
