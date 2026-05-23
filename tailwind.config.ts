import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{ts,html}'],
  theme: {
    extend: {
      colors: {
        bg: '#140a02',
        parchment: { DEFAULT: '#ecdea8', 2: '#e0cc8a', 3: '#d0b868' },
        brown: { DEFAULT: '#6b3810', dark: '#281405' },
        gold: { DEFAULT: '#d4900a', light: '#f0c030', dim: '#a87020' },
        blood: { DEFAULT: '#7a1808', bright: '#a82818' },
        forest: '#2a5818',
        border: { DEFAULT: '#a06830', light: '#c89050' },
      },
      fontFamily: {
        display: ['Rye', 'serif'],
        heading: ['Oswald', 'sans-serif'],
        body: ['Lato', 'sans-serif'],
        serif: ['"IM Fell DW Pica"', 'serif'],
      },
      boxShadow: {
        poster: '6px 8px 0 rgba(0,0,0,.65)',
        'poster-lg': '10px 12px 0 rgba(0,0,0,.7)',
        ribbon:
          'inset 0 3px 0 rgba(212,144,10,.2), inset 0 -3px 0 rgba(212,144,10,.2), 0 6px 14px rgba(0,0,0,.6)',
        stamp: '1px 2px 0 rgba(0,0,0,.5), inset 0 1px 0 rgba(255,255,255,.2)',
        glow: '0 0 24px rgba(212,144,10,.5)',
      },
      backgroundImage: {
        wood: "url('/assets/textures/wood-dark.svg')",
        parchment: "url('/assets/textures/parchment.svg')",
        'parchment-dark': "url('/assets/textures/parchment-dark.svg')",
        ribbon: 'linear-gradient(180deg, #8a2010 0%, #5a1008 100%)',
        hero: 'linear-gradient(180deg, #c86a10 0%, #7a3010 28%, #3a1808 60%, #120804 100%)',
      },
      letterSpacing: {
        ribbon: '0.25em',
        hero: '0.08em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        shimmer: {
          '0%,100%': { opacity: '1' },
          '50%': { opacity: '0.75' },
        },
      },
      animation: {
        'fade-up': 'fade-up .6s cubic-bezier(.2,.7,.2,1) both',
        shimmer: 'shimmer 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
