module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      black: '#101010;',
      white: '#fefefe',
      gray: '#1a1a1a',
      grey: '#2e2e2e',
      focusgrey: '#424242',
      submit: '#E63462',
      hover: '#de2a58',
      green: '#21db9a'
    },
    extend: {
      maxWidth: {
        '220': '220px'
      },
      screens: {
        mobile: '520px'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
