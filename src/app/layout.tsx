import '../styles/globals.css';
import type { Metadata } from 'next';
import { Archivo, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';
import { APPLY_STORED_THEME_SCRIPT, DARK_THEME_CLASS_NAME } from '../theme/color-theme';

const displayFont = Archivo({
  subsets: ['latin'],
  axes: ['wdth'],
  variable: '--font-display',
});

const bodyFont = IBM_Plex_Sans({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  variable: '--font-body',
});

const monoFont = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-mono',
});

export const metadata: Metadata = {
  title: 'Jaime Emanuel Lucero, Full-Stack AI Engineer',
  description:
    'Full-stack AI engineer in Davao City building LLM agents, automation pipelines, and production web apps for startups and agencies.',
  icons: {
    icon: '/J-logo.svg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${DARK_THEME_CLASS_NAME} ${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: APPLY_STORED_THEME_SCRIPT }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
