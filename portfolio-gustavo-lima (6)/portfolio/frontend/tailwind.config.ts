import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        base: {
          950: '#07070C',
          900: '#0A0A12',
          800: '#111119',
          700: '#1A1A24',
        },
        indigo: {
          400: '#818CF8',
          500: '#6366F1',
          600: '#4F46E5',
        },
        cyan: {
          300: '#67E8F9',
          400: '#22D3EE',
          500: '#06B6D4',
        },
        amber: {
          400: '#FBBF24',
          500: '#F59E0B',
        },
        ink: {
          50: '#F5F5F7',
          200: '#C9C9D4',
          400: '#8B8B9A',
          600: '#5C5C6B',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-glow':
          'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.25), transparent)',
        'accent-gradient': 'linear-gradient(135deg, #6366F1 0%, #22D3EE 100%)',
        'card-sheen':
          'linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0) 60%)',
      },
      boxShadow: {
        glow: '0 0 40px -10px rgba(99,102,241,0.45)',
        'glow-cyan': '0 0 40px -10px rgba(34,211,238,0.4)',
      },
      animation: {
        blink: 'blink 1s step-end infinite',
        float: 'float 6s ease-in-out infinite',
        'gradient-x': 'gradient-x 8s ease infinite',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-14px)' },
        },
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
