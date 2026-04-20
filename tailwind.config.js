/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        mamba: {
          black: '#1A1A1A',
          darker: '#111111',
          card: '#222222',
          border: '#333333',
          purple: '#552583',
          'purple-dim': '#2a1242',
          gold: '#FDB927',
          'gold-dim': '#3d2d0a',
          white: '#F5F5F5',
          muted: '#999999',
          hint: '#666666',
        },
      },
      fontFamily: {
        headline: ['var(--font-oswald)', 'sans-serif'],
        body: ['var(--font-inter)', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      animation: {
        'spin-ball': 'spinBall 1.2s ease-in-out infinite',
        'pulse-gold': 'pulseGold 2s ease-in-out infinite',
        'swish': 'swish 0.4s ease-out',
        'net-flicker': 'netFlicker 0.3s ease-out',
        'count-up': 'countUp 0.6s ease-out',
        'court-line': 'courtLine 2s ease-in-out infinite',
      },
      keyframes: {
        spinBall: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(0.9)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
        pulseGold: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.5' },
        },
        swish: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '1' },
          '50%': { transform: 'translateY(-8px) scale(1.02)', opacity: '0.9' },
          '100%': { transform: 'translateY(0) scale(1)', opacity: '1' },
        },
        netFlicker: {
          '0%': { transform: 'scaleY(1)' },
          '25%': { transform: 'scaleY(1.1)' },
          '50%': { transform: 'scaleY(0.95)' },
          '75%': { transform: 'scaleY(1.05)' },
          '100%': { transform: 'scaleY(1)' },
        },
        courtLine: {
          '0%, 100%': { opacity: '0.3' },
          '50%': { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
