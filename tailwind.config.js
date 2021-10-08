module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},

    textColor: {
      'primary': '#FFAC1D',
      'white': 'white',
      'secondary':'rgba(118, 192, 124)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
