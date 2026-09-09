'use client';
import { useWindowSize } from '../src/hooks/windowContextProvider';

export default function SectionHeading(props: { title: string; subtitle?: string }) {
  const isMobile = useWindowSize();

  return (
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
        {props.title}
      </h2>
      <div
        style={{
          width: isMobile ? '60px' : '100px',
          height: '4px',
          background: 'linear-gradient(90deg, transparent, #34A853 30%, #52C754 50%, #34A853 70%, transparent)',
          borderRadius: '2px',
        }}
      />
      {props.subtitle && (
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
          {props.subtitle}
        </p>
      )}
    </div>
  );
}
