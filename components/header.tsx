'use client';
import { useEffect, useState, useCallback } from 'react';
import { useWindowSize } from '../src/hooks/windowContextProvider';
import Image from 'next/image';
import { CONTACT_SECTION_ID, HOME_SECTION_ID, NAVIGATION_ITEMS } from '../src/navigation/navigation-items';
import { scrollToSection } from '../src/navigation/scroll-to-section';

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>(HOME_SECTION_ID);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const isMobile = useWindowSize();

    const handleScroll = useCallback(() => {
        const sections = NAVIGATION_ITEMS.map((navigationItem) => document.getElementById(navigationItem.id));

        sections.forEach((section) => {
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    setActiveSection(section.id);
                }
            }
        });
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const handleClick = (sectionId: string) => {
        scrollToSection(sectionId);
        setIsMenuOpen(false);
    };

    return (
        <div
            className="glass-nav"
            style={{
                display: 'flex',
                height: '70px',
                position: 'fixed',
                width: '100vw',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 100,
                borderBottom: '1px solid rgba(74, 124, 63, 0.15)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                backdropFilter: 'blur(12px)',
            }}>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    paddingLeft: isMobile ? '20px' : '5vw',
                }}>
                <div
                    style={{
                        position: 'relative',
                        width: '32px',
                        height: '32px',
                        cursor: 'pointer',
                    }}
                    onClick={() => handleClick(HOME_SECTION_ID)}>
                    <Image
                        src="/J-logo.svg"
                        alt="Jaime Lucero"
                        fill
                        style={{ objectFit: 'contain' }}
                    />
                </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    paddingRight: isMobile ? '20px' : '5vw',
                    height: '100%',
                }}>
                <button
                    aria-label="Toggle navigation menu"
                    style={{
                        display: isMobile ? 'flex' : 'none',
                        background: 'none',
                        border: 'none',
                        color: '#F0F0F0',
                        fontSize: '28px',
                        cursor: 'pointer',
                        padding: '10px',
                    }}
                    className="hamburger-btn"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    ☰
                </button>

                <ul
                    aria-label="Main navigation"
                    style={{
                        listStyleType: 'none',
                        display: isMobile && !isMenuOpen ? 'none' : 'flex',
                        flexDirection: isMobile ? 'column' : 'row',
                        position: isMobile ? 'fixed' : 'static',
                        top: '64px',
                        right: '0',
                        width: isMobile ? '60%' : 'auto',
                        height: isMobile ? 'calc(100vh - 64px)' : '100%',
                        background: 'rgba(13, 13, 13, 0.98)',
                        padding: isMobile ? '20px' : '0',
                        margin: 0,
                        gap: isMobile ? '10px' : '0',
                        boxShadow: isMobile ? '0 4px 20px rgba(0, 0, 0, 0.5)' : 'none',
                        alignItems: 'center',
                    }}>
                    {NAVIGATION_ITEMS.map((navigationItem) => {
                        const isContactItem = navigationItem.id === CONTACT_SECTION_ID;
                        const isActive = navigationItem.id === activeSection;
                        return (
                            <li
                                key={navigationItem.id}
                                style={{
                                    width: isMobile ? '100%' : 'auto',
                                }}>
                                <button
                                    onClick={() => handleClick(navigationItem.id)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: isMobile ? 'flex-start' : 'center',
                                        width: '100%',
                                        padding: isMobile ? '16px 20px' : '0 20px',
                                        height: isMobile ? 'auto' : '36px',
                                        background: isContactItem && !isMobile ? '#4A7C3F' : 'transparent',
                                        border: 'none',
                                        borderRadius: '6px',
                                        cursor: 'pointer',
                                        transition: 'all 0.2s ease',
                                    }}>
                                    <span
                                        style={{
                                            font: 'Poppins',
                                            fontSize: isMobile ? '18px' : '15px',
                                            fontWeight: isActive ? '600' : '400',
                                            color: isActive
                                                ? '#4A7C3F'
                                                : isContactItem && !isMobile
                                                    ? '#F0F0F0'
                                                    : '#9CA3AF',
                                            transition: 'color 0.2s ease',
                                        }}>
                                        {navigationItem.label}
                                    </span>
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </div>
    );
}
