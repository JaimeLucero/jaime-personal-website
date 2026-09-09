'use client';
import React, { useMemo } from 'react';
import Header from '../../components/header';
import Footer from '../../components/footer';
import HeroBackground from '../../components/hero-background';
import PageSection from '../../components/page-section';
import SectionHeading from '../../components/section-heading';
import CaseStudyCard from '../../components/case-study-card';
import ProjectCard from '../../components/project-card';
import ExperienceStrip from '../../components/experience-strip';
import FaqSection from '../../components/faq-section';
import ContactSection from '../../components/contact-section';
import { useWindowSize } from '../hooks/windowContextProvider';
import projectsData from '../data/projects.json';
import { isCaseStudy, type Project } from '../data/project';
import {
  CONTACT_SECTION_ID,
  FAQ_SECTION_ID,
  HOME_SECTION_ID,
  PROJECTS_SECTION_ID,
  SERVICES_SECTION_ID,
  SKILLS_SECTION_ID,
} from '../navigation/navigation-items';
import { scrollToSection } from '../navigation/scroll-to-section';
import {
  Code2,
  FileJson,
  Zap,
  GitBranch,
  Link as LinkIcon,
  Network,
  Server,
  Database,
  FileText,
} from 'lucide-react';

type Service = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

type HeroMetric = {
  value: string;
  label: string;
};

const HERO_METRICS: HeroMetric[] = [
  { value: '15+', label: 'AI features shipped' },
  { value: '80%', label: 'Less manual processing' },
  { value: '1,000+', label: 'Users supported' },
  { value: '99.9%', label: 'Uptime' },
];

const HERO_HEADLINE = 'I build AI agents and automations that ship to production';
const HERO_SUBHEADLINE =
  'Full-stack AI engineer turning ideas into working products: LLM agents, automation pipelines, and Next.js apps users rely on.';

type Benefit = {
  title: string;
  detail: string;
};

const BENEFITS: Benefit[] = [
  {
    title: 'One engineer, whole stack',
    detail: 'Frontend, backend, AI layer, database, and deployment from one person. Fewer handoffs, faster iteration.',
  },
  {
    title: 'Measured results',
    detail: 'Automation pipelines at Inventiv cut manual processing by up to 80% and sped up decision-making by 40%.',
  },
  {
    title: 'Built to stay up',
    detail: 'Full-stack systems serving 1,000+ users at 99.9% uptime, designed for high-concurrency automation tasks.',
  },
];

const PRIMARY_BUTTON_STYLE: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'linear-gradient(135deg, #34A853 0%, #52C754 50%, #34A853 100%)',
  border: 'none',
  borderRadius: '12px',
  cursor: 'pointer',
  fontWeight: '700',
  color: '#FFFFFF',
  boxShadow: '0 12px 40px rgba(52, 168, 83, 0.4), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  letterSpacing: '0.5px',
};

const SECONDARY_BUTTON_STYLE: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  background: 'rgba(52, 168, 83, 0.1)',
  border: '2px solid rgba(52, 168, 83, 0.6)',
  borderRadius: '12px',
  cursor: 'pointer',
  fontWeight: '700',
  color: '#34A853',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  letterSpacing: '0.5px',
  boxShadow: '0 8px 24px rgba(52, 168, 83, 0.15)',
};

const TERTIARY_LINK_STYLE: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '8px',
  background: 'transparent',
  border: '2px solid rgba(200, 209, 188, 0.4)',
  borderRadius: '12px',
  cursor: 'pointer',
  fontWeight: '700',
  color: '#C8D1BC',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  letterSpacing: '0.5px',
  textDecoration: 'none',
};

const CARD_STYLE: React.CSSProperties = {
  background: 'linear-gradient(135deg, rgba(52, 168, 83, 0.08), rgba(74, 124, 63, 0.05))',
  backdropFilter: 'blur(15px)',
  border: '1.5px solid rgba(52, 168, 83, 0.25)',
  borderRadius: '16px',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
};

