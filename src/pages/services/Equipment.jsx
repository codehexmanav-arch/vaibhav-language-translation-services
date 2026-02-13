import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../../components/Hero';
import { Factory, Zap, Settings, CheckCircle } from 'lucide-react';

const Equipment = () => {
    return (
        <>
            <Helmet>
                <title>Industrial Equipment Trading | Vaibhav Language Translation Services</title>
                <meta name="description" content="Global sourcing and supply of industrial machinery, electrical equipment, and spare parts from trusted manufacturers in China." />
            </Helmet>

            <Hero
                title="Industrial Equipment & Machinery"
                subtitle="Global Sourcing. Reliable Supply. Trusted Partner. Specializing in high-quality industrial equipment and parts from leading manufacturers."
                ctaText="Request Quote"
                ctaLink="/contact"
            />

            <section className="section container">
                <div className="text-center" style={{ marginBottom: '3rem' }}>
                    <span className="section-label">What We Offer</span>
                    <h2>Equipment Categories</h2>
                </div>

                <div className="grid-cols-3" style={{ gap: '2rem' }}>
                    <div className="card slide-up stagger-1" style={{ padding: '2.5rem' }}>
                        <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                            <Factory size={28} />
                        </div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-heading)' }}>Industrial Machinery</h3>
                        <ul className="custom-list">
                            <li>Manufacturing machinery</li>
                        </ul>
                        <div style={{ marginTop: '1.5rem' }}>
                            <h4 style={{ marginBottom: '0.75rem', color: 'var(--color-secondary)' }}>Source</h4>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                Identifying reliable manufacturers and suppliers globally. We verify specifications, certifications, and track records.
                            </p>

                            <h4 style={{ marginBottom: '0.75rem', color: 'var(--color-secondary)' }}>Supply</h4>
                            <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                                End-to-end logistics management including shipping, customs clearance, and delivery to your site.
                            </p>

                            <h4 style={{ marginBottom: '0.75rem', color: 'var(--color-secondary)' }}>Install</h4>
                            <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.7 }}>
                                Providing technical support for installation and commissioning, often bridging the language gap between foreign OEMs and local teams.
                            </p>
                        </div>
                    </div>

                    <div className="card slide-up stagger-2" style={{ padding: '2.5rem' }}>
                        <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                            <Zap size={28} />
                        </div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-heading)' }}>Electrical & Mechanical</h3>
                        <ul className="custom-list">
                            <li>Motors, gearboxes & Pumps</li>
                            <li>Generators & transformers</li>
                            <li>Industrial panels & control systems</li>
                            <li>HVAC systems</li>
                        </ul>
                    </div>

                    <div className="card slide-up stagger-3" style={{ padding: '2.5rem' }}>
                        <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                            <Settings size={28} />
                        </div>
                        <h3 style={{ marginBottom: '1rem', color: 'var(--color-heading)' }}>Industrial Spare Parts</h3>
                        <ul className="custom-list">
                            <li>Mechanical & Electrical spares</li>
                            <li>Bearings, belts, Valves & fittings</li>
                            <li>Hydraulic & pneumatic parts</li>
                            <li>Custom-made spare parts</li>
                        </ul>
                    </div>
                </div>

                {/* China Sourcing Section */}
                <div className="card" style={{ marginTop: '4rem', padding: '0', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' }}>
                    <div style={{ padding: '3rem' }}>
                        <span className="section-label" style={{ textAlign: 'left' }}>Sourcing</span>
                        <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-heading)' }}>China Sourcing Expertise</h3>
                        <p style={{ color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.7 }}>
                            We work directly with trusted Chinese manufacturers to ensure competitive pricing, high-quality standards, and genuine products. We handle supplier verification, inspection, and logistics.
                        </p>
                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                            {['Competitive Pricing', 'Quality Control', 'Bulk Capabilities', 'Timely Delivery'].map((item, idx) => (
                                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-text-main)' }}>
                                    <CheckCircle size={18} color="var(--color-secondary)" /> {item}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div style={{
                        background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))',
                        padding: '3rem', color: 'white',
                        display: 'flex', flexDirection: 'column', justifyContent: 'center'
                    }}>
                        <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Our Trading Services</h3>
                        <ul style={{ display: 'grid', gap: '1rem' }}>
                            {['Equipment sourcing from China', 'Import & export coordination', 'Logistics & freight support', 'Product customization', 'After-sales support assistance'].map((item, idx) => (
                                <li key={idx} style={{ borderBottom: idx < 4 ? '1px solid rgba(255,255,255,0.15)' : 'none', paddingBottom: idx < 4 ? '0.75rem' : 0 }}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Equipment;
