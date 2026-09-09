'use client';
import { useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Check } from 'lucide-react';
import { useWindowSize } from '../src/hooks/windowContextProvider';

export default function CaseStudyCard(props: {
  title: string;
  problem: string;
  outcomes: string[];
  link?: string;
  thumbnail?: string;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const isMobile = useWindowSize();

  return (
    <article
      data-testid="case-study-card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        display: 'flex',
        flexDirection: isMobile ? 'column' : 'row',
        gap: isMobile ? '24px' : '40px',
        padding: isMobile ? '28px 24px' : '40px',
        background: 'linear-gradient(135deg, rgba(52, 168, 83, 0.08), rgba(74, 124, 63, 0.05))',
        border: `1.5px solid ${isHovered ? 'rgba(52, 168, 83, 0.5)' : 'rgba(52, 168, 83, 0.25)'}`,
        borderRadius: '20px',
        backdropFilter: 'blur(15px)',
        boxShadow: isHovered ? '0 24px 60px rgba(52, 168, 83, 0.2)' : 'none',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}>
      {props.thumbnail && (
        <div
          style={{
            flexShrink: 0,
            width: isMobile ? '100%' : '220px',
            height: isMobile ? '160px' : '220px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            background: 'linear-gradient(135deg, rgba(74, 124, 63, 0.1), rgba(106, 174, 91, 0.05))',
            border: '1px solid rgba(74, 124, 63, 0.2)',
            borderRadius: '14px',
          }}>
          <Image src={props.thumbnail} alt={props.title} width={150} height={150} style={{ objectFit: 'contain' }} />
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', flex: 1 }}>
        <h3
          style={{
            fontSize: isMobile ? '22px' : '28px',
            color: '#F0F0F0',
            fontWeight: '800',
            margin: 0,
            letterSpacing: '-0.5px',
          }}>
          {props.title}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#6AAE5B', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Problem
          </span>
          <p style={{ fontSize: isMobile ? '14px' : '15px', color: '#B4BFAC', margin: 0, lineHeight: '1.7' }}>
            {props.problem}
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <span style={{ fontSize: '12px', fontWeight: '700', color: '#6AAE5B', textTransform: 'uppercase', letterSpacing: '1px' }}>
            Result
          </span>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {props.outcomes.map((outcome) => (
              <li
                key={outcome}
                style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: isMobile ? '14px' : '15px', color: '#E3EAD9', lineHeight: '1.6' }}>
                <Check size={18} strokeWidth={2.5} color="#34A853" style={{ flexShrink: 0, marginTop: '3px' }} />
                <span>{outcome}</span>
              </li>
            ))}
          </ul>
        </div>

        {props.link && (
          <a
            href={props.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              marginTop: 'auto',
              fontSize: '13px',
              fontWeight: '700',
              color: '#6AAE5B',
              textTransform: 'uppercase',
              letterSpacing: '1px',
              textDecoration: 'none',
              width: 'fit-content',
            }}>
            View project
            <ArrowUpRight size={16} />
          </a>
        )}
      </div>
    </article>
  );
}
