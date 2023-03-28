/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundColor: {
        'light-beige': '#F5E9D9',
        'muted-coral': '#FF846B',
        'olive-green': '#8CB369',
        'soft-teal': '#70C1B3',
      },
      textColor: {
        'dark-slate-gray': '#2B2D2F',
      },
      borderColor: {
        'olive-green': '#8CB369',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};

