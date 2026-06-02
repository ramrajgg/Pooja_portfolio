module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Modern dark palette
        gold: '#FEB344',
        'gold-soft': '#FFD089',
        ink: '#0A0A0A',
        'ink-800': '#121212',
        'ink-700': '#1A1A1A',
        'ink-600': '#242424',
        line: '#2A2A2A',
        cream: '#FFFDF3',
        cornsilk: '#FEFAE0',
        muted: '#8A8A8A',

        // legacy aliases kept so older class names still resolve
        yellow: '#FEB344',
        black: '#0A0A0A',
        'dark-moss-green': '#FEB344',
        'pakistan-green': '#283618',
        'earth-yellow': '#dda15e',
        'tigers-eye': '#bc6c25',
        'stroke-green': '#2F4B0F',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        serif: ['"Space Grotesk"', 'sans-serif'],
      },
      letterSpacing: {
        tightest: '-0.04em',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        floaty: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        floaty: 'floaty 6s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
