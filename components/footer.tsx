'use client';
import { useMemo } from 'react';

export default function Footer() {
    const navItems = useMemo(() => [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'talk', label: "Let's Talk" }
    ], []);

    const handleClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                background: '#151515',
                borderTop: '1px solid #2A2A2A',
                paddingTop: '60px',
                paddingBottom: '40px',
                marginTop: '80px',
            }}>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '90%',
                    maxWidth: '1200px',
                    gap: '40px',
                }}>
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        width: '100%',
                        flexWrap: 'wrap',
                        gap: '40px',
                    }}>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            flex: '1',
                            minWidth: '200px',
                        }}>
                        <h1
                            style={{
                                font: 'Poppins',
                                fontSize: '32px',
                                color: '#F0F0F0',
                                fontWeight: '700',
                                marginBottom: '8px',
                            }}>
                            Jaime Lucero
                        </h1>
                        <h3
                            style={{
                                font: 'Poppins',
                                fontSize: '14px',
                                color: '#9CA3AF',
                                fontWeight: '400',
                                letterSpacing: '0.5px',
                            }}>
                            Full-Stack AI Engineer
                        </h3>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            flex: '1',
                            minWidth: '200px',
                        }}>
                        <h1
                            style={{
                                font: 'Poppins',
                                fontSize: '16px',
                                color: '#F0F0F0',
                                fontWeight: '600',
                                marginBottom: '16px',
                            }}>
                            Site map:
                        </h1>
                        <ul
                            style={{
                                listStyleType: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                margin: 0,
                                padding: 0,
                                gap: '8px',
                            }}>
                            {navItems.map((item) => (
                                <li key={item.id} style={{ padding: '0px' }}>
                                    <button
                                        onClick={() => handleClick(item.id)}
                                        style={{
                                            background: 'none',
                                            border: 'none',
                                            padding: '8px 0',
                                            cursor: 'pointer',
                                            textAlign: 'left',
                                        }}>
                                        <span
                                            style={{
                                                font: 'Poppins',
                                                fontSize: '14px',
                                                color: '#9CA3AF',
                                                transition: 'color 0.2s ease',
                                            }}
                                            onMouseEnter={(e) => {
                                                e.currentTarget.style.color = '#4A7C3F';
                                            }}
                                            onMouseLeave={(e) => {
                                                e.currentTarget.style.color = '#9CA3AF';
                                            }}>
                                            {item.label}
                                        </span>
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <h3
                style={{
                    color: '#9CA3AF',
                    fontSize: '13px',
                    marginTop: '40px',
                    fontWeight: '400',
                }}>
                © 2026 Jaime Emanuel Lucero
            </h3>
        </div>
    );
}
