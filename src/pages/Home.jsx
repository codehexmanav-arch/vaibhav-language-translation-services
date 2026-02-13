import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { ArrowRight, Languages, Globe, Award, Quote, CheckCircle, Users, FileText, Shield } from 'lucide-react';
import ServiceCard from '../components/ServiceCard';
import { industriesData } from '../data/industries';

const Home = () => {
    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.slide-up, .fade-in, .scale-in, .slide-left').forEach(el => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const testimonials = [
        { name: "John Chen", role: "Project Manager, ABC Steel", text: "Vaibhav Language Services bridged the gap between our Chinese engineers and local staff perfectly. Highly recommended!" },
        { name: "Sarah Williams", role: "HR Director, Global Tech", text: "Their interpretation services for our board meetings were flawless. Nitesh and his team are true professionals." },
        { name: "Deepak Sharma", role: "Operations Head, XYZ Cements", text: "We relied on them for technical manual translation and manpower supply. Excellent quality and timely delivery." }
    ];

    const clientLogos = [
        "Jindal Steel & Power", "Tata Steel", "Neogen Chemicals", "Vivo Mobile", "DMRC", "Oppo", "Xiaomi", "Haier"
    ];

    const stats = [
        { number: "500+", label: "Projects Completed" },
        { number: "50+", label: "Corporate Clients" },
        { number: "13+", label: "Years Experience" },
        { number: "7+", label: "Languages" }
    ];

    return (
        <>
            <Helmet>
                <title>Vaibhav Language Translation Services | Chinese, Japanese, Korean, Russian Experts</title>
                <meta name="description" content="Expert translation and interpretation services for Chinese, Japanese, Korean, Russian, German, and Spanish. Bridging global business gaps." />
            </Helmet>

            {/* ===== HERO ===== */}
            <section style={{
                minHeight: '90vh',
                display: 'flex',
                alignItems: 'center',
                background: `linear-gradient(135deg, rgba(255,255,255,0.92), rgba(219,234,254,0.85)), url("https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1950&q=80")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                position: 'relative',
                overflow: 'hidden'
            }}>
                {/* Decorative elements */}
                <div style={{
                    position: 'absolute', width: '400px', height: '400px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(37,99,235,0.08), transparent 70%)',
                    top: '-100px', right: '-100px', animation: 'float 6s ease-in-out infinite', pointerEvents: 'none'
                }} />
                <div style={{
                    position: 'absolute', width: '250px', height: '250px', borderRadius: '50%',
                    background: 'radial-gradient(circle, rgba(245,158,11,0.06), transparent 70%)',
                    bottom: '80px', left: '5%', animation: 'float 8s ease-in-out infinite 2s', pointerEvents: 'none'
                }} />

                <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                    <div style={{ maxWidth: '800px' }}>
                        <span className="section-label" style={{ animation: 'fadeInUp 0.6s ease-out' }}>
                            🌐 Global Communication Experts
                        </span>
                        <h1 style={{
                            fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)',
                            lineHeight: 1.1,
                            marginBottom: '1.5rem',
                            fontWeight: 800,
                            color: 'var(--color-heading)',
                            animation: 'fadeInUp 0.8s ease-out 0.1s both'
                        }}>
                            Bridging the World{' '}
                            <br />
                            Through <span className="gradient-text">Language</span> &{' '}
                            <span style={{ color: 'var(--color-accent)' }}>Innovation</span>
                        </h1>
                        <p style={{
                            fontSize: '1.2rem',
                            color: 'var(--color-text-muted)',
                            marginBottom: '2.5rem',
                            lineHeight: 1.7,
                            maxWidth: '600px',
                            animation: 'fadeInUp 0.8s ease-out 0.25s both'
                        }}>
                            Specialized Interpretation & Translation in Chinese, Japanese, Korean, Russian, German, Spanish, and Portuguese for industrial success.
                        </p>
                        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', animation: 'fadeInUp 0.8s ease-out 0.4s both' }}>
                            <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
                                Get a Free Quote <ArrowRight size={20} />
                            </Link>
                            <Link to="/services/translation" className="btn btn-outline" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
                                Explore Services
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TRUSTED BY ===== */}
            <section style={{ padding: '2.5rem 0', background: 'white', borderBottom: '1px solid var(--border-color)' }}>
                <div className="container text-center">
                    <p style={{ color: 'var(--color-text-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '1.5rem', fontSize: '0.8rem' }}>
                        Trusted by Industry Leaders
                    </p>
                    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap' }}>
                        <div style={{ display: 'inline-flex', gap: '4rem', animation: 'scroll 25s linear infinite' }}>
                            {[...clientLogos, ...clientLogos].map((client, idx) => (
                                <span key={idx} style={{ fontSize: '1.2rem', fontWeight: 700, color: 'var(--color-text-light)', fontFamily: 'var(--font-main)' }}>{client}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== CORE SERVICES ===== */}
            <section className="section container">
                <div className="text-center slide-up" style={{ marginBottom: '4rem' }}>
                    <span className="section-label">What We Do</span>
                    <h2 style={{ marginBottom: '1rem' }}>Our Core Expertise</h2>
                    <p style={{ color: 'var(--color-text-muted)', maxWidth: '600px', margin: '0 auto', fontSize: '1.05rem' }}>
                        Comprehensive language and industrial solutions for global business expansion.
                    </p>
                </div>

                <div className="grid-cols-3" style={{ gap: '2rem' }}>
                    <div className="slide-up stagger-1">
                        <ServiceCard
                            title="Language Translation"
                            description="Professional technical & business interpretation for Asian & European languages on-site and remotely."
                            icon={Languages}
                            link="/services/translation"
                        />
                    </div>
                    <div className="slide-up stagger-2">
                        <ServiceCard
                            title="Manpower Supply"
                            description="Skilled engineers, safety officers, and technicians for large-scale industrial projects."
                            icon={Users}
                            link="/services/manpower"
                        />
                    </div>
                    <div className="slide-up stagger-3">
                        <ServiceCard
                            title="Equipment Trading"
                            description="Strategic sourcing of high-quality machinery and industrial parts from global markets."
                            icon={Globe}
                            link="/services/equipment"
                        />
                    </div>
                </div>

                {/* Additional service links */}
                <div className="text-center slide-up" style={{ marginTop: '3rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
                        <Link to="/services/visa" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.6rem 1.5rem' }}>
                            <Shield size={16} /> Visa Services
                        </Link>
                        <Link to="/services/frro" className="btn btn-outline" style={{ fontSize: '0.9rem', padding: '0.6rem 1.5rem' }}>
                            <FileText size={16} /> FRRO & Immigration
                        </Link>
                    </div>
                </div>
            </section>

            {/* ===== STATS / WHY US — Translation Background ===== */}
            <section className="section" style={{
                background: `linear-gradient(135deg, rgba(15,23,42,0.92), rgba(30,41,59,0.88)), url("https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&w=1950&q=80")`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                backgroundAttachment: 'fixed',
                color: 'white',
                padding: '6rem 0'
            }}>
                <div className="container">
                    <div className="grid-cols-2" style={{ gap: '4rem', alignItems: 'center' }}>
                        <div className="slide-up">
                            <span className="section-label" style={{ background: 'rgba(37,99,235,0.2)', borderColor: 'rgba(37,99,235,0.3)', color: '#93c5fd' }}>Why Choose Us</span>
                            <h2 style={{ color: 'white', marginBottom: '1.5rem', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>
                                Why Partner With Vaibhav Language Services?
                            </h2>
                            <p style={{ color: 'rgba(255,255,255,0.75)', marginBottom: '2rem', fontSize: '1.05rem', lineHeight: 1.7 }}>
                                We combine linguistic precision with deep industrial knowledge to ensure your global projects succeed without communication barriers.
                            </p>
                            <ul style={{ display: 'grid', gap: '1.25rem' }}>
                                {[
                                    "Native-level proficiency in 7+ languages",
                                    "13+ Years of Industrial Experience",
                                    "ISO 9001:2015 Certified Processes",
                                    "Dedicated Technical & Legal Translators"
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', gap: '1rem', alignItems: 'center', fontSize: '1.05rem' }}>
                                        <CheckCircle size={22} color="#60a5fa" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="grid-cols-2 fade-in" style={{ gap: '1.5rem' }}>
                            {stats.map((stat, idx) => (
                                <div key={idx} className="scale-in" style={{
                                    background: 'rgba(255,255,255,0.08)',
                                    backdropFilter: 'blur(12px)',
                                    border: '1px solid rgba(255,255,255,0.12)',
                                    borderRadius: 'var(--border-radius-lg)',
                                    padding: '2rem',
                                    textAlign: 'center',
                                    transitionDelay: `${idx * 0.1}s`
                                }}>
                                    <h3 style={{ fontSize: '2.75rem', color: '#60a5fa', marginBottom: '0.25rem', fontWeight: 800 }}>{stat.number}</h3>
                                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.9rem', margin: 0 }}>{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ===== TESTIMONIALS ===== */}
            <section className="section" style={{ background: 'var(--bg-surface)' }}>
                <div className="container">
                    <div className="text-center slide-up" style={{ marginBottom: '4rem' }}>
                        <span className="section-label">Testimonials</span>
                        <h2 style={{ marginBottom: '1rem' }}>What Our Clients Say</h2>
                        <p style={{ color: 'var(--color-text-muted)', maxWidth: '500px', margin: '0 auto' }}>
                            Trusted by leading enterprises across industries.
                        </p>
                    </div>
                    <div className="grid-cols-3" style={{ gap: '2rem' }}>
                        {testimonials.map((t, idx) => (
                            <div key={idx} className="card slide-up" style={{ padding: '2.5rem', transitionDelay: `${idx * 0.1}s` }}>
                                <Quote size={36} style={{ color: 'var(--color-secondary)', opacity: 0.15, marginBottom: '1rem' }} />
                                <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', color: 'var(--color-text-main)', lineHeight: 1.7, fontSize: '0.95rem' }}>"{t.text}"</p>
                                <div style={{ borderTop: '1px solid var(--border-color)', paddingTop: '1rem' }}>
                                    <h4 style={{ fontSize: '1rem', marginBottom: '0.25rem', fontWeight: 700, color: 'var(--color-heading)' }}>{t.name}</h4>
                                    <span style={{ fontSize: '0.85rem', color: 'var(--color-secondary)', fontWeight: 500 }}>{t.role}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== INDUSTRIES ===== */}
            <section className="section">
                <div className="container">
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
                        <div className="slide-up">
                            <span className="section-label">Sectors</span>
                            <h2 style={{ marginBottom: '0.5rem' }}>Industries We Serve</h2>
                            <p style={{ color: 'var(--color-text-muted)' }}>Tailored language and industrial solutions for diverse sectors.</p>
                        </div>
                        <Link to="/industries" className="btn btn-outline slide-up" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>View All <ArrowRight size={18} /></Link>
                    </div>

                    <div className="grid-cols-4" style={{ gap: '1.5rem' }}>
                        {industriesData.slice(0, 4).map((industry, idx) => (
                            <Link to={`/industries/${industry.slug}`} key={industry.id} className="card scale-in" style={{
                                padding: '2rem',
                                textAlign: 'center',
                                textDecoration: 'none',
                                color: 'inherit',
                                transitionDelay: `${idx * 0.1}s`
                            }}>
                                <div className="icon-box" style={{ margin: '0 auto 1rem', width: '56px', height: '56px' }}>
                                    <industry.icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 style={{ fontSize: '1.1rem', fontWeight: 600, color: 'var(--color-heading)' }}>{industry.name}</h3>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* ===== CTA ===== */}
            <section className="section text-center" style={{
                background: `linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))`,
                color: 'white',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <div style={{
                    position: 'absolute', width: '300px', height: '300px', borderRadius: '50%',
                    background: 'rgba(255,255,255,0.05)', top: '-80px', right: '-80px', pointerEvents: 'none'
                }} />
                <div className="container slide-up" style={{ maxWidth: '700px', position: 'relative', zIndex: 2 }}>
                    <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: 'clamp(1.75rem, 3.5vw, 2.5rem)' }}>Ready to Go Global?</h2>
                    <p style={{ fontSize: '1.1rem', marginBottom: '2.5rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.7 }}>
                        Contact us today for a free consultation on translation, interpretation, or industrial manpower requirements.
                    </p>
                    <Link to="/contact" className="btn" style={{
                        background: 'white',
                        color: 'var(--color-secondary)',
                        padding: '1rem 2.5rem',
                        fontSize: '1.05rem',
                        fontWeight: 700,
                        border: 'none',
                        boxShadow: '0 4px 20px rgba(0,0,0,0.15)'
                    }}>
                        Get in Touch <ArrowRight size={20} />
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
