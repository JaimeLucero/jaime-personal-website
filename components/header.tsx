'use client';
import { useEffect, useState, useCallback, useMemo } from 'react';
import { useWindowSize } from '../src/hooks/windowContextProvider';
import Image from 'next/image';

export default function Header() {
    const [activeSection, setActiveSection] = useState<string>('home');
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const isMobile = useWindowSize();

    const navItems = useMemo(() => [
        { id: 'home', label: 'Home' },
        { id: 'services', label: 'Services' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'talk', label: "Let's Talk" }
    ], []);

    const handleScroll = useCallback(() => {
        const sections = navItems.map((item) => document.getElementById(item.id));

        sections.forEach((section) => {
            if (section) {
                const rect = section.getBoundingClientRect();
                if (rect.top <= 0 && rect.bottom >= 0) {
                    setActiveSection(section.id);
                }
            }
        });
    }, [navItems]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const handleClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
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
                    onClick={() => handleClick('home')}>
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
                    {navItems.map((item) => (
                        <li
                            key={item.id}
                            style={{
                                width: isMobile ? '100%' : 'auto',
                            }}>
                            <button
                                onClick={() => handleClick(item.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: isMobile ? 'flex-start' : 'center',
                                    width: '100%',
                                    padding: isMobile ? '16px 20px' : '0 20px',
                                    height: isMobile ? 'auto' : '36px',
                                    background: item.id === 'talk' && !isMobile ? '#4A7C3F' : 'transparent',
                                    border: 'none',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                    transition: 'all 0.2s ease',
                                }}>
                                <span
                                    style={{
                                        font: 'Poppins',
                                        fontSize: isMobile ? '18px' : '15px',
                                        fontWeight: item.id === activeSection ? '600' : '400',
                                        color: activeSection === item.id
                                            ? '#4A7C3F'
                                            : item.id === 'talk' && !isMobile
                                                ? '#F0F0F0'
                                                : '#9CA3AF',
                                        transition: 'color 0.2s ease',
                                    }}>
                                    {item.label}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
