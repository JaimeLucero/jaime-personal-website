'use client';
import { NAVIGATION_ITEMS } from '../src/navigation/navigation-items';
import { scrollToSection } from '../src/navigation/scroll-to-section';

export default function Footer() {
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
                        <p
                            style={{
                                font: 'Poppins',
                                fontSize: '32px',
                                color: '#F0F0F0',
                                fontWeight: '700',
                                marginBottom: '8px',
                            }}>
                            Jaime Lucero
                        </p>
                        <p
                            style={{
                                font: 'Poppins',
                                fontSize: '14px',
                                color: '#9CA3AF',
                                fontWeight: '400',
                                letterSpacing: '0.5px',
                            }}>
                            Full-Stack AI Engineer
                        </p>
                    </div>
                    <div
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'flex-start',
                            flex: '1',
                            minWidth: '200px',
                        }}>
                        <p
                            style={{
                                font: 'Poppins',
                                fontSize: '16px',
                                color: '#F0F0F0',
                                fontWeight: '600',
                                marginBottom: '16px',
                            }}>
                            Site map:
                        </p>
                        <ul
                            style={{
                                listStyleType: 'none',
                                display: 'flex',
                                flexDirection: 'column',
                                margin: 0,
                                padding: 0,
                                gap: '8px',
                            }}>
                            {NAVIGATION_ITEMS.map((item) => (
                                <li key={item.id} style={{ padding: '0px' }}>
                                    <button
                                        onClick={() => scrollToSection(item.id)}
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
            <p
                style={{
                    color: '#9CA3AF',
                    fontSize: '13px',
                    marginTop: '40px',
                    fontWeight: '400',
                }}>
                © 2026 Jaime Emanuel Lucero
            </p>
        </div>
    );
}
