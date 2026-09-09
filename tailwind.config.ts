import type { Config } from 'tailwindcss';

function tokenColor(variableName: string): string {
  return `rgb(var(${variableName}) / <alpha-value>)`;
}

export default {
  content: ['./src/app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        paper: tokenColor('--color-paper'),
        surface: tokenColor('--color-surface'),
        ink: tokenColor('--color-ink'),
        muted: tokenColor('--color-muted'),
        rule: tokenColor('--color-rule'),
        accent: {
          DEFAULT: tokenColor('--color-accent'),
          strong: tokenColor('--color-accent-strong'),
          soft: tokenColor('--color-accent-soft'),
        },
        panel: {
          DEFAULT: tokenColor('--color-panel'),
          ink: tokenColor('--color-panel-ink'),
          rule: tokenColor('--color-panel-rule'),
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'sans-serif'],
        body: ['var(--font-body)', 'sans-serif'],
        mono: ['var(--font-mono)', 'monospace'],
      },
      maxWidth: {
        site: '1360px',
      },
    },
  },
  plugins: [],
} satisfies Config;
