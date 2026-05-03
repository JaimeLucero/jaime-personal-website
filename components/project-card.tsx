'use client';
import { useState } from 'react';
import Image from 'next/image';
import type { StaticImport } from 'next/dist/shared/lib/get-img-props';

export default function ProjectCard(props: {
    description: string;
    title: string;
    link: string;
    thumbnail: string | StaticImport;
}) {
    const [isHovered, setIsHovered] = useState(false);

    const handleClick = () => {
        window.open(props.link, '_blank');
    };

    return (
        <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={handleClick}
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                maxWidth: '360px',
                minHeight: '500px',
                background: 'linear-gradient(135deg, rgba(21, 21, 21, 0.6), rgba(30, 32, 24, 0.4))',
                border: `2px solid ${isHovered ? 'rgba(74, 124, 63, 0.4)' : 'rgba(74, 124, 63, 0.15)'}`,
                borderRadius: '16px',
                cursor: 'pointer',
                transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isHovered ? '0 20px 60px rgba(74, 124, 63, 0.25)' : '0 8px 24px rgba(74, 124, 63, 0.08)',
                transform: isHovered ? 'translateY(-10px) scale(1.02)' : 'translateY(0) scale(1)',
                backdropFilter: 'blur(10px)',
                overflow: 'hidden',
                position: 'relative',
            }}>
            {/* Image Container */}
            <div
                style={{
                    width: '100%',
                    height: '220px',
                    background: 'linear-gradient(135deg, rgba(74, 124, 63, 0.1), rgba(106, 174, 91, 0.05))',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    overflow: 'hidden',
                    borderBottom: '1px solid rgba(74, 124, 63, 0.2)',
                    position: 'relative',
                }}>
                <Image
                    src={props.thumbnail}
                    alt={props.title}
                    width={180}
                    height={180}
                    style={{
                        objectFit: 'contain',
                        opacity: 0.9,
                        transition: 'transform 0.4s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        transform: isHovered ? 'scale(1.1)' : 'scale(1)',
                    }}
                />
            </div>

            {/* Hover gradient overlay */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: `linear-gradient(135deg, rgba(74, 124, 63, ${isHovered ? 0.15 : 0}), rgba(106, 174, 91, ${isHovered ? 0.05 : 0}))`,
                    pointerEvents: 'none',
                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                    zIndex: 1,
                }}
            />


            {/* Content Container */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    padding: '28px',
                    flex: '1',
                    justifyContent: 'space-between',
                    zIndex: 2,
                }}>
                <div>
                    <h1
                        style={{
                            fontSize: '18px',
                            fontWeight: '700',
                            color: '#F0F0F0',
                            marginBottom: '12px',
                            lineHeight: '1.4',
                            letterSpacing: '-0.3px',
                        }}>
                        {props.title}
                    </h1>
                    <h3
                        style={{
                            fontSize: '14px',
                            fontWeight: '400',
                            color: '#B4BFAC',
                            lineHeight: '1.7',
                            marginBottom: '0',
                            letterSpacing: '0.2px',
                        }}>
                        {props.description}
                    </h3>
                </div>
                <div
                    style={{
                        marginTop: '20px',
                        paddingTop: '20px',
                        borderTop: '1px solid rgba(74, 124, 63, 0.2)',
                    }}>
                    <span
                        style={{
                            fontSize: '13px',
                            fontWeight: '600',
                            color: '#6AAE5B',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                            textTransform: 'uppercase',
                            letterSpacing: '1px',
                        }}>
                        View Project
                        <span
                            style={{
                                transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                                transform: isHovered ? 'translateX(6px)' : 'translateX(0)',
                                display: 'inline-block',
                            }}>
                            →
                        </span>
                    </span>
                </div>
            </div>
        </div>
    );
}
