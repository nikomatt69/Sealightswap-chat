/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      spacing: {
        84: '21rem',
      },
      colors: {
        b: {
          100: '#BFCEFF',
          200: '#90A9FF',
          300: '#5E80F6',
          400: '#3448FF',
          500: '#87CEFF',
          600: '#333333',
        },
        bt: {
          100: '#87CEFF',
          200: '#EDEFFF',
          300: '#0000FF',
        },
        g: {
          100: '#61E979',
        },
        l: {
          100: '#BFCEFF',
          200: '#87CEFF',
          300: '#0000FF',
          400: '#87CEFF',
          500: '#272b34',
          600: '#690000',
        },
        n: {
          100: '#c2c6d2',
          200: '#989ca7',
          300: '#70747e',
          400: '#4a4e57',
          500: '#272b34',
          600: '#272b34',
        },
        p: {
          100: '#ffcfff',
          200: '#0c2cdc',
          300: '#0000FF',
          400: '#0c2cdc',
          500: '#0000FF',
          600: '#333333',
        },
        y: {
          100: '#0c2cdc',
          200: '#0c2cdc',
        },
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans],
        mono: ['Inconsolata', ...fontFamily.mono],
      },
      fontSize: {
        xs: '10px',
        sm: '12px',
        md: '14px',
        lg: '16px',
        xl: '20px',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
