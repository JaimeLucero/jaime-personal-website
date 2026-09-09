'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useWindowSize } from '../src/hooks/windowContextProvider';
import { CONTACT_EMAIL, buildProjectBriefMailtoUrl } from '../src/contact/project-brief-mailto';

const PROFILE_ICON_SIZE_IN_PIXELS = 22;

type ProfileLink = {
  label: string;
  href: string;
  iconPath: string;
};

const PROFILE_LINKS: ProfileLink[] = [
  { label: 'Email', href: `mailto:${CONTACT_EMAIL}`, iconPath: '/mail.svg' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jaime-emanuel-lucero-6b5689249/', iconPath: '/linkedin.svg' },
  { label: 'GitHub', href: 'https://github.com/JaimeLucero', iconPath: '/github.svg' },
  { label: 'Upwork', href: 'https://www.upwork.com/freelancers/~0161bbada9c01d4e37?mp_source=share', iconPath: '/upwork.svg' },
];

const INPUT_STYLE: React.CSSProperties = {
  width: '100%',
  padding: '14px 16px',
  background: 'rgba(13, 13, 13, 0.6)',
  border: '1.5px solid rgba(52, 168, 83, 0.3)',
  borderRadius: '10px',
  color: '#F0F0F0',
  fontSize: '15px',
  fontFamily: 'inherit',
  outline: 'none',
  boxSizing: 'border-box',
};

export default function ContactSection() {
  const isMobile = useWindowSize();
  const [senderName, setSenderName] = useState('');
  const [senderEmail, setSenderEmail] = useState('');
  const [projectDescription, setProjectDescription] = useState('');

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    window.location.href = buildProjectBriefMailtoUrl({ senderName, senderEmail, projectDescription });
  };

  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr',
        gap: isMobile ? '40px' : '64px',
        alignItems: 'start',
      }}>
      <form
        data-testid="contact-form"
        onSubmit={handleSubmit}
        className="reveal-up reveal-delay-2"
        style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', fontWeight: '600', color: '#C8D1BC' }}>
          Your name
          <input
            name="senderName"
            value={senderName}
            onChange={(event) => setSenderName(event.target.value)}
            required
            style={INPUT_STYLE}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', fontWeight: '600', color: '#C8D1BC' }}>
          Your email
          <input
            name="senderEmail"
            type="email"
            value={senderEmail}
            onChange={(event) => setSenderEmail(event.target.value)}
            required
            style={INPUT_STYLE}
          />
        </label>
        <label style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: '13px', fontWeight: '600', color: '#C8D1BC' }}>
          What do you need built?
          <textarea
            name="projectDescription"
            value={projectDescription}
            onChange={(event) => setProjectDescription(event.target.value)}
            required
            rows={6}
            style={{ ...INPUT_STYLE, resize: 'vertical', minHeight: '140px' }}
          />
        </label>
        <button
          type="submit"
          className="btn-premium btn-scale"
          style={{
            padding: isMobile ? '14px 32px' : '16px 40px',
            background: 'linear-gradient(135deg, #34A853 0%, #52C754 50%, #34A853 100%)',
            border: 'none',
            borderRadius: '12px',
            cursor: 'pointer',
            fontSize: isMobile ? '14px' : '16px',
            fontWeight: '700',
            color: '#FFFFFF',
            boxShadow: '0 12px 40px rgba(52, 168, 83, 0.4)',
            letterSpacing: '0.5px',
            width: isMobile ? '100%' : 'fit-content',
          }}>
          Send Project Brief
        </button>
        <span style={{ fontSize: '13px', color: '#9CA3AF' }}>
          Opens your email app with the message filled in.
        </span>
      </form>

      <div className="reveal-up reveal-delay-3" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <span style={{ fontSize: '13px', fontWeight: '700', color: '#6AAE5B', textTransform: 'uppercase', letterSpacing: '1px' }}>
          Or reach me directly
        </span>
        <ul data-testid="profile-links" style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
          {PROFILE_LINKS.map((profileLink) => (
            <li key={profileLink.label}>
              <a
                href={profileLink.href}
                target={profileLink.href.startsWith('mailto:') ? undefined : '_blank'}
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  background: 'linear-gradient(135deg, rgba(74, 124, 63, 0.1), rgba(21, 21, 21, 0.5))',
                  border: '1.5px solid rgba(74, 124, 63, 0.25)',
                  borderRadius: '12px',
                  color: '#E3EAD9',
                  textDecoration: 'none',
                  fontSize: '15px',
                  fontWeight: '600',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
                onMouseEnter={(event) => {
                  event.currentTarget.style.borderColor = 'rgba(74, 124, 63, 0.6)';
                  event.currentTarget.style.transform = 'translateX(4px)';
                }}
                onMouseLeave={(event) => {
                  event.currentTarget.style.borderColor = 'rgba(74, 124, 63, 0.25)';
                  event.currentTarget.style.transform = 'translateX(0)';
                }}>
                <span
                  style={{
                    display: 'flex',
                    padding: '6px',
                    background: '#E3EAD9',
                    borderRadius: '8px',
                  }}>
                  <Image
                    src={profileLink.iconPath}
                    alt=""
                    width={PROFILE_ICON_SIZE_IN_PIXELS}
                    height={PROFILE_ICON_SIZE_IN_PIXELS}
                  />
                </span>
                {profileLink.label}
                {profileLink.label === 'Email' && (
                  <span style={{ marginLeft: 'auto', fontSize: '13px', color: '#9CA3AF', fontWeight: '400' }}>{CONTACT_EMAIL}</span>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
