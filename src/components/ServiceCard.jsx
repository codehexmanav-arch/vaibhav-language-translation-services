import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description, link }) => {
    return (
        <div className="card service-card" style={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%'
        }}>
            <div className="icon-box" style={{ marginBottom: '1.5rem' }}>
                <Icon size={28} strokeWidth={1.5} />
            </div>

            <h3 style={{
                fontSize: '1.3rem',
                marginBottom: '0.75rem',
                fontWeight: 700,
                color: 'var(--color-heading)'
            }}>
                {title}
            </h3>
            <p style={{
                color: 'var(--color-text-muted)',
                fontSize: '0.95rem',
                marginBottom: '2rem',
                flexGrow: 1,
                lineHeight: 1.7
            }}>
                {description}
            </p>

            <Link to={link} style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                color: 'var(--color-secondary)',
                fontWeight: 600,
                fontSize: '0.95rem',
                marginTop: 'auto',
                transition: 'gap 0.3s ease'
            }}
                onMouseOver={(e) => e.currentTarget.style.gap = '0.75rem'}
                onMouseOut={(e) => e.currentTarget.style.gap = '0.5rem'}
            >
                Learn More <ArrowRight size={16} />
            </Link>
        </div>
    );
};

export default ServiceCard;
