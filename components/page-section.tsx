'use client';
import React from 'react';
import { useWindowSize } from '../src/hooks/windowContextProvider';

type BackgroundVariant = 'primary' | 'alternate';

const SECTION_BACKGROUNDS: Record<BackgroundVariant, string> = {
  primary: 'linear-gradient(180deg, #0A1208 0%, #0D0D0D 50%, #151512 100%)',
  alternate: 'linear-gradient(180deg, #151512 0%, #0A1208 50%, #0D0D0D 100%)',
};

export default function PageSection(props: {
  id: string;
  backgroundVariant: BackgroundVariant;
  children: React.ReactNode;
}) {
  const isMobile = useWindowSize();

  return (
    <section id={props.id} style={{ position: 'relative' }}>
      <div
        style={{
          background: SECTION_BACKGROUNDS[props.backgroundVariant],
          paddingTop: isMobile ? '80px' : '120px',
          paddingBottom: isMobile ? '80px' : '120px',
          position: 'relative',
          overflow: 'hidden',
          borderTop: '1px solid rgba(52, 168, 83, 0.2)',
        }}>
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
          {props.children}
        </div>
      </div>
    </section>
  );
}
