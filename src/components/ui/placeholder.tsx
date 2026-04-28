import React from 'react';

interface PlaceholderProps {
    text: string;
    height?: string;
    rounded?: string;
    bg?: string;
    color?: string;
    className?: string;
    delay?: string;
}

const ImagePlaceholder: React.FC<PlaceholderProps> = ({ 
    text, 
    height = '300px', 
    rounded = '10px', 
    bg = '#f0f4f8', 
    color = '#1A3C6E',
    className,
    delay = '.3s'
}) => {
    return (
        <div 
            className={`wow fadeInUp ${className || ''}`}
            data-wow-delay={delay}
            style={{ 
                backgroundColor: bg, 
                borderRadius: rounded, 
                height: height, 
                width: '100%',
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center', 
                overflow: 'hidden',
                border: '2px dashed rgba(26, 60, 110, 0.2)',
                padding: '20px',
                textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.02)'
            }}
        >
            <div style={{ fontSize: '2.5rem', marginBottom: '15px', color: '#1A3C6E', opacity: 0.8 }}>
                <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            </div>
            <p style={{ 
                color: color, 
                fontWeight: '700', 
                fontSize: '1rem',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                margin: 0
            }}>
                {text}
            </p>
            <span style={{ fontSize: '0.8rem', color: '#888', marginTop: '8px', fontWeight: '500' }}>Image Placeholder - Replace in Production</span>
        </div>
    );
};

export default ImagePlaceholder;