export default function Page() {
  const isMobile = useWindowSize();

  const skillsData = useMemo(
    () => [
      { label: 'Python', icon: <Code2 size={56} strokeWidth={1.5} /> },
      { label: 'TypeScript', icon: <FileJson size={56} strokeWidth={1.5} /> },
      { label: 'Next.js', icon: <Zap size={56} strokeWidth={1.5} /> },
      { label: 'Git', icon: <GitBranch size={56} strokeWidth={1.5} /> },
      { label: 'LangChain', icon: <LinkIcon size={56} strokeWidth={1.5} /> },
      { label: 'OpenAI API', icon: <Network size={56} strokeWidth={1.5} /> },
      { label: 'FastAPI', icon: <Server size={56} strokeWidth={1.5} /> },
      { label: 'Supabase', icon: <Database size={56} strokeWidth={1.5} /> },
    ],
    []
  );

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
          'One LLM-powered feature integrated into your product: agents, chatbots, RAG search, or document extraction. Python, LangChain, and the OpenAI and Claude APIs.',
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
        title: 'Automation Pipelines',
        description:
          'Replace a manual process with web scraping, data pipelines, and API integrations. The same kind of B2B pipelines that cut manual processing by up to 80% at Inventiv.',
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
          'Production web and mobile apps with Next.js, React, Supabase, and Flutter, with AI embedded where it adds real value.',
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
          'Python FastAPI and Node.js backends, REST and streaming APIs, database design, and Supabase integration.',
      },
    ],
    []
  );

  const projects: Project[] = projectsData;
  const caseStudies = projects.filter(isCaseStudy);
  const otherProjects = projects.filter((project) => !isCaseStudy(project));

  const buttonPadding = isMobile ? '14px 32px' : '16px 40px';
  const buttonFontSize = isMobile ? '14px' : '16px';
  const buttonMinWidth = isMobile ? '100%' : '180px';

  return (
    <div className="bg-[#0D0D0D] min-h-screen">
      <Header />

      <section id={HOME_SECTION_ID} className="relative">
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
          <HeroBackground />

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
            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px', width: '100%' }}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '24px' : '28px' }}>
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
                    Full-Stack AI Engineer, available for projects
                  </span>
                </div>

                <h1
                  className="reveal-up reveal-delay-2"
                  style={{
                    fontSize: isMobile ? '36px' : '64px',
                    color: '#FFFFFF',
                    fontWeight: '900',
                    lineHeight: '1.1',
                    margin: 0,
                    letterSpacing: '-1.5px',
                    maxWidth: isMobile ? '100%' : '900px',
                    textAlign: isMobile ? 'center' : 'left',
                  }}>
                  {HERO_HEADLINE}
                </h1>

                <div
                  className="reveal-up reveal-delay-2"
                  style={{
                    height: '3px',
                    width: isMobile ? '80px' : '140px',
                    background: 'linear-gradient(90deg, #34A853 0%, #7ACD5F 50%, transparent 100%)',
                    borderRadius: '2px',
                  }}
                />

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
                    textAlign: isMobile ? 'center' : 'left',
                  }}>
                  {HERO_SUBHEADLINE}
                </p>
                <p
                  className="reveal-up reveal-delay-3"
                  style={{
                    fontSize: isMobile ? '14px' : '16px',
                    color: '#9CA3AF',
                    margin: 0,
                    textAlign: isMobile ? 'center' : 'left',
                  }}>
                  Jaime Emanuel Lucero, Davao City, Philippines
                </p>
              </div>

              <div
                className="reveal-up reveal-delay-5"
                style={{
                  display: 'flex',
                  flexDirection: isMobile ? 'column' : 'row',
                  gap: isMobile ? '12px' : '16px',
                  width: isMobile ? '100%' : 'fit-content',
                }}>
                <button
                  onClick={() => scrollToSection(CONTACT_SECTION_ID)}
                  className="btn-premium btn-scale"
                  style={{ ...PRIMARY_BUTTON_STYLE, padding: buttonPadding, fontSize: buttonFontSize, minWidth: buttonMinWidth }}>
                  Email Me About Your Project
                </button>

                <button
                  onClick={() => scrollToSection(PROJECTS_SECTION_ID)}
                  className="btn-scale"
                  style={{ ...SECONDARY_BUTTON_STYLE, padding: buttonPadding, fontSize: buttonFontSize, minWidth: buttonMinWidth }}>
                  See Case Studies
                </button>

                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-scale"
                  style={{ ...TERTIARY_LINK_STYLE, padding: buttonPadding, fontSize: buttonFontSize, minWidth: buttonMinWidth }}>
                  <FileText size={18} />
                  View Resume
                </a>
              </div>

              <div
                data-testid="hero-metrics"
                className="reveal-up reveal-delay-4"
                style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
                  gap: isMobile ? '16px' : '24px',
                  width: '100%',
                  maxWidth: isMobile ? '100%' : '800px',
                }}>
                {HERO_METRICS.map((metric, index) => (
                  <div
                    key={metric.label}
                    className={`reveal-up reveal-delay-${index + 1}`}
                    style={{
                      ...CARD_STYLE,
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '8px',
                      padding: '20px',
                      borderRadius: '12px',
                    }}>
                    <span style={{ fontSize: '26px', fontWeight: '800', color: '#FFFFFF', lineHeight: '1' }}>
                      {metric.value}
                    </span>
                    <span
                      style={{
                        fontSize: '12px',
                        fontWeight: '600',
                        color: '#6AAE5B',
                        textTransform: 'uppercase',
                        letterSpacing: '0.8px',
                      }}>
                      {metric.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

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

      <PageSection id={SERVICES_SECTION_ID} backgroundVariant="primary">
        <div
          className="reveal-up"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr',
            gap: isMobile ? '32px' : '64px',
            marginBottom: isMobile ? '60px' : '100px',
            alignItems: 'start',
          }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <span style={{ fontSize: '13px', fontWeight: '700', color: '#6AAE5B', textTransform: 'uppercase', letterSpacing: '1px' }}>
              The problem
            </span>
            <p style={{ fontSize: isMobile ? '16px' : '20px', color: '#F0F0F0', fontWeight: '600', lineHeight: '1.6', margin: 0 }}>
              You have a process eating hours of manual work every week, or an AI feature your competitors already shipped.
            </p>
            <p style={{ fontSize: isMobile ? '14px' : '16px', color: '#B4BFAC', lineHeight: '1.8', margin: 0 }}>
              Hiring a full team is slow and expensive. A demo that only works on stage does not help either. You need
              someone who can scope it, build it, and keep it running.
            </p>
          </div>
          <ul data-testid="benefits-list" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {BENEFITS.map((benefit) => (
              <li key={benefit.title} style={{ display: 'flex', flexDirection: 'column', gap: '6px', paddingLeft: '18px', borderLeft: '3px solid #34A853' }}>
                <span style={{ fontSize: isMobile ? '16px' : '17px', fontWeight: '700', color: '#F0F0F0' }}>{benefit.title}</span>
                <span style={{ fontSize: isMobile ? '14px' : '15px', color: '#B4BFAC', lineHeight: '1.7' }}>{benefit.detail}</span>
              </li>
            ))}
          </ul>
        </div>

        <SectionHeading title="How I Can Help" />

        <div
          data-testid="services-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(2, 1fr)',
            gap: isMobile ? '20px' : '28px',
          }}>
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`reveal-up reveal-delay-${(index % 4) + 1} glass-card`}
              style={{
                ...CARD_STYLE,
                padding: isMobile ? '32px 24px' : '40px 32px',
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                cursor: 'default',
                position: 'relative',
                overflow: 'hidden',
              }}
              onMouseEnter={(event) => {
                if (isMobile) return;
                event.currentTarget.style.transform = 'translateY(-8px)';
                event.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.5)';
                event.currentTarget.style.boxShadow = '0 24px 60px rgba(52, 168, 83, 0.25)';
              }}
              onMouseLeave={(event) => {
                if (isMobile) return;
                event.currentTarget.style.transform = 'translateY(0)';
                event.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.25)';
                event.currentTarget.style.boxShadow = 'none';
              }}>
              <div
                style={{
                  width: isMobile ? '56px' : '64px',
                  height: isMobile ? '56px' : '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'drop-shadow(0 0 20px rgba(74, 124, 63, 0.2))',
                }}>
                {service.icon}
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
      </PageSection>

      <PageSection id={PROJECTS_SECTION_ID} backgroundVariant="alternate">
        <SectionHeading title="Case Studies" subtitle="Shipped work with the problem it solved and the result it produced." />

        <div style={{ display: 'flex', flexDirection: 'column', gap: isMobile ? '24px' : '32px' }}>
          {caseStudies.map((project, index) => (
            <div key={project.id} className={`reveal-up reveal-delay-${(index % 4) + 1}`}>
              <CaseStudyCard
                title={project.title}
                problem={project.problem ?? ''}
                outcomes={project.outcomes ?? []}
                link={project.link}
                thumbnail={project.thumbnail}
              />
            </div>
          ))}
        </div>

        <h3
          style={{
            fontSize: isMobile ? '22px' : '28px',
            color: '#F0F0F0',
            fontWeight: '800',
            margin: isMobile ? '60px 0 24px' : '80px 0 32px',
            textAlign: 'center',
            letterSpacing: '-0.5px',
          }}>
          More Work
        </h3>
        <div
          data-testid="more-work-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? '1fr' : 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: isMobile ? '20px' : '28px',
            width: '100%',
            justifyContent: 'center',
          }}>
          {otherProjects.map((project, index) => (
            <div
              key={project.id}
              className={`reveal-up reveal-delay-${(index % 6) + 1}`}
              style={{ display: 'flex', justifyContent: 'center' }}>
              <ProjectCard
                title={project.title}
                description={project.description}
                thumbnail={project.thumbnail || ''}
                link={project.link || ''}
              />
            </div>
          ))}
        </div>
      </PageSection>

      <PageSection id={SKILLS_SECTION_ID} backgroundVariant="primary">
        <SectionHeading title="Experience & Credentials" />
        <ExperienceStrip />

        <h3
          style={{
            fontSize: isMobile ? '22px' : '28px',
            color: '#F0F0F0',
            fontWeight: '800',
            margin: isMobile ? '60px 0 24px' : '80px 0 32px',
            textAlign: 'center',
            letterSpacing: '-0.5px',
          }}>
          Technical Skills
        </h3>
        <div
          data-testid="skills-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
            gap: isMobile ? '16px' : '24px',
            maxWidth: '1000px',
            margin: '0 auto',
          }}>
          {skillsData.map((skill, index) => (
            <div
              key={skill.label}
              className={`reveal-up reveal-delay-${(index % 6) + 1}`}
              style={{
                ...CARD_STYLE,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: '14px',
                padding: isMobile ? '20px 16px' : '28px 20px',
                gap: '14px',
                cursor: 'default',
              }}
              onMouseEnter={(event) => {
                if (isMobile) return;
                event.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.5)';
                event.currentTarget.style.transform = 'translateY(-6px)';
              }}
              onMouseLeave={(event) => {
                if (isMobile) return;
                event.currentTarget.style.borderColor = 'rgba(52, 168, 83, 0.25)';
                event.currentTarget.style.transform = 'translateY(0)';
              }}>
              <div
                style={{
                  width: isMobile ? '52px' : '64px',
                  height: isMobile ? '52px' : '64px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  filter: 'drop-shadow(0 0 8px rgba(74, 124, 63, 0.3))',
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
      </PageSection>

      <PageSection id={FAQ_SECTION_ID} backgroundVariant="alternate">
        <SectionHeading title="Common Questions" />
        <FaqSection />
      </PageSection>

      <PageSection id={CONTACT_SECTION_ID} backgroundVariant="primary">
        <SectionHeading
          title="Have a process to automate or an AI feature to ship?"
          subtitle="Send a short description of what you need and I will come back with a scope and a price."
        />
        <ContactSection />
      </PageSection>

      <Footer />
    </div>
  );
}
