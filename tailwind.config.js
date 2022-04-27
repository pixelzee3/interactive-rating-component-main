module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: 'hsl(25, 97%, 53%)',
        grey: 'hsl(216, 12%, 54%)',
        'dark-blue': '#262F38',
        'darker-blue': '#1B222C',
        'very-dark-blue': 'hsl(216, 12%, 8%)',
      },
    },
    fontFamily: {
      sans: ['Overpass', 'Inter var', 'sans-serif'],
    },
  },
  plugins: [],
};
