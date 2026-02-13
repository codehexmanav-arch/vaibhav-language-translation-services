import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Quote, Languages, Briefcase, Award } from 'lucide-react';

const Founder = () => {
    return (
        <>
            <Helmet>
                <title>Founder Profile - Nitesh 'Raj' | Vaibhav Language Translation Services</title>
                <meta name="description" content="Meet Nitesh 'Raj', the founder of Vaibhav Language Translation Services, with over 13 years of expertise in Indo-China industrial relations and interpretation." />
            </Helmet>

            <section className="section" style={{
                paddingTop: '8rem', paddingBottom: '4rem',
                background: 'linear-gradient(to bottom, var(--bg-surface), white)',
                color: 'var(--color-text-main)'
            }}>
                <div className="container">
                    <div className="slide-up" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', gap: '2rem' }}>
                        <div style={{
                            width: '200px', height: '200px', borderRadius: '50%',
                            border: '4px solid var(--color-secondary)',
                            background: 'linear-gradient(135deg, var(--color-secondary), var(--color-secondary-dark))',
                            color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center',
                            fontSize: '4rem', fontWeight: 700, fontFamily: 'var(--font-heading)',
                            boxShadow: 'var(--shadow-lg)'
                        }}>NR</div>

                        <div>
                            <span className="section-label">Founder & Principal Consultant</span>
                            <h1 style={{ fontSize: '3rem', marginTop: '0.5rem', marginBottom: '1rem', color: 'var(--color-heading)' }}>Nitesh 'Raj'</h1>
                            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '700px', margin: '0 auto', fontStyle: 'italic' }}>
                                "Bridging the linguistic and cultural gap for global businesses since 2011."
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section container">
                <div className="grid-cols-2" style={{ gap: '4rem', alignItems: 'start' }}>
                    <div className="slide-up">
                        <h2 style={{ marginBottom: '2rem', color: 'var(--color-heading)' }}>A Journey of Excellence</h2>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                            With over <strong style={{ color: 'var(--color-secondary)' }}>13 years of extensive experience</strong>, Nitesh Raj has been a pivotal figure in facilitating Indo-China industrial collaborations. His journey began with a passion for languages and a vision to eliminate communication barriers that often hinder complex engineering projects.
                        </p>
                        <p style={{ marginBottom: '1.5rem', fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                            Starting as a technical interpreter, he quickly recognized the need for a holistic approach that combines linguistic precision with industrial expertise. This led to the inception of Vaibhav Language Translation Services, which now serves as a one-stop solution for Interpretation, Translation, and Industrial Manpower support.
                        </p>
                        <p style={{ fontSize: '1.05rem', lineHeight: 1.8, color: 'var(--color-text-muted)' }}>
                            His deep understanding of both Indian and Chinese business cultures allows him to navigate negotiations, conflict resolution, and project management with exceptional skill.
                        </p>

                        <div className="card" style={{ marginTop: '2.5rem', padding: '2rem', borderLeft: '4px solid var(--color-secondary)' }}>
                            <Quote size={28} color="var(--color-secondary)" style={{ marginBottom: '0.75rem' }} />
                            <p style={{ fontStyle: 'italic', fontSize: '1.05rem', color: 'var(--color-heading)', lineHeight: 1.7 }}>
                                "Language is not just about words; it's about understanding the intent, the culture, and the technical nuance behind every instruction. Our goal is to ensure that no project suffers due to a lack of understanding."
                            </p>
                        </div>
                    </div>

                    <div style={{ display: 'grid', gap: '2rem' }}>
                        {[
                            { icon: Languages, title: 'Linguistic Mastery', desc: 'Expert in Chinese (Mandarin) - English technical interpretation and translation. Proficient in managing multi-lingual teams.' },
                            { icon: Briefcase, title: 'Industrial Expertise', desc: 'Hands-on experience in Steel, Power, Cement, Chemicals, and Electronic manufacturing sectors.' },
                            { icon: Award, title: 'Major Projects', desc: 'Played key roles in projects for Jindal Steel, Tata Steel, Neogen Chemicals, Vivo Mobile, and DMRC (Delhi Metro).' }
                        ].map((card, idx) => (
                            <div key={idx} className="card slide-up" style={{ padding: '2rem', display: 'flex', gap: '1.5rem', transitionDelay: `${idx * 0.1}s` }}>
                                <div className="icon-box" style={{ height: 'fit-content', flexShrink: 0 }}>
                                    <card.icon size={24} />
                                </div>
                                <div>
                                    <h3 style={{ marginBottom: '0.5rem', color: 'var(--color-heading)' }}>{card.title}</h3>
                                    <p style={{ color: 'var(--color-text-muted)', lineHeight: 1.6 }}>{card.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Founder;
