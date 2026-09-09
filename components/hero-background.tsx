'use client';
import Image from 'next/image';

export default function HeroBackground() {
  return (
    <>
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
        <circle cx="150" cy="200" r="30" fill="rgba(74, 124, 63, 0.05)" style={{ animation: 'float 5s ease-in-out infinite' }} />
        <circle cx="1000" cy="600" r="40" fill="rgba(106, 174, 91, 0.04)" style={{ animation: 'float 7s ease-in-out infinite', animationDelay: '1s' }} />
        <circle cx="200" cy="650" r="25" fill="rgba(74, 124, 63, 0.06)" style={{ animation: 'float 6s ease-in-out infinite', animationDelay: '0.5s' }} />
        <rect x="950" y="150" width="50" height="50" fill="rgba(106, 174, 91, 0.05)" rx="8" style={{ animation: 'float 8s ease-in-out infinite', animationDelay: '1.5s' }} />
        <line x1="100" y1="400" x2="250" y2="350" stroke="rgba(74, 124, 63, 0.1)" strokeWidth="2" style={{ animation: 'float 9s ease-in-out infinite', animationDelay: '2s' }} />
        <line x1="1050" y1="300" x2="900" y2="400" stroke="rgba(106, 174, 91, 0.08)" strokeWidth="2" style={{ animation: 'float 10s ease-in-out infinite', animationDelay: '1s' }} />
      </svg>

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
        <Image src="/home-bg.svg" alt="" fill style={{ objectFit: 'cover' }} />
      </div>
    </>
  );
}
