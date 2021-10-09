module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      margin: {
        sm: '8px',
        md: '16px',
        lg: '24px',
        xl: '48px',
       }
    
    },

    textColor: {
      'primary': '#FFAC1D',
      'white': 'white',
      'secondary':'rgba(118, 192, 124)',
    }
  },
  variants: {
    extend: {
     
    },
  },
  plugins: [],
}
