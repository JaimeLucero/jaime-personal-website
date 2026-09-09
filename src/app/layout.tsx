import '../styles/globals.css';
import type { Metadata } from 'next';
import { Bricolage_Grotesque, IBM_Plex_Sans, IBM_Plex_Mono } from 'next/font/google';

const displayFont = Bricolage_Grotesque({
  subsets: ['latin'],
  axes: ['wdth', 'opsz'],
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
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
