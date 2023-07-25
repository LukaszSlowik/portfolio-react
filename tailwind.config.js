/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    screens: {
      xs: '540px',
      ...defaultTheme.screens
    },
    // colors: {
    //   white: '#ffffff',
    //   purple: '#3F3CBB',
    //   midnight: '#121063',
    //   metal: '#565584',
    //   'tahiti-blue': '#3AB7BF',
    //   'cool-white': '#ECEBFF',
    //   'bubble-gum': '#FF77E9',
    //   'cooper-rust': '#78DCCA'
    // },
    // boxShadow: {
    //   sm: '0px 2px 4px rgba(11, 10, 55, 0.15)',
    //   lg: '0px 8px 20px 0px rgba(18, 16, 99, 0.6)'
    // },
    // fontFamily: {
    //   primary: ['Inter']
    // },
    // fontSize: {
    //   xs: ['14px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
    //   sm: ['16px', { lineHeight: '28px', letterSpacing: '-0.03em' }],
    //   lg: ['18px', { lineHeight: '24px', letterSpacing: '-0.03em' }],
    //   xl: ['24px', { lineHeight: '32px', letterSpacing: '-0.03em' }],
    //   '2xl': ['36px', { lineHeight: '36px', letterSpacing: '-0.032em' }],
    //   '3xl': ['48px', { lineHeight: '56px', letterSpacing: '-0.032em' }],
    //   '4xl': ['56px', { lineHeight: '64px', letterSpacing: '-0.032em' }],
    //   '5xl': ['80px', { lineHeight: '80px', letterSpacing: '-0.032em' }]
    // },
    extend: {
      animation: {
        blob: 'blob 7s infinite'
      },
      keyframes: {
        blob: {
          '0%': {
            transform: ' translate(0px,0px) scale(1)'
          },
          '33%': {
            transform: 'translate(30px,-50px) scale(1.1)'
          },
          '66%': {
            transform: 'translate(-20px,20px) scale(0.9)'
          },
          '100%': {
            transform: 'translate(0px,0px) scale(1)'
          }
        }
      }
    }
  },

  plugins: []
}
