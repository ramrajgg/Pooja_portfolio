module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        // Updated color palette
        'yellow': '#FEB344',
        'black': '#000000',
        'cream': '#FFFDF3',

        'dark-moss-green': '#FEB344',
        'pakistan-green': '#283618',
        'cornsilk': '#fefae0',
        'earth-yellow': '#dda15e',
        'tigers-eye': '#bc6c25',
        'stroke-green':'#2F4B0F',
      },
      fontFamily: {
        // Updated fonts
        sans: ['Cenzil', 'sans-serif'], 
        serif: ['"Times New Roman"', 'Times', 'serif'],
      },
    },
  },
  plugins: [],
 
};
