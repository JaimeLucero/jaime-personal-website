'use client';
import '../src/styles/globals.css'
import { useEffect, useState, useCallback, useMemo } from 'react';


export default function Header() {
    const [activeSection, setActiveSection] = useState<string>('home'); // Track active section
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false); // Track menu visibility

    const navItems = useMemo(() => [
        { id: 'home', label: 'Home' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'talk', label: "Let's Talk!" }
      ], []); // Empty dependency array means navItems will only be created once
    
      // Update active section on scroll or when hash changes
    const handleScroll = useCallback(() => {
        const sections = navItems.map((item) => document.getElementById(item.id));

        // Check which section is in view
        sections.forEach((section) => {
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 0 && rect.bottom >= 0) {
            setActiveSection(section.id); // Update active section when it's in view
            }
        }
        });
    }, [navItems]);

    // Listen to scroll events to update active section
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
        window.removeEventListener('scroll', handleScroll); // Clean up on component unmount
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
        setIsMenuOpen(false); // Close menu after clicking
      };
    

    return (
      <div
      style={{
        display: 'flex',
        height: '100px',
        position: 'fixed',
        background: '#1E1E1E',
        width: '100vw',
        justifyContent: 'space-between',
        zIndex: '10'
      }}>
        <div
        style={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            paddingLeft: '5vw'
        }}>
            <h1
            style={{
                font: 'Poppins',
                fontSize: '2rem',
                fontWeight: '900',
                color: 'white'
            }}>
                Jaime
            </h1>
        </div>
        <div
        style={{
            display: 'flex',
            alignContent: 'center',
            alignItems: 'center',
            paddingRight: '8vw',
            height: '100%'
        }}>
            <button
            style={{
                display: window.innerWidth >= 767 ? 'none' : 'flex', // Toggle menu on mobile
                background: 'none',
                border: 'none',
                color: 'white',
                fontSize: '40px',
                cursor: 'pointer',
            }}
            className="hamburger-btn"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
            ☰
            </button>

            <ul
            style={{
                listStyleType: 'none',
                display: window.innerWidth <= 767 && !isMenuOpen ? 'none' : 'flex', // Toggle menu on mobile
                flexDirection: window.innerWidth <= 767 ? 'column' : 'row',
                position: window.innerWidth <= 767 ? 'fixed' : 'static', // Position the menu
                top: '100px', // Below the header
                right: '160px',
                width: window.innerWidth <= 767 ? '30%' : 'auto', // Full width on mobile
                height: '100%',
                background: '#1E1E1E',
                padding: '10px',
            }}>
                {navItems.map((item) => (
                    <li key={item.id} style={{}}>
                        <div
                        style={{
                            display: 'flex',
                            background: item.id === 'talk' ? '#38502C' : '',
                            height: '40px',
                            alignItems: 'center',
                            borderRadius: '5px'
                        }}
                        >
                            <a 
                            href={`#${item.id}`} 
                            onClick={(e) => {
                                e.preventDefault(); // Prevent default link behavior
                                handleClick(item.id); // Handle the click
                              }}
                            style={{ 
                                color: activeSection === item.id ? 'white': 'gray', 
                                padding: '20px' 
                            }}> 
                                {item.label}
                            </a>
                        </div>    
                    </li>
                ))}
            </ul>
            
        </div>
      </div>
    )
  }