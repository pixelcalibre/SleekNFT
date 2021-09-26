module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      'my-black-color': '#ffffff',
      'my-gold-color': '#460A98',
    },
    
    extend: {
      gridTemplateColumns: {
        // Simple 16 column grid
       'header-grid': '1fr 2fr 2fr',
       'small-grid':'1fr 1fr 0.5fr',

        // Complex site-specific column configuration
       'footer': '200px minmax(900px, 1fr) 100px',
      },
      spacing: {
        '13': '3.25rem',
        '76': '19rem',
        '100': '410px',
        '144': '36rem',
        '190':'190px',
        '120':'36px',
        '300':'300px',
        '400':'400px',
        '800':'800px',
        '82':'345px',
        '220':'220px',
        '350':'350px',
        '34':'115px',
        '500':'540px',
        '685':'680px',
        '130':'130px',
        '180': '345px',
        '450':'430px',
        
      },
      gradientColorStops: theme => ({
        'primary': '#ff0d0d',
        'secondary': '#0009cc',
        'danger': '#FFD700',
    }),
    borderWidth: {
      DEFAULT: '1px',
      '1': '1px',
    },
      // backgroundColor:{
      //   'header-color':'#232323',
      //   'gold-bg-color':'#b6a35e'
      // },
      // textColor:{
      //   'gold-text-color':'#b6a35e',
      //   'black-text-color':'#232323'
      // },
      // placeholderColor:{
      //   'gold-text-color':'#b6a35e',
      //   'black-text-color':'#232323'
      // }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
    require('./text-gradient')
  ],

}
