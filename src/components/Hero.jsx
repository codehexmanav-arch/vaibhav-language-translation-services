import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Hero = ({
    title,
    subtitle,
    ctaText = "Get a Quote",
    ctaLink = "/contact",
    secondaryCtaText = "Contact on WhatsApp",
    secondaryCtaLink = "https://wa.me/919876543210",
    backgroundImage
}) => {
    const hasImage = !!backgroundImage;

    const heroStyle = {
        background: hasImage
            ? `linear-gradient(135deg, rgba(15, 23, 42, 0.75), rgba(15, 23, 42, 0.55)), url(${backgroundImage})`
            : `linear-gradient(135deg, var(--bg-surface) 0%, #e0f2fe 50%, var(--bg-surface) 100%)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '75vh',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
        overflow: 'hidden'
    };

    return (
        <section className="hero" style={heroStyle}>
            {/* Decorative floating circles */}
            {!hasImage && (
                <>
                    <div style={{
                        position: 'absolute',
                        width: '300px',
                        height: '300px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(37, 99, 235, 0.06), transparent 70%)',
                        top: '-50px',
                        right: '-50px',
                        animation: 'float 6s ease-in-out infinite',
                        pointerEvents: 'none'
                    }} />
                    <div style={{
                        position: 'absolute',
                        width: '200px',
                        height: '200px',
                        borderRadius: '50%',
                        background: 'radial-gradient(circle, rgba(245, 158, 11, 0.05), transparent 70%)',
                        bottom: '50px',
                        left: '10%',
                        animation: 'float 8s ease-in-out infinite 2s',
                        pointerEvents: 'none'
                    }} />
                </>
            )}

            <div className="container" style={{ position: 'relative', zIndex: 2 }}>
                <div style={{
                    maxWidth: '800px',
                    marginLeft: hasImage ? '0' : 'auto',
                    marginRight: hasImage ? '0' : 'auto',
                    textAlign: hasImage ? 'left' : 'center'
                }}>
                    <h1 style={{
                        fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
                        fontWeight: 800,
                        marginBottom: '1.5rem',
                        lineHeight: 1.1,
                        letterSpacing: '-0.03em',
                        color: hasImage ? 'white' : 'var(--color-heading)',
                        animation: 'fadeInUp 0.8s ease-out'
                    }}>
                        {title}
                    </h1>
                    <p style={{
                        fontSize: 'clamp(1.05rem, 2vw, 1.25rem)',
                        marginBottom: '2.5rem',
                        color: hasImage ? 'rgba(255,255,255,0.9)' : 'var(--color-text-muted)',
                        maxWidth: hasImage ? '600px' : '700px',
                        margin: hasImage ? undefined : '0 auto',
                        fontWeight: 400,
                        lineHeight: 1.7,
                        animation: 'fadeInUp 0.8s ease-out 0.15s both'
                    }}>
                        {subtitle}
                    </p>

                    <div style={{
                        display: 'flex',
                        gap: '1rem',
                        flexWrap: 'wrap',
                        justifyContent: hasImage ? 'flex-start' : 'center',
                        marginTop: '2.5rem',
                        animation: 'fadeInUp 0.8s ease-out 0.3s both'
                    }}>
                        <Link to={ctaLink} className="btn btn-primary" style={{ padding: '1rem 2.5rem', fontSize: '1.05rem' }}>
                            {ctaText} <ArrowRight size={20} />
                        </Link>
                        <a href={secondaryCtaLink} target="_blank" rel="noopener noreferrer" className="btn btn-outline" style={{
                            padding: '1rem 2.5rem',
                            fontSize: '1.05rem',
                            borderColor: hasImage ? 'rgba(255,255,255,0.4)' : 'var(--border-color)',
                            color: hasImage ? 'white' : 'var(--color-heading)',
                            background: hasImage ? 'rgba(255,255,255,0.1)' : 'transparent',
                            backdropFilter: hasImage ? 'blur(10px)' : 'none'
                        }}>
                            {secondaryCtaText}
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
