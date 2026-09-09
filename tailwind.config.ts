import type { Config } from 'tailwindcss';

export default {
  content: ['./src/app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F3F5F7',
        surface: '#FFFFFF',
        ink: '#0E1420',
        muted: '#5B6470',
        rule: '#D6DBE1',
        accent: {
          DEFAULT: '#2A3FE0',
          strong: '#1D2FB8',
          soft: '#E6E9FB',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        site: '1240px',
      },
    },
  },
  plugins: [],
} satisfies Config;
