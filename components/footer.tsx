'use client';
import { useMemo } from 'react';

export default function Footer() {

     const navItems = useMemo(() => [
        { id: 'home', label: 'Home' },
        { id: 'skills', label: 'Skills' },
        { id: 'projects', label: 'Projects' },
        { id: 'talk', label: "Let's Talk!" }
    ], []); // Empty dependency array means navItems will only be created once

    const handleClick = (id: string) => {
        const section = document.getElementById(id);
        if (section) {
          // Scroll to the section smoothly
          section.scrollIntoView({
            behavior: 'smooth',
            block: 'start', // Align to the start of the section
          });
        }
      };
    return (
        <div
        style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center'
        }}>
            <div
            style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: '80%'
            }}>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '20vw',
                    alignItems: 'center'
                }}>
                    <h1
                    style={{
                        font: 'Poppins',
                        fontSize: '40px',
                        color: '#1E1E1E',
                        fontWeight: 'bold'
                    }}>
                        Jaime
                    </h1>
                    <h3
                    style={{
                        font: 'Poppins',
                        fontSize: '20px',
                        color: '#1E1E1E',
                        fontWeight: 'normal'
                    }}>
                        Personal Website
                    </h3>
                </div>
                <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '20vw',
                    alignItems: 'center'
                }}>
                    <h1
                    style={{
                        font: 'Poppins',
                        fontSize: '20px',
                        color: '#1E1E1E',
                        fontWeight: 'normal'
                    }}>
                        Site map:
                    </h1>
                    <ul
                    style={{
                        listStyleType: 'none',
                        display: 'flex',
                        flexDirection: 'column',
                    }}>
                        {navItems.map((item) => (
                            <li key={item.id} style={{ padding:'0px'}}>
                                <div
                                style={{
                                    display: 'flex',
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
                                        color: '#1E1E1E',
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
            <h3
            style={{
                color: '#1E1E1E',
            }}
            >
                Copyrights 2025
            </h3>
        </div>
    )
}