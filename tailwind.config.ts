import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#0D0D0D',
          surface: '#151515',
          elevated: '#1E2018',
        },
        accent: {
          primary: '#4A7C3F',
          light: '#6AAE5B',
        },
        text: {
          primary: '#F0F0F0',
          muted: '#9CA3AF',
        },
        border: {
          subtle: '#2A2A2A',
        },
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
      keyframes: {
        fadeInUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeIn: {
          '0%': {
            opacity: '0',
          },
          '100%': {
            opacity: '1',
          },
        },
        slideInRight: {
          '0%': {
            opacity: '0',
            transform: 'translateX(30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        slideInLeft: {
          '0%': {
            opacity: '0',
            transform: 'translateX(-30px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateX(0)',
          },
        },
        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.7s ease-out forwards',
        fadeIn: 'fadeIn 0.5s ease-out forwards',
        slideInRight: 'slideInRight 0.7s ease-out forwards',
        slideInLeft: 'slideInLeft 0.7s ease-out forwards',
        scaleIn: 'scaleIn 0.5s ease-out forwards',
        'fade-in-up-delay-1': 'fadeInUp 0.7s ease-out 0.1s forwards',
        'fade-in-up-delay-2': 'fadeInUp 0.7s ease-out 0.2s forwards',
        'fade-in-up-delay-3': 'fadeInUp 0.7s ease-out 0.3s forwards',
        'fade-in-up-delay-4': 'fadeInUp 0.7s ease-out 0.4s forwards',
        'fade-in-up-delay-5': 'fadeInUp 0.7s ease-out 0.5s forwards',
        'fade-in-up-delay-6': 'fadeInUp 0.7s ease-out 0.6s forwards',
      },
    },
  },
  plugins: [],
} satisfies Config;
