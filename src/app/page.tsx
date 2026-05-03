'use client';
import React, { useMemo } from 'react';
import Header from '../../components/header';
import Image from 'next/image';
import ProjectCard from '../../components/project-card';
import Footer from '../../components/footer';
import { useWindowSize } from '../hooks/windowContextProvider';
import projectsData from '../data/projects.json';
import {
  Code2,
  FileJson,
  Zap,
  GitBranch,
  Link as LinkIcon,
  Network,
  Server,
  Database,
  Mail,
  Heart,
  Users,
  Code,
  Briefcase,
} from 'lucide-react';

type Project = {
  id: string;
  title: string;
  description: string;
  link?: string;
  thumbnail?: string;
};

type Service = {
  icon: string | React.ReactNode;
  title: string;
  description: string;
};

type ContactItem = {
  icon: React.ReactNode;
  link: string;
  isEmail: boolean;
};

export default function Page() {
  const skillsData = useMemo(
    () => [
      {
        label: 'Python',
        icon: <Code2 size={56} strokeWidth={1.5} />,
      },
      {
        label: 'TypeScript',
        icon: <FileJson size={56} strokeWidth={1.5} />,
      },
      {
        label: 'Next.js',
        icon: <Zap size={56} strokeWidth={1.5} />,
      },
      {
        label: 'Git',
        icon: <GitBranch size={56} strokeWidth={1.5} />,
      },
      {
        label: 'LangChain',
        icon: <LinkIcon size={56} strokeWidth={1.5} />,
      },
      {
        label: 'OpenAI API',
        icon: <Network size={56} strokeWidth={1.5} />,
      },
      {
        label: 'FastAPI',
        icon: <Server size={56} strokeWidth={1.5} />,
      },
      {
        label: 'Supabase',
        icon: <Database size={56} strokeWidth={1.5} />,
      },
    ],
    []
  );

  const contactData: ContactItem[] = useMemo(
    () => [
      {
        icon: <Mail size={48} strokeWidth={1.5} />,
        link: 'jaimeemanuellucero@gmail.com',
        isEmail: true,
      },
      {
        icon: <Heart size={48} strokeWidth={1.5} />,
        link: 'https://www.instagram.com/je_smuty/',
        isEmail: false,
      },
      {
        icon: <Users size={48} strokeWidth={1.5} />,
        link: 'https://www.linkedin.com/in/jaime-emanuel-lucero-6b5689249/',
        isEmail: false,
      },
      {
        icon: <Briefcase size={48} strokeWidth={1.5} />,
        link: 'https://www.upwork.com/freelancers/~0161bbada9c01d4e37?mp_source=share',
        isEmail: false,
      },
      {
        icon: <Code size={48} strokeWidth={1.5} />,
        link: 'https://github.com/JaimeLucero',
        isEmail: false,
      },
    ],
    []
  );

  const isMobile = useWindowSize();

  const projects: Project[] = projectsData;

  const handleIconClick = (contact: ContactItem) => {
    if (contact.isEmail) {
      navigator.clipboard.writeText(contact.link);
      alert('Email address copied to clipboard!');
    } else {
      window.open(contact.link, '_blank');
    }
  };

  const services: Service[] = useMemo(
    () => [
      {
        icon: (
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <circle cx="32" cy="32" r="4" fill="#6AAE5B" />
            <circle cx="20" cy="20" r="3" fill="#6AAE5B" />
            <circle cx="44" cy="20" r="3" fill="#6AAE5B" />
            <circle cx="20" cy="44" r="3" fill="#6AAE5B" />
            <circle cx="44" cy="44" r="3" fill="#6AAE5B" />
            <line x1="24" y1="23" x2="28" y2="29" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="23" x2="36" y2="29" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="24" y1="41" x2="28" y2="35" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="40" y1="41" x2="36" y2="35" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        title: 'AI Agents & Chatbots',
        description:
          'LLM-powered agents, RAG pipelines, tool-calling systems using Python, LangChain, and the OpenAI/Claude API',
      },
      {
        icon: (
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <path d="M32 8V56" stroke="#6AAE5B" strokeWidth="3" strokeLinecap="round" />
            <path d="M16 24H48" stroke="#6AAE5B" strokeWidth="3" strokeLinecap="round" />
            <path d="M16 40H48" stroke="#6AAE5B" strokeWidth="3" strokeLinecap="round" />
            <circle cx="32" cy="32" r="24" fill="none" stroke="#6AAE5B" strokeWidth="2" opacity="0.3" />
          </svg>
        ),
        title: 'Automation Workflows',
        description:
          'Business process automation — web scraping, data pipelines, API integrations, custom workflow systems',
      },
      {
        icon: (
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <rect x="12" y="12" width="40" height="40" rx="3" fill="none" stroke="#6AAE5B" strokeWidth="2" />
            <rect x="16" y="16" width="32" height="12" fill="#6AAE5B" opacity="0.3" />
            <line x1="20" y1="34" x2="44" y2="34" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="42" x2="44" y2="42" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="20" y1="50" x2="44" y2="50" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        title: 'Full-Stack Applications',
        description:
          'Production web apps with Next.js, React, and Supabase with AI capabilities embedded where they add real value',
      },
      {
        icon: (
          <svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%' }}>
            <rect x="14" y="20" width="36" height="32" rx="2" fill="none" stroke="#6AAE5B" strokeWidth="2" />
            <circle cx="32" cy="36" r="5" fill="none" stroke="#6AAE5B" strokeWidth="2" />
            <path d="M20 14L22 20" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
            <path d="M32 14V20" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
            <path d="M44 14L42 20" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
            <line x1="14" y1="52" x2="50" y2="52" stroke="#6AAE5B" strokeWidth="2" strokeLinecap="round" />
          </svg>
        ),
        title: 'API & Backend Services',
        description:
          'Python FastAPI and Node.js backends, REST and streaming APIs, database design and Supabase integration',
      },
    ],
    []
  );

  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <Header />

      {/* Hero Section */}
      <section id="home" className="relative">
        <div
          className="relative overflow-hidden"
          style={{
            minHeight: '100vh',
            background: 'linear-gradient(135deg, #0A0E0A 0%, #0D1A0D 25%, #151515 50%, #1A1410 75%, #0D0D0D 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            paddingTop: isMobile ? '90px' : '100px',
            paddingBottom: isMobile ? '40px' : '60px',
            position: 'relative',
          }}>
          {/* Animated Background Gradient Orbs */}
          <div
            style={{
              position: 'absolute',
              top: '-30%',
              right: '-15%',
              width: '700px',
              height: '700px',
              background: 'radial-gradient(circle, rgba(52, 168, 83, 0.25) 0%, rgba(74, 124, 63, 0.12) 40%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              animation: 'float 8s ease-in-out infinite',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              bottom: '-25%',
              left: '-10%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(106, 174, 91, 0.2) 0%, rgba(74, 124, 63, 0.1) 40%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(60px)',
              animation: 'float 10s ease-in-out infinite',
              animationDelay: '1s',
              pointerEvents: 'none',
            }}
          />
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '-5%',
              width: '500px',
              height: '500px',
              background: 'radial-gradient(circle, rgba(34, 139, 34, 0.15) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(50px)',
              animation: 'float 12s ease-in-out infinite',
              animationDelay: '2s',
              pointerEvents: 'none',
            }}
          />

          {/* Animated Floating Shapes - Decorative Elements */}
          <svg
            style={{
              position: 'absolute',
              width: '100%',
              height: '100%',
              pointerEvents: 'none',
              zIndex: 0,
            }}
            viewBox="0 0 1200 800"
            preserveAspectRatio="xMidYMid slice">
            {/* Floating circle 1 */}
            <circle
              cx="150"
              cy="200"
              r="30"
              fill="rgba(74, 124, 63, 0.05)"
              style={{
                animation: 'float 5s ease-in-out infinite',
              }}
            />
            {/* Floating circle 2 */}
            <circle
              cx="1000"
              cy="600"
              r="40"
              fill="rgba(106, 174, 91, 0.04)"
              style={{
                animation: 'float 7s ease-in-out infinite',
                animationDelay: '1s',
              }}
            />
            {/* Floating circle 3 */}
            <circle
              cx="200"
              cy="650"
              r="25"
              fill="rgba(74, 124, 63, 0.06)"
              style={{
                animation: 'float 6s ease-in-out infinite',
                animationDelay: '0.5s',
              }}
            />
            {/* Floating rect 1 */}
            <rect
              x="950"
              y="150"
              width="50"
              height="50"
              fill="rgba(106, 174, 91, 0.05)"
              rx="8"
              style={{
                animation: 'float 8s ease-in-out infinite',
                animationDelay: '1.5s',
              }}
            />
            {/* Animated line 1 */}
            <line
              x1="100"
              y1="400"
              x2="250"
              y2="350"
              stroke="rgba(74, 124, 63, 0.1)"
              strokeWidth="2"
              style={{
                animation: 'float 9s ease-in-out infinite',
                animationDelay: '2s',
              }}
            />
            {/* Animated line 2 */}
            <line
              x1="1050"
              y1="300"
              x2="900"
              y2="400"
              stroke="rgba(106, 174, 91, 0.08)"
              strokeWidth="2"
              style={{
                animation: 'float 10s ease-in-out infinite',
                animationDelay: '1s',
              }}
            />
          </svg>

          {/* Background decorative image */}
          <div
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              opacity: 0.02,
              pointerEvents: 'none',
              zIndex: 0,
            }}>
            <Image
              src="/home-bg.svg"
              alt=""
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div
            className="responsive-container"
            style={{
              position: 'relative',
              zIndex: 1,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: isMobile ? 'center' : 'flex-start',
              gap: isMobile ? '50px' : '60px',
              minHeight: '70vh',
            }}>
            {/* Hero Content */}
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '48px',
                width: '100%',
              }}>
              {/* Main Text Section */}
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: isMobile ? '24px' : '28px',
                }}>
                {/* Label Chip */}
                <div
                  className="reveal-up reveal-delay-1"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '12px 24px',
                    background: 'linear-gradient(135deg, rgba(52, 168, 83, 0.2), rgba(74, 124, 63, 0.15))',
                    border: '1.5px solid rgba(106, 174, 91, 0.5)',
                    borderRadius: '50px',
                    backdropFilter: 'blur(20px)',
                    width: isMobile ? '100%' : 'fit-content',
                    justifyContent: isMobile ? 'center' : 'flex-start',
                    boxShadow: '0 8px 32px rgba(52, 168, 83, 0.15), inset 0 0 20px rgba(106, 174, 91, 0.1)',
                  }}>
                  <span
                    style={{
                      width: '10px',
                      height: '10px',
                      borderRadius: '50%',
                      background: 'linear-gradient(135deg, #34A853 0%, #6AAE5B 100%)',
                      animation: 'glowPulse 2s ease-in-out infinite',
                      boxShadow: '0 0 12px rgba(52, 168, 83, 0.6)',
                    }}
                  />
                  <span
                    style={{
                      fontSize: isMobile ? '11px' : '13px',
                      fontWeight: '700',
                      color: '#34A853',
                      textTransform: 'uppercase',
                      letterSpacing: '1.5px',
                    }}>
                    Full-Stack AI Engineer
                  </span>
                </div>

                {/* Name */}
                <div
                  className="reveal-up reveal-delay-2"
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '4px',
                  }}>
                  <h1
                    style={{
                      fontSize: isMobile ? '42px' : '72px',
                      color: '#FFFFFF',
                      fontWeight: '900',
                      lineHeight: '1.1',
                      margin: 0,
                      letterSpacing: '-1.5px',
                    }}>
                    Jaime Emanuel Lucero
                  </h1>
                </div>

                {/* Accent Line */}
                <div
                  className="reveal-up reveal-delay-2"
                  style={{
                    height: '3px',
                    width: isMobile ? '80px' : '140px',
                    background: 'linear-gradient(90deg, #34A853 0%, #7ACD5F 50%, transparent 100%)',
                    borderRadius: '2px',
                  }}
                />

                {/* Bio */}
                <p
                  className="reveal-up reveal-delay-3"
                  style={{
                    fontSize: isMobile ? '15px' : '18px',
                    color: '#C8D1BC',
                    fontWeight: '400',
                    lineHeight: '1.8',
                    maxWidth: isMobile ? '100%' : '650px',
                    margin: 0,
                    letterSpacing: '0.5px',
                  }}>
                  I build intelligent systems and full-stack applications that solve real business problems. Specializing in AI agents, machine learning pipelines, and production-grade web applications.
                </p>
              </div>

              {/* Key Stats/Info Cards */}
              <div
                className="reveal-up reveal-delay-4"
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                  gap: isMobile ? '16px' : '24px',
                  width: '100%',
                  maxWidth: isMobile ? '100%' : '700px',
                }}>
                {[
                  { label: 'Projects', value: '5+' },
                  { label: 'Experience', value: '3+ yrs' },
                  { label: 'Tech Stack', value: '10+' },
                  { label: 'Expertise', value: 'AI/ML' },
                ].map((stat, idx) => (
                  <div
                    key={idx}
                    className={`reveal-up reveal-delay-${idx + 1}`}
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      padding: '20px',
                      background: 'linear-gradient(135deg, rgba(52, 168, 83, 0.08), rgba(74, 124, 63, 0.05))',
                      border: '1.5px solid rgba(52, 168, 83, 0.25)',
                      borderRadius: '12px',
                      backdropFilter: 'blur(15px)',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(52, 168, 83, 0.15), rgba(74, 124, 63, 0.1))';
                        e.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.5)';
                        e.currentTarget.style.transform = 'translateY(-4px)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.background = 'linear-gradient(135deg, rgba(52, 168, 83, 0.08), rgba(74, 124, 63, 0.05))';
                        e.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.25)';
                        e.currentTarget.style.transform = 'translateY(0)';
                      }
                    }}>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6AAE5B',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                      }}>
                      {stat.label}
                    </span>
                    <span
                      style={{
                        fontSize: '24px',
                        fontWeight: '700',
                        color: '#FFFFFF',
                        lineHeight: '1',
                      }}>
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA Buttons */}
              <div
                className="reveal-up reveal-delay-5"
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '12px' : '16px',
                  width: isMobile ? '100%' : 'fit-content',
                }}>
                <button
                  onClick={() => {
                    document.getElementById('projects')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className="btn-premium btn-scale"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '14px 32px' : '16px 40px',
                    background: 'linear-gradient(135deg, #34A853 0%, #52C754 50%, #34A853 100%)',
                    border: 'none',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: '700',
                    color: '#FFFFFF',
                    boxShadow: '0 12px 40px rgba(52, 168, 83, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
                    minWidth: isMobile ? '100%' : '180px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    letterSpacing: '0.5px',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 16px 50px rgba(52, 168, 83, 0.5), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(52, 168, 83, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                  View My Work
                </button>

                <button
                  onClick={() => {
                    document.getElementById('talk')?.scrollIntoView({
                      behavior: 'smooth',
                      block: 'start',
                    });
                  }}
                  className="btn-scale"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: isMobile ? '14px 32px' : '16px 40px',
                    background: 'rgba(52, 168, 83, 0.1)',
                    border: '2px solid rgba(52, 168, 83, 0.6)',
                    borderRadius: '12px',
                    cursor: 'pointer',
                    fontSize: isMobile ? '14px' : '16px',
                    fontWeight: '700',
                    color: '#34A853',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    minWidth: isMobile ? '100%' : '180px',
                    letterSpacing: '0.5px',
                    boxShadow: '0 8px 24px rgba(52, 168, 83, 0.15)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = 'rgba(52, 168, 83, 0.2)';
                    e.currentTarget.style.borderColor = '#52C754';
                    e.currentTarget.style.boxShadow = '0 12px 36px rgba(52, 168, 83, 0.3)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'rgba(52, 168, 83, 0.1)';
                    e.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.6)';
                    e.currentTarget.style.boxShadow = '0 8px 24px rgba(52, 168, 83, 0.15)';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}>
                  Let&apos;s Talk
                </button>
              </div>
            </div>
          </div>

          {/* Bottom gradient fade */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              height: '120px',
              background: 'linear-gradient(to bottom, transparent, rgba(13, 13, 13, 0.8))',
              pointerEvents: 'none',
              zIndex: 1,
            }}
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" style={{ position: 'relative' }}>
        <div
          style={{
            background: 'linear-gradient(180deg, #0A1208 0%, #0D0D0D 50%, #151512 100%)',
            paddingTop: isMobile ? '80px' : '120px',
            paddingBottom: isMobile ? '80px' : '120px',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(52, 168, 83, 0.2)',
          }}>
          {/* Background accent */}
          <div
            style={{
              position: 'absolute',
              top: '30%',
              right: '-10%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(52, 168, 83, 0.12) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(70px)',
              pointerEvents: 'none',
            }}
          />

          <div className="responsive-container" style={{ position: 'relative', zIndex: 1 }}>
            <div
              className="reveal-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: isMobile ? '50px' : '80px',
                gap: '16px',
              }}>
              <h2
                style={{
                  fontSize: isMobile ? '32px' : '52px',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #C8D1BC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '900',
                  margin: 0,
                  textAlign: 'center',
                  letterSpacing: '-0.5px',
                }}>
                What I Build
              </h2>
              <div
                style={{
                  width: isMobile ? '60px' : '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent, #34A853 30%, #52C754 50%, #34A853 70%, transparent)',
                  borderRadius: '2px',
                }}
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
                gap: isMobile ? '20px' : '28px',
              }}>
              {services.map((service, index) => (
                <div
                  key={index}
                  className={`reveal-up reveal-delay-${(index % 4) + 1} glass-card`}
                  style={{
                    background: 'linear-gradient(135deg, rgba(52, 168, 83, 0.08), rgba(74, 124, 63, 0.05))',
                    backdropFilter: 'blur(15px)',
                    border: '1.5px solid rgba(52, 168, 83, 0.25)',
                    borderRadius: '16px',
                    padding: isMobile ? '32px 24px' : '40px 32px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '20px',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(-8px)';
                      e.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.5)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(52, 168, 83, 0.15), rgba(74, 124, 63, 0.1))';
                      e.currentTarget.style.boxShadow = '0 24px 60px rgba(52, 168, 83, 0.25)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.25)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(52, 168, 83, 0.08), rgba(74, 124, 63, 0.05))';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}>
                  {/* Icon with glow */}
                  <div
                    style={{
                      width: isMobile ? '56px' : '64px',
                      height: isMobile ? '56px' : '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      filter: 'drop-shadow(0 0 20px rgba(74, 124, 63, 0.2))',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'scale(1.15) rotate(8deg)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'scale(1) rotate(0)';
                      }
                    }}>
                    {typeof service.icon === 'string' ? (
                      <span style={{ fontSize: isMobile ? '48px' : '56px' }}>
                        {service.icon}
                      </span>
                    ) : (
                      service.icon
                    )}
                  </div>
                  <h3
                    style={{
                      fontSize: isMobile ? '18px' : '20px',
                      color: '#F0F0F0',
                      fontWeight: '700',
                      margin: 0,
                      lineHeight: '1.4',
                      letterSpacing: '-0.3px',
                    }}>
                    {service.title}
                  </h3>
                  <p
                    style={{
                      fontSize: isMobile ? '14px' : '15px',
                      color: '#B4BFAC',
                      fontWeight: '400',
                      margin: 0,
                      lineHeight: '1.8',
                      letterSpacing: '0.2px',
                    }}>
                    {service.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ position: 'relative' }}>
        <div
          style={{
            background: 'linear-gradient(180deg, #151512 0%, #0A1208 50%, #0D0D0D 100%)',
            paddingTop: isMobile ? '80px' : '120px',
            paddingBottom: isMobile ? '80px' : '120px',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(52, 168, 83, 0.2)',
          }}>
          {/* Background accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '-10%',
              left: '-20%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(52, 168, 83, 0.1) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(70px)',
              pointerEvents: 'none',
            }}
          />

          <div className="responsive-container" style={{ position: 'relative', zIndex: 1 }}>
            <div
              className="reveal-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: isMobile ? '50px' : '80px',
                gap: '16px',
              }}>
              <h2
                style={{
                  fontSize: isMobile ? '32px' : '52px',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #C8D1BC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '900',
                  margin: 0,
                  letterSpacing: '-0.5px',
                }}>
                Technical Skills
              </h2>
              <div
                style={{
                  width: isMobile ? '60px' : '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent, #34A853 30%, #52C754 50%, #34A853 70%, transparent)',
                  borderRadius: '2px',
                }}
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                gap: isMobile ? '16px' : '24px',
                maxWidth: '1000px',
                margin: '0 auto',
              }}>
              {skillsData.map((skill, index) => (
                <div
                  key={index}
                  className={`reveal-up reveal-delay-${(index % 6) + 1}`}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, rgba(52, 168, 83, 0.08), rgba(74, 124, 63, 0.05))',
                    border: '1.5px solid rgba(52, 168, 83, 0.2)',
                    borderRadius: '14px',
                    padding: isMobile ? '20px 16px' : '28px 20px',
                    gap: '14px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    cursor: 'default',
                    position: 'relative',
                    overflow: 'hidden',
                    backdropFilter: 'blur(12px)',
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.5)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(52, 168, 83, 0.15), rgba(74, 124, 63, 0.1))';
                      e.currentTarget.style.transform = 'translateY(-6px)';
                      e.currentTarget.style.boxShadow = '0 16px 50px rgba(52, 168, 83, 0.2)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.2)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(52, 168, 83, 0.08), rgba(74, 124, 63, 0.05))';
                      e.currentTarget.style.transform = 'translateY(0)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}>
                  <div
                    style={{
                      width: isMobile ? '52px' : '64px',
                      height: isMobile ? '52px' : '64px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                      filter: 'drop-shadow(0 0 8px rgba(74, 124, 63, 0.3))',
                    }}
                    onMouseEnter={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'scale(1.15) rotate(8deg)';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isMobile) {
                        e.currentTarget.style.transform = 'scale(1) rotate(0)';
                      }
                    }}>
                    {skill.icon}
                  </div>
                  <span
                    style={{
                      fontSize: isMobile ? '12px' : '13px',
                      color: '#B4BFAC',
                      fontWeight: '600',
                      textAlign: 'center',
                      letterSpacing: '0.3px',
                    }}>
                    {skill.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ position: 'relative' }}>
        <div
          style={{
            background: 'linear-gradient(180deg, #0A1208 0%, #0D0D0D 50%, #151512 100%)',
            paddingTop: isMobile ? '80px' : '120px',
            paddingBottom: isMobile ? '80px' : '120px',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(52, 168, 83, 0.2)',
          }}>
          {/* Background accent */}
          <div
            style={{
              position: 'absolute',
              top: '20%',
              right: '-15%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(52, 168, 83, 0.12) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(70px)',
              pointerEvents: 'none',
            }}
          />

          <div className="responsive-container" style={{ position: 'relative', zIndex: 1 }}>
            <div
              className="reveal-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: isMobile ? '50px' : '80px',
                gap: '16px',
              }}>
              <h2
                style={{
                  fontSize: isMobile ? '32px' : '52px',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #C8D1BC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '900',
                  margin: 0,
                  letterSpacing: '-0.5px',
                }}>
                Featured Projects
              </h2>
              <div
                style={{
                  width: isMobile ? '60px' : '100px',
                  height: '4px',
                  background: 'linear-gradient(90deg, transparent, #34A853 30%, #52C754 50%, #34A853 70%, transparent)',
                  borderRadius: '2px',
                }}
              />
            </div>

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
                gap: isMobile ? '20px' : '28px',
                width: '100%',
                justifyContent: 'center',
              }}>
              {projects.map((project, index) => (
                <div
                  key={project.id}
                  className={`reveal-up reveal-delay-${(index % 6) + 1}`}
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    animation: `fadeInUp 0.7s cubic-bezier(0.4, 0, 0.2, 1) forwards`,
                    animationDelay: `${0.1 * (index + 1)}s`,
                    opacity: 0,
                  }}>
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    thumbnail={project.thumbnail || ''}
                    link={project.link || ''}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="talk" style={{ position: 'relative' }}>
        <div
          style={{
            background: 'linear-gradient(180deg, #151512 0%, #0A1208 50%, #0D0D0D 100%)',
            paddingTop: isMobile ? '80px' : '120px',
            paddingBottom: isMobile ? '80px' : '120px',
            position: 'relative',
            overflow: 'hidden',
            borderTop: '1px solid rgba(52, 168, 83, 0.2)',
          }}>
          {/* Background accent */}
          <div
            style={{
              position: 'absolute',
              bottom: '-20%',
              left: '-15%',
              width: '600px',
              height: '600px',
              background: 'radial-gradient(circle, rgba(52, 168, 83, 0.12) 0%, transparent 70%)',
              borderRadius: '50%',
              filter: 'blur(70px)',
              pointerEvents: 'none',
            }}
          />

          <div className="responsive-container" style={{ position: 'relative', zIndex: 1 }}>
            <div
              className="reveal-up"
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                marginBottom: isMobile ? '60px' : '80px',
                gap: '20px',
              }}>
              <h2
                style={{
                  fontSize: isMobile ? '32px' : '52px',
                  background: 'linear-gradient(135deg, #FFFFFF 0%, #C8D1BC 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  fontWeight: '900',
                  margin: 0,
                  letterSpacing: '-0.5px',
                }}>
                Let&apos;s Work Together
              </h2>
              <p
                style={{
                  fontSize: isMobile ? '15px' : '18px',
                  color: '#B4BFAC',
                  fontWeight: '400',
                  textAlign: 'center',
                  maxWidth: '650px',
                  margin: 0,
                  lineHeight: '1.8',
                  letterSpacing: '0.3px',
                }}>
                Available for AI/automation freelance projects. Reach out
                through any of these platforms and let&apos;s create something amazing.
              </p>
            </div>

            <div
              className="reveal-up reveal-delay-2"
              style={{
                display: 'flex',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'center',
                alignItems: 'center',
                gap: isMobile ? '20px' : '24px',
              }}>
              {contactData.map((contact, index) => (
                <div
                  key={index}
                  onClick={() => handleIconClick(contact)}
                  style={{
                    display: 'flex',
                    position: 'relative',
                    width: isMobile ? '64px' : '80px',
                    height: isMobile ? '64px' : '80px',
                    cursor: 'pointer',
                    background: 'linear-gradient(135deg, rgba(74, 124, 63, 0.1), rgba(21, 21, 21, 0.5))',
                    border: '2px solid rgba(74, 124, 63, 0.2)',
                    borderRadius: '14px',
                    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                    backdropFilter: 'blur(10px)',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#6AAE5B',
                  }}
                  onMouseEnter={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.borderColor = 'rgba(74, 124, 63, 0.5)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(74, 124, 63, 0.25), rgba(30, 32, 24, 0.7))';
                      e.currentTarget.style.transform = 'translateY(-8px) scale(1.05)';
                      e.currentTarget.style.boxShadow = '0 20px 50px rgba(74, 124, 63, 0.25)';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isMobile) {
                      e.currentTarget.style.borderColor = 'rgba(74, 124, 63, 0.2)';
                      e.currentTarget.style.background = 'linear-gradient(135deg, rgba(74, 124, 63, 0.1), rgba(21, 21, 21, 0.5))';
                      e.currentTarget.style.transform = 'translateY(0) scale(1)';
                      e.currentTarget.style.boxShadow = 'none';
                    }
                  }}>
                  <div
                    style={{
                      width: isMobile ? '40px' : '48px',
                      height: isMobile ? '40px' : '48px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      filter: 'drop-shadow(0 0 8px rgba(74, 124, 63, 0.3))',
                    }}>
                    {contact.icon}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
